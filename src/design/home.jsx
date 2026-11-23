// Adapted from the user's approved Wonder export. Layout and copy retained.
import { Artwork } from "../components/Artwork";
import { RouteAction } from "../components/RouteAction";
import { SiteNavigation } from "./navigation";
import { WorkTogetherBand } from "./visuals";
function Homepage() {
  return <>
  <section data-node-label="Cinematic Hero" aria-labelledby="home-heading" className="home-hero">
    <div data-node-label="Golden Gate Feature Frame" className="home-hero-frame">
      <header data-node-label="Enterprise Masthead" className="home-hero-header">
        <SiteNavigation />
      </header>
      <Artwork data-node-label="Golden Gate Hero Photograph" className="absolute inset-0 size-full"
        image="golden-gate" sizes="max(100vw, 150svh)"
        alternate={{ image: 'golden-gate-portrait', media: '(max-width: 639px) and (orientation: portrait)', sizes: 'max(100vw, 78svh)' }}
        eager />
      <div data-node-label="Hero Contrast Scrim" className="home-hero-shade" aria-hidden="true" />
      <div data-node-label="Hero Message" className="grid relative w-full max-w-[1320px] items-end grid-cols-[1.5fr_0.8fr] z-[10] mx-auto my-0 gap-[38px] max-[960px]:flex max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-6" data-artboard-style="ref-2">
        <h1 id="home-heading" data-node-label="Hero Headline" className="home-hero-headline" tabIndex={-1} aria-label="Build what’s next. Make it work.">
          <span className="hero-line" data-node-label="Hero First Line"><span>Build what’s next.</span></span>
          <span className="hero-line" data-node-label="Hero Second Line"><span>Make it work.</span></span>
        </h1>
        <div data-node-label="Hero Supporting Content" className="flex min-w-0 max-w-[380px] flex-col justify-self-end gap-5" data-artboard-style="ref-6">
          <span data-node-label="Hero Supporting Copy" className="[color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-lg font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.51] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[639px]:text-base" data-artboard-style="ref-7">Omni Labs creates AI campaigns, automates work with agents, and builds custom business software.</span>
          <div data-node-label="Hero Actions" className="flex flex-wrap items-center gap-2" data-artboard-style="ref-8">
            <RouteAction data-node-label="Explore Solutions Button" className="inline-flex w-fit min-h-[46px] shrink-0 justify-center items-center [background-color:var(--nura-white)] border-t border-b border-l border-r [color:var(--nura-ink)] text-[13px] font-medium leading-none rounded-full px-[17px] py-0 gap-2 border-transparent cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="solutions" data-artboard-style="ref-9">
              <span data-node-label="Action Label" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-none tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-nowrap" data-artboard-style="ref-10">Explore our solutions</span>
              <div data-node-label="Action Arrow Icon" className="size-[15px] block aspect-[1] shrink-0" data-wonder-svg-host="true">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><line x1="12" y1="5" x2="12" y2="19" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><polyline points="19 12 12 19 5 12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
              </div>
            </RouteAction><RouteAction data-node-label="Hero Contact Button" className="inline-flex w-fit min-h-[46px] shrink-0 justify-center items-center border-t [border-top-color:var(--omni-light-copy)] border-b [border-bottom-color:var(--omni-light-copy)] border-l [border-left-color:var(--omni-light-copy)] border-r [border-right-color:var(--omni-light-copy)] [color:var(--nura-white)] text-[13px] font-medium leading-none rounded-full px-[17px] py-0 gap-2 cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="contact-page" data-artboard-style="ref-11">
              <span data-node-label="Action Label" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-none tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-nowrap" data-artboard-style="ref-12">Let’s talk</span>
            </RouteAction>
          </div>
        </div>
      </div>


    </div>
  </section>
  <div data-node-label="Omni Labs Introduction" className="block pt-11 pb-[35px] [background-color:var(--omni-paper)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px]" data-artboard-style="ref-13">
    <div data-node-label="Brand Statement Layout" className="flex w-full max-w-[1320px] flex-col items-center pt-0 pb-7 [border-top-color:var(--omni-line)] border-b [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 mx-auto my-0" data-artboard-style="ref-14">
      <span data-node-label="Omni Labs Brand Statement" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-3xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[-1.38px] text-center [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-15">Campaigns that connect. Systems that follow through.</span>
    </div>
  </div>
  <div data-node-label="Business Challenge Gallery" className="block pt-[46px] pb-[58px] [background-color:var(--omni-paper)] [font-family:var(--omni-interface-font)] px-[60px] max-[1000px]:px-9 max-[639px]:px-[22px] max-[639px]:pt-9 max-[639px]:pb-10" id="services">
    <div data-node-label="Challenge Gallery Content" className="flex w-full max-w-[1320px] flex-col mx-auto my-0 gap-[25px]" data-artboard-style="ref-16">
      <div data-node-label="Challenge Gallery Heading" className="flex flex-col items-start gap-2" data-artboard-style="ref-17">
        <h2 data-node-label="Business Challenges Headline" className="w-fit [color:var(--nura-ink)] [font-family:'ABC_Favorit',_Inter,_sans-serif] text-[62px] font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.055] tracking-[-3.41px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[900px]:text-[50px] max-[639px]:text-[39px] max-[639px]:tracking-[-2px]" tabIndex={-1} data-artboard-style="ref-18">Solving the problems</h2>
      </div>
      <div data-node-label="Business Challenge Cards" className="grid grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] gap-3.5 max-[639px]:grid-cols-1" data-artboard-style="ref-102">
        <RouteAction data-node-label="Business Challenge Concept" className="group flex relative w-full min-w-0 min-h-[440px] flex-col justify-between [background-color:var(--nura-ink)] [color:var(--nura-white)] rounded-[18px] p-[22px] overflow-clip max-[1000px]:min-h-[338px] max-[639px]:min-h-[325px] cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="creative" aria-label={"AI Creative & Marketing"} data-artboard-style="ref-19">
          <Artwork data-node-label="Film Production Photograph" role="img" aria-label="Film production set with a monitor and crew" className="absolute inset-0 size-full bg-cover bg-no-repeat [background-position:50%_50%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transform-none" image="film-production" positionId="art-2" sizes="(max-width: 639px) max(335px, calc(100vw - 44px)), (max-width: 1100px) 350px, 440px"></Artwork>
          <div data-node-label="Challenge Photograph Contrast" className="inset-0 block absolute [background-image:linear-gradient(180deg,_var(--omni-cinema-scrim)_0%,_var(--omni-cinema-soft)_27%,_var(--omni-clear-shade)_52%,_var(--omni-clear-shade)_65%,_var(--omni-cinema-scrim)_100%)]"></div>
          <div data-node-label="Challenge Concept Header" className="flex relative min-w-0 justify-between items-start z-[10] gap-[7px]" data-artboard-style="ref-20">
            <span data-node-label="Challenge Concept Title" className="max-w-[273px] [color:var(--nura-white)] [font-family:'ABC_Favorit',_Inter,_sans-serif] text-[35px] font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.055] tracking-[-1.925px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1000px]:text-[25px] max-[639px]:text-[30px] max-[900px]:tracking-[-0.9px]" data-artboard-style="ref-21">Launch campaigns faster</span>
            <div data-node-label="Concept Link Control" className="size-9 flex shrink-0 justify-center items-center border-t [border-top-color:var(--omni-light-copy)] border-b [border-bottom-color:var(--omni-light-copy)] border-l [border-left-color:var(--omni-light-copy)] border-r [border-right-color:var(--omni-light-copy)] rounded-full">
              <div data-node-label="Concept Link Arrow" className="size-4 block aspect-[1] shrink-0" data-wonder-svg-host="true">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><line x1="7" y1="17" x2="17" y2="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><polyline points="7 7 17 7 17 17" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
              </div>
            </div>
          </div>
          <span data-node-label="Concept Solution Category" className="relative w-fit z-[10] [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-22">AI Creative &amp; Marketing</span>
        </RouteAction>
        <RouteAction data-node-label="Business Challenge Concept" className="flex relative w-full min-w-0 min-h-[440px] flex-col justify-between [background-color:var(--nura-ink)] [color:var(--nura-white)] rounded-[18px] p-[22px] overflow-clip max-[1000px]:min-h-[338px] max-[639px]:min-h-[325px] cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="agents" aria-label={"AI Agents & Automation"} data-artboard-style="ref-23">
          <Artwork data-node-label="Green Technology Film Still" className="size-full inset-0 block absolute max-w-full bg-cover bg-no-repeat [background-position-x:50%] [background-position-y:47%]" image="agents-film" positionId="art-3" sizes="(max-width: 1100px) 460px, 590px"></Artwork>
          <div data-node-label="Challenge Photograph Contrast" className="inset-0 block absolute [background-image:linear-gradient(180deg,_var(--omni-cinema-scrim)_0%,_var(--omni-cinema-soft)_27%,_var(--omni-clear-shade)_52%,_var(--omni-clear-shade)_65%,_var(--omni-cinema-scrim)_100%)]"></div>
          <div data-node-label="Challenge Concept Header" className="flex relative min-w-0 justify-between items-start z-[10] gap-[7px]" data-artboard-style="ref-24">
            <span data-node-label="Challenge Concept Title" className="max-w-[273px] [color:var(--nura-white)] [font-family:'ABC_Favorit',_Inter,_sans-serif] text-[35px] font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.055] tracking-[-1.925px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1000px]:text-[25px] max-[639px]:text-[30px] max-[900px]:tracking-[-0.9px]" data-artboard-style="ref-25">Automate customer support</span>
            <div data-node-label="Concept Link Control" className="size-9 flex shrink-0 justify-center items-center border-t [border-top-color:var(--omni-light-copy)] border-b [border-bottom-color:var(--omni-light-copy)] border-l [border-left-color:var(--omni-light-copy)] border-r [border-right-color:var(--omni-light-copy)] rounded-full">
              <div data-node-label="Concept Link Arrow" className="size-4 block aspect-[1] shrink-0" data-wonder-svg-host="true">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><line x1="7" y1="17" x2="17" y2="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><polyline points="7 7 17 7 17 17" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
              </div>
            </div>
          </div>
          <span data-node-label="Concept Solution Category" className="relative w-fit z-[10] [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-26">AI Agents &amp; Automation</span>
        </RouteAction>
        <RouteAction data-node-label="Business Challenge Concept" className="group flex relative w-full min-w-0 min-h-[440px] flex-col justify-between [background-color:var(--nura-ink)] [color:var(--nura-white)] rounded-[18px] p-[22px] overflow-clip max-[1000px]:min-h-[338px] max-[639px]:min-h-[325px] cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="software" aria-label={"Applications & Business Software"} data-artboard-style="ref-27">
          <Artwork data-node-label="Laptop Work Photograph" className="absolute inset-0 size-full block max-w-full bg-cover bg-no-repeat [background-position:48%_50%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transform-none" image="business-workspace" positionId="art-4" sizes="(max-width: 1100px) 600px, 785px"></Artwork>
          <div data-node-label="Challenge Photograph Contrast" className="inset-0 block absolute [background-image:linear-gradient(180deg,_var(--omni-cinema-scrim)_0%,_var(--omni-cinema-soft)_27%,_var(--omni-clear-shade)_52%,_var(--omni-clear-shade)_65%,_var(--omni-cinema-scrim)_100%)]"></div>
          <div data-node-label="Challenge Concept Header" className="flex relative min-w-0 justify-between items-start z-[10] gap-[7px]" data-artboard-style="ref-28">
            <span data-node-label="Challenge Concept Title" className="max-w-[273px] [color:var(--nura-white)] [font-family:'ABC_Favorit',_Inter,_sans-serif] text-[35px] font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.055] tracking-[-1.925px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1000px]:text-[25px] max-[639px]:text-[30px] max-[900px]:tracking-[-0.9px]" data-artboard-style="ref-29">Build websites and business apps</span>
            <div data-node-label="Concept Link Control" className="size-9 flex shrink-0 justify-center items-center border-t [border-top-color:var(--omni-light-copy)] border-b [border-bottom-color:var(--omni-light-copy)] border-l [border-left-color:var(--omni-light-copy)] border-r [border-right-color:var(--omni-light-copy)] rounded-full">
              <div data-node-label="Concept Link Arrow" className="size-4 block aspect-[1] shrink-0" data-wonder-svg-host="true">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><line x1="7" y1="17" x2="17" y2="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><polyline points="7 7 17 7 17 17" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
              </div>
            </div>
          </div>
          <span data-node-label="Concept Solution Category" className="relative w-fit z-[10] [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-30">Applications &amp; Business Software</span>
        </RouteAction>
      </div>
    </div>
  </div>
  <div data-node-label="Solutions Overview" className="block pt-[53px] pb-[70px] [background-color:var(--omni-paper)] [font-family:var(--omni-interface-font)] px-[60px] max-[1000px]:px-9 max-[639px]:px-[22px]">
    <div data-node-label="Solutions Section Content" className="flex w-full max-w-[1320px] flex-col mx-auto my-0 gap-[31px]" data-artboard-style="ref-31">
      <div data-node-label="Solutions Section Heading" className="flex flex-col items-start gap-[11px]" data-artboard-style="ref-32">
        <h2 data-node-label="Solutions Display Type" className="max-w-[790px] [color:var(--nura-ink)] [font-family:'ABC_Favorit',_Inter,_sans-serif] text-6xl font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.04] tracking-[-3.3px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[900px]:text-[48px] max-[639px]:text-[39px] max-[639px]:tracking-[-2px]" tabIndex={-1} data-artboard-style="ref-33">Marketing, automation, and software</h2>
      </div>
      <div data-node-label="Solution Capability Grid" className="grid grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] gap-[13px] max-[1110px]:grid-cols-2 max-[639px]:grid-cols-1">
        <RouteAction data-node-label="AI Creative Photo Panel" className="group flex relative min-w-0 min-h-[453px] flex-col justify-end [background-color:var(--nura-ink)] [color:var(--nura-white)] rounded-[19px] p-[22px] overflow-clip max-[639px]:min-h-[392px] cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="creative" aria-label={"AI Creative & Marketing"} data-artboard-style="ref-34">
          <Artwork data-node-label="AI Creative Campaign Portrait" className="absolute inset-0 size-full block max-w-full bg-cover bg-no-repeat [background-position:50%_48%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transform-none" image="creative-portrait" positionId="art-5" sizes="(max-width: 639px) calc(100vw - 44px), (max-width: 1100px) 45vw, 380px"></Artwork>
          <div data-node-label="Creative Photograph Contrast" className="inset-0 block absolute [background-image:linear-gradient(180deg,_var(--omni-clear-shade)_0%,_var(--omni-clear-shade)_51%,_var(--omni-cinema-soft)_72%,_var(--omni-cinema-scrim)_100%)]"></div>
          <div data-node-label="Creative Capability Title" className="flex relative flex-col z-[10] gap-[5px]" data-artboard-style="ref-35">
            <span data-node-label="AI Creative Heading" className="w-fit [color:var(--nura-white)] [font-family:'ABC_Favorit',_Inter,_sans-serif] text-4xl font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.04] tracking-[-1.98px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-36">AI Creative &amp; Marketing</span>
            <span data-node-label="Creative Capability Description" className="w-fit [color:var(--omni-light-copy)] [font-family:var(--omni-interface-font)] text-[15px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.43] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-37">Ads, brand films, and campaign strategy</span>
          </div>
        </RouteAction>
        <RouteAction data-node-label="AI Agents Interface Panel" className="flex min-w-0 min-h-[453px] flex-col [background-color:var(--nura-paper)] [color:var(--nura-ink)] rounded-[19px] p-[22px] gap-[21px] overflow-clip max-[639px]:min-h-[352px] cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="agents" aria-label={"AI Agents & Automation"} data-artboard-style="ref-38">
          <div data-node-label="Agent Capability Heading" className="flex flex-col gap-2" data-artboard-style="ref-39">
            <span data-node-label="AI Agents Heading" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[27px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.12] tracking-[-1.296px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-40">AI Agents &amp; Automation</span>
            <span data-node-label="Agent Capability Description" className="[color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-[15px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.43] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-41">Answer questions and route requests.</span>
          </div>
          <div data-node-label="Support Chat Interface" className="flex flex-col [background-color:var(--nura-white)] border-t [border-top-color:var(--omni-line)] border-b [border-bottom-color:var(--omni-line)] border-l [border-left-color:var(--omni-line)] border-r [border-right-color:var(--omni-line)] rounded-xl p-2.5 gap-[7px]" data-artboard-style="ref-42">
            <div data-node-label="Support Chat Header" className="flex items-center pt-0 pb-1 px-0 gap-[7px]" data-artboard-style="ref-43">
              <div data-node-label="Support Inbox Symbol" className="size-[15px] block aspect-[1] shrink-0 [color:var(--omni-spruce)]" data-wonder-svg-host="true">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path></svg>
              </div>
              <span data-node-label="Support Chat Title" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[13px] font-semibold not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-44">Support inbox</span>
            </div>
            <div data-node-label="Customer Message" className="flex flex-col [background-color:var(--nura-paper)] rounded-lg px-[9px] py-2 gap-1" data-artboard-style="ref-45">
              <span data-node-label="Chat Speaker" className="w-fit [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-[11px] font-semibold not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-46">Customer</span>
              <span data-node-label="Chat Message" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[13px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.37] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-47">Can I track my order?</span>
            </div>
            <div data-node-label="AI Agent Message" className="flex flex-col [background-color:var(--omni-workflow-surface)] rounded-lg px-[9px] py-2 gap-1" data-artboard-style="ref-48">
              <span data-node-label="Chat Speaker" className="w-fit [color:var(--omni-spruce)] [font-family:var(--omni-interface-font)] text-[11px] font-semibold not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-49">AI agent</span>
              <span data-node-label="Chat Message" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[13px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.37] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-50">Yes. What’s your order number?</span>
            </div>
          </div>
          <div data-node-label="Agent Handoff Label" className="flex min-h-[27px] items-center pt-[9px] pb-0 mt-auto mb-0 px-0 mx-0 gap-1.5" data-artboard-style="ref-51">
            <div data-node-label="Human Handoff Symbol" className="size-4 block aspect-[1] shrink-0 [color:var(--omni-spruce)]" data-wonder-svg-host="true">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path><circle cx="8.5" cy="7" r="4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></circle><polyline points="17 11 19 13 23 9" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
            </div>
            <span data-node-label="Human Handoff Text" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-52">Human handoff</span>
          </div>
        </RouteAction>
        <RouteAction data-node-label="Business Software Panel" className="flex min-w-0 min-h-[453px] flex-col [background-color:var(--nura-ink)] [color:var(--nura-white)] rounded-[19px] p-[22px] gap-[19px] overflow-clip max-[639px]:min-h-[365px] cursor-pointer transition-opacity hover:opacity-85 active:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]" to="software" aria-label={"Applications & Business Software"} data-artboard-style="ref-53">
          <div data-node-label="Software Capability Badge" className="size-9 flex justify-center items-center [background-color:var(--nura-white)] [color:var(--nura-ink)] rounded-[9px]">
            <div data-node-label="Business App Icon" className="size-[18px] block aspect-[1]" data-wonder-svg-host="true">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></rect><line x1="8" y1="21" x2="16" y2="21" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><line x1="12" y1="17" x2="12" y2="21" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line></svg>
            </div>
          </div>
          <div data-node-label="Business Software Heading Group" className="flex flex-col gap-2" data-artboard-style="ref-54">
            <span data-node-label="Business Software Heading" className="[color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[27px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.12] tracking-[-1.296px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-55">Applications &amp; Business Software</span>
            <span data-node-label="Business Software Description" className="[color:var(--omni-light-copy)] [font-family:var(--omni-interface-font)] text-[15px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.43] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-56">Websites, mobile apps, and systems tailored to your business.</span>
          </div>
          <div data-node-label="Retail Software Preview" className="flex flex-col [background-color:var(--omni-charcoal)] border-t [border-top-color:var(--omni-dark-line)] border-b [border-bottom-color:var(--omni-dark-line)] border-l [border-left-color:var(--omni-dark-line)] border-r [border-right-color:var(--omni-dark-line)] rounded-xl px-2.5 py-2 gap-[5px]" data-artboard-style="ref-57">
            <span data-node-label="Retail Software Preview Heading" className="[border-top-color:var(--omni-dark-line)] border-b [border-bottom-color:var(--omni-dark-line)] [border-left-color:var(--omni-dark-line)] [border-right-color:var(--omni-dark-line)] [color:var(--omni-olive)] [font-family:var(--omni-interface-font)] text-[13px] font-semibold not-italic [-webkit-font-smoothing:antialiased] leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal px-[3px] py-1.5" data-artboard-style="ref-58">Business workspace</span>
            <div data-node-label="Retail Software Module" className="flex min-h-8 items-center px-[3px] py-1.5 gap-2" data-artboard-style="ref-59">
              <div data-node-label="Retail Module Icon" className="size-4 flex shrink-0 items-center [color:var(--omni-olive)]">
                <div data-node-label="Website Icon" className="size-[15px] block aspect-[1]" data-wonder-svg-host="true">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><circle cx="12" cy="12" r="10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></circle><line x1="2" y1="12" x2="22" y2="12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path></svg>
                </div>
              </div>
              <span data-node-label="Retail Module Name" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-60">Websites &amp; portals</span>
            </div>
            <div data-node-label="Retail Software Module" className="flex min-h-8 items-center px-[3px] py-1.5 gap-2" data-artboard-style="ref-61">
              <div data-node-label="Retail Module Icon" className="size-4 flex shrink-0 items-center [color:var(--omni-olive)]">
                <div data-node-label="Mobile App Icon" className="size-[15px] block aspect-[1]" data-wonder-svg-host="true">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></rect><line x1="12" y1="18" x2="12.01" y2="18" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line></svg>
                </div>
              </div>
              <span data-node-label="Retail Module Name" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-62">Mobile apps</span>
            </div>
            <div data-node-label="Retail Software Module" className="flex min-h-8 items-center px-[3px] py-1.5 gap-2" data-artboard-style="ref-63">
              <div data-node-label="Retail Module Icon" className="size-4 flex shrink-0 items-center [color:var(--omni-olive)]">
                <div data-node-label="Point Of Sale Icon" className="size-[15px] block aspect-[1]" data-wonder-svg-host="true">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path><line x1="3" y1="6" x2="21" y2="6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><path d="M16 10a4 4 0 0 1-8 0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path></svg>
                </div>
              </div>
              <span data-node-label="Retail Module Name" className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-64">POS &amp; inventory</span>
            </div>
          </div>
        </RouteAction>
        <div data-node-label="Connected Tools Panel" className="flex min-w-0 min-h-[453px] flex-col [background-color:var(--omni-workflow-surface)] [color:var(--nura-ink)] rounded-[19px] p-[22px] gap-[22px] overflow-clip max-[639px]:min-h-[365px]" data-artboard-style="ref-65">
          <div data-node-label="Integration Capability Heading" className="flex flex-col gap-2" data-artboard-style="ref-66">
            <span data-node-label="Integrations Heading" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[27px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.12] tracking-[-1.296px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-67">Connect your tools</span>
            <span data-node-label="Integration Capability Description" className="[color:var(--omni-workflow-muted)] [font-family:var(--omni-interface-font)] text-[15px] font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.43] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-68">One workflow across the systems you already use.</span>
          </div>
          <div data-node-label="Integrated Surfaces" className="grid grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] [background-color:var(--omni-paper)] border-t [border-top-color:var(--omni-workflow-line)] border-b [border-bottom-color:var(--omni-workflow-line)] border-l [border-left-color:var(--omni-workflow-line)] border-r [border-right-color:var(--omni-workflow-line)] rounded-xl px-[7px] py-[13px] gap-1" data-artboard-style="ref-69">
            <div data-node-label="Integration Surface" className="flex min-w-0 flex-col items-center gap-1.5" data-artboard-style="ref-70">
              <div data-node-label="Integration Tile" className="size-12 flex justify-center items-center [background-color:var(--nura-white)] border-t [border-top-color:var(--omni-workflow-line)] border-b [border-bottom-color:var(--omni-workflow-line)] border-l [border-left-color:var(--omni-workflow-line)] border-r [border-right-color:var(--omni-workflow-line)] [color:var(--omni-spruce)] rounded-[11px]">
                <div data-node-label="Web Form Icon" className="size-[18px] block aspect-[1] shrink-0" data-wonder-svg-host="true">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><circle cx="12" cy="12" r="10" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></circle><line x1="2" y1="12" x2="22" y2="12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path></svg>
                </div>
              </div>
              <span data-node-label="Integration Surface Label" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xs font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-center [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-71">Web forms</span>
            </div>
            <div data-node-label="Integration Surface" className="flex min-w-0 flex-col items-center gap-1.5" data-artboard-style="ref-72">
              <div data-node-label="Integration Tile" className="size-12 flex justify-center items-center [background-color:var(--nura-white)] border-t [border-top-color:var(--omni-workflow-line)] border-b [border-bottom-color:var(--omni-workflow-line)] border-l [border-left-color:var(--omni-workflow-line)] border-r [border-right-color:var(--omni-workflow-line)] [color:var(--omni-spruce)] rounded-[11px]">
                <div data-node-label="Team Inbox Icon" className="size-[18px] block aspect-[1] shrink-0" data-wonder-svg-host="true">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path><polyline points="22,6 12,13 2,6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
                </div>
              </div>
              <span data-node-label="Integration Surface Label" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xs font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-center [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-73">Inbox</span>
            </div>
            <div data-node-label="Integration Surface" className="flex min-w-0 flex-col items-center gap-1.5" data-artboard-style="ref-74">
              <div data-node-label="Integration Tile" className="size-12 flex justify-center items-center [background-color:var(--nura-white)] border-t [border-top-color:var(--omni-workflow-line)] border-b [border-bottom-color:var(--omni-workflow-line)] border-l [border-left-color:var(--omni-workflow-line)] border-r [border-right-color:var(--omni-workflow-line)] [color:var(--omni-spruce)] rounded-[11px]">
                <div data-node-label="CRM Database Icon" className="size-[18px] block aspect-[1] shrink-0" data-wonder-svg-host="true">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><ellipse cx="12" cy="5" rx="9" ry="3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path></svg>
                </div>
              </div>
              <span data-node-label="Integration Surface Label" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xs font-medium not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[0px] text-center [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-75">CRM</span>
            </div>
          </div>
          <div data-node-label="Integration Protocol Row" className="flex items-center pt-3 pb-0 mt-auto mb-0 border-t [border-top-color:var(--omni-workflow-line)] [border-bottom-color:var(--omni-workflow-line)] [border-left-color:var(--omni-workflow-line)] [border-right-color:var(--omni-workflow-line)] px-0 mx-0 gap-[7px]" data-artboard-style="ref-76">
            <div data-node-label="Connection Protocol Icon" className="size-4 block aspect-[1] shrink-0 [color:var(--omni-spruce)]" data-wonder-svg-host="true">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></path><line x1="8" y1="12" x2="16" y2="12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line></svg>
            </div>
            <span data-node-label="Integration Protocol Labels" className="w-fit [color:var(--omni-spruce)] [font-family:var(--omni-interface-font)] text-[13px] font-medium not-italic [-webkit-font-smoothing:antialiased] leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-77">API &amp; webhooks</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-node-label="Homepage Workflow Preview" id="about" className="block w-full [background-color:var(--nura-white)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] py-16 max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:py-12" data-artboard-style="ref-78">
  <div data-node-label="Workflow Preview Layout" className="grid items-center grid-cols-[0.9fr_1.1fr] gap-16 max-[1100px]:flex max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-7">
    <h2 data-node-label="Workflow Preview Heading" tabIndex={-1} className="flex flex-col text-[56px] font-light leading-[1.06] tracking-[-2.6px]" data-artboard-style="ref-79">
      <span data-node-label="Workflow Preview First Line" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[56px] font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.06] tracking-[-2.6px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[44px] max-[1100px]:tracking-[-1.4px] max-[700px]:text-[38px]" data-artboard-style="ref-80">From brief</span>
      <span data-node-label="Workflow Preview Second Line" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[56px] font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.06] tracking-[-2.6px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[44px] max-[1100px]:tracking-[-1.4px] max-[700px]:text-[38px]" data-artboard-style="ref-81">to launch.</span>
    </h2>
    <div data-node-label="Workflow Preview Copy" className="flex min-w-0 max-w-[470px] flex-col items-start gap-6" data-artboard-style="ref-82">
      <span data-node-label="Workflow Preview Description" className="[color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-[1.55] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[18px]" data-artboard-style="ref-83">A shared process, with clear reviews from the first idea to the final handover.</span>
      <RouteAction data-node-label="Workflow Preview Action" to="workflow" className="inline-flex min-h-12 items-center [border-top-color:var(--nura-ink)] border-b [border-bottom-color:var(--nura-ink)] [border-left-color:var(--nura-ink)] [border-right-color:var(--nura-ink)] gap-3 cursor-pointer hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4" data-artboard-style="ref-84">
        <span data-node-label="Workflow Preview Action Label" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic [-webkit-font-smoothing:antialiased] leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-85">Explore our workflow</span>
        <div data-node-label="SVG" className="size-[19px] block aspect-[1]" data-wonder-svg-host="true">
          <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><line x1="7" y1="17" x2="17" y2="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><polyline points="7 7 17 7 17 17" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
        </div>
      </RouteAction>
    </div>
  </div>
</div>
  <div data-node-label="Industry Overview" className="block [background-color:var(--omni-paper)] [font-family:var(--omni-interface-font)] px-[60px] py-[69px] max-[1000px]:px-9 max-[639px]:px-[22px] max-[639px]:py-10" id="industries" data-artboard-style="ref-86">
    <div data-node-label="Industry Content" className="grid w-full max-w-[1320px] grid-cols-[0.82fr_1.18fr] mx-auto my-0 gap-10 max-[810px]:grid-cols-1 max-[810px]:gap-5" data-artboard-style="ref-87">
      <h2 data-node-label="Industry Display Type" className="w-fit [color:var(--nura-ink)] [font-family:'ABC_Favorit',_Inter,_sans-serif] text-[59px] font-light not-italic [-webkit-font-smoothing:antialiased] leading-[1.055] tracking-[-3.245px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[639px]:text-[38px] max-[639px]:tracking-[-2px]" tabIndex={-1} data-artboard-style="ref-88">Industries</h2>
      <div data-node-label="Industry List" className="grid grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)] gap-x-[22px]" data-artboard-style="ref-89">
        <div data-node-label="Industry Row" className="flex min-w-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-[13px]" data-artboard-style="ref-90">
          <RouteAction data-node-label="Industry Name" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[-0.54px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" to="retail" data-artboard-style="ref-91">Retail &amp; e-commerce</RouteAction>
        </div>
        <div data-node-label="Industry Row" className="flex min-w-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-[13px]" data-artboard-style="ref-92">
          <RouteAction data-node-label="Industry Name" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[-0.54px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" to="hospitality" data-artboard-style="ref-93">Hospitality &amp; travel</RouteAction>
        </div>
        <div data-node-label="Industry Row" className="flex min-w-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-[13px]" data-artboard-style="ref-94">
          <RouteAction data-node-label="Industry Name" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[-0.54px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" to="realestate" data-artboard-style="ref-95">Real estate</RouteAction>
        </div>
        <div data-node-label="Industry Row" className="flex min-w-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-[13px]" data-artboard-style="ref-96">
          <RouteAction data-node-label="Industry Name" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[-0.54px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" to="professional" data-artboard-style="ref-97">Professional services</RouteAction>
        </div>
        <div data-node-label="Industry Row" className="flex min-w-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-[13px]" data-artboard-style="ref-98">
          <RouteAction data-node-label="Industry Name" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[-0.54px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" to="growing" data-artboard-style="ref-99">Growing businesses</RouteAction>
        </div>
        <div data-node-label="Industry Row" className="flex min-w-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-[13px]" data-artboard-style="ref-100">
          <RouteAction data-node-label="Industry Name" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-xl font-normal not-italic [-webkit-font-smoothing:antialiased] leading-tight tracking-[-0.54px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" to="enterprise" data-artboard-style="ref-101">Enterprise teams</RouteAction>
        </div>
      </div>
    </div>
  </div>
  <WorkTogetherBand />



  </>;
}
export { Homepage };
