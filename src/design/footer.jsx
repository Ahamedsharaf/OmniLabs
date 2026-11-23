// Adapted from the user's approved Wonder export. Layout and copy retained.
import { Artwork } from "../components/Artwork";
import { RouteAction } from "../components/RouteAction";
const footerLinks = [{
  "title": "Services",
  "links": [["All services", "solutions"], ["AI Creative & Marketing", "creative"], ["AI Agents & Automation", "agents"], ["Applications & Business Software", "software"]]
}, {
  "title": "Industries",
  "links": [["Overview", "industries"], ["Retail & e-commerce", "retail"], ["Hospitality & travel", "hospitality"], ["Real estate", "realestate"], ["Professional services", "professional"], ["Growing businesses", "growing"], ["Enterprise teams", "enterprise"]]
}, {
  "title": "Company",
  "links": [["About", "about"], ["Portfolio", "portfolio"], ["How we work", "workflow"], ["Work with us", "work-with-us"]]
}, {
  "title": "Legal",
  "links": [["Privacy Policy", "privacy"], ["Website Terms", "terms"]]
}];
const footerFrames = {
  "home": "per.hat",
  "portfolio": "til.our",
  "workflow": "lie.was",
  "creative": "map.pig",
  "agents": "cbs.met",
  "software": "its.css",
  "solutions": "sao.dog",
  "industries": "our.via",
  "about": "cup.icq",
  "work-with-us": "ist.one",
  "contact-page": "tua.saw",
  "privacy": "ido.yor",
  "terms": "dvd.tar",
  "retail": "une.was",
  "hospitality": "hit.his",
  "realestate": "wis.you",
  "professional": "sur.how",
  "growing": "tat.two",
  "enterprise": "his.kay"
};
function SiteFooter({
  screen
}) {
  const servicePage = screen === "creative" || screen === "agents" || screen === "software";
  const contactTarget = servicePage ? "contact" : screen === "contact-page" ? "contact-page:inquiry" : "contact-page";
  return <footer data-node-label="Essential Site Footer" className="flex w-full min-w-0 flex-col [background-color:var(--omni-footer-ink)] [color:var(--nura-white)] [font-family:var(--omni-interface-font)] overflow-clip">
      <div data-node-label="Footer Contact Banner" className="relative flex w-full min-h-[384px] flex-col items-center pt-[58px] overflow-clip max-[1100px]:min-h-[346px] max-[1100px]:pt-[46px] max-[700px]:min-h-[306px] max-[700px]:pt-10">
        <Artwork data-node-label="Studio Conversation Artwork" aria-hidden="true" className="absolute inset-0 block size-full bg-cover bg-no-repeat [background-position-x:50%] [background-position-y:84%]" image="studio-conversation" positionId="art-10" sizes="max(100vw, 920px)" />
        <div data-node-label="Footer Image Fade" aria-hidden="true" className="absolute inset-0 block [background-image:linear-gradient(180deg,_var(--omni-cinema-soft)_0%,_var(--omni-clear-shade)_55%,_var(--omni-footer-ink)_100%)]" />
        <div data-node-label="Footer Invitation Content" className="relative z-10 flex w-full min-w-0 flex-col items-center px-6 gap-7 max-[1100px]:gap-6 max-[700px]:gap-5 max-[700px]:px-[22px]">
          <h2 data-node-label="Footer Invitation Heading" className="block w-fit [color:var(--nura-white)] text-[50px] font-light leading-[1.05] tracking-[-2.3px] text-center max-[1100px]:text-[44px] max-[1100px]:tracking-[-2px] max-[700px]:text-[39px] max-[700px]:tracking-[-1.7px]">Let’s talk</h2>
          <RouteAction data-node-label="Footer Invitation Action" to={contactTarget} className="inline-flex w-fit min-h-12 shrink-0 justify-center items-center [background-color:var(--nura-white)] [color:var(--nura-ink)] rounded-full px-7 py-0 cursor-pointer transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4">
            <span data-node-label="Contact Button Label" className="block w-fit [color:var(--nura-ink)] text-[15px] font-medium leading-none">Get in touch</span>
          </RouteAction>
        </div>
      </div>
      <div data-node-label="Footer Navigation Area" className="block w-full max-w-[1256px] mx-auto px-14 pt-14 pb-12 max-[1100px]:px-10 max-[1100px]:pt-10 max-[1100px]:pb-9 max-[700px]:px-[22px] max-[700px]:pt-8 max-[700px]:pb-7">
        <nav aria-label="Footer" data-node-label="Footer Columns" className="grid w-full items-start grid-cols-[minmax(0px,_1.55fr)_minmax(0px,_1.22fr)_minmax(0px,_1.06fr)_minmax(0px,_0.75fr)_minmax(0px,_0.78fr)] gap-x-9 gap-y-8 max-[1100px]:grid-cols-4 max-[1100px]:gap-x-6 max-[700px]:grid-cols-2 max-[700px]:gap-y-6">
          <div data-node-label="Footer Brand Group" className="flex min-w-0 flex-col items-start gap-4 max-[1100px]:col-span-4 max-[700px]:col-span-2">
            <RouteAction data-node-label="Footer Home Link" to="home" className="block w-fit max-w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4">
              <img data-node-label="Footer Logo" src="/images/omni-logo-white.webp" alt="Omni Labs home" className="block w-40 max-w-full h-auto object-contain" />
            </RouteAction>
            <span data-node-label="Footer Description" className="block max-w-[212px] [color:var(--omni-light-copy)] text-sm leading-[1.48]">Creative. Automation. Software.</span>
            <RouteAction data-node-label="Footer Brand Contact" to={contactTarget} className="inline-flex w-fit min-h-11 shrink-0 justify-center items-center [background-color:var(--nura-white)] [color:var(--nura-ink)] rounded-full px-[18px] py-0 cursor-pointer transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4">
              <span data-node-label="Contact Button Label" className="block w-fit [color:var(--nura-ink)] text-sm font-medium leading-none">Get in touch</span>
            </RouteAction>
            <span data-node-label="Footer Copyright" className="block w-fit [color:var(--omni-footer-label)] text-[13px] leading-[1.45]">© 2026 Omni Labs</span>
          </div>
          {footerLinks.map(group => <div key={group.title} data-node-label="Footer Link Group" className="flex min-w-0 flex-col items-start gap-3">
              <span data-node-label="Footer Group Title" className="block w-fit [color:var(--omni-footer-label)] text-[13px] font-medium leading-[1.45]">{group.title}</span>
              <div data-node-label="Footer Group Links" className="flex w-full min-w-0 flex-col items-start">
                {group.links.map(([name, route]) => <RouteAction key={route} to={route} aria-current={screen === route ? "page" : undefined} data-node-label="Footer Navigation Link" className="flex w-full min-w-0 min-h-7 items-center py-[5px] max-[1100px]:min-h-9 max-[700px]:min-h-11 max-[700px]:py-[7px] cursor-pointer hover:underline underline-offset-4 aria-[current=page]:underline focus-visible:outline-2 focus-visible:outline-offset-2">
                    <span data-node-label="Footer Navigation Text" className="block min-w-0 [color:var(--omni-light-copy)] text-[14px] font-normal leading-[1.38]">{name}</span>
                  </RouteAction>)}
              </div>
            </div>)}
        </nav>
      </div>
      <div data-node-label="Footer Signature Crop" aria-hidden="true" className="relative block w-[92%] max-w-[1200px] h-[170px] mx-auto overflow-clip max-[1100px]:w-[90%] max-[1100px]:h-[106px] max-[700px]:w-[94%] max-[700px]:h-[58px]">
        <img data-node-label="Oversized Omni Logo" src="/images/omni-logo-white.webp" alt="" className="absolute top-[-64px] left-0 block w-full h-auto opacity-[0.075] object-contain max-[1100px]:top-[-36px] max-[700px]:top-[-17px]" />
      </div>
    </footer>;
}
export { footerLinks, footerFrames, SiteFooter };
