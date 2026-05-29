'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const painPoints = [
  'Tienes el talento pero sigues esperando estar "listo"',
  'Abres la cámara y te congelas — no te ves profesional',
  'Inviertes horas grabando y el resultado no vale lo que cobras',
  'Ves a otros con menos talento conseguir marcas que te ignoran',
  'No sabes cómo usar la IA sin que "se note" que es IA',
  'Tienes contenido mediocre acumulado que no publica nadie',
]

export default function Dolor() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pain-card',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.pain-grid',
            start: 'top 80%',
          },
        }
      )
      gsap.fromTo(
        '.dolor-headline',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.dolor-headline',
            start: 'top 85%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Subtle red tint bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#0F1A2B] to-navy pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="dolor-headline text-center mb-16">
          <p className="font-body text-orange text-sm uppercase tracking-widest font-semibold mb-4">
            ¿Te suena familiar?
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            El problema no eres tú.{' '}
            <span className="text-white/40">Es el sistema viejo.</span>
          </h2>
          <p className="font-body text-white/60 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            El modelo de "grabar y rezar" ya no funciona. Los creadores que están
            ganando hoy tienen un sistema — no más talento.
          </p>
        </div>

        <div className="pain-grid grid grid-cols-1 md:grid-cols-2 gap-4">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="pain-card flex items-start gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mt-0.5">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <p className="font-body text-white/70 text-base leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        {/* Transition line */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-green/10 border border-green/20 rounded-2xl px-8 py-5">
            <p className="font-heading font-bold text-xl text-green">
              Eso termina hoy.
            </p>
            <p className="font-body text-white/60 text-sm mt-1">
              Hay un sistema. Y funciona.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
