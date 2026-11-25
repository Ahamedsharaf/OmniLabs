import { RouteAction } from './RouteAction';
import { primaryNavigation } from '../site/primary-navigation';
export function MobileMenu() {
  return <div className="mobile-menu">
    <div className="mobile-menu-head">
      <RouteAction to="home" aria-label="Orsen Labs home"><img src="/images/orsen-logo-black-640-v1.webp" width="640" height="111" alt="Orsen Labs"/></RouteAction>
      <RouteAction to="dismiss" className="circle-button" data-dialog-close aria-label="Close menu"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></RouteAction>
    </div>
    <nav aria-label="Mobile navigation">
      {primaryNavigation.map(({ label, to }) => (
        <RouteAction className="mobile-major mobile-row" key={to} to={to}>
          <span className="header-nav-label">{label}</span>
        </RouteAction>
      ))}
    </nav>
    <RouteAction to="contact" className="pill pill-dark mobile-contact">Let’s talk</RouteAction>
  </div>;
}
