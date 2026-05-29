'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, X } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const siEsPara = [
  'Creadores que quieren monetizar contenido sin depender de grabarse',
  'Freelancers que buscan un servicio premium nuevo para ofrecer',
  'Emprendedores con marca personal que necesitan contenido consistente',
  'Personas que saben que la IA es el futuro y quieren adoptarla ya',
  'Curiosos que han intentado IA antes pero sin un sistema claro',
  'Alguien dispuesto a aplicar el sistema y no solo mirarlo',
]

const noEsPara = [
  'Personas que buscan hacerse ricas sin trabajar',
  'Quienes quieren resultados mágicos sin poner en práctica',
  'Creadores que "ya saben todo de IA" y no quieren aprender',
  'Alguien que no tiene 2–3 horas semanales para aplicar el sistema',
  'Personas que esperan que el sistema funcione solo sin su participación',
]

export default function ParaQuien() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.para-col',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.para-grid',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            ¿Es para ti?
          </h2>
          <p className="font-body text-white/60 text-lg mt-4">
            Sé honesto contigo mismo antes de comprar.
          </p>
        </div>

        <div className="para-grid grid md:grid-cols-2 gap-6">
          {/* SÍ es para ti */}
          <div className="para-col bg-green/5 border border-green/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-green/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-green" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-green">
                Sí es para ti
              </h3>
            </div>
            <ul className="space-y-4">
              {siEsPara.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/75 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* NO es para ti */}
          <div className="para-col bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-red-400">
                No es para ti
              </h3>
            </div>
            <ul className="space-y-4">
              {noEsPara.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-white/60 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
