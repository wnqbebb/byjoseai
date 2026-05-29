'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Instagram, UserCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function QuienSoy() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.quien-content > *',
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.quien-content',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/20 to-navy pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-green text-sm uppercase tracking-widest font-semibold">
            Quién está detrás
          </p>
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-12 items-center">
          {/* Photo */}
          <div className="flex justify-center md:justify-start">
            {/* TODO: PENDIENTE — foto de José Díaz (con gafas naranja, estilo editorial) */}
            <div className="placeholder-box w-64 h-72 rounded-3xl">
              <UserCircle className="w-16 h-16 text-white/20" />
              <p className="text-center text-xs px-6 leading-relaxed">
                FOTO JOSÉ DÍAZ
                <br />
                Con gafas naranja
                <br />
                <span className="text-white/20">512×576px · PNG</span>
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="quien-content space-y-6">
            <div>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight">
                Hola, soy{' '}
                <span className="text-gradient-green">José Díaz</span>
              </h2>
              <p className="font-body text-white/50 text-sm mt-2 flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                @byjose.ai
              </p>
            </div>

            <p className="font-body text-white/75 text-lg leading-relaxed">
              Creador de contenido, entusiasta de la IA y el tipo que lleva
              meses obsesionado con una sola pregunta: ¿cómo puede un creador
              solo producir contenido de agencia — sin agencia, sin equipo y sin
              presupuesto?
            </p>

            <p className="font-body text-white/75 text-lg leading-relaxed">
              Sistema Modo Creador es la respuesta que construí en vivo:
              probando herramientas, quemando horas, cometiendo errores caros y
              refinando cada paso hasta tener un proceso que funciona de
              verdad.
            </p>

            <p className="font-body text-white/75 text-lg leading-relaxed">
              No te voy a vender el sueño de hacerte rico en 30 días. Te voy a
              dar el sistema exacto para que tengas tu primer video UGC con IA
              listo en 72 horas — y tu primera marca pagada en las próximas
              semanas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {[
                { value: '47+', label: 'Estudiantes' },
                { value: '9', label: 'Módulos' },
                { value: '72h', label: 'Al primer video' },
              ].map((stat, i) => (
                <div key={i} className="text-center bg-white/[0.04] border border-white/10 rounded-xl py-4">
                  <div className="font-heading font-black text-2xl text-green">{stat.value}</div>
                  <div className="font-body text-white/50 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
