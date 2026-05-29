import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function fadeUpOnScroll(
  targets: string | Element | Element[],
  options?: {
    y?: number
    duration?: number
    stagger?: number
    start?: string
  }
) {
  gsap.fromTo(
    targets,
    { opacity: 0, y: options?.y ?? 40 },
    {
      opacity: 1,
      y: 0,
      duration: options?.duration ?? 0.8,
      stagger: options?.stagger ?? 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: typeof targets === 'string' ? targets : undefined,
        start: options?.start ?? 'top 85%',
        toggleActions: 'play none none none',
      },
    }
  )
}

export function pinSection(
  trigger: string | Element,
  endTrigger?: string
) {
  ScrollTrigger.create({
    trigger,
    start: 'top top',
    end: endTrigger ?? 'bottom top',
    pin: true,
    pinSpacing: false,
  })
}

export { gsap, ScrollTrigger }
