import { RouteAction } from "../components/RouteAction";
import { SiteNavigation } from "./navigation";

function BlogPage() {
  return <section className="block min-h-[60vh] bg-[var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px]">
    <SiteNavigation light />
    <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-8 py-24 max-[700px]:py-14">
      <div className="flex flex-col gap-4">
        <span className="text-sm uppercase tracking-[0.12em] text-[var(--omni-muted)]">Orsen Labs Journal</span>
        <h1 tabIndex={-1} className="max-w-[850px] text-[72px] font-light leading-[1.02] tracking-[-3px] text-[var(--nura-ink)] max-[700px]:text-[44px] max-[700px]:tracking-[-1.8px]">Ideas for work that moves forward.</h1>
        <p className="max-w-[560px] text-lg leading-relaxed text-[var(--omni-muted)]">Perspectives on AI marketing, helpful agents, and business software.</p>
      </div>
      <div className="grid grid-cols-3 gap-4 border-t border-[var(--omni-line)] pt-6 max-[700px]:grid-cols-1">
        <a id="ai-automation" className="min-h-36 rounded-2xl border border-[var(--omni-line)] p-6 text-xl text-[var(--nura-ink)] hover:bg-white" href="#ai-automation">AI and automation <span className="block pt-3 text-sm text-[var(--omni-muted)]">Articles coming soon</span></a>
        <a id="marketing-creative" className="min-h-36 rounded-2xl border border-[var(--omni-line)] p-6 text-xl text-[var(--nura-ink)] hover:bg-white" href="#marketing-creative">Marketing and creative <span className="block pt-3 text-sm text-[var(--omni-muted)]">Articles coming soon</span></a>
        <a id="business-software" className="min-h-36 rounded-2xl border border-[var(--omni-line)] p-6 text-xl text-[var(--nura-ink)] hover:bg-white" href="#business-software">Business software <span className="block pt-3 text-sm text-[var(--omni-muted)]">Articles coming soon</span></a>
      </div>
      <RouteAction to="contact-page" className="w-fit border-b border-[var(--nura-ink)] pb-1 text-[var(--nura-ink)]">Talk to our team ↗</RouteAction>
    </div>
  </section>;
}
export { BlogPage };
