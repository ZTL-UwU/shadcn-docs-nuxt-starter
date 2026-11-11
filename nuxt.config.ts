// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Stay in `.nuxt`. Nuxt 4 otherwise moves the build into `node_modules/.cache`
  // when `.nuxt` already exists, and unstorage then ignores that path, so the
  // production content database is empty.
  buildDir: '.nuxt',
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        name: 'English',
        language: 'en-US',
      },
    ],
  },
  compatibilityDate: '2024-07-06',
});
