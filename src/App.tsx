import { useCallback, useEffect, useRef, useState } from 'react';
import { SiteFooter } from './design/footer';
import { ContactForm } from './components/ContactForm';
import { MobileMenu } from './components/MobileMenu';
import { BookingLink } from './components/BookingLink';
import { RouteAction } from './components/RouteAction';
import { RuntimeContext, type Overlay } from './site/runtime';
import { routeForPath } from './site/routes.mjs';
import { siteConfig } from './site/config';
import { usePageMotion } from './components/usePageMotion';
import assets from './site/assets.json';
import { getPreparedView, loadPageView, type PageView } from './site/page-views';

function fragmentTarget(path: string) {
  const hashIndex = path.indexOf('#');
  if (hashIndex === -1) return null;

  const hash = path.slice(hashIndex + 1);
  try {
    return document.getElementById(decodeURIComponent(hash));
  } catch {
    return document.getElementById(hash);
  }
}

function prefetchPage(url: string) {
  const route = routeForPath(url.split('#')[0]);
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  if (route && !connection?.saveData) void loadPageView(route.id).catch(() => {});
}

export function App({ initialPath, initialView }: { initialPath: string; initialView: PageView | null }) {
  const [{ location, View, navigation }, setPage] = useState({
    location: initialPath, View: initialView, navigation: 0,
  });
  const [overlay,setOverlay]=useState<Overlay|null>(null);
  const dialog=useRef<HTMLDialogElement>(null);
  const trigger=useRef<HTMLElement|null>(null);
  const first=useRef(true);
  const requestNumber=useRef(0);
  const pathname=location.split('#')[0];
  const route=routeForPath(pathname);
  usePageMotion(route?.id||'404');
  function close(){setOverlay(null);}

  const navigate = useCallback((url: string, push = true) => {
    const request = ++requestNumber.current;
    const next = routeForPath(url.split('#')[0]);

    const commit = (view: PageView | null) => {
      if (request !== requestNumber.current) return;
      trigger.current = null;
      setOverlay(null);
      if (push && url !== window.location.pathname + window.location.search + window.location.hash) {
        window.history.pushState(null, '', url);
      }
      setPage(previous => ({ location: url, View: view, navigation: previous.navigation + 1 }));
    };

    if (!next) {
      commit(null);
      return;
    }
    const prepared = getPreparedView(next.id);
    if (prepared) {
      commit(prepared);
      return;
    }

    // Keep the current view available until the destination module is ready.
    void loadPageView(next.id).then(commit).catch(() => {
      if (request === requestNumber.current) window.location.assign(url);
    });
  }, []);

  useEffect(()=>{
    const pop=()=>navigate(window.location.pathname+window.location.hash,false);
    window.addEventListener('popstate',pop);return()=>window.removeEventListener('popstate',pop);
  },[navigate]);
  useEffect(()=>{
    if(!route)return;
    document.title=route.title;
    const values:[string,string][]=[['meta[name="description"]',route.description],['meta[property="og:title"]',route.title],['meta[property="og:description"]',route.description]];
    values.forEach(([selector,value])=>document.querySelector(selector)?.setAttribute('content',value));
    document.querySelector('link[rel="canonical"]')?.setAttribute('href',new URL(route.path,siteConfig.siteUrl).href);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content',new URL(route.path,siteConfig.siteUrl).href);
    const element=fragmentTarget(location);
    if(element) {
      const jumpImmediately = first.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior:jumpImmediately ? 'instant' : 'smooth', block:'start' });
      element.querySelector<HTMLElement>('h2,h3,input')?.focus({preventScroll:true});
    } else if(!first.current) {
      window.scrollTo({top:0,behavior:'instant'});document.querySelector<HTMLElement>('main h1')?.focus({preventScroll:true});
    }
    first.current=false;
  },[location,route,navigation]);
  useEffect(()=>{
    const element=dialog.current;
    if (overlay && element) {
      if (!element.open) element.showModal();
      element.querySelector<HTMLElement>('[data-dialog-close]')?.focus({ preventScroll: true });
    }
    if(!overlay && element?.open){element.close();trigger.current?.focus({preventScroll:true});}
    document.body.classList.toggle('has-dialog',Boolean(overlay));
    return()=>document.body.classList.remove('has-dialog');
  },[overlay]);
  return <RuntimeContext.Provider value={{pathname,navigate,prefetch:prefetchPage,open:(next,element)=>{
    if (!dialog.current?.open) trigger.current=element;
    setOverlay(next);
  },close}}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <main id="main-content" tabIndex={-1} className="site-main" key={route?.id||'404'}>
      {route&&View?<View pageKey={route.id}/>:<div className="not-found"><img src="/images/omni-logo-black.webp" width="160" height="45" alt="Omni Labs"/><h1 tabIndex={-1}>Page not found.</h1><p>Let’s get you back to what’s next.</p><RouteAction to="home" className="pill pill-dark">Back to home</RouteAction></div>}
    </main>
    <SiteFooter screen={route?.id||'home'}/>
    <dialog ref={dialog} className="site-dialog" data-kind={overlay?.kind} aria-label={overlay?.kind==='media'?`${overlay.item.title} preview`:overlay?.kind==='contact'?'Contact Omni Labs':'Navigation menu'} onCancel={e=>{e.preventDefault();close();}} onClick={e=>{if(e.target===e.currentTarget)close();}}>
      {overlay?.kind==='menu'?<MobileMenu/>:overlay?.kind==='contact'?<ContactForm screen={route?.id}/>:overlay?.kind==='media'?<div className="media-dialog">
        <div className="media-dialog-head"><h2>{overlay.item.title}</h2><button type="button" className="circle-button" data-dialog-close aria-label="Close preview" onClick={close}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button></div>
        <img src={assets[overlay.item.image].at(-1)?.src} alt={`${overlay.item.title} concept poster`} width="960" height="540"/>
        <p>This is a concept poster. A video has not been supplied for this preview.</p><BookingLink className="booking-link"/>
      </div>:null}
    </dialog>
  </RuntimeContext.Provider>;
}
