export default defineNuxtConfig({
  // CSS
  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],

  // App Configuration
  app: {
    head: {
      htmlAttrs: { lang: 'km', class: 'light' },
      title: 'Pre-Wedding | ដ៏ប្រណិត',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700&family=Hanuman:wght@300;400;700;900&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        }
      ],
      script: [
        {
          src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries'
        }
      ],
    }
  },

  // Router Configuration
  router: {
    options: {
      hashMode: false,
      linkActiveClass: 'active',
      linkExactActiveClass: 'exact-active',
    }
  },

  // Route Rules
  routeRules: {
    // Static pages - pre-render at build time
    '/': { prerender: true },
    '/gallery': { prerender: true },
    '/services': { prerender: true },
    '/contact': { prerender: true },
  }
})
