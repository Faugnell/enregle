// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static'
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "obligationslegales.app",
      meta: [
        { name: "description", content: "Rappels, modèles et checklists pour tes obligations légales — simple, rapide, sans blabla." }
      ]
    }
  }
})
