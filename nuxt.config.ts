export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'km', class: 'light' },
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kantumruy+Pro&family=Hanuman&display=swap'
        }
      ],
      script: [
        {
          src: 'https://cdn.tailwindcss.com',
          defer: true
        }

      ]
    }
  }
})
