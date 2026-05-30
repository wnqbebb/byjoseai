'use client'

import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function Cierre() {
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Cierre' })
    scrollTo('#precio')
  }
  return (
    <section className="py-20 lg:py-28 text-center relative overflow-hidden" style={{ background: 'var(--navy-900)' }}>
      {/* Blob naranja */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="container-base max-w-[900px] relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white mb-10"
          style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
        >
          NO ES JUSTO TENER TALENTO Y SER INVISIBLE SOLO PORQUE NADIE TE ENSEÑÓ A USAR LA IA A TU FAVOR.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p
            className="font-body mb-3"
            style={{ color: 'var(--gray-400)', fontSize: 'clamp(18px, 2.5vw, 20px)', lineHeight: 1.6 }}
          >
            En los próximos 30 días dos cosas van a pasar:
          </p>
          <p
            className="font-body mb-3"
            style={{ color: 'var(--gray-400)', fontSize: 'clamp(18px, 2.5vw, 20px)', lineHeight: 1.6 }}
          >
            Las creadoras que se metieron a Modo Creador → estarán cobrando su primera colaboración con una marca.
          </p>
          <p
            className="font-body"
            style={{ color: 'var(--gray-400)', fontSize: 'clamp(18px, 2.5vw, 20px)', lineHeight: 1.6 }}
          >
            Las que siguieron &quot;esperando el momento&quot; → seguirán esperando.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-heading font-bold mb-12"
          style={{ color: 'var(--orange-500)', fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.3 }}
        >
          Tú decides en qué grupo estás.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={handleCTAClick}
            className="btn-cta"
            style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', padding: 'clamp(20px, 3vw, 28px) clamp(40px, 6vw, 64px)' }}
          >
            ACTIVAR MODO CREADOR POR $29 →
          </button>

          <p
            className="font-body mt-4"
            style={{ color: 'var(--gray-400)', fontSize: '14px' }}
          >
            🔒 Acceso inmediato · Garantía 7 días · Precio sube al llenarse los 50 cupos
          </p>
        </motion.div>
      </div>
    </section>
  )
}
