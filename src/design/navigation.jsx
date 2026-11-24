// Adapted from the user's approved Wonder export. Layout and copy retained.
import { RouteAction } from "../components/RouteAction";
import { HeaderNavigation } from "../components/HeaderNavigation";
function SiteNavigation({
  light = false
}) {
  return <div data-node-label="Masthead Alignment" data-light={light} className="masthead-alignment group/site-nav flex w-full max-w-[1320px] min-h-[77px] justify-between items-center mx-auto my-0 gap-3 max-[1100px]:min-h-[66px]">
          <RouteAction data-node-label="Omni Labs Brand Lockup" className="flex w-fit shrink-0 items-center [color:var(--nura-white)] [font-family:var(--omni-interface-font)] gap-[5px] cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)] group-data-[light=true]/site-nav:[color:var(--nura-ink)]" to="home" aria-label={"Orsen Labs home"}>
            <img data-node-label="Omni Labs Logo" src={light ? "/images/orsen-logo-black.webp" : "/images/orsen-logo-white.webp"} alt="Orsen Labs" width="160" height="45" className="block h-auto object-contain" />
          </RouteAction>
          <HeaderNavigation />

<RouteAction to="menu" aria-label="Open menu" className="hidden size-11 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[var(--omni-light-copy)] text-[var(--nura-white)] transition-colors hover:bg-white/10 max-[1100px]:inline-flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="size-[19px]"><path d="M4 7h16M4 12h16M4 17h16" /></svg></RouteAction>
</div>;
}
export { SiteNavigation };
