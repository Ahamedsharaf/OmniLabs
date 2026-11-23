// Adapted from the user's approved Wonder export. Layout and copy retained.
import { Artwork } from "../components/Artwork";
import { RouteAction } from "../components/RouteAction";
function StudioBackdrop() {
  return <div data-node-label="Studio Backdrop" aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <Artwork data-node-label="Slate Light Artwork" className="absolute inset-0 block size-full bg-cover bg-no-repeat [background-position-x:50%] [background-position-y:30%]" image="slate-light" positionId="art-0" fit="cover" eager />
      <div data-node-label="Artwork Contrast Layer" className="absolute inset-0 block [background-image:linear-gradient(155deg,_var(--omni-clear-shade)_0%,_var(--omni-cinema-soft)_55%,_var(--omni-photo-shade)_100%)]" />
      <div data-node-label="Square Edge Details" className="flex absolute justify-between inset-x-[5%] inset-y-[12%] z-[2]">
        {[0, 1].map(side => <div key={side} data-node-label="Detail Marker Column" className="flex flex-col h-full justify-between">
            {[0, 1, 2].map(position => <div key={position} data-node-label="Square Detail Marker" className="block size-[4px] [background-color:var(--nura-white)] opacity-45" />)}
          </div>)}
      </div>
    </div>;
}
function WorkTogetherBand() {
  return <section data-node-label="Work Together Section" className="block w-full [font-family:var(--omni-interface-font)] [background-color:var(--omni-paper)] px-[60px] pb-16 max-[1100px]:px-10 max-[1100px]:pb-12 max-[700px]:px-[22px] max-[700px]:pb-8">
      <div data-node-label="Work Together Banner" className="relative flex w-full max-w-[1320px] min-h-[410px] flex-col items-center justify-center mx-auto overflow-clip rounded-[18px] [background-color:var(--nura-ink)] [color:var(--nura-white)] max-[1100px]:min-h-[370px] max-[1100px]:rounded-[16px] max-[700px]:min-h-[334px] max-[700px]:rounded-[14px]">
        <StudioBackdrop />
        <div data-node-label="Work Together Invitation" className="relative z-[10] flex w-full max-w-[760px] flex-col items-center text-center gap-[22px] px-10 py-[60px] max-[1100px]:gap-5 max-[1100px]:px-8 max-[1100px]:py-14 max-[700px]:gap-4 max-[700px]:px-7 max-[700px]:py-12">
          <h2 data-node-label="Work Together Heading" className="block max-w-[650px] [color:var(--nura-white)] text-[58px] font-light leading-[1.05] tracking-[-2.8px] text-center max-[1100px]:text-[49px] max-[1100px]:tracking-[-2.2px] max-[700px]:max-w-[210px] max-[700px]:text-[38px] max-[350px]:text-[34px] max-[700px]:tracking-[-1.6px]">Start with one project</h2>
          <p data-node-label="Work Together Description" className="block max-w-[480px] [color:var(--omni-light-copy)] text-lg leading-[1.5] text-center max-[1100px]:text-base max-[700px]:max-w-[260px]">We’ll agree on what to build and what you’ll receive.</p>
          <RouteAction data-node-label="Work Together Action" to="work-with-us" className="inline-flex min-h-12 w-fit items-center justify-center mt-1 [background-color:var(--nura-white)] rounded-full px-6 py-0 cursor-pointer transition-colors hover:bg-[var(--omni-light-copy)] focus-visible:outline-2 focus-visible:outline-offset-4">
            <span data-node-label="Work Together Action Text" className="block w-fit [color:var(--nura-ink)] text-[15px] font-medium leading-none">Work with us</span>
          </RouteAction>
        </div>
      </div>
    </section>;
}
export { StudioBackdrop, WorkTogetherBand };
