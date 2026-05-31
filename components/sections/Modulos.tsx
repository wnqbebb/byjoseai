'use client'

import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

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
    desc: 'Por qué la mayoría de creadores fracasan persiguiendo "ir viral" y cómo destacar de verdad. Cambia el chip antes de tocar una sola herramienta.',
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
    desc: 'Convierte fotos estáticas en personajes que hablan, se mueven y crean contenido. Tu propio equipo de creadores virtuales 24/7.',
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
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Modulos' })
    scrollTo('#precio')
  }

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: power2Out }
    }
  }

  return (
    <section
      id="modulos"
      className="py-20 lg:py-24 w-full relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#f5f1ea' }}
    >
      <div className="container-base max-w-[1200px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-[#101820] text-center mb-16 text-[28px] lg:text-[44px] leading-[1.12] lg:leading-[1.15] tracking-[-0.01em] max-w-[850px] mx-auto select-none"
        >
          ESTO ES LO QUE VAS A DESBLOQUEAR ADENTRO 🔓
        </motion.h2>

        {/* 9-Modules Responsive Grid — stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {modulos.map((mod, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="bg-white border border-[#a89f94]/26 rounded-[24px] p-6 lg:p-8 flex flex-col text-left shadow-[0_8px_30px_rgba(16,24,32,0.015)] card-hover group"
              style={{ minHeight: '380px' }}
            >
              {/* Number — large, faded */}
              <div
                className="font-heading font-extrabold mb-4 select-none text-[56px] text-[#006b5b] leading-[0.9] opacity-[0.35] group-hover:opacity-[0.55] transition-opacity duration-300"
              >
                {mod.num}
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-[#101820] mb-2 text-[22px] leading-[1.15]">
                {mod.title}
              </h3>

              {/* Subtitle */}
              <p className="font-body font-medium italic text-[#006b5b] mb-4 text-[14px] leading-[1.4]">
                {mod.subtitle}
              </p>

              {/* Description */}
              <p
                className="font-body font-normal text-[15px] leading-[1.6]"
                style={{ color: 'rgba(61, 44, 46, 0.82)' }}
              >
                {mod.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Cierre */}
        <div className="text-center mt-16 flex flex-col items-center">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: power3Out }}
            className="font-heading font-bold text-[#101820] max-w-[800px] mx-auto text-[20px] lg:text-[26px] leading-[1.35]"
          >
            9 módulos. Un orden exacto. Una transformación:{' '}
            <span className="text-[#006b5b]">de creador invisible → a creador con marca propia</span>{' '}
            y marcas pagándote.
          </motion.h4>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: power3Out }}
            className="mt-8 w-full flex justify-center"
          >
            <button
              onClick={handleCTAClick}
              className="w-full lg:w-auto px-8 py-5 lg:px-10 lg:py-6 rounded-[16px] bg-[#006b5b] text-white font-body font-bold text-[16px] lg:text-[18px] uppercase tracking-[0.03em] hover:shadow-[0_12px_40px_rgba(0,107,91,0.22)] hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out border border-transparent select-none cursor-pointer block text-center"
            >
              EMPEZAR MODO CREADOR →
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
