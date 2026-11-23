import { createContext, useContext } from 'react';
export type MediaItem = { title:string; image:string; index:string; ratio:string };
export type Overlay = {kind:'menu'|'contact'|'solutions-menu'|'industries-menu'} | {kind:'media';item:MediaItem};
export type SiteRuntime = { pathname:string; navigate:(url:string)=>void; open:(overlay:Overlay, trigger:HTMLElement)=>void; close:()=>void };
export const RuntimeContext = createContext<SiteRuntime | null>(null);
export function useSite() { const site=useContext(RuntimeContext); if(!site)throw new Error('Site context missing'); return site; }
