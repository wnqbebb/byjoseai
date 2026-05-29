'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  User, Database, Zap, Mic, Video, FileText,
  Scissors, Briefcase, DollarSign,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const modulos = [
  {
    num: '01',
    icon: User,
    title: 'Clonar tu identidad visual',
    desc: 'Convierte una selfie en un avatar hiperrealista que mantiene tu identidad exacta en cada imagen. Los prompts exactos, las herramientas que sí funcionan y los errores que te hacen perder el parecido.',
    tag: 'Base del sistema',
  },
  {
    num: '02',
    icon: Database,
    title: 'Tu dataset de creador',
    desc: '10–20 imágenes de tu avatar en distintos ángulos, poses y outfits. Esto le da profundidad a tu clon y permite producir variaciones infinitas para distintas marcas.',
    tag: 'Escalabilidad',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Calidad cinematográfica 4K',
    desc: 'El upscaling es lo que separa el contenido amateur del que parece campaña de agencia. Aprenderás exactamente qué configuración usar y por qué saltarse este paso destruye todo lo anterior.',
    tag: 'No negociable',
  },
  {
    num: '04',
    icon: Mic,
    title: 'Clonar tu voz',
    desc: 'Tu voz es el alma de tu avatar. Voz robótica = pérdida de autoridad inmediata. Aprenderás a clonarla con precisión milimétrica — tono, pausas, acento y emoción incluidos.',
    tag: 'Autoridad',
  },
  {
    num: '05',
    icon: Video,
    title: 'Imagen a video (movimiento)',
    desc: 'Aquí tu clon cobra vida. Aprenderás a generar movimiento natural — parpadeos, giros de cabeza, caminar — sin que se note la IA. Con las mejores herramientas del mercado.',
    tag: 'El diferencial',
  },
  {
    num: '06',
    icon: FileText,
    title: 'Guión y copywriting persuasivo',
    desc: 'Un video bonito que no vende no vale nada. Aprenderás a escribir guiones que activan decisiones de compra — la estructura exacta que usan las marcas que pagan $500 por video.',
    tag: 'Conversión',
  },
  {
    num: '07',
    icon: Scissors,
    title: 'Edición desde el celular',
    desc: 'Calidad de marca desde tu iPhone. Sin software caro ni computadora de $3,000. El flujo completo de edición, captions y acabado profesional desde CapCut y tu celular.',
    tag: 'Mobile-first',
  },
  {
    num: '08',
    icon: Briefcase,
    title: 'Tu portafolio UGC profesional',
    desc: 'Un portafolio sin videos reales no sirve. Te enseño cómo construir un portfolio de UGC con IA que convenza a marcas que nunca te han visto — desde cero.',
    tag: 'Credibilidad',
  },
  {
    num: '09',
    icon: DollarSign,
    title: 'Conseguir marcas y cobrar',
    desc: 'El módulo que convierte todo lo anterior en ingresos reales. Cómo encontrar marcas que pagan, cómo escribir el pitch perfecto, cómo negociar tarifas y cómo estructurar la entrega.',
    tag: 'Dinero real',
  },
]

export default function Modulos() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.modulo-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.modulos-grid',
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
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-green text-sm uppercase tracking-widest font-semibold mb-4">
            Contenido del curso
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Los 9 módulos
          </h2>
          <p className="font-body text-white/60 text-lg mt-4 max-w-2xl mx-auto">
            Cada módulo construye sobre el anterior. No puedes saltar pasos —
            y cuando termines, tendrás un sistema completo funcionando.
          </p>
        </div>

        <div className="modulos-grid space-y-4">
          {modulos.map((mod, i) => {
            const Icon = mod.icon
            return (
              <div
                key={i}
                className="modulo-card group flex flex-col sm:flex-row gap-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-green/30 rounded-2xl p-6 transition-all duration-300"
              >
                {/* Number + icon */}
                <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-2 flex-shrink-0 sm:w-16">
                  <span className="font-heading font-black text-3xl text-white/20 group-hover:text-green/40 transition-colors leading-none">
                    {mod.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-green/10 border border-green/20 flex items-center justify-center group-hover:bg-green/20 transition-colors">
                    <Icon className="w-5 h-5 text-green" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-heading font-bold text-xl text-white">
                      {mod.title}
                    </h3>
                    <span className="text-xs font-body font-semibold text-orange bg-orange/10 border border-orange/20 px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {mod.tag}
                    </span>
                  </div>
                  <p className="font-body text-white/60 text-base leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
