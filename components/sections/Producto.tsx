'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Package } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Producto() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.producto-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.producto-card',
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
      id="producto"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Green glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-green/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="font-body text-green text-sm uppercase tracking-widest font-semibold mb-4">
          Presentando
        </p>
        <h2 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
          Sistema{' '}
          <span className="text-gradient-green">Modo Creador</span>
        </h2>
        <p className="font-body text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-16">
          No es un curso de IA genérico. Es el sistema exacto que José usa para
          producir, cobrar y escalar — estructurado en 9 módulos para que vayas
          de cero a tu primera marca pagada.
        </p>

        <div className="producto-card bg-navy-card border border-green/20 rounded-3xl p-8 md:p-12 text-left glow-green">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">

            {/* Product visual placeholder */}
            <div className="flex-shrink-0">
              {/* TODO: PENDIENTE — mockup del producto (laptop/tablet con la plataforma) */}
              <div className="placeholder-box w-64 h-40 rounded-2xl">
                <Package className="w-10 h-10 text-white/20" />
                <p className="text-center text-xs px-4 leading-relaxed">
                  MOCKUP PRODUCTO
                  <br />
                  <span className="text-white/20">512×320px</span>
                </p>
              </div>
            </div>

            {/* Product details */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green/10 border border-green/30 text-green text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  Curso Digital
                </span>
                <span className="bg-orange/10 border border-orange/30 text-orange text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  Acceso inmediato
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-3xl text-white mb-3">
                9 módulos. Todo lo que necesitas.
              </h3>
              <p className="font-body text-white/60 text-base leading-relaxed mb-6">
                Desde cómo generar tu primer avatar con IA hasta cómo contactar
                a una marca y cobrar tu primer contrato UGC. Sin partes que
                faltan. Sin teoría sin aplicación.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  '9 módulos en video',
                  'Prompts probados en producción',
                  'Plantillas listas para usar',
                  'Comunidad privada',
                  'Actualizaciones de por vida',
                  'Acceso inmediato al pagar',
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-white/70 text-sm font-body"
                  >
                    <span className="text-green text-base">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
