export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'km', class: 'light' },
      title: 'Eternal Khmer Photography | ការថតរូប Pre-Wedding ដ៏ប្រណិត',
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
  
  }
})
