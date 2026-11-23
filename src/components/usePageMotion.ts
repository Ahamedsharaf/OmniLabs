import { useEffect } from 'react';

/** Small, once-per-section reveals. Content stays visible without JavaScript. */
export function usePageMotion(page:string) {
  useEffect(()=>{
    const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
    if(preference.matches || !('IntersectionObserver' in window))return;
    const main=document.querySelector('main');
    if(!main)return;
    const elements=[...main.querySelectorAll<HTMLElement>(':scope > [data-node-label], [data-node-label="Work Together Section"], [data-node-label$="Video Gallery"], [data-node-label="Visual Workflow Card"]')]
      .filter(el=>el.getBoundingClientRect().top>window.innerHeight*.85);
    elements.forEach(el=>el.classList.add('motion-reveal'));
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});
    },{threshold:.04,rootMargin:'0px 0px -36px 0px'});
    elements.forEach(el=>observer.observe(el));
    const revealAll=()=>{if(preference.matches)elements.forEach(el=>el.classList.add('is-visible'));};
    preference.addEventListener('change',revealAll);
    return()=>{observer.disconnect();elements.forEach(el=>el.classList.remove('motion-reveal','is-visible'));preference.removeEventListener('change',revealAll);};
  },[page]);
}
