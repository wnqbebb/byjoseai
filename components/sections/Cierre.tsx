'use client'

import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function Cierre() {
  const { scrollTo } = useLenis()

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const pStaggerVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: power3Out }
    }
  }

  const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    trackPixelEvent('Lead', { cta_location: 'Cierre' })
    scrollTo('#precio')
  }

  return (
    <section 
      id="cierre-final" 
      className="py-20 lg:py-24 w-full relative overflow-hidden flex items-center justify-center select-none" 
      style={{ backgroundColor: '#101820' }}
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none dot-pattern-dark" />

      {/* Sutil background green radial glow behind CTA */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full select-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(0,107,91,0.12) 0%, transparent 70%)', 
          filter: 'blur(80px)' 
        }}
      />

      <div className="container-base max-w-[900px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Gigante — cinematic */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-white text-center mb-10 text-[28px] lg:text-[48px] leading-[1.15] tracking-[-0.02em] select-none"
        >
          NO ES JUSTO TENER TALENTO Y{' '}
          <span className="text-[#ffcd00] font-extrabold select-none">
            SER INVISIBLE
          </span>{' '}
          SOLO PORQUE NADIE TE ENSEÑÓ A USAR LA IA A TU FAVOR.
        </motion.h2>

        {/* Sub-cierre — stagger paragraphs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.15 }}
          className="mb-8 max-w-[760px] mx-auto select-none"
        >
          <motion.p 
            variants={pStaggerVariants}
            className="font-body font-normal text-[#a89f94] text-[18px] lg:text-[20px] leading-[1.6] mb-4 select-none"
          >
            En los próximos 30 días dos cosas van a pasar:
          </motion.p>
          
          <motion.p 
            variants={pStaggerVariants}
            className="font-body font-normal text-[#a89f94] text-[18px] lg:text-[20px] leading-[1.6] mb-4 select-none"
          >
            <span className="text-white font-semibold select-none">
              Los creadores que se metieron a Modo Creador
            </span>{' '}
            → estarán cobrando su primera colaboración con una marca.
          </motion.p>
          
          <motion.p 
            variants={pStaggerVariants}
            className="font-body font-normal text-[#a89f94] text-[18px] lg:text-[20px] leading-[1.6] select-none"
          >
            Los que siguieron &quot;esperando el momento&quot; → seguirán esperando.
          </motion.p>
        </motion.div>

        {/* Cierre Final Destacado */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2, ease: power3Out }}
          className="font-heading font-bold text-[#ffcd00] text-[24px] lg:text-[32px] leading-[1.3] mt-8 mb-12 select-none"
        >
          Tú decides en qué grupo estás.
        </motion.p>

        {/* CTA Button & Microcopy — cinematic entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: power3Out }}
          className="flex flex-col items-center justify-center select-none"
        >
          <a
            href="#"
            onClick={handleCTAClick}
            className="block w-full lg:w-auto px-8 py-5 lg:px-16 lg:py-7 rounded-[16px] bg-[#006b5b] text-white hover:bg-[#00584b] hover:shadow-[0_12px_45px_rgba(0,107,91,0.35)] hover:scale-[1.02] active:scale-[0.98] text-[18px] lg:text-[22px] tracking-[0.03em] font-body font-bold uppercase transition-all duration-200 ease-out border border-transparent select-none cursor-pointer"
          >
            ACTIVAR MODO CREADOR POR $29 →
          </a>

          <p className="font-body font-normal text-[#a89f94] text-[14px] mt-4 select-none">
            🔒 Acceso inmediato · Garantía 7 días · Precio sube al llenarse los 50 cupos
          </p>
        </motion.div>

      </div>
    </section>
  )
}
