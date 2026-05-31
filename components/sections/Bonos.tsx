'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  PanelsTopLeft, 
  MessageSquareText, 
  Zap, 
  BookOpen, 
  MailCheck, 
  Workflow 
} from 'lucide-react'

// Defining the 7 premium resources
const bonos = [
  {
    id: 1,
    title: 'BONO #1 — Skill de Claude "Recrea Cualquier Video"',
    desc: 'Pega el link de un Reel viral y mi Skill de Claude te lo adapta a tu marca, tu voz y tu nicho en segundos. Sin copiar — robar como artista, al estilo IA.',
    value: '$97 USD',
    icon: Sparkles,
    isFeatured: false,
  },
  {
    id: 2,
    title: 'BONO #2 — Skill de Claude "Carrusel Automático"',
    desc: 'Le das una idea y mi Skill te entrega un carrusel completo de Instagram listo para publicar. Hook, slides, copy, diseño visual. Todo en un clic.',
    value: '$147 USD',
    icon: PanelsTopLeft,
    isFeatured: false,
  },
  {
    id: 3,
    title: 'BONO #3 — GPT "Guiones de Reels que Venden"',
    desc: 'GPT personalizado para escribir guiones de Reels con hooks + estructura + timestamps. Le das el tema, te entrega el guion completo.',
    value: '$97 USD',
    icon: MessageSquareText,
    isFeatured: false,
  },
  {
    id: 4,
    title: 'BONO #4 — GPT "Hooks UGC Probados"',
    desc: 'GPT entrenado con +100 hooks UGC que ya funcionaron. Pega el producto o tema, recibe el hook listo para grabar.',
    value: '$67 USD',
    icon: Zap,
    isFeatured: false,
  },
  {
    id: 5,
    title: 'BONO #5 — Biblioteca de Prompts Virales (PDF + Notion)',
    desc: 'La biblioteca completa con los prompts exactos que uso para crear hooks, guiones, conceptos virales y carruseles. Organizada por categoría, lista para copiar y pegar.',
    value: '$97 USD',
    icon: BookOpen,
    isFeatured: false,
  },
  {
    id: 6,
    title: 'BONO #6 — Lista Marcas que Pagan + Scripts de Outreach (PDF + Notion)',
    desc: 'La base de datos secreta con las marcas que YA están pagando creadores que usan IA — con sus emails, briefs reales, tarifas de referencia + los scripts de outreach exactos que funcionan para cerrar tu primera colaboración.',
    value: '$197 USD',
    icon: MailCheck,
    isFeatured: true,
  },
  {
    id: 7,
    title: 'BONO #7 — Workflows Probados (PDF + Notion)',
    desc: 'Los flujos de trabajo paso a paso que uso para producir 30 piezas de contenido en una tarde. Plug & play. Solo sigues el orden y produces.',
    value: '$97 USD',
    icon: Workflow,
    isFeatured: false,
  },
]

