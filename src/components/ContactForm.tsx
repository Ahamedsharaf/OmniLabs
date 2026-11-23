import { useId, useRef, useState, useEffect, type FormEvent } from 'react';
import { siteConfig } from '../site/config';
import { BookingLink } from './BookingLink';
import { RouteAction } from './RouteAction';
type Inquiry={name:string;email:string;company:string;service:string;details:string};
type Props={screen?:string;embedded?:boolean;inquiryReady?:boolean;submitInquiry?:unknown};
const services:{[key:string]:string}={creative:'AI Creative & Marketing',agents:'AI Agents & Automation',software:'Applications & Business Software'};
export function ContactForm({screen='home',embedded=false}:Props) {
  const id=useId(), form=useRef<HTMLFormElement>(null),reviewRef=useRef<HTMLElement>(null);
  const [review,setReview]=useState<Inquiry|null>(null);
  const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle');
  useEffect(()=>{if(review)reviewRef.current?.focus({preventScroll:true});},[review]);
  function prepare(event:FormEvent<HTMLFormElement>) {
    event.preventDefault(); const data=new FormData(event.currentTarget);
    setReview(Object.fromEntries(['name','email','company','service','details'].map(k=>[k,String(data.get(k)||'').trim()])) as Inquiry);setStatus('idle');
  }
  async function send() {
    if(!siteConfig.contactEndpoint || !review || status==='sending')return;
    setStatus('sending');
    try {
      const response=await fetch(siteConfig.contactEndpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(review),signal:AbortSignal.timeout(15000)});
      if(!response.ok)throw new Error('Delivery failed');setStatus('sent');
    } catch {setStatus('error');}
  }
  return <form ref={form} className={`inquiry-form ${embedded?'inquiry-embedded':''}`} onSubmit={prepare}>
    {!embedded && <div className="inquiry-head"><h2 id="contact-dialog-title">Start a conversation.</h2><p>Tell us what you’re working on and where you could use our help.</p><RouteAction to="dismiss" className="circle-button inquiry-close" aria-label="Close contact form"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></RouteAction></div>}
    <div className="inquiry-fields">
      <div className="inquiry-identity">
        <label htmlFor={`${id}-name`}>Name<input id={`${id}-name`} name="name" placeholder={embedded?'Your name':'Full name'} autoComplete="name" required maxLength={160}/></label>
        <label htmlFor={`${id}-email`}>Work email<input id={`${id}-email`} name="email" type="email" placeholder={embedded?'you@company.com':'Work email address'} autoComplete="email" required maxLength={254}/></label>
      </div>
      {embedded && <label htmlFor={`${id}-company`}>Company<input id={`${id}-company`} name="company" placeholder="Company name" autoComplete="organization" maxLength={200}/></label>}
      <label htmlFor={`${id}-service`}>{embedded?'Service':'I’m interested in'}<select id={`${id}-service`} name="service" defaultValue={Object.hasOwn(services,screen)?screen:''}><option value="">{embedded?'Choose a service':'Choose a solution'}</option>{Object.entries(services).map(([key,name])=><option key={key} value={key}>{name}</option>)}</select></label>
      <label htmlFor={`${id}-details`}>Project details<textarea id={`${id}-details`} name="details" placeholder="What would you like to build or improve?" rows={4} required maxLength={8000}/></label>
    </div>
    <div className="inquiry-actions"><button type="submit" className="pill pill-dark">Review inquiry <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"/></svg></button><BookingLink className="booking-link"/>{siteConfig.contactEmail&&<a className="booking-link" href={`mailto:${siteConfig.contactEmail}`}>Email us</a>}</div>
    {!siteConfig.contactEndpoint && <p className="delivery-note">Online inquiry delivery is not connected yet. You can review your details or book a call.</p>}
    {review && <section className="inquiry-review" ref={reviewRef} tabIndex={-1} aria-label="Inquiry review"><h3>Review your inquiry</h3><dl>{[['Name',review.name],['Work email',review.email],['Company',review.company],['Service',services[review.service]||'To discuss'],['Project',review.details]].filter(([,v])=>v).map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
      <button type="button" className="text-link" onClick={()=>{setReview(null);setStatus('idle');form.current?.querySelector<HTMLInputElement>('input')?.focus();}}>Edit details</button>
      {siteConfig.contactEndpoint && status!=='sent' && <button type="button" className="pill pill-dark" disabled={status==='sending'} onClick={send}>{status==='sending'?'Sending…':'Send inquiry'}</button>}
      {status==='sent' && <p role="status">Your inquiry was accepted by the connected service.</p>}
      {status==='error' && <p role="alert">Your inquiry could not be sent. Please try again or book a call.</p>}
      {!siteConfig.contactEndpoint && <p role="status">Nothing has been sent. Your details remain in this page.</p>}
    </section>}
  </form>;
}
