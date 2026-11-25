import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { RouteAction } from './RouteAction';
import { siteConfig } from '../site/config';
import { portfolioCollections } from '../site/portfolio-collections';

type MenuLink = readonly [label: string, to: string, description: string];
type Section = {
  label: string;
  to: string;
  links: readonly MenuLink[];
  disclosure?: boolean;
};

const sections: readonly Section[] = [
  {
    label: 'Solutions',
    to: 'solutions',
    disclosure: true,
    links: [
      ['AI Creative & Marketing', 'creative', 'Commercials, campaign strategy, product imagery, and marketing systems.'],
      ['AI Agents & Automation', 'agents', 'Customer assistants, connected workflows, and knowledge systems.'],
      ['Applications & Business Software', 'software', 'Websites, mobile applications, and software tailored to your operations.'],
    ],
  },
  {
    label: 'Projects',
    to: 'portfolio',
    links: portfolioCollections.map(({ title, id, format }) => [title, 'portfolio:' + id, format]),
  },
  {
    label: 'Industries',
    to: 'industries',
    links: [
      ['Retail & E-commerce', 'retail', 'Connect product content, customer support, and retail operations.'],
      ['Hospitality & Travel', 'hospitality', 'Connect discovery, bookings, and service across the guest journey.'],
      ['Real Estate', 'realestate', 'Give prospects clearer information and teams a connected sales workflow.'],
      ['Professional Services', 'professional', 'Bring client communication, internal knowledge, and delivery together.'],
      ['Growing Businesses', 'growing', 'Connect more of your business as your team grows.'],
      ['Enterprise Teams', 'enterprise', 'Plan AI adoption around business objectives and existing systems.'],
    ],
  },
  {
    label: 'Blog',
    to: 'blog',
    links: [
      ['AI and automation', 'blog:ai-automation', 'Practical notes on AI agents and business automation.'],
      ['Marketing and creative', 'blog:marketing-creative', 'Ideas for campaigns, content, and creative work.'],
      ['Business software', 'blog:business-software', 'Perspectives on useful software for growing teams.'],
    ],
  },
\n];

const contact: Section = {
  label: 'Let’s talk',
  to: 'contact-page',
  links: [
    ['Share a project brief', 'contact-page:inquiry', 'Tell us about your project, goals, and timing.'],
  ],
};

export function HeaderNavigation() {
  const id = useId();
  const [active, setActive] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const focusOnOpen = useRef<string | null>(null);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!active) return;

    const trigger = document.getElementById(`${id}-${active}-trigger`);
    const disclosure = trigger?.parentElement;
    if (focusOnOpen.current === active) {
      focusOnOpen.current = null;
      disclosure?.querySelector<HTMLElement>('.header-dropdown-panel a')?.focus();
    }

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !disclosure?.contains(event.target)) setActive(null);
    }

    function dismissOnEscape(event: globalThis.KeyboardEvent) {
      if (event.key !== 'Escape' || event.defaultPrevented) return;
      setActive(null);
      if (disclosure?.contains(document.activeElement)) {
        event.preventDefault();
        trigger?.focus({ preventScroll: true });
      }
    }

    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('keydown', dismissOnEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('keydown', dismissOnEscape);
    };
  }, [active, id]);

  function renderSection({ label, to, links, disclosure }: Section) {
    const isContact = to === contact.to;
    const booking = isContact ? siteConfig.calUrl : undefined;
    const open = active === to;
    const panelId = `${id}-${to}-panel`;
    const close = () => setActive(current => current === to ? null : current);
    const triggerProps = {
      id: `${id}-${to}-trigger`,
      className: isContact ? 'header-dropdown-trigger header-contact' : 'header-dropdown-trigger header-nav-link',
      'data-node-label': isContact ? 'Masthead Contact Button' : 'Header Navigation Link',
      'aria-expanded': open,
      'aria-controls': panelId,
      'aria-keyshortcuts': 'ArrowDown',
      onKeyDown(event: KeyboardEvent<HTMLElement>) {
        if (event.key !== 'ArrowDown') return;
        event.preventDefault();
        clearTimeout(closeTimer.current);
        if (open) {
          document.getElementById(panelId)?.querySelector('a')?.focus();
        } else {
          focusOnOpen.current = to;
          setActive(to);
        }
      },
    };

    return (
      <div key={to} className="header-dropdown-disclosure" data-nav-menu={to} data-open={open}
        onPointerEnter={event => {
          if (event.pointerType !== 'mouse') return;
          clearTimeout(closeTimer.current);
          focusOnOpen.current = null;
          setActive(to);
        }}
        onPointerLeave={event => {
          if (event.pointerType !== 'mouse' || !open) return;
          clearTimeout(closeTimer.current);
          const element = event.currentTarget;
          closeTimer.current = setTimeout(() => {
            if (!element.contains(document.activeElement)) close();
          }, 180);
        }}
        onBlur={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) close();
        }}>
        {disclosure ? (
          <button {...triggerProps} type="button" onClick={() => {
            clearTimeout(closeTimer.current);
            setActive(current => current === to ? null : to);
          }}>{label}</button>
        ) : (
          <RouteAction {...triggerProps} to={to} onClick={close}>{label}</RouteAction>
        )}
        <div className="header-dropdown-panel" id={panelId} inert={!open}>
          <div className="header-dropdown-inner">
            <div className="header-dropdown-content">
              <div className="header-dropdown-main">
                <div className="header-dropdown-grid">
                  {links.map(([name, target, description]) => (
                    <RouteAction key={target} to={target} className="header-dropdown-link" onClick={close}>
                      <span className="header-dropdown-name">{name}</span>
                      <span className="header-dropdown-description">{description}</span>
                    </RouteAction>
                  ))}
                  {booking && <a href={booking} target="_blank" rel="noopener noreferrer" className="header-dropdown-link"
                    onClick={() => {
                      document.getElementById(triggerProps.id)?.focus({ preventScroll: true });
                      close();
                    }}>
                    <span className="header-dropdown-name">Book a call</span>
                    <span className="header-dropdown-description">Choose a time for a 30-minute call on Cal.com.</span>
                    <span className="sr-only"> Opens in a new tab.</span>
                  </a>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>
    <nav data-node-label="Primary Navigation Links" className="header-primary" aria-label="Primary">
      {sections.map(renderSection)}
    </nav>
    {renderSection(contact)}
  </>;
}
