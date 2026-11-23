// Adapted from the user's approved Wonder export. Layout and copy retained.
import { VideoPreview } from "../components/VideoPreview";
import { Artwork } from "../components/Artwork";
import { RouteAction } from "../components/RouteAction";
import { SiteNavigation } from "./navigation";
import { portfolioCollections } from "../site/portfolio-collections";

const [creativeCollection, ...caseStudyCollections] = portfolioCollections;
const portfolioVideoData = {
  "til.bas": [{
    "ids": ["til.lob", "til.pen", "til.sky", "til.few", "til.fan", "til.eyn", "til.sob", "til.las", "til.ron", "til.zig", "til.bbw"],
    "labels": ["Brand Film Video Card", "Brand Film Video Space", "Brand Film Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Brand film",
    "index": "01",
    "image": "orange-motion",
    "ratio": "16:9",
    "portrait": false
  }, {
    "ids": ["til.see", "til.bio", "til.cbs", "til.was", "til.gus", "til.can", "til.man", "til.gbp", "til.pot", "til.fat", "til.fit"],
    "labels": ["Product Launch Video Card", "Product Launch Video Space", "Product Launch Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Product launch",
    "index": "02",
    "image": "monochrome-motion",
    "ratio": "16:9",
    "portrait": false
  }, {
    "ids": ["til.spa", "til.kea", "til.phi", "til.avg", "til.aer", "til.gcc", "til.abc", "til.tee", "til.usa", "til.due", "til.tea"],
    "labels": ["Campaign Spot Video Card", "Campaign Spot Video Space", "Campaign Spot Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Campaign spot",
    "index": "03",
    "image": "creative-workspace",
    "ratio": "16:9",
    "portrait": false
  }, {
    "ids": ["til.nun", "til.hup", "til.vpn", "til.tax", "til.leg", "til.max", "til.met", "til.ver", "til.msn", "til.its", "til.buf"],
    "labels": ["Brand Story Video Card", "Brand Story Video Space", "Brand Story Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Brand story",
    "index": "04",
    "image": "orange-motion",
    "ratio": "16:9",
    "portrait": false
  }],
  "til.how": [{
    "ids": ["til.any", "til.dis", "til.yid", "til.may", "til.mic", "til.doc", "til.gez", "til.fri", "til.pro", "til.vat", "til.too"],
    "labels": ["Creator Story Video Card", "Creator Story Video Space", "Creator Story Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Creator story",
    "index": "01",
    "image": "forest-portrait",
    "ratio": "9:16",
    "portrait": true
  }, {
    "ids": ["til.atm", "til.nea", "til.tyt", "til.vow", "til.kee", "til.has", "til.age", "til.had", "til.men", "til.urw", "til.six"],
    "labels": ["Product Demo Video Card", "Product Demo Video Space", "Product Demo Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Product demo",
    "index": "02",
    "image": "forest-portrait",
    "ratio": "9:16",
    "portrait": true
  }, {
    "ids": ["til.led", "til.zer", "til.kua", "til.day", "til.oto", "til.cfr", "til.cwm", "til.san", "til.ume", "til.dap", "til.she"],
    "labels": ["Testimonial Video Card", "Testimonial Video Space", "Testimonial Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Testimonial",
    "index": "03",
    "image": "creative-workspace",
    "ratio": "9:16",
    "portrait": true
  }, {
    "ids": ["til.dsc", "til.art", "til.tot", "til.rye", "til.raw", "til.uji", "til.wet", "til.jim", "til.boc", "til.jan", "til.gis"],
    "labels": ["Social Ad Video Card", "Social Ad Video Space", "Social Ad Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Social ad",
    "index": "04",
    "image": "monochrome-motion",
    "ratio": "9:16",
    "portrait": true
  }],
  "til.nov": [{
    "ids": ["til.kit", "til.bed", "til.yor", "til.mon", "til.oes", "til.sny", "til.her", "til.gar", "til.quo", "til.nfl", "til.who"],
    "labels": ["Brand Motion Video Card", "Brand Motion Video Space", "Brand Motion Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Brand motion",
    "index": "01",
    "image": "monochrome-motion",
    "ratio": "16:9",
    "portrait": false
  }, {
    "ids": ["til.apr", "til.ssi", "til.rom", "til.oki", "til.rss", "til.lol", "til.els", "til.sma", "til.now", "til.ads", "til.com"],
    "labels": ["Product Explainer Video Card", "Product Explainer Video Space", "Product Explainer Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Product explainer",
    "index": "02",
    "image": "orange-motion",
    "ratio": "16:9",
    "portrait": false
  }, {
    "ids": ["til.cds", "til.cod", "til.por", "til.saw", "til.why", "til.llc", "til.hut", "til.tag", "til.mix", "til.two", "til.nec"],
    "labels": ["Logo Animation Video Card", "Logo Animation Video Space", "Logo Animation Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Logo animation",
    "index": "03",
    "image": "orange-motion",
    "ratio": "16:9",
    "portrait": false
  }, {
    "ids": ["til.alf", "til.gui", "til.dak", "til.got", "til.biz", "til.isa", "til.ide", "til.fon", "til.tel", "til.low", "til.ons"],
    "labels": ["Motion System Video Card", "Motion System Video Space", "Motion System Poster Artwork", "Video Poster Shade", "Video Aspect Ratio", "Reserved Video Symbol", "SVG", "Video Space Caption", "Video Space Status", "Video Space Index", "Video Piece Title"],
    "title": "Motion system",
    "index": "04",
    "image": "monochrome-motion",
    "ratio": "16:9",
    "portrait": false
  }]
};
function PortfolioVideoCard({
  item
}) {
  return <div data-node-label={item.labels[0]} className="group/video flex min-w-0 flex-col gap-4">
        <VideoPreview data-portrait={item.portrait} role="img" aria-label={"Video space: " + item.title} data-node-label={item.labels[1]} className="block relative w-full min-w-0 min-h-0 aspect-video data-[portrait=true]:aspect-[9/16] [background-color:var(--nura-ink)] rounded-lg overflow-clip" item={item}>
          <Artwork data-node-label={item.labels[2]} className="size-full inset-0 absolute" image={item.image}
            sizes={item.portrait
              ? "(max-width: 700px) max(44vw, 360px), (max-width: 1100px) 50vw, max(24vw, 500px)"
              : "(max-width: 700px) calc(100vw - 44px), 50vw"} />
          <div data-node-label={item.labels[3]} className="inset-0 block absolute [background-image:linear-gradient(0deg,_var(--nura-callout-shade)_0%,_var(--omni-clear-shade)_100%)]"></div>
          <span data-node-label={item.labels[4]} className="absolute top-5 right-5 [color:var(--nura-white)] [font-family:var(--omni-mono-font)] text-[13px] font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.ratio}</span>
          <div data-node-label={item.labels[5]} className="size-16 flex absolute justify-center items-center left-[calc(50%_-_32px)] top-[calc(50%_-_32px)] max-[1100px]:size-14 max-[1100px]:left-[calc(50%_-_28px)] max-[1100px]:top-[calc(50%_-_28px)] max-[700px]:size-12 max-[700px]:left-[calc(50%_-_24px)] max-[700px]:top-[calc(50%_-_24px)] border-t [border-top-color:var(--nura-white)] border-b [border-bottom-color:var(--nura-white)] border-l [border-left-color:var(--nura-white)] border-r [border-right-color:var(--nura-white)] [color:var(--nura-white)] rounded-full">
            <div data-node-label={item.labels[6]} className="size-[22px] block aspect-[1]" data-wonder-svg-host="true">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><polygon points="5 3 19 12 5 21 5 3" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polygon></svg>
            </div>
          </div>
          <div data-node-label={item.labels[7]} className="flex absolute justify-between items-center left-5 right-5 bottom-5 [color:var(--nura-white)] gap-3">
            <span data-node-label={item.labels[8]} className="w-fit [color:var(--nura-white)] [font-family:var(--omni-interface-font)] text-sm font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">Video space</span>
            <span data-node-label={item.labels[9]} className="w-fit [color:var(--nura-white)] [font-family:var(--omni-mono-font)] text-[13px] font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.index}</span>
          </div>
        </VideoPreview>
        <span data-node-label={item.labels[10]} className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[22px] font-normal not-italic leading-[1.3] tracking-[-0.6px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[700px]:text-[18px]">{item.title}</span>
      </div>;
}
function PortfolioCategoryItem({
  item
}) {
  return <RouteAction data-node-label="Portfolio Category Item" className="flex min-w-0 min-h-12 flex-col items-start gap-2 cursor-pointer hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4" to={"portfolio:" + item.route}>
      <span data-node-label="Portfolio Category Link" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] max-[700px]:text-[14px] text-base font-normal not-italic leading-[1.4] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[0]}</span>
      <span data-node-label="Portfolio Category Count" className="w-fit [color:var(--omni-muted)] [font-family:var(--omni-mono-font)] text-[13px] font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal">{item.text[1]}</span>
    </RouteAction>;
}
function PortfolioCaseStudies({ collection }) {
  const { id, title, format, service } = collection;
  return <section id={id} aria-labelledby={id + "-heading"} className="portfolio-case-studies px-[60px] py-[72px] max-[1100px]:px-10 max-[1100px]:py-12 max-[700px]:px-[22px]">
    <div className="portfolio-case-study-intro max-w-[1320px] mx-auto">
      <div>
        <span className="portfolio-collection-format">{format}</span>
        <h2 id={id + "-heading"} tabIndex={-1} className="portfolio-collection-title">{title}</h2>
      </div>
      <div className="portfolio-case-study-status">
        <p>Case studies will appear here when published.</p>
        <RouteAction to={service} className="text-link" aria-label={"Explore " + title}>
          Explore the service <span aria-hidden="true">↗</span>
        </RouteAction>
      </div>
    </div>
  </section>;
}

function PortfolioPage() {
  return <div data-node-label="Portfolio Desktop" className="flex w-full min-w-0 flex-col [font-family:var(--omni-interface-font)] [background-color:var(--nura-white)] [color:var(--nura-ink)]"><div data-node-label="Portfolio Introduction" className="block w-full pt-0 pb-12 [background-color:var(--nura-white)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[700px]:pb-9">
  <div data-node-label="Studio Header" className="relative z-[10] min-h-[88px] max-[1100px]:min-h-[72px]"><SiteNavigation light={true} /></div>
  <div data-node-label="Portfolio Lead" className="grid items-end grid-cols-[1.7fr_1fr] pt-[68px] pb-12 px-0 gap-14 max-[1100px]:grid-cols-1 max-[1100px]:gap-7 max-[1100px]:pt-12 max-[700px]:pt-9 max-[700px]:pb-8">
    <div data-node-label="Portfolio Title Block" className="flex min-w-0 flex-col gap-7" data-artboard-style="ref-125">
      <span data-node-label="Portfolio Eyebrow" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-sm font-normal not-italic leading-[1.42857] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-126">Portfolio</span>
      <h1 aria-label="Creative work, in motion." data-node-label="Portfolio Display Heading" className="flex flex-col text-[88px] font-light leading-none tracking-[-4.1px]" tabIndex={-1}>
        <span data-node-label="Portfolio First Line" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[88px] font-light not-italic leading-none tracking-[-4.1px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[68px] max-[1100px]:tracking-[-3.2px] max-[700px]:text-[48px] max-[700px]:tracking-[-2.2px] max-[700px]:leading-[1.02]" data-artboard-style="ref-127">Creative work,</span>
        <span data-node-label="Portfolio Second Line" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[88px] font-light not-italic leading-none tracking-[-4.1px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[68px] max-[1100px]:tracking-[-3.2px] max-[700px]:text-[48px] max-[700px]:tracking-[-2.2px] max-[700px]:leading-[1.02]" data-artboard-style="ref-128">in motion.</span>
      </h1>
    </div>
    <span data-node-label="Portfolio Introduction Copy" className="max-w-[340px] pt-0 pb-2 [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-lg font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal px-0 max-[1100px]:text-base max-[1100px]:pb-0" data-artboard-style="ref-129">Commercial films, creator-style ads, and motion design, alongside case study sections for AI automation and business software.</span>
  </div>
  <nav className="portfolio-collections" aria-label="Portfolio collections">
    {portfolioCollections.map(({ id, title, format }) => (
      <RouteAction key={id} to={"portfolio:" + id} className="portfolio-collection-link">
        <span>{title}</span>
        <span className="portfolio-collection-format">{format}</span>
        <span className="portfolio-collection-arrow" aria-hidden="true">↘</span>
      </RouteAction>
    ))}
  </nav>
</div>
<section id={creativeCollection.id} aria-labelledby="creative-portfolio-heading">
<div className="portfolio-creative-intro px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px]">
  <h2 id="creative-portfolio-heading" tabIndex={-1} className="portfolio-collection-title">{creativeCollection.title}</h2>
  <nav aria-label="Creative video categories" data-node-label="Portfolio Category Navigation" className="grid grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)_minmax(0px,_1fr)] border-t [border-top-color:var(--omni-line)] border-b [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 py-5 gap-6 max-[1100px]:gap-5 max-[700px]:gap-3">
    {[{
          "ids": ["til.bbs", "til.web", "til.caw"],
          "text": ["Commercial Ads", "04"],
          "route": "commercial"
        }, {
          "ids": ["til.cio", "til.kip", "til.zak"],
          "text": ["UGC Ads", "04"],
          "route": "ugc"
        }, {
          "ids": ["til.gee", "til.psi", "til.vol"],
          "text": ["Motion Design", "04"],
          "route": "motion"
        }].map(item => <PortfolioCategoryItem key={item.ids[0]} item={item} />)}
  </nav>
</div>
<div id="commercial" data-node-label="Commercial Video Gallery" className="block w-full pt-0 pb-[88px] [background-color:var(--nura-white)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:pb-12">
  <div data-node-label="Commercial Section Content" className="flex w-full flex-col gap-8 max-[700px]:gap-6" data-artboard-style="ref-130">
    <div data-node-label="Commercial Gallery Heading" className="flex justify-between items-end gap-8 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-4">
      <h3 data-node-label="Gallery Category Title" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[40px] font-light not-italic leading-[1.1] tracking-[-1.8px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[36px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px]" tabIndex={-1} data-artboard-style="ref-131">Commercial Ads</h3>
      <span data-node-label="Gallery Category Description" className="w-fit max-w-[390px] [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic leading-[1.55] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-132">Brand stories, product launches, and campaign films.</span>
    </div>
    <div data-node-label="Commercial Video Grid" className="grid w-full grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)] gap-6 max-[700px]:grid-cols-1 max-[700px]:gap-7 max-[1100px]:gap-5">{portfolioVideoData["til.bas"].slice(0, 2).map(item => <PortfolioVideoCard key={item.ids[0]} item={item} />)}<div data-node-label="Additional Commercial Slots" className="col-span-2 grid min-w-0 grid-cols-2 gap-6 max-[1100px]:gap-5 max-[700px]:col-span-1 max-[700px]:grid-cols-1 max-[700px]:gap-7">{portfolioVideoData["til.bas"].slice(2).map(item => <PortfolioVideoCard key={item.ids[0]} item={item} />)}</div></div>
  </div>
</div>
<div id="ugc" data-node-label="Creator Video Gallery" className="block w-full [background-color:var(--nura-white)] border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] py-[72px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:py-12">
  <div data-node-label="Creator Section Content" className="flex w-full flex-col gap-8 max-[1100px]:gap-7" data-artboard-style="ref-133">
    <div data-node-label="Creator Gallery Heading" className="flex justify-between items-end gap-8 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-4">
      <h3 data-node-label="Gallery Category Title" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[40px] font-light not-italic leading-[1.1] tracking-[-1.8px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[36px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px]" tabIndex={-1} data-artboard-style="ref-134">UGC Ads</h3>
      <span data-node-label="Gallery Category Description" className="w-fit max-w-[390px] [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic leading-[1.55] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-135">Creator-style stories made for social feeds.</span>
    </div>
    <div data-node-label="Creator Video Grid" className="grid w-full grid-cols-4 max-[1100px]:grid-cols-2 gap-6 max-[1100px]:gap-5 max-[700px]:gap-[14px]">{portfolioVideoData["til.how"].slice(0, 2).map(item => <PortfolioVideoCard key={item.ids[0]} item={item} />)}<div data-node-label="Additional Creator Slots" className="col-span-2 grid min-w-0 grid-cols-2 gap-6 max-[1100px]:gap-5 max-[700px]:gap-[14px]">{portfolioVideoData["til.how"].slice(2).map(item => <PortfolioVideoCard key={item.ids[0]} item={item} />)}</div></div>
  </div>
</div>
<div id="motion" data-node-label="Motion Video Gallery" className="block w-full [background-color:var(--nura-white)] border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] py-[72px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:py-12">
  <div data-node-label="Motion Section Content" className="flex w-full flex-col gap-8 max-[700px]:gap-6" data-artboard-style="ref-136">
    <div data-node-label="Motion Gallery Heading" className="flex justify-between items-end gap-8 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-4">
      <h3 data-node-label="Gallery Category Title" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[40px] font-light not-italic leading-[1.1] tracking-[-1.8px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[36px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px]" tabIndex={-1} data-artboard-style="ref-137">Motion Design</h3>
      <span data-node-label="Gallery Category Description" className="w-fit max-w-[390px] [color:var(--omni-muted)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic leading-[1.55] tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-138">Brand movement, explainers, and product stories.</span>
    </div>
    <div data-node-label="Motion Video Grid" className="grid w-full grid-cols-[minmax(0px,_1fr)_minmax(0px,_1fr)] gap-6 max-[700px]:grid-cols-1 max-[700px]:gap-7 max-[1100px]:gap-5">{portfolioVideoData["til.nov"].slice(0, 2).map(item => <PortfolioVideoCard key={item.ids[0]} item={item} />)}<div data-node-label="Additional Motion Slots" className="col-span-2 grid min-w-0 grid-cols-2 gap-6 max-[1100px]:gap-5 max-[700px]:col-span-1 max-[700px]:grid-cols-1 max-[700px]:gap-7">{portfolioVideoData["til.nov"].slice(2).map(item => <PortfolioVideoCard key={item.ids[0]} item={item} />)}</div></div>
  </div>
</div>
</section>
{caseStudyCollections.map(collection => <PortfolioCaseStudies key={collection.id} collection={collection} />)}
<div data-node-label="Portfolio Workflow Link" className="block w-full pt-3 pb-[72px] [background-color:var(--nura-white)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[1100px]:pb-12" data-artboard-style="ref-139">
  <div data-node-label="Portfolio Workflow Content" className="flex justify-between items-center pt-10 pb-0 border-t [border-top-color:var(--omni-line)] [border-bottom-color:var(--omni-line)] [border-left-color:var(--omni-line)] [border-right-color:var(--omni-line)] px-0 gap-8 max-[1100px]:flex-col max-[1100px]:items-start max-[1100px]:gap-6 max-[1100px]:pt-8" data-artboard-style="ref-140">
    <span data-node-label="Portfolio Workflow Heading" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-[44px] font-light not-italic leading-[1.1] tracking-[-1.8px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal max-[1100px]:text-[36px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px]" data-artboard-style="ref-141">From idea to delivery.</span>
    <RouteAction data-node-label="Portfolio Workflow Action" className="inline-flex min-h-12 items-center [border-top-color:var(--nura-ink)] border-b [border-bottom-color:var(--nura-ink)] [border-left-color:var(--nura-ink)] [border-right-color:var(--nura-ink)] gap-3 cursor-pointer hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4" to="workflow" data-artboard-style="ref-142">
      <span data-node-label="Workflow Action Label" className="w-fit [color:var(--nura-ink)] [font-family:var(--omni-interface-font)] text-base font-normal not-italic leading-normal tracking-[0px] text-left [direction:ltr] break-normal [overflow-wrap:normal] block whitespace-normal" data-artboard-style="ref-143">Explore our workflow</span>
      <div data-node-label="SVG" className="size-[19px] block aspect-[1]" data-wonder-svg-host="true">
        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><line x1="7" y1="17" x2="17" y2="7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></line><polyline points="7 7 17 7 17 17" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2px"></polyline></svg>
      </div>
    </RouteAction>
  </div>
</div></div>;
}
export { portfolioVideoData, PortfolioVideoCard, PortfolioCategoryItem, PortfolioPage };
