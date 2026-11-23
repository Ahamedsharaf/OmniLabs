function httpsUrl(value: string | undefined): string | undefined {
  if (!value) return undefined;
  try { const url = new URL(value); return url.protocol === 'https:' ? url.href : undefined; }
  catch { return undefined; }
}
export const siteConfig = {
  calUrl: httpsUrl(import.meta.env.VITE_CAL_BOOKING_URL || 'https://cal.com/ahamedsharaf/30min'),
  siteUrl: httpsUrl(import.meta.env.VITE_SITE_URL || 'https://omnilabs.ahamedsaraf18.workers.dev')!,
  contactEndpoint: httpsUrl(import.meta.env.VITE_CONTACT_FORM_ENDPOINT) || (import.meta.env.VITE_CONTACT_FORM_ENDPOINT?.startsWith('/') && !import.meta.env.VITE_CONTACT_FORM_ENDPOINT.startsWith('//') ? import.meta.env.VITE_CONTACT_FORM_ENDPOINT : undefined),
  contactEmail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(import.meta.env.VITE_CONTACT_EMAIL || '') ? import.meta.env.VITE_CONTACT_EMAIL : undefined,
};
