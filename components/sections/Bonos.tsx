'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const bonos = [
  {
    title: 'Skill de Claude "Recrea Cualquier Video"',
    desc: 'Pega el link de un Reel viral y mi Skill de Claude te lo adapta a tu marca, tu voz y tu nicho en segundos. Sin copiar — robar como artista, al estilo IA.',
    value: '$97 USD',
  },
  {
    title: 'Skill de Claude "Carrusel Automático"',
    desc: 'Le das una idea y mi Skill te entrega un carrusel completo de Instagram listo para publicar. Hook, slides, copy, diseño visual. Todo en un clic.',
    value: '$147 USD',
  },
  {
    title: 'GPT "Guiones de Reels que Venden"',
    desc: 'GPT personalizado para escribir guiones de Reels con hooks + estructura + timestamps. Le das el tema, te entrega el guion completo.',
    value: '$97 USD',
  },
  {
    title: 'GPT "Hooks UGC Probados"',
    desc: 'GPT entrenado con +100 hooks UGC que ya funcionaron. Pega el producto o tema, recibe el hook listo para grabar.',
    value: '$67 USD',
  },
  {
    title: 'Biblioteca de Prompts Virales (PDF + Notion)',
    desc: 'La biblioteca completa con los prompts exactos que uso para crear hooks, guiones, conceptos virales y carruseles. Organizada por categoría, lista para copiar y pegar.',
    value: '$97 USD',
  },
  {
    title: 'Lista Marcas que Pagan + Scripts de Outreach (PDF + Notion)',
    desc: 'La base de datos secreta con las marcas que YA están pagando creadores que usan IA — con sus emails, briefs reales, tarifas de referencia + los scripts de outreach exactos que funcionan para cerrar tu primera colaboración.',
    value: '$197 USD',
  },
  {
    title: 'Workflows Probados (PDF + Notion)',
    desc: 'Los flujos de trabajo paso a paso que uso para producir 30 piezas de contenido en una tarde. Plug & play. Solo sigues el orden y produces.',
    value: '$97 USD',
  },
]

export default function Bonos() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bono-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.bonos-grid',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 lg:py-28" style={{ background: 'var(--navy-800)' }}>
      <div className="container-base max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white text-center mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2 }}
        >
          ADEMÁS DEL CURSO, HOY TE LLEVAS 7 BONOS QUE ACELERAN TU RESULTADO 🎁
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-body text-center mx-auto mb-16 max-w-[700px]"
          style={{ color: 'var(--gray-400)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.6 }}
        >
          Skills, GPTs y recursos que yo mismo uso. Listos para que arranques desde el día 1 sin construir nada desde cero.
        </motion.p>

        <div className="bonos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonos.map((bono, i) => (
            <div
              key={i}
              className="bono-card card-hover relative rounded-2xl p-6 lg:p-8 flex flex-col"
              style={{
                background: 'var(--navy-900)',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'border-color 300ms, box-shadow 300ms',
              }}
            >
              {/* Badge BONO */}
              <span
                className="absolute top-4 right-4 font-body font-bold uppercase rounded-md px-2 py-1"
                style={{ background: 'var(--orange-500)', color: '#FFFFFF', fontSize: '11px', letterSpacing: '0.04em' }}
              >
                BONO
              </span>

              <div className="text-5xl mb-4" style={{ lineHeight: 1 }}>🎁</div>

              <h3
                className="font-heading font-bold text-white mb-2 pr-12"
                style={{ fontSize: '18px', lineHeight: 1.3 }}
              >
                {bono.title}
              </h3>

              <p
                className="font-body flex-1 mb-4"
                style={{ color: 'var(--gray-400)', fontSize: '14px', lineHeight: 1.6 }}
              >
                {bono.desc}
              </p>

              {/* Footer valor */}
              <div
                className="pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
              >
                <p
                  className="font-body font-semibold"
                  style={{ color: 'var(--orange-500)', fontSize: '14px' }}
                >
                  Valor real: {bono.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-center mt-16"
          style={{ color: 'var(--yellow-500)', fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.3 }}
        >
          Valor real de los bonos: $799 USD — Incluidos sin costo extra.
        </motion.p>
      </div>
    </section>
  )
}
