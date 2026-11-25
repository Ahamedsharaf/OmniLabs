export const routes = [
  { id:'home', path:'/', title:'Orsen Labs | AI Systems for Enterprise', description:'Orsen Labs helps businesses grow and operate better through creative marketing, intelligent AI agents and custom business software.' },
  { id:'solutions', path:'/solutions', title:'Solutions — Orsen Labs', description:'Creative marketing, AI agents and custom software, built around your business.' },
  { id:'creative', path:'/solutions/creative-marketing', title:'AI Creative & Marketing — Orsen Labs', description:'AI commercials, brand films, product imagery, campaign strategy and marketing systems for your business.' },
  { id:'agents', path:'/solutions/agents-automation', title:'AI Agents & Automation — Orsen Labs', description:'Customer assistants, connected workflows, knowledge retrieval and automation with human oversight.' },
  { id:'software', path:'/solutions/business-software', title:'Applications & Business Software — Orsen Labs', description:'Websites, mobile apps and custom business software tailored to your operations.' },
  { id:'blog', path:'/blog', title:'Blog — Orsen Labs', description:'Ideas and perspectives on AI marketing, automation, and business software.' },
  { id:'portfolio', path:'/portfolio', title:'Portfolio — Orsen Labs', description:'Browse Orsen Labs’ creative video concepts and case study sections for AI agents, automation, and business software.' },
  { id:'workflow', path:'/workflow', title:'Our Workflow — Orsen Labs', description:'From first idea to working business: discover, design, build, review, launch and improve.' },
  { id:'industries', path:'/industries', title:'Industries — Orsen Labs', description:'Practical applications for retail, hospitality, real estate, professional services, growing businesses and enterprise teams.' },
  { id:'retail', path:'/industries/retail-ecommerce', title:'Retail & E-commerce — Orsen Labs', description:'Connect product content, customer support and retail operations.' },
  { id:'hospitality', path:'/industries/hospitality-travel', title:'Hospitality & Travel — Orsen Labs', description:'Connect discovery, bookings and service across the guest journey.' },
  { id:'realestate', path:'/industries/real-estate', title:'Real Estate — Orsen Labs', description:'Give prospects clearer information and teams a connected sales workflow.' },
  { id:'professional', path:'/industries/professional-services', title:'Professional Services — Orsen Labs', description:'Bring client communication, internal knowledge and delivery together.' },
  { id:'growing', path:'/industries/growing-businesses', title:'Growing Businesses — Orsen Labs', description:'Start with a focused problem and connect more of your business as you grow.' },
  { id:'enterprise', path:'/industries/enterprise-teams', title:'Enterprise Teams — Orsen Labs', description:'Plan AI adoption around business objectives, existing systems and human oversight.' },
  { id:'work-with-us', path:'/work-with-us', title:'Work With Us — Orsen Labs', description:'Plan a defined project or ongoing support around your business needs.' },
  { id:'about', path:'/about', title:'About Orsen Labs', description:'One team across creative production, AI automation and custom business software.' },
  { id:'contact-page', path:'/contact', title:'Contact — Orsen Labs', description:'Share what you want to build or improve, or book a call with Orsen Labs.' },
  { id:'privacy', path:'/privacy-policy', title:'Privacy Policy — Orsen Labs', description:'How project inquiry information may be used. Draft policy supplied for review.' },
  { id:'terms', path:'/website-terms', title:'Website Terms — Orsen Labs', description:'Website information, project agreements and responsible use. Draft terms supplied for review.' },
];
export function routeForPath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return routes.find(r => r.path === clean);
}
export function routeHref(target, currentPath = '/') {
  const [id, anchor] = target.split(':');
  const route = id === 'offer' ? {path:currentPath} : routes.find(r => r.id === id);
  return route ? route.path + (anchor ? '#' + encodeURIComponent(anchor) : '') : undefined;
}
