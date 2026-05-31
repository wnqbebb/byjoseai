'use client'

import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function Producto() {
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Producto' })
    scrollTo('#precio')
  }

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]

  return (
    <section
      id="producto"
      className="py-20 lg:py-28 w-full relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#f5f1ea' }}
    >
      {/* Subtle radial glow behind the product title */}
      <div
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 107, 91, 0.04) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="container-base max-w-[900px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* 1. Pre-headline — floats in delicately */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05, ease: power3Out }}
          className="font-body font-medium text-[#006b5b] mb-4 text-[16px] lg:text-[18px]"
        >
          Te presento...
        </motion.p>

        {/* 2. Título gigante — cinematic scale entrance */}
        <motion.h2
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.1, ease: power3Out }}
          className="font-heading font-extrabold mb-6 text-[48px] lg:text-[96px] leading-[0.95] tracking-[-0.03em] select-none bg-gradient-to-r from-[#101820] via-[#006b5b] to-[#3d2c2e] bg-clip-text text-transparent"
        >
          SISTEMA MODO CREADOR
        </motion.h2>

        {/* Decorative thin line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: power3Out }}
          className="w-16 h-[2px] bg-[#006b5b]/30 mx-auto mb-8 origin-center"
        />

        {/* 3. Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.2, ease: power3Out }}
          className="font-heading font-bold text-[#101820] mb-8 max-w-[700px] mx-auto text-[20px] lg:text-[26px] leading-[1.3]"
        >
          El sistema completo para crear contenido premium con IA — y cerrar tu primera colaboración paga con una marca en los próximos 30 días.
        </motion.p>

        {/* 4. Dos párrafos descriptivos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.25, ease: power3Out }}
          className="max-w-[700px] mx-auto text-left flex flex-col gap-5"
        >
          <p
            className="font-body font-normal leading-[1.6] text-[16px] lg:text-[18px]"
            style={{ color: 'rgba(61, 44, 46, 0.86)' }}
          >
            Modo Creador no es un curso más de IA. Es la hoja de ruta exacta que aplico (y que enseño a mis clientes) para que creadores sin experiencia técnica, sin equipo caro y sin años de carrera construyan contenido que parece de campaña — y empiecen a cobrar como tal.
          </p>
          
          <p
            className="font-body font-normal leading-[1.6] text-[16px] lg:text-[18px]"
            style={{ color: 'rgba(61, 44, 46, 0.86)' }}
          >
            Aquí no aprendes &quot;trucos sueltos&quot;. Aprendes el <strong className="font-bold text-[#006b5b]">sistema</strong> que los creadores profesionales usan en silencio para verse premium y cobrar como marcas.
          </p>
        </motion.div>

        {/* 5. CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease: power3Out }}
          className="mt-10 w-full flex justify-center"
        >
          <button
            onClick={handleCTAClick}
            className="w-full lg:w-auto px-8 py-5 lg:px-10 lg:py-6 rounded-[16px] bg-[#006b5b] text-white font-body font-bold text-[16px] lg:text-[18px] uppercase tracking-[0.03em] hover:shadow-[0_12px_40px_rgba(0,107,91,0.22)] hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out border border-transparent select-none cursor-pointer block text-center"
          >
            QUIERO EL SISTEMA →
          </button>
        </motion.div>

      </div>
    </section>
  )
}
