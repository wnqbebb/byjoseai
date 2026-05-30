'use client'

import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

const rows = [
  { before: 'Pasas horas grabando y editando', after: 'Produces contenido en minutos con IA' },
  { before: 'Tu feed se ve "amateur"', after: 'Tu feed parece campaña de marca grande' },
  { before: 'Ninguna marca te escribe', after: 'Marcas reales te contactan o respondes outreach' },
  { before: 'Cero ingresos de redes', after: 'Primera colaboración paga en 30 días' },
  { before: 'Improvisas cada publicación', after: 'Tienes un sistema replicable que corre solo' },
  { before: 'Te sientes invisible y atrasado', after: 'Te sientes profesional, seguro, en control' },
]

const notifications = [
  { emoji: '💬', text: '"Hola, vimos tu contenido. ¿Cuál es tu tarifa para una colaboración?"' },
  { emoji: '💵', text: '"Pago recibido: $350 USD — Marca XYZ"' },
  { emoji: '📈', text: '"+247 nuevos seguidores hoy"' },
  { emoji: '📩', text: '"Quiero entrar a tu sistema, ¿cómo me uno?"' },
]

export default function Transformacion() {
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Transformacion' })
    scrollTo('#precio')
  }

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--navy-900)' }}>
      <div className="container-base" style={{ maxWidth: '1100px' }}>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-h2 text-white text-center mb-16 uppercase"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        >
          ESTO ES LO QUE VA A CAMBIAR EN LOS PRÓXIMOS 30 DÍAS
        </motion.h2>

        {/* Before/After responsive layout */}
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-6 mb-20">
          {/* Desktop Headers (hidden on mobile) */}
          <div className="hidden md:block pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--gray-400)', fontSize: 'clamp(18px, 2.5vw, 22px)' }}>
              ANTES de Modo Creador 😩
            </p>
          </div>
          <div className="hidden md:block pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--orange-500)', fontSize: 'clamp(18px, 2.5vw, 22px)' }}>
              DESPUÉS de Modo Creador 🔥
            </p>
          </div>

          {/* Rows (Interleaved for mobile and desktop naturally) */}
          {rows.map((row, i) => (
            <div key={i} className="col-span-1 md:col-span-2 grid md:grid-cols-2 gap-4">
              {/* BEFORE block */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl flex flex-col justify-center bg-[rgba(255,255,255,0.01)]"
                style={{ border: '1px solid rgba(255,255,255,0.04)' }}
              >
                <div
                  className="md:hidden font-bold text-[11px] tracking-[0.15em] uppercase mb-2"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--gray-400)' }}
                >
                  😩 ANTES
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 500, color: 'var(--gray-400)', fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.55 }}>
                  {row.before}
                </p>
              </motion.div>

              {/* AFTER block */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 + 0.02 }}
                viewport={{ once: true }}
                className="p-5 rounded-2xl flex flex-col justify-center"
                style={{
                  border: '1px solid rgba(255, 107, 53, 0.25)',
                  background: 'rgba(255, 107, 53, 0.02)',
                }}
              >
                <div
                  className="md:hidden font-bold text-[11px] tracking-[0.15em] uppercase mb-2"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--orange-500)' }}
                >
                  🔥 DESPUÉS
                </div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#FFFFFF', fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.55 }}>
                  {row.after}
                </p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* iPhone mockup */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Glow behind phone */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-[3rem]"
              style={{
                background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
                transform: 'scale(1.3)',
              }}
            />
            <div
              className="relative w-[280px] md:w-[340px] lg:w-[380px] rounded-[3rem] p-4"
              style={{
                backgroundColor: 'var(--navy-800)',
                border: '1px solid rgba(255,107,53,0.3)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Notch */}
              <div className="flex justify-center mb-3">
                <div className="w-20 h-6 bg-black rounded-full" />
              </div>
              {/* Notifications */}
              <div
                className="rounded-[2rem] p-3 flex flex-col gap-3"
                style={{ background: 'linear-gradient(180deg, #0A1628 0%, #050B16 100%)' }}
              >
                {notifications.map((n, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 rounded-2xl p-4"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    <span style={{ fontSize: '24px', lineHeight: 1 }}>{n.emoji}</span>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontWeight: 500,
                        color: '#FFFFFF',
                        fontSize: '13px',
                        lineHeight: 1.4,
                      }}
                    >
                      {n.text}
                    </p>
                  </motion.div>
                ))}
              </div>
              {/* Home bar */}
              <div className="flex justify-center mt-3">
                <div className="w-24 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.2)' }} />
              </div>
            </div>
          </div>

          {/* Cierre */}
          <p
            className="text-center mt-12"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              color: 'var(--gray-400)',
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: 1.6,
              maxWidth: '600px',
            }}
          >
            Esto no es una promesa vacía. Es lo que pasa cuando dejas de improvisar y empiezas a aplicar un sistema probado.
          </p>

          {/* CTA */}
          <div className="mt-8">
            <button onClick={handleCTAClick} className="btn-cta">
              QUIERO ACCEDER AL SISTEMA →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
