// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Landing statique
  ssr: false,
  nitro: { preset: 'static' },

  modules: ['@nuxt/ui', '@nuxt/content', '@nuxtjs/sitemap'],
  css: ['~/assets/css/main.css', '~/assets/css/blog.css'],

  site: {
    url: 'https://obligationslegales.app',
    name: 'EnRègle'
  },

  app: {
    head: {
      title: "EnRègle - obligationslegales.app",
      meta: [
        {
          name: "description",
          content:
            "Rappels, modèles et checklists pour tes obligations légales — simple, rapide, sans blabla."
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        { async: true, src: "https://plausible.io/js/pa-PZSUqmXf-c5MEcNDNgGLw.js" }
      ]
    }
  },

  sitemap: {
    urls: ['/', '/blog'],
    sources: [
      async () => {
        const { queryCollection } = await import('#content/server')
        const articles = await queryCollection('blog').all()

        return articles
          .filter((a: any) => a?._path)
          .map((a: any) => ({
            loc: a._path,
            lastmod: a.updatedAt || a.date
          }))
      }
    ]
  }
})