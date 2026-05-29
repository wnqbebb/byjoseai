'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { X, Check, Smartphone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const rows = [
  {
    before: 'Grabas horas. Sale 1 video mediocre.',
    after: '1 selfie → avatar ilimitado en 3 pasos.',
  },
  {
    before: 'Las marcas te ignoran o te ofrecen $20.',
    after: 'Portfolio premium que justifica $150–$500/video.',
  },
  {
    before: 'Dependes de luz, cámara y tu energía del día.',
    after: 'Produces contenido aunque estés de viaje o enfermo.',
  },
  {
    before: 'Envías 30 emails fríos. Cero respuestas.',
    after: 'Sistema de outreach que atrae marcas que SÍ pagan.',
  },
  {
    before: 'Un cliente a la vez, por proyecto.',
    after: 'Múltiples clientes con el mismo avatar escalable.',
  },
]

export default function Transformacion() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.transform-row',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.transform-table',
            start: 'top 75%',
          },
        }
      )
      gsap.fromTo(
        '.iphone-mockup',
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.iphone-mockup',
            start: 'top 80%',
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
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/30 to-navy pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-orange text-sm uppercase tracking-widest font-semibold mb-4">
            Tu transformación
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Antes vs. Después
          </h2>
          <p className="font-body text-white/60 text-lg mt-4 max-w-xl mx-auto">
            Esto es lo que cambia cuando tienes el sistema correcto.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-10 items-start">
          {/* Before/After table */}
          <div className="transform-table overflow-hidden rounded-2xl border border-white/10">
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="bg-red-500/10 border-b border-r border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-400" />
                  <span className="font-heading font-bold text-red-400 text-sm uppercase tracking-wide">
                    Sin sistema
                  </span>
                </div>
              </div>
              <div className="bg-green/10 border-b border-white/10 px-6 py-4">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green" />
                  <span className="font-heading font-bold text-green text-sm uppercase tracking-wide">
                    Con Modo Creador
                  </span>
                </div>
              </div>
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={i}
                className="transform-row grid grid-cols-2 border-b border-white/[0.06] last:border-0"
              >
                <div className="px-6 py-5 border-r border-white/[0.06] bg-white/[0.01]">
                  <p className="font-body text-white/50 text-sm leading-relaxed">
                    {row.before}
                  </p>
                </div>
                <div className="px-6 py-5 bg-green/[0.03]">
                  <p className="font-body text-white/85 text-sm leading-relaxed font-medium">
                    {row.after}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* iPhone mockup */}
          <div className="iphone-mockup flex justify-center lg:justify-start">
            <div className="relative">
              {/* Phone shell */}
              <div className="w-[220px] h-[460px] bg-navy-card border-2 border-white/20 rounded-[40px] shadow-2xl flex flex-col items-center justify-start overflow-hidden">
                {/* Notch */}
                <div className="w-20 h-6 bg-navy rounded-b-2xl mt-2 flex items-center justify-center">
                  <div className="w-8 h-1.5 bg-white/20 rounded-full" />
                </div>

                {/* TODO: PENDIENTE — mockup iPhone con contenido UGC real de José */}
                <div className="flex-1 w-full flex flex-col items-center justify-center gap-3 px-4">
                  <Smartphone className="w-10 h-10 text-white/20" />
                  <p className="text-white/30 text-xs text-center font-body leading-relaxed">
                    MOCKUP iPhone
                    <br />
                    Video UGC final
                    <br />
                    <span className="text-white/20">390×844px</span>
                  </p>
                </div>

                {/* Bottom bar */}
                <div className="w-full bg-navy-card border-t border-white/10 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 rounded-full bg-green/20" />
                    <div className="h-1.5 flex-1 mx-3 bg-white/10 rounded-full">
                      <div className="h-full w-3/4 bg-green rounded-full" />
                    </div>
                    <span className="text-white/40 text-xs">UGC</span>
                  </div>
                </div>
              </div>

              {/* Floating labels */}
              <div className="absolute -right-4 top-16 bg-green text-navy font-heading font-black text-xs px-3 py-2 rounded-xl shadow-lg">
                ✓ Sin grabar
              </div>
              <div className="absolute -left-6 bottom-20 bg-yellow text-navy font-heading font-black text-xs px-3 py-2 rounded-xl shadow-lg rotate-[-3deg]">
                $150–500/video
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
