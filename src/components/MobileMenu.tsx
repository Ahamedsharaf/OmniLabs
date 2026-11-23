import { RouteAction } from './RouteAction';
export function MobileMenu() {
  return <div className="mobile-menu">
    <div className="mobile-menu-head">
      <RouteAction to="home" aria-label="Omni Labs home"><img src="/images/omni-logo-black.webp" width="2048" height="573" alt="Omni Labs"/></RouteAction>
      <RouteAction to="dismiss" className="circle-button" aria-label="Close menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></RouteAction>
    </div>
    <nav aria-label="Mobile navigation">
      <RouteAction to="solutions" className="mobile-major">Solutions</RouteAction>
      <div className="mobile-service-links">
        <RouteAction to="creative">AI Creative &amp; Marketing</RouteAction>
        <RouteAction to="agents">AI Agents &amp; Automation</RouteAction>
        <RouteAction to="software">Applications &amp; Business Software</RouteAction>
      </div>
      {[['Portfolio','portfolio'],['Workflow','workflow'],['Industries','industries'],['Work with us','work-with-us'],['About','about']].map(([name,to])=><RouteAction className="mobile-major mobile-row" key={to} to={to}>{name}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></RouteAction>)}
    </nav>
    <RouteAction to="contact" className="pill pill-dark mobile-contact">Let’s talk <span aria-hidden="true">↗</span></RouteAction>
  </div>;
}
