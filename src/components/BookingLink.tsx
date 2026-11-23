import { siteConfig } from '../site/config';
export function BookingLink({className=''}:{className?:string}) {
  return siteConfig.calUrl ? <a className={className} href={siteConfig.calUrl} target="_blank" rel="noopener noreferrer">Book a call <span aria-hidden="true">↗</span><span className="sr-only"> (opens Cal.com in a new tab)</span></a> : <span className={className}>Booking will be available soon.</span>;
}
