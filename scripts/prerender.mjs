import fs from 'node:fs/promises';
import { pageEntry, render } from '../.prerender/entry-server.js';
import { routes } from '../src/site/routes.mjs';
import { homeHero } from '../src/site/home-hero.mjs';
const origin=process.env.VITE_SITE_URL || 'https://orsenlabs.ahamedsaraf18.workers.dev';
const template=await fs.readFile('dist/index.html','utf8');
const manifest=JSON.parse(await fs.readFile('dist/.vite/manifest.json','utf8'));
const assets=JSON.parse(await fs.readFile('src/site/assets.json','utf8'));
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function collectModules(key, files) {
  const entry = manifest[key];
  if (!entry?.file) throw new Error(`Missing Vite manifest entry: ${key}`);
  if (files.has(entry.file)) return;
  files.add(entry.file);
  for (const dependency of entry.imports ?? []) collectModules(dependency, files);
}

const sharedModules = new Set();
collectModules('index.html', sharedModules);

function pagePreloads(id) {
  if (!id) return '';
  const modules = new Set();
  collectModules(pageEntry(id), modules);
  return [...modules].filter(file => !sharedModules.has(file)).map(file =>
    `<link rel="modulepreload" crossorigin href="/${file}" />`
  ).join('');
}

const heroPreloads = homeHero.sources.map(({ image, media, sizes }) => {
  const srcset = assets[image].map(({ src, width }) => `${src} ${width}w`).join(', ');
  return `<link rel="preload" as="image" fetchpriority="high" media="${escape(media)}" imagesrcset="${srcset}" imagesizes="${sizes}" />`;
}).join('');

for(const route of [...routes,{path:'/404',title:'Page Not Found — Omni Labs',description:'The requested page could not be found.'}]) {
  const url=new URL(route.path,origin).href;
  const head=`<link rel="canonical" href="${url}" /><meta property="og:url" content="${url}" /><meta property="og:image" content="${origin}/images/business-workspace-1672.webp" />${route.path==='/404'?'<meta name="robots" content="noindex" />':''}`;
  const priority = pagePreloads(route.id) + (route.id === 'home' ? heroPreloads : '');
  const html=template.replace('<!--app-html-->',await render(route.path))
    .replace(/<title>.*?<\/title>/,`<title>${escape(route.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/,`$1${escape(route.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/,`$1${escape(route.title)}`)
    .replace(/(<meta property="og:description" content=")[^"]*/,`$1${escape(route.description)}`)
    .replace('<title>',priority+'<title>')
    .replace('</head>',head+'</head>');
  const directory=route.path==='/'?'dist':`dist${route.path}`;
  if(route.path==='/404')await fs.writeFile('dist/404.html',html);
  else {await fs.mkdir(directory,{recursive:true});await fs.writeFile(`${directory}/index.html`,html);}
}
await fs.writeFile('dist/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`<url><loc>${origin}${r.path}</loc></url>`).join('')}</urlset>\n`);
await fs.writeFile('dist/robots.txt',`User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`);
await fs.unlink('dist/.vite/manifest.json');
console.log(`Pre-rendered ${routes.length} pages and the 404 page.`);
