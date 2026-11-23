// Adapted from the user's approved Wonder export. Layout and copy retained.
import { RouteAction } from "../components/RouteAction";
import { StudioBackdrop } from "./visuals";
import { SiteNavigation } from "./navigation";
function WorkWithUsPage() {
  const projectOptions = [["A defined project", "Plan one campaign, workflow, website, or application. We build to an agreed scope and hand the work over to your team."], ["Ongoing support", "Keep the work current after launch. We agree which updates, improvements, and reviews your team needs."]];
  return <div data-node-label="Work With Us Desktop" className="w-full min-w-0 [font-family:var(--omni-interface-font)]">
      <header data-node-label="Page Header" className="relative w-full overflow-hidden px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] [background-color:var(--nura-ink)] [color:var(--nura-white)]">
        <StudioBackdrop eager />
        <div data-node-label="Page Header Container" className="relative z-[10] mx-auto w-full max-w-[1320px]">
          <SiteNavigation />
          <div data-node-label="Page Lead" className="flex flex-col items-center justify-center pt-[82px] pb-[100px] gap-5 text-center max-[1100px]:pt-16 max-[1100px]:pb-20 max-[700px]:py-16 max-[700px]:gap-4" data-artboard-style="ref-157">
            <span data-node-label="Page Eyebrow" className="block w-fit text-sm font-medium leading-[1.4] [color:var(--omni-light-copy)]" data-artboard-style="ref-158">Work with us</span>
            <h1 data-node-label="Page Heading" tabIndex={-1} className="block [color:var(--nura-white)] text-[70px] font-light leading-[1.02] tracking-[-3.5px] text-center max-[1100px]:text-[58px] max-[1100px]:tracking-[-2.5px] max-[700px]:max-w-[450px] max-[700px]:text-[40px] max-[350px]:text-[36px] max-[700px]:tracking-[-1.7px]">
              <span data-node-label="First Heading Line" className="block max-[700px]:inline">Work shaped around</span>{" "}
              <span data-node-label="Second Heading Line" className="block max-[700px]:inline">your needs</span>
            </h1>
            <p data-node-label="Page Introduction" className="block max-w-[540px] [color:var(--omni-light-copy)] text-lg leading-[1.55] text-center max-[700px]:max-w-[320px] max-[700px]:text-base">Tell us what you need to launch, fix, or improve. We’ll agree on the scope and deliverables together.</p>
          </div>
        </div>
      </header>
      <section id="starting-points" data-node-label="Project Starting Points" className="block w-full [background-color:var(--omni-paper)] px-[60px] py-[76px] max-[1100px]:px-10 max-[1100px]:py-14 max-[700px]:px-[22px] max-[700px]:py-12">
        <div data-node-label="Starting Points Layout" className="grid w-full max-w-[1200px] mx-auto items-start grid-cols-[minmax(0px,_0.8fr)_minmax(0px,_1.2fr)] gap-[82px] max-[1100px]:gap-10 max-[850px]:grid-cols-1 max-[700px]:gap-8">
          <div data-node-label="Starting Points Introduction" className="flex min-w-0 flex-col items-start gap-3" data-artboard-style="ref-159">
            <h2 tabIndex={-1} data-node-label="Starting Points Heading" className="block max-w-[420px] [color:var(--nura-ink)] text-[42px] font-light leading-[1.08] tracking-[-1.9px] max-[700px]:max-w-[275px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.2px]">Where to start</h2>
            <RouteAction data-node-label="Workflow Text Link" to="workflow" className="inline-flex min-h-11 w-fit items-center border-b [border-bottom-color:var(--nura-ink)] [color:var(--nura-ink)] cursor-pointer hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4" data-artboard-style="ref-160">
              <span data-node-label="Workflow Link Text" className="block w-fit text-[15px] font-medium leading-[1.4] [color:var(--nura-ink)]" data-artboard-style="ref-161">See our workflow</span>
            </RouteAction>
          </div>
          <div data-node-label="Project Option List" className="flex w-full min-w-0 flex-col border-b [border-bottom-color:var(--omni-line)]">
            {projectOptions.map(([title, details]) => <div key={title} data-node-label="Project Option Row" className="grid w-full items-start grid-cols-[minmax(0px,_0.75fr)_minmax(0px,_1fr)] gap-6 border-t [border-top-color:var(--omni-line)] py-7 max-[700px]:grid-cols-1 max-[700px]:gap-2.5 max-[700px]:py-5">
                <h3 data-node-label="Project Option Title" className="block [color:var(--nura-ink)] text-[21px] font-normal leading-[1.18] tracking-[-0.5px]">{title}</h3>
                <p data-node-label="Project Option Description" className="block [color:var(--omni-muted)] text-base leading-[1.6]">{details}</p>
              </div>)}
          </div>
        </div>
      </section>
    </div>;
}
export { WorkWithUsPage };
