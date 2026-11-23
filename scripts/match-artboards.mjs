// Restore the supplied mobile/tablet artboard values where the combined
// prototype differs. Match by content and utility overlap, never by a new design.
import fs from 'node:fs';
import {parse} from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
import postcss from 'postcss';
const traverse=traverseModule.default,generate=generatorModule.default;
const raw=fs.readFileSync('src/design/wonder.css','utf8');
const utility=new Map();
postcss.parse(raw).walkRules(rule=>{
  if(!/^\.(?:\\.|[^ :>,])+$/s.test(rule.selector))return;
  const key=rule.selector.slice(1).replace(/\\(?:([0-9a-fA-F]{1,6})\s?|(.))/g,(_,hex,c)=>hex?String.fromCodePoint(parseInt(hex,16)):c);
  const declarations=rule.nodes.filter(n=>n.type==='decl').map(n=>`${n.prop}:${n.value};`).join('');
  if(declarations)utility.set(key,declarations);
});
const attr=(n,k)=>n.openingElement.attributes.find(a=>a.type==='JSXAttribute'&&a.name.name===k);
const cls=n=>attr(n,'className')?.value?.value||'';
const text=n=>n.type==='JSXText'?n.value:n.type==='JSXExpressionContainer'&&n.expression.type==='StringLiteral'?n.expression.value:n.children?.map(text).join(' ')||'';
const signature=n=>text(n).replace(/\s+/g,' ').trim();
function declarations(c){return c.split(/\s+/).map(token=>{
  if(utility.has(token))return utility.get(token);
  const arbitrary=token.match(/^\[([^:]+):(.+)\]$/);if(arbitrary)return `${arbitrary[1]}:${arbitrary[2].replaceAll('_',' ')};`;
  const spacing=token.match(/^(p|m)(x|y|t|r|b|l)?-\[([^\]]+)\]$/);
  if(spacing){const prefix=spacing[1]==='p'?'padding':'margin',side={x:'-inline',y:'-block',t:'-top',r:'-right',b:'-bottom',l:'-left'}[spacing[2]]||'';return `${prefix}${side}:${spacing[3].replaceAll('_',' ')};`;}
  const grid=token.match(/^grid-cols-\[(.+)\]$/);if(grid)return `grid-template-columns:${grid[1].replaceAll('_',' ')};`;
  const aspect=token.match(/^aspect-\[(.+)\]$/);if(aspect)return `aspect-ratio:${aspect[1]};`;
  const size=token.match(/^(w|h|min-w|min-h|max-w|max-h|text|tracking|leading|gap|rounded)-\[([^\]]+)\]$/);
  if(size)return `${{w:'width',h:'height','min-w':'min-width','min-h':'min-height','max-w':'max-width','max-h':'max-height',text:'font-size',tracking:'letter-spacing',leading:'line-height',gap:'gap',rounded:'border-radius'}[size[1]]}:${size[2].replaceAll('_',' ')};`;
  return '';
}).join('');}
const files={
  home:{Homepage:'Omni Labs Enterprise'},
  services:{Creative:'Creative Marketing',Agents:'Agents Automation',Software:'Business Software'},
  portfolio:{PortfolioPage:'Portfolio'},
  workflow:{WorkflowPage:'Workflow'},
  'work-with-us':{WorkWithUsPage:'Work With Us'},
};
let rules='',counter=0,total=0;
for(const [file,functions] of Object.entries(files)){
  const ast=parse(fs.readFileSync(`src/design/${file}.jsx`,'utf8'),{sourceType:'module',plugins:['jsx']});
  for(const [fn,prefix] of Object.entries(functions)){
    for(const [device,min,max] of [['Mobile',0,639],['Tablet',640,1100]]){
      const ref=`../reference/code/${prefix} ${device}.tsx`;if(!fs.existsSync(ref))continue;
      const source=parse(fs.readFileSync(ref,'utf8'),{sourceType:'module',plugins:['jsx','typescript']});
      const candidates=new Map();
      traverse(source,{JSXElement(p){if(cls(p.node).includes('var(--omni-footer-ink)')){p.skip();return;}const key=signature(p.node);if(key&&cls(p.node)){if(!candidates.has(key))candidates.set(key,[]);candidates.get(key).push(p.node);}}});
      const local=[];
      traverse(ast,{FunctionDeclaration(p){if(p.node.id.name!==fn)return;p.traverse({JSXElement(p){
        const c=cls(p.node);if(!c)return;const matches=candidates.get(signature(p.node));if(!matches)return;
        const tokens=new Set(c.split(/\s+/));
        const ranked=matches.map(n=>({n,score:cls(n).split(/\s+/).filter(t=>tokens.has(t)).length/Math.min(tokens.size,cls(n).split(/\s+/).length)})).sort((a,b)=>b.score-a.score);
        if(ranked[0].score<.55)return;
        let marker=attr(p.node,'data-artboard-style');
        if(!marker){marker={type:'JSXAttribute',name:{type:'JSXIdentifier',name:'data-artboard-style'},value:{type:'StringLiteral',value:`ref-${counter++}`}};p.node.openingElement.attributes.push(marker);}
        const styles=declarations(cls(ranked[0].n));if(styles)local.push(`[data-artboard-style="${marker.value.value}"]{${styles}}`);
      }});}});
      if(local.length)rules+=`@media(min-width:${min}px) and (max-width:${max}px){\n${local.join('\n')}\n}\n`;
      total+=local.length;
    }
  }
  fs.writeFileSync(`src/design/${file}.jsx`,generate(ast,{comments:true}).code+'\n');
}
fs.writeFileSync('src/design/artboard-fidelity.css',rules);
console.log(`Applied ${total} mobile/tablet reference styles.`);
