export default defineNuxtRouteMiddleware((to) => {
  const allowedPrefixes = [
    '/',
    '/blog'
  ]

  const isAllowed = allowedPrefixes.some(prefix =>
    to.path === prefix || to.path.startsWith(prefix + '/')
  )

  if (
    to.path.startsWith('/_nuxt') ||
    to.path.startsWith('/api') ||
    to.path.endsWith('.xml') ||
    to.path.endsWith('.txt')
  ) {
    return
  }

  if (!isAllowed) {
    return navigateTo('/', { redirectCode: 301 })
  }
})
