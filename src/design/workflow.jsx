// Adapted from the user's approved Wonder export. Layout and copy retained.
import { Artwork } from "../components/Artwork";
import { SiteNavigation } from "./navigation";
function WorkflowBriefRow({
  item
}) {
  return <div data-node-label="Brief Interface Row" className="flex flex-col border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-3 gap-1">
              <span data-node-label="Brief Field Name" className="w-fit [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-[13px] font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[0]}</span>
              <span data-node-label="Brief Field Value" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-sm font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[1]}</span>
            </div>;
}
function WorkflowReleaseRow({
  item
}) {
  return <div data-node-label="Release Review Item" className="flex items-start gap-3">
              <div data-node-label="Release Check Icon" className="size-[17px] block shrink-0 [color:var(--omni-spruce)]">
                <div data-node-label="SVG" className="size-[17px] block aspect-[1]" data-wonder-svg-host="true">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path><polyline points="22 4 12 14.01 9 11.01" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
                </div>
              </div>
              <span data-node-label="Release Review Text" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-sm font-normal not-italic leading-[1.4] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[0]}</span>
            </div>;
}
function WorkflowVisualCard({
  item
}) {
  return <div data-node-label="Visual Workflow Card" className="flex relative min-w-0 min-h-[600px] flex-col justify-between [background-color:var(--nura-ink)] [color:var(--nura-white)] rounded-xl p-6 overflow-clip max-[1100px]:min-h-[420px] max-[700px]:min-h-[460px] max-[700px]:p-[22px]">
      <div data-wonder-intrinsic-width="1792" data-wonder-intrinsic-height="1024" data-node-label="Workflow Card Photograph" className="size-full inset-0 block absolute max-w-full z-[0] bg-cover bg-no-repeat bg-center" style={{
      backgroundImage: "url(" + item.image + ")"
    }}></div>
      <div data-node-label="Workflow Card Shade" className="inset-0 block absolute z-[1] [background-image:linear-gradient(0deg,_var(--omni-cinema-scrim)_0%,_var(--omni-clear-shade)_85%)]"></div>
      <div data-node-label="Workflow Interface Area" className="block relative w-full max-w-[340px] self-center z-[10]">
        {item.widget}
      </div>
      <div data-node-label="Visual Workflow Copy" className="flex relative flex-col z-[10] mt-14 mb-0 mx-0 gap-3">
        <span data-node-label="Visual Workflow Title" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[28px] font-normal not-italic leading-[1.15] tracking-[-0.8px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.title}</span>
        <span data-node-label="Visual Workflow Description" className="max-w-[500px] [color:var(--omni-light-copy)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.copy}</span>
      </div>
    </div>;
}
const workflowVisualData = [{
  ids: ["lie.won", "lie.rye", "lie.cit", "lie.tel", "lie.wis", "lie.gel", "lie.age"],
  image: "/images/orange-motion-1600.webp",
  title: "Define the direction",
  copy: "Align the goal, audience, and scope before production begins.",
  widget: <div data-node-label="Project Brief Interface" className="block w-full [background-color:var(--nura-white)] [color:var(--nura-ink)] rounded-xl p-5">
          <span data-node-label="Brief Interface Title" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-sm font-semibold not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">Project brief</span>
          <div data-node-label="Brief Interface Rows" className="flex flex-col mt-4 mb-0 mx-0">
            {[{
        "ids": ["lie.kee", "lie.sea", "lie.him"],
        "text": ["Goal", "Grow the brand"]
      }, {
        "ids": ["lie.ebb", "lie.oho", "lie.fra"],
        "text": ["Audience", "Customers & buyers"]
      }, {
        "ids": ["lie.jvc", "lie.pst", "lie.sat"],
        "text": ["Scope", "Campaign + content"]
      }].map(item => <WorkflowBriefRow key={item.ids[0]} item={item} />)}
          </div>
        </div>
}, {
  ids: ["lie.dec", "lie.boy", "lie.dip", "lie.aaa", "lie.sep", "lie.jar", "lie.tax"],
  image: "/images/creative-workspace-960.webp",
  title: "Create and build",
  copy: "Produce the content, workflows, or software around the approved direction.",
  widget: <div data-node-label="Production Photograph Space" className="block w-full min-h-5"></div>
}, {
  ids: ["lie.feb", "lie.who", "lie.lab", "lie.nsw", "lie.gib", "lie.mrs", "lie.sla"],
  image: "/images/forest-portrait-960.webp",
  title: "Review and launch",
  copy: "Test the details, agree the release, and hand over what your team needs.",
  widget: <div data-node-label="Release Review Interface" className="block w-full [background-color:var(--nura-white)] [color:var(--nura-ink)] rounded-xl p-5">
          <span data-node-label="Release Interface Title" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-sm font-semibold not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">Release check</span>
          <div data-node-label="Release Review Items" className="flex flex-col mt-4 mb-0 mx-0 gap-4">
            {[{
        "ids": ["lie.vip", "lie.rna", "lie.der", "lie.yea"],
        "text": ["Review with your team"]
      }, {
        "ids": ["lie.got", "lie.war", "lie.had", "lie.dns"],
        "text": ["Approve the final work"]
      }, {
        "ids": ["lie.say", "lie.opt", "lie.dat", "lie.ugh"],
        "text": ["Deliver files & access"]
      }].map(item => <WorkflowReleaseRow key={item.ids[0]} item={item} />)}
          </div>
        </div>
}];
function WorkflowEditorialPhase({
  item
}) {
  return <div data-node-label="Workflow Editorial Phase" className="flex min-w-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-6 gap-4">
          <span data-node-label="Editorial Phase Number" className="w-8 shrink-0 pt-1 pb-0 [color:var(--omni-muted)] [font-family:var(--omni-mono-font)] text-sm font-normal not-italic leading-[1.42857] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal px-0">{item.text[0]}</span>
          <div data-node-label="Editorial Phase Copy" className="flex min-w-0 flex-col gap-2">
            <span data-node-label="Editorial Phase Title" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[22px] font-normal not-italic leading-[1.3] tracking-[-0.4px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[1]}</span>
            <span data-node-label="Editorial Phase Description" className="w-fit [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic leading-[1.6] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[2]}</span>
          </div>
        </div>;
}
function WorkflowSummaryField({
  item
}) {
  return <div data-node-label="Project Summary Field" className="flex flex-col gap-2">
          <span data-node-label="Project Field Label" className="w-fit [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-sm font-normal not-italic leading-[1.42857] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[0]}</span>
          <span data-node-label="Project Field Value" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-lg font-normal not-italic leading-[1.45] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[1]}</span>
        </div>;
}
function WorkflowDeliverable({
  item
}) {
  return <div data-node-label="Project Deliverable" className="flex items-start gap-3">
            <span data-node-label="Deliverable Number" className="w-fit pt-0.5 pb-0 [color:var(--omni-muted)] [font-family:var(--omni-mono-font)] text-[13px] font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal px-0">{item.text[0]}</span>
            <span data-node-label="Deliverable Label" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic leading-[1.45] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[1]}</span>
          </div>;
}
function WorkflowPage() {
  return <div data-node-label="Workflow Desktop" className="flex w-full min-w-0 flex-col [font-family:var(--omni-interface-font)] [background-color:var(--nura-white)] [color:var(--nura-ink)]"><div data-node-label="Workflow Hero" className="flex relative w-full min-w-0 min-h-[680px] flex-col justify-between z-[0] pt-0 pb-16 [background-color:var(--nura-ink)] [color:var(--nura-white)] [font-family:var(--omni-interface-font)] px-[60px] overflow-clip max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:min-h-[660px] max-[700px]:min-h-[640px] max-[1100px]:pb-10" data-artboard-style="ref-144">
  <Artwork data-node-label="Workflow Hero Artwork" className="size-full inset-0 block absolute max-w-full z-0 bg-cover bg-no-repeat bg-center" image="monochrome-motion" positionId="art-11" fit="cover" eager></Artwork>
  <div data-node-label="Workflow Hero Shade" className="inset-0 block absolute z-[1] [background-image:linear-gradient(0deg,_var(--omni-cinema-scrim)_0%,_var(--omni-clear-shade)_100%)]"></div>
  <div data-node-label="Studio Header" className="relative z-[10] min-h-[88px] max-[1100px]:min-h-[72px]"><SiteNavigation light={false} /></div>
  <div data-node-label="Workflow Hero Lead" className="flex flex-col pt-[100px] pb-0 px-0 gap-7 relative z-[10] max-[1100px]:pt-20 max-[1100px]:gap-6" data-artboard-style="ref-145">
    <span data-node-label="Workflow Eyebrow" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-sm font-normal not-italic leading-[1.42857] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-146">Our workflow</span>
    <h1 aria-label="From first idea to working business." data-node-label="Workflow Display Heading" className="flex max-w-[1100px] flex-col text-[88px] font-light leading-[1.05] tracking-[-4.5px]" tabIndex={-1}>
      <span data-node-label="Workflow First Line" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[88px] font-light not-italic leading-[1.05] tracking-[-4.5px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[62px] max-[1100px]:tracking-[-2.9px] max-[700px]:text-[40px] max-[700px]:tracking-[-1.6px] max-[1100px]:leading-[1.08]" data-artboard-style="ref-147">From first idea</span>
      <span data-node-label="Workflow Second Line" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[88px] font-light not-italic leading-[1.05] tracking-[-4.5px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[62px] max-[1100px]:tracking-[-2.9px] max-[700px]:text-[40px] max-[700px]:tracking-[-1.6px] max-[1100px]:leading-[1.08]" data-artboard-style="ref-148">to working business.</span>
    </h1>
    <span data-node-label="Workflow Hero Copy" className="w-fit max-w-[480px] [color:var(--omni-light-copy)] [font-family:var(--omni-interface-font)] text-lg font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-base" data-artboard-style="ref-149">A clear process, with reviews at the moments that matter.</span>
  </div>
</div>
<div data-node-label="Workflow Visual Overview" className="block w-full [background-color:var(--nura-white)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] py-[72px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:py-12">
  <h2 tabIndex={-1} data-node-label="Workflow Visual Heading" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-5xl font-light not-italic leading-[1.1] tracking-[-2px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[40px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px]" data-artboard-style="ref-150">How the work comes together.</h2>
  <div data-node-label="Workflow Visual Cards" className="grid grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] mt-9 mb-0 mx-0 gap-6 max-[1100px]:grid-cols-1 max-[1100px]:gap-5">
    {workflowVisualData.map(item => <WorkflowVisualCard key={item.ids[0]} item={item} />)}
  </div>
</div>
<div data-node-label="Workflow Editorial Detail" className="block w-full pt-0 pb-[88px] [background-color:var(--nura-white)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:pb-12">
  <div data-node-label="Workflow Editorial Layout" className="grid grid-cols-[1.55fr_0.8fr] pt-[72px] pb-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 gap-20 max-[1100px]:grid-cols-1 max-[1100px]:gap-10 max-[1100px]:pt-12">
    <div data-node-label="Workflow Narrative" className="block min-w-0">
      <h2 tabIndex={-1} data-node-label="Workflow Narrative Heading" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[44px] font-light not-italic leading-[1.1] tracking-[-1.6px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[40px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px]" data-artboard-style="ref-151">Building it</h2>
      <div data-node-label="Workflow Narrative Introduction" className="flex flex-col mt-7 mb-0 mx-0 gap-6" data-artboard-style="ref-152">
        <span data-node-label="Workflow Narrative Paragraph" className="max-w-[760px] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[21px] font-normal not-italic leading-[1.55] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[18px]" data-artboard-style="ref-153">We start by understanding the business, the people it serves, and the systems already in place. That gives us a practical brief and a clear scope.</span>
        <span data-node-label="Workflow Narrative Paragraph" className="max-w-[760px] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[21px] font-normal not-italic leading-[1.55] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[18px]" data-artboard-style="ref-154">Then we shape the direction and build the work with your team. Reviews happen along the way, with approval before launch and a structured handover.</span>
      </div>
      <div data-node-label="Workflow Editorial Phases" className="flex flex-col mt-10 mb-0 mx-0">
        {[{
              "ids": ["lie.irs", "lie.did", "lie.uta", "lie.rio", "lie.buy"],
              "text": ["01", "Discover", "Map the business goal, audience, systems, and scope."]
            }, {
              "ids": ["lie.bea", "lie.yom", "lie.hey", "lie.quo", "lie.usa"],
              "text": ["02", "Design", "Shape the campaign direction, storyboard, interface, or workflow."]
            }, {
              "ids": ["lie.hen", "lie.big", "lie.yao", "lie.tam", "lie.ens"],
              "text": ["03", "Build", "Produce the content or develop the application, agents, and integrations."]
            }, {
              "ids": ["lie.zig", "lie.huh", "lie.mon", "lie.wir", "lie.two"],
              "text": ["04", "Review", "Test with your team, refine the details, and approve the release."]
            }, {
              "ids": ["lie.lim", "lie.pty", "lie.man", "lie.art", "lie.jut"],
              "text": ["05", "Launch & improve", "Deliver files and access, document the setup, and plan ongoing support."]
            }].map(item => <WorkflowEditorialPhase key={item.ids[0]} item={item} />)}
      </div>
    </div>
    <div data-node-label="Workflow Project Summary" className="block min-w-0 pr-0 pl-9 [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] border-l [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] py-0 max-[1100px]:border-l-0 max-[1100px]:border-t max-[1100px]:pl-0 max-[1100px]:pt-8">
      <span data-node-label="Project Summary Heading" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[22px] font-normal not-italic leading-normal tracking-[-0.6px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-155">At a glance</span>
      <div data-node-label="Project Summary Fields" className="flex flex-col mt-7 mb-0 mx-0 gap-7">
        {[{
              "ids": ["lie.ady", "lie.his", "lie.sup"],
              "text": ["Project scope", "Creative, automation, or software"]
            }, {
              "ids": ["lie.jon", "lie.cop", "lie.sub"],
              "text": ["Collaboration", "Your team + Omni Labs"]
            }, {
              "ids": ["lie.fit", "lie.int", "lie.ste"],
              "text": ["Approvals", "Before launch"]
            }].map(item => <WorkflowSummaryField key={item.ids[0]} item={item} />)}
      </div>
      <div data-node-label="Project Deliverables" className="block pt-7 pb-0 mt-8 mb-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 mx-0">
        <span data-node-label="Project Deliverables Heading" className="w-fit [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-sm font-normal not-italic leading-[1.42857] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-156">What you receive</span>
        <div data-node-label="Project Deliverables List" className="flex flex-col mt-4 mb-0 mx-0 gap-4">
          {[{
                "ids": ["lie.pen", "lie.usr", "lie.yaw"],
                "text": ["01", "Agreed brief"]
              }, {
                "ids": ["lie.iso", "lie.yoi", "lie.rom"],
                "text": ["02", "Direction & prototype"]
              }, {
                "ids": ["lie.hun", "lie.chi", "lie.tue"],
                "text": ["03", "Working version"]
              }, {
                "ids": ["lie.jim", "lie.pea", "lie.qui"],
                "text": ["04", "Approved release"]
              }, {
                "ids": ["lie.css", "lie.pgp", "lie.gtk"],
                "text": ["05", "Handover & support"]
              }].map(item => <WorkflowDeliverable key={item.ids[0]} item={item} />)}
        </div>
      </div>
    </div>
  </div>
</div>
</div>;
}
export { WorkflowBriefRow, WorkflowReleaseRow, WorkflowVisualCard, workflowVisualData, WorkflowEditorialPhase, WorkflowSummaryField, WorkflowDeliverable, WorkflowPage };
