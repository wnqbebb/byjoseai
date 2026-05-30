'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionTransitionOverlay from '@/components/ui/SectionTransitionOverlay'


gsap.registerPlugin(ScrollTrigger)

interface LenisContextType {
  lenis: Lenis | null
  scrollTo: (target: string | number | HTMLElement, options?: any) => void
  isTransitioning: boolean
  transitionTo: (target: string) => void
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
  isTransitioning: false,
  transitionTo: () => {},
})

export const useLenis = () => useContext(LenisContext)

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })

    setLenisInstance(lenis)

    lenis.on('scroll', ScrollTrigger.update)

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
      setLenisInstance(null)
    }
  }, [])

  const scrollTo = (target: string | number | HTMLElement, options?: any) => {
    if (lenisInstance) {
      lenisInstance.scrollTo(target, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        ...options,
      })
    } else {
      if (typeof target === 'string') {
        const id = target.replace('#', '')
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const transitionTo = (target: string) => {
    if (isTransitioning) return
    setIsTransitioning(true)

    // Wait until the curtain covers the entire screen (around 420ms)
    setTimeout(() => {
      if (lenisInstance) {
        // Jump immediately to the section, hidden behind the curtain
        lenisInstance.scrollTo(target, { immediate: true })
      } else {
        const id = target.replace('#', '')
        document.getElementById(id)?.scrollIntoView()
      }
    }, 420)

    // Wait for the curtain transition to complete and fade out
    setTimeout(() => {
      setIsTransitioning(false)
    }, 950)
  }

  return (
    <LenisContext.Provider
      value={{ lenis: lenisInstance, scrollTo, isTransitioning, transitionTo }}
    >
      {children}
      <SectionTransitionOverlay isTransitioning={isTransitioning} />
    </LenisContext.Provider>
  )
}


