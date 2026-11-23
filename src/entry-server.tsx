import { renderToString } from 'react-dom/server';
import { App } from './App';
import { loadPageView } from './site/page-views';
import { routeForPath } from './site/routes.mjs';

export { pageEntry } from './site/page-views';

export async function render(path: string) {
  const route = routeForPath(path);
  const view = route ? await loadPageView(route.id) : null;
  return renderToString(<App initialPath={path} initialView={view}/>);
}
