import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {routes,routeHref,routeForPath} from '../src/site/routes.mjs';
test('all 19 source pages have unique, resolvable public URLs',()=>{
  assert.equal(routes.length,19);assert.equal(new Set(routes.map(x=>x.path)).size,19);
  for(const route of routes){assert.equal(routeHref(route.id),route.path);assert.equal(routeForPath(route.path+'/')?.id,route.id);}
  assert.equal(routeHref('offer:agents','/solutions/agents-automation'),'/solutions/agents-automation#agents');
  assert.equal(routeForPath('/missing'),undefined);assert.equal(routeHref('unknown'),undefined);
});
test('pre-rendered pages have real headings, metadata and only working local links/assets',()=>{
  for(const route of routes) {
    const file=route.path==='/'?'dist/index.html':`dist${route.path}/index.html`;
    const html=fs.readFileSync(file,'utf8');
    assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${route.path}: exactly one h1`);
    assert.match(html,/<meta name="description" content="[^"]+"/);
    assert.ok(html.includes('<link rel="canonical"'));
    for(const [,url] of html.matchAll(/(?:href|src)="(\/[^"#]*)(?:#[^"]*)?"/g)) {
      const decoded=url.replaceAll('&amp;','&');
      assert.ok(routeForPath(decoded)||fs.existsSync('dist'+decoded),`${route.path}: missing ${decoded}`);
    }
    assert.ok(!html.includes('cdn.wonder.so'),`${route.path}: no remote Wonder dependency`);
    assert.ok(!html.includes('data-go='),`${route.path}: all prototype destinations converted`);
  }
});
