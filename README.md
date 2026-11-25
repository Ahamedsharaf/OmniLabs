# Omni Labs

Production marketing website built from the supplied Wonder export, its desktop,
tablet and mobile artboards, and the separately supplied photographs and logos.

Live: https://omnilabs.ahamedsaraf18.workers.dev

## Run and check

Use Node 24.22 or newer in the supported Node 24 line.

```sh
npm ci
npm run dev
npm run build
npm test
```

`npm run build` type-checks the application, builds the client, and pre-renders
all 19 routes plus the 404 page. Deploy the resulting `dist` directory.
`npm run preview` serves the built site locally.

## Editing

- `src/design/`: the approved Wonder sections, split into shared React modules.
- `src/design/wonder.css`: the export's original compiled design tokens/utilities.
- `src/design/artboard-fidelity.css`: mobile/tablet values from the separate artboards.
- `src/styles.css`: interactive controls, accessibility and production corrections.
- `src/motion.css`, `src/components/usePageMotion.ts`: hero type entrance, project panel and scroll motion.
- `src/site/routes.mjs`: URLs, document titles and descriptions.
- `src/site/assets.json`, `public/images/`: supplied imagery and responsive variants.
- `src/components/ContactForm.tsx`: validated inquiry preparation and optional delivery.

The generated design modules are committed and do not require the original
archives to build. The import scripts are provenance tools; running them again
requires the original reference directory and reapplying subsequent refinements.

## Booking and inquiry delivery

The owner supplied `https://cal.com/ahamedsharaf/30min`. Booking links open that
Cal.com event in a new tab. No booking account, embedded tracker or local booking
backend is created by this website.

Booking is configurable through `VITE_CAL_BOOKING_URL` or `src/site/config.ts`.

No inquiry delivery endpoint or business email was supplied. The forms validate
and review details in page memory, explicitly state that nothing was sent, and
offer the supplied booking link. They do not save inquiries in local storage.
To enable delivery, configure `VITE_CONTACT_FORM_ENDPOINT` with a tested HTTPS
JSON endpoint (or a same-origin path). It must accept POST fields `name`, `email`,
`company`, `service`, `details`, handle abuse/rate limits and CORS where needed,
and return a non-2xx response if it did not accept the inquiry. The review gains
an explicit Send inquiry action only when configured. Test real delivery before
describing messages as delivered. No endpoint or mail credentials are bundled.

Every `VITE_` variable is public build-time configuration. Put server credentials
in the endpoint's secret store, never in these variables or source files.

## Deployment

The initial site was deployed through the connected Cloudflare account as a
Worker with Static Assets, with no databases or paid add-ons. It uses
`drop-trailing-slash` HTML handling and a real 404 page. Deep links have their own
pre-rendered HTML documents; serving them does not depend on a client router fallback.

The pinned Cloudflare CLI configuration is in `cloudflare.config.ts`.
When using the CLI from your machine, authenticate to the same account first:

```sh
npx cf auth login
npm run deploy
```

The build output and CLI configuration were also checked with
`npx cf deploy ./dist --dry-run`. This project uses `cf`, with no Wrangler config.
Cloudflare Workers Builds tracks `codex/omnilabs-wonder-website` for production.
Pushes to that branch run `npm run build && npm test` and publish the passing
build to `orsenlabs` using `npx --no-install cf deploy ./dist`. GitHub Actions
also runs the build and tests. Check Cloudflare Workers & Pages → orsenlabs →
Builds for deployment status and logs.

For a custom domain, attach the confirmed domain to the Worker, set
`VITE_SITE_URL` and rebuild so canonical URLs and the sitemap use that domain.

## Source limitations

- The 12 portfolio entries are supplied concept posters. No video files were
  attached. Preview buttons explain this and do not simulate playback or client results.
- ABC Favorit and Inter Display font files were not supplied. The original
  export's Inter fallback is self-hosted. Inter and IBM Plex Mono are subsetted
  WOFF2 fonts; their OFL notices are included in `public/fonts`.
- The supplied Privacy Policy and Website Terms explicitly identify themselves
  as drafts. Their text is retained without inventing a legal entity or contact address.
- See `docs/implementation-report.md` for the inventory, design checks and handoff.
