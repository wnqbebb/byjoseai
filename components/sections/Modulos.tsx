'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

gsap.registerPlugin(ScrollTrigger)

const modulos = [
  {
    num: '01',
    title: 'La Hoja de Ruta',
    subtitle: 'Bienvenida al Sistema Modo Creador',
    desc: 'Tu mapa exacto para activar Modo Creador. Sabrás qué hacer, en qué orden y por qué. Cero confusión.',
  },
  {
    num: '02',
    title: 'La Nueva Era del Creador',
    subtitle: 'Mentalidad + mercado saturado',
    desc: 'Por qué la mayoría de creadoras fracasan persiguiendo "ir viral" y cómo destacar de verdad. Cambia el chip antes de tocar una sola herramienta.',
  },
  {
    num: '03',
    title: 'Tu Imagen Base',
    subtitle: 'Construye tu Identidad Visual',
    desc: 'Diseña tu avatar digital, tu paleta y tu presencia con IA. Sales con un look propio y reconocible — no copiado, no genérico.',
  },
  {
    num: '04',
    title: 'Tu Voz de Marca',
    subtitle: 'Personalidad + Clonación de voz',
    desc: 'Define cómo hablas, qué dices y cómo suenas. Incluye clonación de voz con IA para que tu contenido suene a ti — siempre.',
  },
  {
    num: '05',
    title: 'Vida a tu Avatar',
    subtitle: 'Animación de personajes',
    desc: 'Convierte fotos estáticas en personajes que hablan, se mueven y crean contenido. Tu propio equipo de creadoras virtuales 24/7.',
  },
  {
    num: '06',
    title: 'Storytelling que Vende',
    subtitle: 'Hooks + guiones + historias que convierten',
    desc: 'La fórmula exacta para escribir hooks que paran el scroll y guiones que convierten viewers en clientes. Sin copy corporativo.',
  },
  {
    num: '07',
    title: 'La Máquina de Prompts',
    subtitle: 'Prompts para contenido infinito',
    desc: 'Prompts probados para ideas, anuncios, UGC, hooks, guiones y campañas. Nunca más te quedas sin contenido.',
  },
  {
    num: '08',
    title: 'La Fábrica de Videos UGC',
    subtitle: 'Producción con IA al estilo marca grande',
    desc: 'Cómo crear videos UGC con calidad de campaña para TikTok, Instagram y marcas. Sin grabarte si no quieres.',
  },
  {
    num: '09',
    title: 'Tu Imperio Automatizado',
    subtitle: 'GPTs, workflows y escalamiento',
    desc: 'Cómo conectar todo en un sistema que corre solo. GPTs personalizados, automatizaciones y escalamiento real de tu contenido.',
  },
]

export default function Modulos() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Modulos' })
    scrollTo('#precio')
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.modulo-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
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
    <section ref={sectionRef} className="py-20 lg:py-28" style={{ background: 'var(--navy-900)' }}>
      <div className="container-base max-w-[1200px]">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white text-center mb-16 text-h2"
        >
          ESTO ES LO QUE VAS A DESBLOQUEAR ADENTRO 🔓
        </motion.h2>

        <div className="modulos-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulos.map((mod, i) => (
            <div
              key={i}
              className="modulo-card card-hover relative rounded-2xl p-6 lg:p-8 flex flex-col"
              style={{
                background: 'var(--navy-800)',
                border: '1px solid rgba(255,255,255,0.05)',
                minHeight: '380px',
                transition: 'border-color 300ms, box-shadow 300ms',
              }}
            >
              <div
                className="font-heading font-bold mb-4 select-none"
                style={{ fontSize: '56px', color: 'var(--orange-500)', opacity: 0.4, lineHeight: 1 }}
              >
                {mod.num}
              </div>
              <h3
                className="font-heading font-bold text-white mb-2"
                style={{ fontSize: '22px', lineHeight: 1.2 }}
              >
                {mod.title}
              </h3>
              <p
                className="font-body italic mb-4"
                style={{ color: 'var(--orange-500)', fontSize: '14px', fontWeight: 500 }}
              >
                {mod.subtitle}
              </p>
              <p
                className="font-body"
                style={{ color: 'var(--gray-400)', fontSize: '15px', lineHeight: 1.6 }}
              >
                {mod.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-heading font-bold text-white mx-auto"
            style={{ fontSize: 'clamp(20px, 3vw, 26px)', lineHeight: 1.3, maxWidth: '800px' }}
          >
            9 módulos. Un orden exacto. Una transformación: de creadora invisible → a creadora con marca propia y marcas pagándote.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <button onClick={handleCTAClick} className="btn-cta">
              EMPEZAR MODO CREADOR →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
