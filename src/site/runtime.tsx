import { createContext, useContext } from 'react';
import type { ArtworkName } from '../components/Artwork';
export type MediaItem = { title:string; image:ArtworkName; index:string; ratio:string };
export type Overlay = {kind:'menu'|'contact'|'industries-menu'} | {kind:'media';item:MediaItem};
export type SiteRuntime = { pathname:string; navigate:(url:string)=>void; prefetch:(url:string)=>void; open:(overlay:Overlay, trigger:HTMLElement)=>void; close:()=>void };
export const RuntimeContext = createContext<SiteRuntime | null>(null);
export function useSite() { const site=useContext(RuntimeContext); if(!site)throw new Error('Site context missing'); return site; }