export default function Bonos() {

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 }
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
      id="bonos" 
      className="py-20 lg:py-24 w-full relative overflow-hidden flex items-center justify-center select-none" 
      style={{ backgroundColor: '#101820' }}
    >
      {/* Subtle dot grid */}
      <div className="absolute inset-0 pointer-events-none dot-pattern-dark" />

      <div className="container-base max-w-[1200px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-white text-center mb-4 text-[28px] lg:text-[40px] leading-[1.12] lg:leading-[1.15] tracking-[-0.01em] max-w-[900px] mx-auto select-none"
        >
          ADEMÁS DEL CURSO, HOY TE LLEVAS 7 BONOS QUE ACELERAN TU RESULTADO 🎁
        </motion.h2>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.08, ease: power2Out }}
          className="font-body font-normal text-[#a89f94] text-center mb-16 max-w-[700px] mx-auto text-[16px] lg:text-[18px] leading-[1.6]"
        >
          Skills, GPTs y recursos que yo mismo uso. Listos para que arranques desde el día 1 sin construir nada desde cero.
        </motion.p>

        {/* Bento Grid layout — stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-16"
        >
          {bonos.map((bono) => {
            const IconComponent = bono.icon
            
            return (
              <motion.div
                key={bono.id}
                variants={cardVariants}
                className={`bg-white rounded-[28px] p-6 lg:p-[28px] flex flex-col text-left relative overflow-hidden transition-all duration-300 ease-out group select-none ${
                  bono.isFeatured 
                    ? 'border-[1.5px] border-[#006b5b]/55 hover:border-[#006b5b] shadow-[0_8px_30px_rgba(0,107,91,0.04)] hover:shadow-[0_24px_60px_rgba(0,107,91,0.12)]' 
                    : 'border border-[#a89f94]/28 hover:border-[#006b5b]/45 shadow-[0_8px_30px_rgba(16,24,32,0.015)] hover:shadow-[0_24px_60px_rgba(16,24,32,0.08)]'
                } hover:-translate-y-1 lg:hover:-translate-y-[5px] ${
                  bono.id === 7 
                    ? 'md:col-span-2 lg:col-span-8 lg:col-start-3 max-w-full lg:max-w-[760px] lg:mx-auto w-full' 
                    : 'lg:col-span-4'
                }`}
                style={{ minHeight: bono.isFeatured ? '380px' : '340px' }}
              >
                {/* Badges Container */}
                <div className="absolute top-5 right-5 flex items-center gap-2 select-none z-10">
                  {bono.isFeatured && (
                    <span
                      className="font-body font-bold text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border leading-none"
                      style={{
                        background: 'rgba(255,205,0,0.22)',
                        color: '#101820',
                        borderColor: 'rgba(255,205,0,0.45)',
                      }}
                    >
                      MÁS VALIOSO
                    </span>
                  )}
                  <span
                    className="font-body font-bold text-[11px] tracking-[0.08em] uppercase px-2.5 py-1 rounded-full border leading-none"
                    style={{
                      background: 'rgba(0,107,91,0.10)',
                      color: '#006b5b',
                      borderColor: 'rgba(0,107,91,0.24)',
                    }}
                  >
                    BONO
                  </span>
                </div>

                {/* Icon slot */}
                <div className="w-16 h-16 rounded-[20px] bg-[#006b5b]/8 border border-[#006b5b]/18 flex items-center justify-center mb-6 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out shrink-0">
                  <IconComponent 
                    size={28} 
                    strokeWidth={1.75} 
                    className="text-[#006b5b]" 
                  />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-[#101820] text-[21px] lg:text-[22px] leading-[1.15] mb-4 pr-24 lg:pr-28 select-none">
                  {bono.title}
                </h3>

                {/* Description */}
                <p 
                  className="font-body font-normal text-[15px] leading-[1.6] mb-auto select-none"
                  style={{ color: 'rgba(61, 44, 46, 0.84)' }}
                >
                  {bono.desc}
                </p>

                {/* Divider & Footer Valor */}
                <div className="mt-6 pt-5 border-t border-[#a89f94]/22 flex items-center justify-between select-none">
                  <span className="font-body font-bold text-[14px] text-[#006b5b] tracking-wide">
                    Valor real: <span className="text-[#101820] font-extrabold">{bono.value}</span>
                  </span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Cierre Destacado */}
        <div className="flex flex-col items-center justify-center mt-16 max-w-[760px] mx-auto relative select-none">
          
          {/* Bootzy accent */}
          <motion.div
            initial={{ opacity: 0, y: 10, rotate: -3 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: power3Out }}
            className="mb-3 select-none"
          >
            <span className="font-accent text-[#ffcd00] text-[20px] lg:text-[24px] tracking-wide inline-block leading-none select-none">
              ¡incluidos hoy!
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15, ease: power3Out }}
            className="w-full rounded-[24px] border select-none p-6 lg:p-[28px_36px] bg-[#ffcd00]/10 border-[#ffcd00]/35 shadow-[0_8px_32px_rgba(255,205,0,0.02)]"
          >
            <h4 className="font-heading font-bold text-[#ffcd00] text-[22px] lg:text-[28px] leading-[1.25] text-center select-none">
              Valor real de los bonos:{' '}
              <span className="text-white font-extrabold text-[24px] lg:text-[32px] mx-1 drop-shadow-[0_2px_8px_rgba(255,255,255,0.1)]">
                $799 USD
              </span>{' '}
              — Incluidos sin costo extra.
            </h4>
          </motion.div>
        </div>

      </div>
    </section>
  )
}