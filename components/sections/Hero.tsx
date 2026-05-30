'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function Hero() {
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Hero' })
    scrollTo('#precio')
  }

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section
      className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden py-20 lg:py-32"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #050B16 100%)' }}
    >
      {/* ── Decorative blobs ── */}
      <div
        className="blob-orange animate-float"
        style={{
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          opacity: 0.12,
        }}
      />
      <div
        className="blob-orange"
        style={{
          bottom: '10%',
          left: '-15%',
          width: '400px',
          height: '400px',
          opacity: 0.06,
        }}
      />

      {/* ── Grid lines decoration (subtle) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-base w-full relative z-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">

          {/* ── Left column — Text ── */}
          <div>

            {/* Pre-headline pill */}
            <motion.div {...fadeUp(0.1)} className="mb-6">
              <span className="pill-orange">
                🔥 SISTEMA MODO CREADOR · CUPOS LIMITADOS
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-h1 text-white mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
            >
              CONSTRUYE EL SISTEMA QUE CONVIERTE TU CONTENIDO EN PREMIUM CON IA — Y A TI, EN EL CREADOR QUE LAS MARCAS QUIEREN PAGAR.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              {...fadeUp(0.3)}
              className="mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                color: 'var(--orange-500)',
                fontSize: 'clamp(20px, 3vw, 28px)',
                lineHeight: 1.3,
              }}
            >
              Porque no es justo tener talento y seguir siendo invisible.
            </motion.p>

            {/* 3 negations */}
            <motion.ul {...fadeUp(0.4)} className="flex flex-col gap-3 mb-8">
              {[
                'Sin mostrar tu cara si no quieres',
                'Sin cámara ni equipo profesional',
                'Sin ser técnico ni experto en IA',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  <span style={{ color: '#EF4444', fontSize: '18px' }}>❌</span>
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Promise paragraph */}
            <motion.p
              {...fadeUp(0.45)}
              className="mb-10"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: 'var(--gray-400)',
                lineHeight: 1.6,
              }}
            >
              Modo Creador es el sistema que enseña a creadores como tú a producir contenido nivel marca grande con IA — y a cerrar tu primera colaboración paga con una marca en los próximos 30 días.
            </motion.p>

            {/* CTA */}
            <motion.div {...fadeUp(0.55)}>
              <button
                onClick={handleCTAClick}
                className="btn-cta w-full lg:w-auto"
              >
                QUIERO MI CUPO POR $29 →
              </button>

              {/* Micro-copy */}
              <p
                className="mt-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '13px',
                  color: 'var(--gray-400)',
                }}
              >
                🔒 Acceso de por vida · Garantía 7 días · Precio sube cada 50 cupos
              </p>
            </motion.div>

          </div>

          {/* ── Right column — Photo/Placeholder ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              {/* Glow ring behind */}
              <div
                className="absolute inset-0 rounded-2xl animate-slow-spin"
                style={{
                  background: 'conic-gradient(from 0deg, var(--orange-500), transparent 30%, transparent 70%, var(--orange-500))',
                  filter: 'blur(40px)',
                  opacity: 0.2,
                  transform: 'scale(1.1)',
                }}
              />

              {/* Placeholder instead of real photo */}
              <div
                className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[420px] rounded-2xl overflow-hidden group flex flex-col items-center justify-center"
                style={{
                  border: '2px dashed var(--orange-500)',
                  background: 'linear-gradient(135deg, rgba(15,30,51,0.6) 0%, rgba(22,40,69,0.8) 100%)',
                  boxShadow: '0 20px 60px rgba(255,107,53,0.1)',
                }}
              >
                {/* Profile outline SVG */}
                <svg
                  className="w-20 h-20 text-orange-500/40 mb-4 transition-transform duration-500 group-hover:scale-110"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
                <span
                  className="font-heading font-bold tracking-wider uppercase text-sm"
                  style={{ color: 'var(--orange-500)', opacity: 0.8 }}
                >
                  FOTO JOSÉ DÍAZ
                </span>
                <span
                  className="font-body text-xs mt-1"
                  style={{ color: 'var(--gray-400)', opacity: 0.6 }}
                >
                  (Con gafas naranja)
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
