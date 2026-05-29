'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Espejo() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.espejo-content > *',
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.espejo-content',
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
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-green/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="espejo-content space-y-6">
          <p className="font-body text-green text-sm uppercase tracking-widest font-semibold">
            La verdad que nadie te dijo
          </p>

          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            No es falta de talento.
            <br />
            <span className="text-white/40">Es falta de sistema.</span>
          </h2>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-12 text-left space-y-6 mt-8">
            <p className="font-body text-white/80 text-lg leading-relaxed">
              La industria del contenido cambió completamente en 18 meses. Lo
              que antes tardaba semanas ahora tarda horas. Lo que antes
              necesitaba un equipo ahora lo hace una persona con las
              herramientas correctas.
            </p>
            <p className="font-body text-white/80 text-lg leading-relaxed">
              Los creadores que están ganando{' '}
              <span className="text-white font-semibold">no tienen más talento que tú</span>.
              Tienen un proceso sistemático para producir, entregar y cobrar —
              una y otra vez — sin depender de un día de grabación perfecto.
            </p>
            <div className="border-l-4 border-green pl-6">
              <p className="font-heading font-bold text-xl text-white">
                "La IA no reemplaza creatividad. La multiplica."
              </p>
              <p className="font-body text-white/50 text-sm mt-2">
                — José Díaz, byjose.ai
              </p>
            </div>
          </div>

          <p className="font-body text-white/60 text-lg leading-relaxed pt-4">
            Eso es exactamente lo que vas a aprender en{' '}
            <span className="text-green font-semibold">Sistema Modo Creador</span>
            : cómo usar la IA para multiplicar tu presencia, tu autoridad y tus
            ingresos.
          </p>
        </div>
      </div>
    </section>
  )
}
