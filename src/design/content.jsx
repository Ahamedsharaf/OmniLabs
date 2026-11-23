// Adapted from the user's approved Wonder export. Layout and copy retained.
import { RouteAction } from "../components/RouteAction";
import { Artwork } from "../components/Artwork";
import { useState } from "react";
import { SiteNavigation } from "./navigation";
import { ContactForm } from "../components/ContactForm";
const sitePages = {
  "solutions": {
    "key": "solutions",
    "name": "Solutions",
    "title": "Creative thinking.\nConnected execution.",
    "intro": "Campaigns, agents, and applications built around your business.",
    "rows": [["AI Creative & Marketing", "Commercials, campaign strategy, product imagery, and marketing systems.", "creative"], ["AI Agents & Automation", "Customer assistants, connected workflows, and knowledge systems.", "agents"], ["Applications & Business Software", "Websites, mobile applications, and software tailored to your operations.", "software"]]
  },
  "industries": {
    "key": "industries",
    "name": "Industries",
    "title": "Built for the work\nyour industry does.",
    "intro": "Choose your industry to explore practical applications across marketing, service, and operations.",
    "rows": [["Retail & e-commerce", "Connect campaigns, customer questions, orders, and stock.", "retail"], ["Hospitality & travel", "Support guests and simplify bookings.", "hospitality"], ["Real estate", "Turn property inquiries into informed conversations.", "realestate"], ["Professional services", "Connect client intake, knowledge, and delivery.", "professional"], ["Growing businesses", "Build the tools and workflows for your next stage.", "growing"], ["Enterprise teams", "Plan AI adoption around your systems and people.", "enterprise"]]
  },
  "about": {
    "key": "about",
    "name": "About Omni Labs",
    "title": "Bring your ideas\ninto everyday business.",
    "intro": "Omni Labs brings creative production, AI automation, and custom software together.",
    "rows": [["Start with the business", "Understand your customers, systems, and the problem to solve."], ["Build with your team", "Agree on scope, review working prototypes, and refine the details."], ["Connect the work", "Link campaigns, conversations, and operations through suitable integrations."], ["Improve over time", "Review results, resolve issues, and plan the next iteration."]]
  },
  "contact-page": {
    "key": "contact-page",
    "name": "Contact",
    "title": "What are you\nworking on?",
    "intro": "Share your goals, current tools, and timeline. We can help shape a practical starting point.",
    "rows": [["Your goal", "What would you like to create or improve?"], ["Your systems", "Which applications and workflows does your team use?"], ["Your timeline", "When would you like to start, and what is your budget range?"]]
  },
  "privacy": {
    "key": "privacy",
    "name": "Privacy Policy",
    "title": "Privacy, explained\nin plain language.",
    "intro": "Draft policy for review before publication.",
    "rows": [["Information shared with us", "Project inquiries may include your name, work email, company, and project details."], ["Purpose and access", "The final policy should identify how inquiry information is used, who can access it, and the relevant legal basis."], ["Retention and service providers", "Confirm retention periods, hosting and analytics providers, and any international data transfers before publication."], ["Your requests", "The published policy should provide a verified contact method for access, correction, deletion, and other applicable privacy requests."]]
  },
  "terms": {
    "key": "terms",
    "name": "Website Terms",
    "title": "Clear terms for\nworking together.",
    "intro": "Draft website terms for review before publication.",
    "rows": [["Website information", "Service descriptions provide a general overview. Each engagement should have a separate written scope and agreement."], ["Project agreements", "Confirm deliverables, milestones, fees, approvals, intellectual property, and support in the project agreement."], ["Responsible use", "Use this website lawfully and respect the rights of others."], ["Publication details", "Confirm the contracting entity, contact details, governing law, and applicable limitations with legal counsel before publication."]]
  },
  "retail": {
    "key": "retail",
    "name": "Retail & e-commerce",
    "title": "From discovery\nto repeat customers.",
    "intro": "Connect product content, customer support, and retail operations.",
    "rows": [["Creative & Marketing", "Product photography, launch videos, campaign variations, and lifecycle messaging."], ["Agents & Automation", "Product recommendations, order questions, lead routing, and human handoff."], ["Applications & Software", "Online stores, stock management, billing, customer portals, and reporting."]],
    "sector": true
  },
  "hospitality": {
    "key": "hospitality",
    "name": "Hospitality & travel",
    "title": "Make every guest\ninteraction count.",
    "intro": "Connect discovery, bookings, and service across the guest journey.",
    "rows": [["Creative & Marketing", "Destination films, seasonal campaigns, multilingual content, and landing pages."], ["Agents & Automation", "Booking inquiries, appointment assistance, guest questions, and human handoff."], ["Applications & Software", "Booking platforms, guest portals, team dashboards, and integrations."]],
    "sector": true
  },
  "realestate": {
    "key": "realestate",
    "name": "Real estate",
    "title": "Move from inquiries\nto conversations.",
    "intro": "Give prospects clearer information and teams a connected sales workflow.",
    "rows": [["Creative & Marketing", "Property films, campaign imagery, launch campaigns, and audience strategy."], ["Agents & Automation", "Lead qualification, viewing appointments, document retrieval, and follow-ups."], ["Applications & Software", "Property websites, client portals, CRM workflows, and reporting."]],
    "sector": true
  },
  "professional": {
    "key": "professional",
    "name": "Professional services",
    "title": "More time for\nyour clients.",
    "intro": "Bring client communication, internal knowledge, and delivery together.",
    "rows": [["Creative & Marketing", "Positioning, brand films, campaign planning, and lead generation."], ["Agents & Automation", "Client intake, booking, internal knowledge assistants, and approvals."], ["Applications & Software", "Client portals, project tools, invoicing, and custom dashboards."]],
    "sector": true
  },
  "growing": {
    "key": "growing",
    "name": "Growing businesses",
    "title": "Build for\nyour next stage.",
    "intro": "Start with a focused problem and connect more of your business as you grow.",
    "rows": [["Creative & Marketing", "Brand storytelling, product launches, campaign testing, and customer research."], ["Agents & Automation", "Support, lead qualification, follow-ups, and document processing."], ["Applications & Software", "Websites, mobile apps, business dashboards, and connected operations."]],
    "sector": true
  },
  "enterprise": {
    "key": "enterprise",
    "name": "Enterprise teams",
    "title": "Make AI part of\nthe way teams work.",
    "intro": "Plan adoption around business objectives, existing systems, and human oversight.",
    "rows": [["Creative & Marketing", "Campaign systems, multilingual content, creative variations, and performance views."], ["Agents & Automation", "Knowledge retrieval, multi-agent workflows, human approvals, and monitoring."], ["Applications & Software", "Role-based workspaces, system integrations, multi-location tools, and reporting."]],
    "sector": true
  }
};
function PageBody({
  pageKey
}) {
  switch (pageKey) {
    case "solutions":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Three ways to move your business forward</span><div data-node-label="Service Image Grid" className="grid grid-cols-3 gap-5 max-[1000px]:grid-cols-1">{[{
              "name": "AI Creative & Marketing",
              "desc": "Commercials, campaign strategy, product imagery, and marketing systems.",
              "route": "creative",
              "image": "/images/film-production-736.webp"
            }, {
              "name": "AI Agents & Automation",
              "desc": "Customer assistants, connected workflows, and knowledge systems.",
              "route": "agents",
              "image": "/images/agents-film-735.webp"
            }, {
              "name": "Applications & Business Software",
              "desc": "Websites, mobile applications, and software tailored to your operations.",
              "route": "software",
              "image": "/images/retro-office-640.webp"
            }].map(row => <RouteAction key={row.route} data-node-label="Service Image Card" to={row.route} className="group min-w-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><div data-node-label="Service Card Photograph" className="relative w-full aspect-[4/3] rounded-[18px] overflow-hidden bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transform-none" style={{
                backgroundImage: "url(" + row.image + ")"
              }}></div><div data-node-label="Service Card Details" className="flex flex-col gap-3 pt-5"><span data-node-label="Service Card Name" className="block text-[27px] leading-[1.12] tracking-[-0.9px]">{row.name}</span><span data-node-label="Service Card Description" className="block text-base leading-[1.6] [color:var(--omni-muted)]">{row.desc}</span><span data-node-label="Service Card Action" className="block text-sm font-medium mt-1 group-hover:underline underline-offset-4">Explore service ↗</span></div></RouteAction>)}</div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "industries":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Different industries. Practical possibilities.</span><div data-node-label="Industry Link Grid" className="grid grid-cols-2 gap-x-14 max-[850px]:grid-cols-1">{[["Retail & e-commerce", "Connect campaigns, customer questions, orders, and stock.", "retail"], ["Hospitality & travel", "Support guests and simplify bookings.", "hospitality"], ["Real estate", "Turn property inquiries into informed conversations.", "realestate"], ["Professional services", "Connect client intake, knowledge, and delivery.", "professional"], ["Growing businesses", "Build the tools and workflows for your next stage.", "growing"], ["Enterprise teams", "Plan AI adoption around your systems and people.", "enterprise"]].map(([name, desc, route]) => <RouteAction key={route} data-node-label="Industry Detail Link" to={route} className="flex min-w-0 items-start justify-between gap-6 border-t [border-color:var(--omni-line)] py-7 cursor-pointer hover:[color:var(--omni-spruce)]"><div data-node-label="Industry Link Copy" className="min-w-0"><span data-node-label="Industry Link Name" className="block text-[27px] leading-[1.2] tracking-[-0.7px]">{name}</span><span data-node-label="Industry Link Description" className="block max-w-[430px] mt-3 text-base leading-[1.6] [color:var(--omni-muted)]">{desc}</span></div><span data-node-label="Industry Link Arrow" className="block text-[24px] leading-none">↗</span></RouteAction>)}</div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "about":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="About Editorial Layout" className="grid grid-cols-[0.9fr_1.1fr] gap-[64px] items-start max-[900px]:grid-cols-1 max-[900px]:gap-8"><Artwork data-node-label="About Studio Photograph" className="w-full aspect-square rounded-[18px] bg-cover bg-center" image="film-production" positionId="art-9" sizes="(max-width: 700px) calc(100vw - 44px), (max-width: 900px) calc(100vw - 80px), min(580px, 43vw)"></Artwork><div data-node-label="About Working Principles" className="min-w-0"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">One team across creative, automation, and software.</span><div data-node-label="Working Principles" className="flex flex-col">{[["Start with the business", "Understand your customers, systems, and the problem to solve."], ["Build with your team", "Agree on scope, review working prototypes, and refine the details."], ["Connect the work", "Link campaigns, conversations, and operations through suitable integrations."], ["Improve over time", "Review results, resolve issues, and plan the next iteration."]].map(([name, desc], index) => <div key={name} data-node-label="Working Principle" className="flex gap-5 py-5 border-t [border-color:var(--omni-line)]"><span data-node-label="Working Principle Sequence" className="block shrink-0 w-6 pt-1 text-xs [font-family:var(--omni-mono-font)] [color:var(--omni-muted)]">{String(index + 1).padStart(2, "0")}</span><div data-node-label="Working Principle Copy" className="min-w-0"><span data-node-label="Working Principle Title" className="block text-[23px] tracking-[-0.5px]">{name}</span><span data-node-label="Working Principle Description" className="block mt-2 text-base leading-[1.6] [color:var(--omni-muted)]">{desc}</span></div></div>)}</div></div></div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Build with us</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "privacy":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Policy Reading Column" className="max-w-[820px]"><div data-node-label="Policy Sections" className="flex flex-col gap-9">{[["Information shared with us", "Project inquiries may include your name, work email, company, and project details."], ["Purpose and access", "The final policy should identify how inquiry information is used, who can access it, and the relevant legal basis."], ["Retention and service providers", "Confirm retention periods, hosting and analytics providers, and any international data transfers before publication."], ["Your requests", "The published policy should provide a verified contact method for access, correction, deletion, and other applicable privacy requests."]].map(([name, desc]) => <div key={name} data-node-label="Policy Section" className="border-t [border-color:var(--omni-line)] pt-7"><span data-node-label="Policy Section Heading" className="block text-[25px] tracking-[-0.6px]">{name}</span><span data-node-label="Policy Section Description" className="block mt-3 text-[17px] leading-[1.75] [color:var(--omni-muted)]">{desc}</span></div>)}</div></div></div></div>;
    case "terms":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Policy Reading Column" className="max-w-[820px]"><div data-node-label="Policy Sections" className="flex flex-col gap-9">{[["Website information", "Service descriptions provide a general overview. Each engagement should have a separate written scope and agreement."], ["Project agreements", "Confirm deliverables, milestones, fees, approvals, intellectual property, and support in the project agreement."], ["Responsible use", "Use this website lawfully and respect the rights of others."], ["Publication details", "Confirm the contracting entity, contact details, governing law, and applicable limitations with legal counsel before publication."]].map(([name, desc]) => <div key={name} data-node-label="Policy Section" className="border-t [border-color:var(--omni-line)] pt-7"><span data-node-label="Policy Section Heading" className="block text-[25px] tracking-[-0.6px]">{name}</span><span data-node-label="Policy Section Description" className="block mt-3 text-[17px] leading-[1.75] [color:var(--omni-muted)]">{desc}</span></div>)}</div></div></div></div>;
    case "retail":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Industry Solutions Layout" className="grid grid-cols-[0.85fr_1.4fr] gap-12 max-[850px]:grid-cols-1 max-[850px]:gap-5"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">What we can build together</span><div data-node-label="Industry Service Rows" className="flex flex-col">{[{
                "name": "Creative & Marketing",
                "desc": "Product photography, launch videos, campaign variations, and lifecycle messaging.",
                "route": "creative"
              }, {
                "name": "Agents & Automation",
                "desc": "Product recommendations, order questions, lead routing, and human handoff.",
                "route": "agents"
              }, {
                "name": "Applications & Software",
                "desc": "Online stores, stock management, billing, customer portals, and reporting.",
                "route": "software"
              }].map(row => <div key={row.route} data-node-label="Industry Service Row" className="border-t [border-color:var(--omni-line)] py-7"><span data-node-label="Industry Service Name" className="block text-[27px] tracking-[-0.8px]">{row.name}</span><span data-node-label="Industry Service Detail" className="block mt-3 text-base leading-[1.6] [color:var(--omni-muted)]">{row.desc}</span><RouteAction data-node-label="Industry Service Action" to={row.route} className="flex items-center w-fit min-h-11 mt-3 text-sm font-medium cursor-pointer hover:underline underline-offset-4"><span data-node-label="Industry Service Action Label">Explore service ↗</span></RouteAction></div>)}</div></div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "hospitality":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Industry Solutions Layout" className="grid grid-cols-[0.85fr_1.4fr] gap-12 max-[850px]:grid-cols-1 max-[850px]:gap-5"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">What we can build together</span><div data-node-label="Industry Service Rows" className="flex flex-col">{[{
                "name": "Creative & Marketing",
                "desc": "Destination films, seasonal campaigns, multilingual content, and landing pages.",
                "route": "creative"
              }, {
                "name": "Agents & Automation",
                "desc": "Booking inquiries, appointment assistance, guest questions, and human handoff.",
                "route": "agents"
              }, {
                "name": "Applications & Software",
                "desc": "Booking platforms, guest portals, team dashboards, and integrations.",
                "route": "software"
              }].map(row => <div key={row.route} data-node-label="Industry Service Row" className="border-t [border-color:var(--omni-line)] py-7"><span data-node-label="Industry Service Name" className="block text-[27px] tracking-[-0.8px]">{row.name}</span><span data-node-label="Industry Service Detail" className="block mt-3 text-base leading-[1.6] [color:var(--omni-muted)]">{row.desc}</span><RouteAction data-node-label="Industry Service Action" to={row.route} className="flex items-center w-fit min-h-11 mt-3 text-sm font-medium cursor-pointer hover:underline underline-offset-4"><span data-node-label="Industry Service Action Label">Explore service ↗</span></RouteAction></div>)}</div></div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "realestate":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Industry Solutions Layout" className="grid grid-cols-[0.85fr_1.4fr] gap-12 max-[850px]:grid-cols-1 max-[850px]:gap-5"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">What we can build together</span><div data-node-label="Industry Service Rows" className="flex flex-col">{[{
                "name": "Creative & Marketing",
                "desc": "Property films, campaign imagery, launch campaigns, and audience strategy.",
                "route": "creative"
              }, {
                "name": "Agents & Automation",
                "desc": "Lead qualification, viewing appointments, document retrieval, and follow-ups.",
                "route": "agents"
              }, {
                "name": "Applications & Software",
                "desc": "Property websites, client portals, CRM workflows, and reporting.",
                "route": "software"
              }].map(row => <div key={row.route} data-node-label="Industry Service Row" className="border-t [border-color:var(--omni-line)] py-7"><span data-node-label="Industry Service Name" className="block text-[27px] tracking-[-0.8px]">{row.name}</span><span data-node-label="Industry Service Detail" className="block mt-3 text-base leading-[1.6] [color:var(--omni-muted)]">{row.desc}</span><RouteAction data-node-label="Industry Service Action" to={row.route} className="flex items-center w-fit min-h-11 mt-3 text-sm font-medium cursor-pointer hover:underline underline-offset-4"><span data-node-label="Industry Service Action Label">Explore service ↗</span></RouteAction></div>)}</div></div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "professional":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Industry Solutions Layout" className="grid grid-cols-[0.85fr_1.4fr] gap-12 max-[850px]:grid-cols-1 max-[850px]:gap-5"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">What we can build together</span><div data-node-label="Industry Service Rows" className="flex flex-col">{[{
                "name": "Creative & Marketing",
                "desc": "Positioning, brand films, campaign planning, and lead generation.",
                "route": "creative"
              }, {
                "name": "Agents & Automation",
                "desc": "Client intake, booking, internal knowledge assistants, and approvals.",
                "route": "agents"
              }, {
                "name": "Applications & Software",
                "desc": "Client portals, project tools, invoicing, and custom dashboards.",
                "route": "software"
              }].map(row => <div key={row.route} data-node-label="Industry Service Row" className="border-t [border-color:var(--omni-line)] py-7"><span data-node-label="Industry Service Name" className="block text-[27px] tracking-[-0.8px]">{row.name}</span><span data-node-label="Industry Service Detail" className="block mt-3 text-base leading-[1.6] [color:var(--omni-muted)]">{row.desc}</span><RouteAction data-node-label="Industry Service Action" to={row.route} className="flex items-center w-fit min-h-11 mt-3 text-sm font-medium cursor-pointer hover:underline underline-offset-4"><span data-node-label="Industry Service Action Label">Explore service ↗</span></RouteAction></div>)}</div></div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "growing":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Industry Solutions Layout" className="grid grid-cols-[0.85fr_1.4fr] gap-12 max-[850px]:grid-cols-1 max-[850px]:gap-5"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">What we can build together</span><div data-node-label="Industry Service Rows" className="flex flex-col">{[{
                "name": "Creative & Marketing",
                "desc": "Brand storytelling, product launches, campaign testing, and customer research.",
                "route": "creative"
              }, {
                "name": "Agents & Automation",
                "desc": "Support, lead qualification, follow-ups, and document processing.",
                "route": "agents"
              }, {
                "name": "Applications & Software",
                "desc": "Websites, mobile apps, business dashboards, and connected operations.",
                "route": "software"
              }].map(row => <div key={row.route} data-node-label="Industry Service Row" className="border-t [border-color:var(--omni-line)] py-7"><span data-node-label="Industry Service Name" className="block text-[27px] tracking-[-0.8px]">{row.name}</span><span data-node-label="Industry Service Detail" className="block mt-3 text-base leading-[1.6] [color:var(--omni-muted)]">{row.desc}</span><RouteAction data-node-label="Industry Service Action" to={row.route} className="flex items-center w-fit min-h-11 mt-3 text-sm font-medium cursor-pointer hover:underline underline-offset-4"><span data-node-label="Industry Service Action Label">Explore service ↗</span></RouteAction></div>)}</div></div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    case "enterprise":
      return <div data-node-label="Page Content" className="w-full min-w-0 [background-color:var(--omni-paper)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px] py-[72px] max-[700px]:py-10"><div data-node-label="Page Content Container" className="w-full max-w-[1320px] mx-auto"><div data-node-label="Industry Solutions Layout" className="grid grid-cols-[0.85fr_1.4fr] gap-12 max-[850px]:grid-cols-1 max-[850px]:gap-5"><span data-node-label="Content Heading" className="block font-light leading-[1.1] mb-8 text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">What we can build together</span><div data-node-label="Industry Service Rows" className="flex flex-col">{[{
                "name": "Creative & Marketing",
                "desc": "Campaign systems, multilingual content, creative variations, and performance views.",
                "route": "creative"
              }, {
                "name": "Agents & Automation",
                "desc": "Knowledge retrieval, multi-agent workflows, human approvals, and monitoring.",
                "route": "agents"
              }, {
                "name": "Applications & Software",
                "desc": "Role-based workspaces, system integrations, multi-location tools, and reporting.",
                "route": "software"
              }].map(row => <div key={row.route} data-node-label="Industry Service Row" className="border-t [border-color:var(--omni-line)] py-7"><span data-node-label="Industry Service Name" className="block text-[27px] tracking-[-0.8px]">{row.name}</span><span data-node-label="Industry Service Detail" className="block mt-3 text-base leading-[1.6] [color:var(--omni-muted)]">{row.desc}</span><RouteAction data-node-label="Industry Service Action" to={row.route} className="flex items-center w-fit min-h-11 mt-3 text-sm font-medium cursor-pointer hover:underline underline-offset-4"><span data-node-label="Industry Service Action Label">Explore service ↗</span></RouteAction></div>)}</div></div><div data-node-label="Project Conversation" className="flex items-center justify-between gap-6 border-t [border-color:var(--omni-line)] pt-9 mt-10 max-[700px]:flex-col max-[700px]:items-start"><span data-node-label="Project Conversation Heading" className="block font-light leading-[1.1] text-[44px] tracking-[-1.9px] max-[700px]:text-[32px] max-[700px]:tracking-[-1.3px] [color:var(--nura-ink)]">Have a project in mind?</span><RouteAction data-node-label="Page Action" to="contact-page" className="inline-flex w-fit min-h-12 items-center justify-center px-5 rounded-full text-sm font-medium [background-color:var(--nura-ink)] [color:var(--nura-white)] cursor-pointer transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--omni-spruce)]"><span data-node-label="Action Text" className="block leading-[1.35]">Start a conversation</span></RouteAction></div></div></div>;
    default:
      return null;
  }
}
function ContentPage({
  pageKey
}) {
  const page = sitePages[pageKey];
  const [ready, setReady] = useState(false);
  return <div className="w-full min-w-0 bg-[var(--omni-paper)]">
 <div className="bg-[var(--nura-ink)] text-[var(--nura-white)] px-[60px] max-[1100px]:px-10 max-[700px]:px-[22px]"><div className="max-w-[1320px] mx-auto"><SiteNavigation />
 <div className="pt-[56px] pb-[64px] max-[700px]:py-10"><span className="block text-sm">{page.name}</span>
 <h1 tabIndex={-1} className="max-w-[980px] whitespace-pre-line mt-5 text-[72px] font-light leading-[1.05] tracking-[-3.6px] max-[1000px]:text-[58px] max-[700px]:text-[40px] max-[700px]:tracking-[-1.8px] max-[700px]:whitespace-normal max-[350px]:text-[36px]">{page.title}</h1>
 <p className="max-w-[600px] mt-5 text-[18px] leading-[1.6] text-[var(--omni-light-copy)] max-[700px]:text-base">{page.intro}</p></div>
 </div></div>
 {pageKey === "contact-page" ? <div id="inquiry" data-node-label="Contact Form Section" className="px-[60px] py-[72px] max-[1100px]:px-10 max-[700px]:px-[22px] max-[700px]:py-10 [background-color:var(--omni-paper)] [color:var(--nura-ink)] [font-family:var(--omni-interface-font)]"><div data-node-label="Contact Layout" className="max-w-[1320px] mx-auto grid grid-cols-[0.7fr_1fr] gap-[88px] max-[900px]:grid-cols-1 max-[900px]:gap-8"><div data-node-label="Contact Brief" className="min-w-0 max-[900px]:hidden"><span data-node-label="Contact Brief Heading" className="block text-[32px] leading-[1.12] tracking-[-1.3px]">Start with the problem you want to solve.</span><span data-node-label="Contact Brief Description" className="block mt-5 text-base leading-[1.6] [color:var(--omni-muted)]">Tell us your goal, the tools your team uses, and your preferred timeline.</span><div data-node-label="Project Details Guide" className="flex flex-col gap-4 mt-8">{[["The goal", "What should improve for your customers or team?"], ["The scope", "Which services and systems are involved?"], ["The timing", "When would you like to begin?"]].map(([name, desc]) => <div key={name} data-node-label="Project Guide Item" className="border-t [border-color:var(--omni-line)] pt-4"><span data-node-label="Project Guide Heading" className="block text-base font-medium">{name}</span><span data-node-label="Project Guide Description" className="block text-base mt-2 leading-[1.6] [color:var(--omni-muted)]">{desc}</span></div>)}</div></div><ContactForm screen="home" embedded inquiryReady={ready} submitInquiry={event => {
          event.preventDefault();
          setReady(true);
        }} /></div></div> : <PageBody pageKey={pageKey} />}</div>;
}
export { sitePages, PageBody, ContentPage };
