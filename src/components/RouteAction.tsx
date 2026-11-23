import type { HTMLAttributes, ReactNode, MouseEvent } from 'react';
import { routeHref } from '../site/routes.mjs';
import { useSite, type Overlay } from '../site/runtime';
type Props = HTMLAttributes<HTMLElement> & { to:string; children?:ReactNode; 'data-node-label'?:string };
const overlays = new Set(['menu','contact']);

export function RouteAction({to,children,onClick,onPointerEnter,...props}:Props) {
  const site = useSite();
  if(to==='dismiss' || overlays.has(to)) return <button {...props} type="button" onPointerEnter={onPointerEnter} onClick={event=>{
    onClick?.(event); if(event.defaultPrevented)return;
    if(to==='dismiss')site.close(); else site.open({kind:to} as Overlay,event.currentTarget);
  }}>{children}</button>;
  const href=routeHref(to,site.pathname);
  if(!href)throw new Error(`Unmapped Wonder destination: ${to}`);
  const click=(event:MouseEvent<HTMLAnchorElement>)=>{
    onClick?.(event);
    if(event.defaultPrevented || event.button!==0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)return;
    event.preventDefault();site.navigate(href);
  };
  return <a {...props} href={href} onClick={click} onPointerEnter={event=>{
    onPointerEnter?.(event);
    if (event.pointerType === 'mouse' && !event.defaultPrevented) site.prefetch(href);
  }}>{children}</a>;
}
