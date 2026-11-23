import { useEffect, useId, useRef, useState } from 'react';
import { RouteAction } from './RouteAction';

const solutions = [
  ['AI Creative & Marketing', 'creative', 'Commercials, campaign strategy, product imagery, and marketing systems.'],
  ['AI Agents & Automation', 'agents', 'Customer assistants, connected workflows, and knowledge systems.'],
  ['Applications & Business Software', 'software', 'Websites, mobile applications, and software tailored to your operations.'],
] as const;

export function SolutionsDropdown({ className }: { className?: string }) {
  const id = useId();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const cancelClose = () => clearTimeout(closeTimer.current);
  const close = () => {
    cancelClose();
    setOpen(false);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!open) return;

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) {
        clearTimeout(closeTimer.current);
        setOpen(false);
      }
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape' || event.defaultPrevented) return;
      clearTimeout(closeTimer.current);
      setOpen(false);
      if (root.current?.contains(document.activeElement)) {
        event.preventDefault();
        trigger.current?.focus();
      }
    }

    document.addEventListener('pointerdown', dismissOutside);
    document.addEventListener('keydown', dismissOnEscape);
    return () => {
      document.removeEventListener('pointerdown', dismissOutside);
      document.removeEventListener('keydown', dismissOnEscape);
    };
  }, [open]);

  return (
    <div ref={root} className="solutions-disclosure" data-open={open}
      onPointerEnter={event => {
        if (event.pointerType !== 'mouse') return;
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={event => {
        if (event.pointerType !== 'mouse') return;
        cancelClose();
        closeTimer.current = setTimeout(() => {
          if (!root.current?.contains(document.activeElement)) setOpen(false);
        }, 180);
      }}
      onBlur={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}>
      <button type="button" ref={trigger} data-node-label="Header Navigation Link"
        className={`solutions-trigger ${className ?? ''}`} aria-controls={id} aria-expanded={open}
        onClick={() => {
          cancelClose();
          setOpen(previous => !previous);
        }}>
        Solutions
      </button>
      <div className="solutions-dropdown" id={id} inert={!open}>
        <div className="solutions-dropdown-inner">
          <RouteAction to="solutions" className="solutions-dropdown-overview" onClick={close}>
            Explore all solutions <span aria-hidden="true">↗</span>
          </RouteAction>
          <div className="solutions-dropdown-grid">
            {solutions.map(([name, route, description]) => (
              <RouteAction key={route} to={route} className="solutions-dropdown-link" onClick={close}>
                <span className="solutions-dropdown-name">{name} <span aria-hidden="true">↗</span></span>
                <span className="solutions-dropdown-description">{description}</span>
              </RouteAction>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
