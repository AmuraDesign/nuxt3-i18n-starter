// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 0 }],
    configPath: 'tailwind.config.ts',
    exposeConfig: false,
    config: {},
    viewer: true,
  },

  i18n: {
    locales: [
      { code: 'de', language: 'de-DE', file: 'de.json', name: 'Deutsch' },
      { code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
      { code: 'fr', language: 'fr-FR', file: 'fr.json', name: 'Français' },
      { code: 'it', language: 'it-IT', file: 'it.json', name: 'Italiano' }
    ],
    defaultLocale: 'de',
    strategy: 'prefix',
    langDir: 'locales/',
    vueI18n: './i18n.config.ts',
    customRoutes: 'config',
    pages: {
      about: {
        de: '/ueber-uns',
        en: '/about',
        fr: '/a-propos',
        it: '/chi-siamo'
      },
      contact: {
        de: '/kontakt',
        en: '/contact',
        fr: '/contact',
        it: '/contatto'
      }
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
})