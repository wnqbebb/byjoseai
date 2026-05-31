'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const items = [
  'Sabes que tienes talento pero no logras destacar',
  'Tu contenido se ve "casero" comparado con creadores grandes',
  'Quieres trabajar con marcas pero no sabes cómo empezar',
  'Ya probaste IA suelta y no funcionó porque te falta sistema',
  'Estás cansada de ser invisible',
  'Quieres monetizar en redes — pero hacerlo bien, no de cualquier forma',
]

export default function Espejo() {

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.09, delayChildren: 0.15 }
    }
  }

  const checkItem = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.45, ease: power2Out }
    }
  }

  return (
    <section className="py-20 lg:py-24 w-full relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#f5f1ea' }}>
      <div className="container-base max-w-[720px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-[#101820] text-center mb-10 text-[26px] lg:text-[40px] leading-[1.12] lg:leading-[1.15] tracking-[-0.01em] max-w-[720px] mx-auto select-none"
        >
          SI ESTO ERES TÚ, SIGUE LEYENDO — ESTA PÁGINA TE VA A CAMBIAR EL AÑO
        </motion.h2>

        {/* Card Blanca — scale entrance */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: power3Out }}
          className="w-full max-w-[720px] bg-white border border-[#a89f94]/20 rounded-[24px] px-[22px] py-[28px] lg:px-[44px] lg:py-[40px] shadow-[0_8px_30px_rgba(16,24,32,0.02)] mx-auto mb-10 text-left"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-[18px] lg:gap-[20px]"
          >
            {items.map((texto, i) => (
              <motion.div
                key={i}
                variants={checkItem}
                className="flex items-start gap-[14px] lg:gap-[16px] w-full"
              >
                {/* Checkmark Circle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.09, ease: power3Out }}
                  className="w-[34px] h-[34px] lg:w-[36px] lg:h-[36px] rounded-full bg-[rgba(0,107,91,0.10)] flex items-center justify-center flex-shrink-0"
                >
                  <Check className="text-[#006b5b] w-[22px] h-[22px] lg:w-[24px] lg:h-[24px]" strokeWidth={3} />
                </motion.div>

                {/* Text */}
                <p
                  className="font-body font-medium leading-[1.45] text-[17px] lg:text-[19px] pt-1"
                  style={{ color: 'rgba(16, 24, 32, 0.88)' }}
                >
                  {texto}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Cierre Puente */}
        <motion.h3
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: power3Out }}
          className="font-heading font-bold text-[20px] lg:text-[28px] text-center leading-[1.25] text-[#006b5b] mt-10"
        >
          Entonces lo que viene ahora es para ti.
        </motion.h3>

      </div>
    </section>
  )
}
