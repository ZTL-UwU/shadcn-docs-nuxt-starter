// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
    vite: {
    build: {
      sourcemap: false,
      chunkSizeWarningLimit: 1500,
    },
    optimizeDeps: {
      include: ['dayjs', '@braintree/sanitize-url', 'mermaid'],
      exclude: ['shadcn-vue'],
      esbuildOptions: {
        target: 'esnext',
      },
    },
    resolve: {
      dedupe: ['dayjs'],
    },
  },
  compatibilityDate: '2024-07-06',
});
