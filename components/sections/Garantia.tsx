'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Shield } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Garantia() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.garantia-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.garantia-card',
            start: 'top 82%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 md:py-28 px-4 overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="garantia-card bg-green/5 border border-green/20 rounded-3xl p-8 md:p-12">
          <div className="w-20 h-20 rounded-full bg-green/10 border-2 border-green/30 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-green" />
          </div>

          <div className="inline-block bg-green text-navy font-heading font-black text-xs px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Garantía total
          </div>

          <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            30 días o{' '}
            <span className="text-green">te devuelvo el dinero</span>
          </h2>

          <p className="font-body text-white/70 text-lg leading-relaxed mb-6">
            Si en los primeros 30 días aplicas el sistema, sigues los módulos y
            no ves resultados concretos, te devuelvo el 100% sin preguntas.
          </p>

          <p className="font-body text-white/50 text-base leading-relaxed">
            No quiero tu dinero si el sistema no funciona para ti. Punto.
          </p>

          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="font-body text-white/40 text-sm">
              {/* TODO: agregar email de contacto para garantía */}
              Para solicitar garantía: <span className="text-white/60">hola@byjoseai.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
