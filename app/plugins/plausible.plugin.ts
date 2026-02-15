import { init } from "@plausible-analytics/tracker"

type PlausibleFn = ((event: string, options?: any) => void) & {
  q?: any[]
}

declare global {
  interface Window {
    plausible?: PlausibleFn
  }
}

export default defineNuxtPlugin(() => {
  init({ domain: "obligationslegales.app" })

  const router = useRouter()

  const fire = (event: string, options?: any) => {
    if (typeof window === "undefined") return

    // crée la fonction + queue si pas encore dispo
    const p: PlausibleFn =
      window.plausible ||
      (((...args: any[]) => {
        ;(p.q = p.q || []).push(args)
      }) as PlausibleFn)

    window.plausible = p
    p(event, options)
  }

  // pageview initial + SPA
  fire("pageview")
  router.afterEach(() => fire("pageview"))

  return {
    provide: {
      plausibleEvent: (name: string, props?: Record<string, any>) =>
        fire(name, props ? { props } : undefined),
    },
  }
})
