import { defineConfig } from 'cf/config';
export default defineConfig({
  accountId: '245d47896c915ebccfc868f98fa43fe6',
  worker: {
    name: 'orsenlabs',
    compatibilityDate: '2026-11-23',
    assets: { htmlHandling: 'drop-trailing-slash', notFoundHandling: '404-page' },
  },
});
