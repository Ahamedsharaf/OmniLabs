// One-time import of the supplied Wonder prototype. Preserve its layouts and tokens.
// Source: Omni Labs Code(1) / Omni Labs Service Pages.tsx (23 November 2026).
import fs from 'node:fs';
import path from 'node:path';
import { parse } from '@babel/parser';
import traverseModule from '@babel/traverse';
import generatorModule from '@babel/generator';
import * as t from '@babel/types';
const traverse = traverseModule.default;
const generate = generatorModule.default;
const sourceDir = process.argv[2] || '../reference';
const source = fs.readFileSync(path.join(sourceDir, 'code/Omni Labs Service Pages.tsx'), 'utf8');
const assets = JSON.parse(fs.readFileSync(path.join(sourceDir, 'optimized-assets.json'), 'utf8'));
const ast = parse(source, { sourceType: 'module', plugins: ['jsx', 'typescript'] });
const cssNode = ast.program.body.at(-1).consequent.body.find(n => n.type === 'ExpressionStatement' && n.expression.left?.property?.name === 'textContent');
let css = cssNode.expression.right.quasis[0].value.cooked;
css = css.replace(/@import url\([^\n]+\);\n/g, '');
css = css.replaceAll('[data-wonder-prototype="wonder-prototype-a71d8a948656"]', ':root');
css = css.replace(/\/\*wonder-prototype-tokens[\s\S]*?\*\//, '');
fs.writeFileSync('src/design/wonder.css', css);
const groups = {
  visuals: ['StudioBackdrop', 'WorkTogetherBand'],
  navigation: ['SiteNavigation', 'ExpandedNavigation'],
  home: ['Homepage'],
  services: ['offerData', 'OfferRows', 'ServiceOfferingGroup', 'Creative', 'Agents', 'Software'],
  content: ['sitePages', 'PageBody', 'ContentPage'],
  footer: ['footerLinks', 'footerFrames', 'SiteFooter'],
  'work-with-us': ['WorkWithUsPage'],
  portfolio: ['portfolioVideoData', 'PortfolioVideoCard', 'PortfolioCategoryItem', 'PortfolioPage'],
  workflow: ['WorkflowBriefRow', 'WorkflowReleaseRow', 'WorkflowVisualCard', 'workflowVisualData', 'WorkflowEditorialPhase', 'WorkflowSummaryField', 'WorkflowDeliverable', 'WorkflowPage'],
};
const ownership = Object.fromEntries(Object.entries(groups).flatMap(([file, names]) => names.map(name => [name, file])));
const attr = (node, name) => node.openingElement.attributes.find(a => a.type === 'JSXAttribute' && a.name.name === name);
const value = a => a?.value?.type === 'StringLiteral' ? a.value.value : undefined;
const setName = (node, name) => { node.openingElement.name = t.jsxIdentifier(name); if (node.closingElement) node.closingElement.name = t.jsxIdentifier(name); };
const getName = n => n.type === 'FunctionDeclaration' ? n.id.name : n.declarations?.[0].id.name;
const removeAttrs = (node, names) => { node.openingElement.attributes = node.openingElement.attributes.filter(a => !names.includes(a.name?.name)); };
const assetUrl = url => {
  const asset = assets[url.split('/').at(-1)];
  return asset?.outputs.at(-1).src || url;
};
let imageStyleRules = '';
let imageIndex = 0;
for (const [file, names] of Object.entries(groups)) {
  const nodes = ast.program.body.filter(n => names.includes(getName(n))).map(n => structuredClone(n));
  const module = t.file(t.program(nodes));
  const imports = new Map();
  const need = (name, from) => imports.set(name, from);
  traverse(module, {
    StringLiteral(p) {
      if (/^https:\/\/cdn\.wonder\.so\/images\//.test(p.node.value)) p.node.value = assetUrl(p.node.value);
    },
    JSXElement: { exit(p) {
      const node = p.node;
      removeAttrs(node, ['data-node-id']);
      const go = attr(node, 'data-go');
      if (go) {
        go.name.name = 'to';
        removeAttrs(node, ['role', 'tabIndex', 'type']);
        setName(node, 'RouteAction');
        need('RouteAction', '../components/RouteAction');
      }
      if (value(attr(node, 'role')) === 'heading') {
        const level = attr(node, 'aria-level')?.value?.expression?.value || 2;
        setName(node, `h${level}`);
        removeAttrs(node, ['role', 'aria-level']);
      }
      if (value(attr(node, 'data-node-label')) === 'Primary Navigation Links') {
        setName(node, 'nav');
        node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('aria-label'), t.stringLiteral('Primary')));
      }
      const style = attr(node, 'style');
      const bg = style?.value?.expression?.properties?.find(x => x.key.name === 'backgroundImage');
      const raw = bg?.value?.value;
      if (typeof raw === 'string' && raw.includes('cdn.wonder.so')) {
        const url = raw.match(/https:\/\/cdn\.wonder\.so\/images\/[^"\\)]+/)?.[0];
        if (!url) throw new Error('Unrecognized image');
        const item = assets[url.split('/').at(-1)];
        setName(node, 'Artwork');
        need('Artwork', '../components/Artwork');
        removeAttrs(node, ['style', 'data-wonder-intrinsic-width', 'data-wonder-intrinsic-height']);
        node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('image'), t.stringLiteral(item.name)));
        const label = value(attr(node, 'data-node-label')) || '';
        const c = value(attr(node, 'className')) || '';
        const position = { base: {x:'50%', y:'50%'} };
        for (const token of c.split(/\s+/)) {
          const m = token.match(/^(?:(max-\[\d+px\]):)?\[background-position(?:-(x|y))?:(.+)\]$/);
          if (!m) continue;
          const key = m[1] || 'base'; position[key] ||= {...position.base};
          if (m[2]) position[key][m[2]] = m[3];
          else { const [x,y] = m[3].split('_'); position[key] = {x,y:y||'50%'}; }
        }
        if (c.includes('bg-left')) position.base.x='0%';
        if (c.includes('bg-right')) position.base.x='100%';
        const id = `art-${imageIndex++}`;
        node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('positionId'), t.stringLiteral(id)));
        node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('fit'), t.stringLiteral(c.includes('bg-contain') ? 'contain' : 'cover')));
        for (const [key, {x,y}] of Object.entries(position)) {
          const rule = `[data-art-position="${id}"]>.artwork-image{object-position:${x} ${y}}`;
          imageStyleRules += key === 'base' ? rule+'\n' : `@media(max-width:${key.match(/\d+/)[0]}px){${rule}}\n`;
        }
        if ((file === 'home' && item.name === 'golden-gate') || (file === 'services' && /Service Photograph|Film Production Photograph/.test(label)) || (file === 'workflow' && /Hero Artwork/.test(label)) || file === 'visuals') {
          node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('eager'), null));
        }
      }
      if (value(attr(node,'data-node-label')) === 'Video Space' || (file === 'portfolio' && value(attr(node,'data-node-label')) === undefined && attr(node,'data-node-id') === undefined && value(attr(node, 'role')) === 'button')) {
        // Media card replacement is handled below using its source label expression.
      }
      if (file === 'portfolio' && attr(node,'data-node-label')?.value?.expression?.type === 'MemberExpression' && generate(attr(node,'data-node-label').value.expression).code === 'item.labels[1]') {
        setName(node, 'VideoPreview');
        need('VideoPreview', '../components/VideoPreview');
        node.openingElement.attributes.push(t.jsxAttribute(t.jsxIdentifier('item'), t.jsxExpressionContainer(t.identifier('item'))));
      }
    }}
  });
  traverse(module, { ReferencedIdentifier(p) {
    const name = p.node.name;
    const owner = ownership[name];
    if (owner && owner !== file) need(name, `./${owner}`);
    if (['useState','useRef','useLayoutEffect'].includes(name)) need(name,'react');
    if (name === 'ContactForm') need(name,'../components/ContactForm');
  }});
  // JSX names do not all count as referenced identifiers in Babel.
  traverse(module, { JSXIdentifier(p) {
    const name=p.node.name, owner=ownership[name];
    if (owner && owner!==file) need(name,`./${owner}`);
    if (name==='ContactForm') need(name,'../components/ContactForm');
  }});
  const byModule = new Map();
  for (const [name, from] of imports) { if(!byModule.has(from))byModule.set(from,[]);byModule.get(from).push(name); }
  const header = [...byModule].map(([from, items])=>`import { ${items.join(', ')} } from ${JSON.stringify(from)};`).join('\n');
  const body=generate(module,{comments:false,compact:false}).code;
  fs.writeFileSync(`src/design/${file}.jsx`, `// Adapted from the user's approved Wonder export. Layout and copy retained.\n${header}\n${body}\nexport { ${names.join(', ')} };\n`);
}
fs.writeFileSync('src/design/image-positions.css', imageStyleRules);
fs.writeFileSync('src/site/assets.json', JSON.stringify(Object.fromEntries(Object.values(assets).map(a=>[a.name,a.outputs])),null,2)+'\n');
console.log('Imported 19 approved pages into 9 shared design modules.');
