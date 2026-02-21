// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Landing statique
  ssr: false,
  nitro: {
    preset: 'static'
  },

  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css', '~/assets/css/blog.css'],

  app: {
    head: {
      title: "EnRègle - obligationslegales.app",
      meta: [
        {
          name: "description",
          content: "Rappels, modèles et checklists pour tes obligations légales — simple, rapide, sans blabla."
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        {
          async: true,
          src: "https://plausible.io/js/pa-PZSUqmXf-c5MEcNDNgGLw.js"
        }
      ]
    }
  }
  sitemap: {
    siteUrl: 'https://obligationslegales.app',
    sources: [
      async () => {
        const { $content } = await import('#content/server')
        const articles = await $content('blog').find()

        return articles.map(article => ({
          loc: `/blog/${article._path.split('/').pop()}`,
          lastmod: article.updatedAt || article.date
        }))
      }
    ]
  }
})