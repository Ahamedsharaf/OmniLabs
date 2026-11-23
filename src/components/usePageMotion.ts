import { useEffect } from 'react';

const revealTargets = [
  ':scope > [data-node-label]:not([data-node-label="Cinematic Hero"])',
  '[data-node-label="Work Together Section"]',
  '[data-node-label$="Video Gallery"]',
  '[data-node-label="Visual Workflow Card"]',
].join(', ');

/** Animate sections as they enter view while keeping their content available. */
export function usePageMotion(page: string) {
  useEffect(() => {
    const main = document.querySelector('main');
    if (!main || !('IntersectionObserver' in window)) return;

    const elements = [...main.querySelectorAll<HTMLElement>(revealTargets)];
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('motion-reveal', 'is-visible');
        observer.unobserve(entry.target);
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0 });

    for (const element of elements) {
      if (element.getBoundingClientRect().top >= window.innerHeight * .85) observer.observe(element);
    }

    return () => {
      observer.disconnect();
      for (const element of elements) element.classList.remove('motion-reveal', 'is-visible');
    };
  }, [page]);
}
