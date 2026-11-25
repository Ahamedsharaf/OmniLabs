import type { ComponentType } from 'react';

export type PageView = ComponentType<{ pageKey: string }>;

const standalonePages: Partial<Record<string, [file: string, component: string]>> = {
  home: ['home', 'Homepage'],
  creative: ['services', 'Creative'],
  agents: ['services', 'Agents'],
  software: ['services', 'Software'],
  portfolio: ['portfolio', 'PortfolioPage'],
  blog: ['blog', 'BlogPage'],
  workflow: ['workflow', 'WorkflowPage'],
  'work-with-us': ['work-with-us', 'WorkWithUsPage'],
};

const modules = import.meta.glob<Record<string, PageView>>(
  '/src/design/{home,services,content,portfolio,workflow,work-with-us,blog}.jsx',
);
const loaded = new Map<string, PageView>();
const pending = new Map<string, Promise<PageView>>();

export function pageEntry(id: string) {
  return `src/design/${standalonePages[id]?.[0] ?? 'content'}.jsx`;
}

export function getPreparedView(id: string) {
  return loaded.get(id);
}

export async function loadPageView(id: string): Promise<PageView> {
  const prepared = getPreparedView(id);
  if (prepared) return prepared;

  const inFlight = pending.get(id);
  if (inFlight) return inFlight;

  const request = modules[`/${pageEntry(id)}`]().then(module => {
    const component = module[standalonePages[id]?.[1] ?? 'ContentPage'];
    loaded.set(id, component);
    return component;
  }).finally(() => pending.delete(id));
  pending.set(id, request);
  return request;
}
