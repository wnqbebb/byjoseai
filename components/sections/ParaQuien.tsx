'use client'

import { motion } from 'framer-motion'

// Wording from the instructions (gender-neutralized)
const noItems = [
  'Buscas hacks mágicos para "ir viral en 1 día" sin trabajar.',
  'No te interesa construir marca personal real.',
  'Solo quieres más seguidores sin importar quiénes sean.',
  'Crees que la IA te va a hacer todo por sí sola.',
  'No estás dispuesto a darle 3–5 horas por semana al sistema.',
]

const siItems = [
  'Tienes talento pero sientes que aún no destacas.',
  'Quieres que tu contenido se vea profesional desde la primera publicación.',
  'Quieres trabajar con marcas reales y cobrar como tal.',
  'Estás listo para aprender IA como sistema — no como truco suelto.',
  'Quieres trabajar desde casa con tu laptop o celular.',
  'Crees en construir algo real, paso a paso, sin atajos falsos.',
]

export default function ParaQuien() {
  
  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  // Left card — slides from left
  const leftCardVariants = {
    hidden: { opacity: 0, x: -24, y: 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        ease: power2Out,
        staggerChildren: 0.05,
        delayChildren: 0.15,
      }
    }
  }

  // Right card — slides from right
  const rightCardVariants = {
    hidden: { opacity: 0, x: 24, y: 12 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.65,
        ease: power2Out,
        staggerChildren: 0.05,
        delayChildren: 0.2,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.35, ease: power2Out }
    }
  }

  return (
    <section 
      id="para-quien" 
      className="py-20 w-full relative overflow-hidden flex items-center justify-center select-none" 
      style={{ backgroundColor: '#f5f1ea' }}
    >
      <div className="container-base max-w-[1100px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-[#101820] text-center mb-12 text-[28px] lg:text-[40px] leading-[1.2] tracking-[-0.01em]"
        >
          ¿ES MODO CREADOR PARA TI?
        </motion.h2>

        {/* 2-Columns Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 text-left select-none">
          
          {/* CARD IZQUIERDA — NO ES PARA TI */}
          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="bg-white rounded-[28px] p-[26px] lg:p-8 relative overflow-hidden border border-[#ef4444]/28 shadow-[0_4px_24px_rgba(0,0,0,0.015)] card-hover select-none"
          >
            {/* Fine superior accent warning line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#EF4444]/60 select-none" />

            {/* Header */}
            <h3 className="font-heading font-bold text-[#EF4444] text-[20px] lg:text-[24px] leading-[1.2] mb-6 select-none">
              ❌ ESTO NO ES PARA TI SI...
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-3">
              {noItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="font-body font-medium text-[15px] lg:text-[16px] leading-[1.6] select-none"
                  style={{ color: 'rgba(61, 44, 46, 0.86)' }}
                >
                  — {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CARD DERECHA — SÍ ES PARA TI */}
          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="bg-white rounded-[28px] p-[26px] lg:p-8 relative overflow-hidden border-[1.5px] border-[#006b5b]/36 shadow-[0_8px_32px_rgba(0,107,91,0.02)] card-hover select-none"
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, rgba(0,107,91,0.015) 100%)',
            }}
          >
            {/* Green top accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#006b5b] select-none" />

            {/* Header */}
            <h3 className="font-heading font-bold text-[#006b5b] text-[20px] lg:text-[24px] leading-[1.2] mb-6 select-none">
              ✅ ESTO SÍ ES PARA TI SI...
            </h3>

            {/* List */}
            <ul className="flex flex-col gap-3">
              {siItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={itemVariants}
                  className="font-body font-medium text-[15px] lg:text-[16px] leading-[1.6] select-none"
                  style={{ color: 'rgba(16, 24, 32, 0.88)' }}
                >
                  — {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
