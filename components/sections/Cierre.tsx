'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Cierre() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cierre-content > *',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cierre-content',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-[#080F1C] to-[#060C17] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-green/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="cierre-content space-y-8">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            El momento de actuar{' '}
            <span className="text-gradient-green">es ahora.</span>
          </h2>

          <p className="font-body text-white/70 text-xl leading-relaxed">
            Cada día que esperas es un día que otro creador — con menos talento
            que tú — consigue la marca que podría ser tuya.
          </p>

          <p className="font-body text-white/70 text-xl leading-relaxed">
            La diferencia no es suerte. No es talento. Es tener el sistema
            correcto y decidir activarlo hoy.
          </p>

          <div className="bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-6">
            <p className="font-heading font-bold text-2xl text-white mb-2">
              En 72 horas puedes tener tu primer video UGC con IA listo.
            </p>
            <p className="font-body text-white/60 text-base">
              No en 6 meses. No "cuando tengas tiempo". Esta semana.
            </p>
          </div>

          {/* Final CTA */}
          {/* TODO: reemplazar href="#" con URL final de Hotmart/Stripe */}
          <a
            href="#precio"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('precio')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-3 bg-orange hover:bg-orange/90 text-white font-heading font-black text-xl px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 glow-orange"
          >
            <Zap className="w-6 h-6" />
            ENTRAR AL SISTEMA — $29 USD
          </a>

          <p className="font-body text-white/35 text-sm">
            Garantía de 30 días · Pago único · Acceso inmediato
          </p>
        </div>
      </div>
    </section>
  )
}
