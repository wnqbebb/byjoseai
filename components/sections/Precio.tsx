'use client'

import { motion } from 'framer-motion'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

const valorRows = [
  { label: 'Sistema Modo Creador (9 módulos paso a paso)', valor: '$497 USD' },
  { label: 'Acceso de por vida + actualizaciones', valor: '$197 USD' },
  { label: '🎁 Skill "Recrea Cualquier Video"', valor: '$97 USD' },
  { label: '🎁 Skill "Carrusel Automático"', valor: '$147 USD' },
  { label: '🎁 GPT "Guiones de Reels que Venden"', valor: '$97 USD' },
  { label: '🎁 GPT "Hooks UGC Probados"', valor: '$67 USD' },
  { label: '🎁 Biblioteca de Prompts Virales', valor: '$97 USD' },
  { label: '🎁 Lista Marcas + Scripts Outreach', valor: '$197 USD' },
  { label: '🎁 Workflows Probados', valor: '$97 USD' },
]

export default function Precio() {
  return (
    <section id="precio" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--navy-900)' }}>
      {/* Blob naranja */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }}
      />

      <div className="container-base max-w-[900px] relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white text-center mb-12"
          style={{ fontSize: 'clamp(26px, 3vw, 38px)', lineHeight: 1.2 }}
        >
          ESTO ES TODO LO QUE RECIBES AL ACTIVAR MODO CREADOR
        </motion.h2>

        {/* Tabla de valor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {valorRows.map((row, i) => (
            <div
              key={i}
              className="flex justify-between items-center py-4"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span className="font-body font-medium text-white" style={{ fontSize: 'clamp(16px, 2vw, 18px)' }}>
                {row.label}
              </span>
              <span className="font-body font-bold ml-4 flex-shrink-0" style={{ color: 'var(--gray-400)', fontSize: 'clamp(16px, 2vw, 18px)' }}>
                {row.valor}
              </span>
            </div>
          ))}
          {/* Total */}
          <div
            className="flex justify-between items-center py-4 mt-1"
            style={{ borderTop: '2px solid rgba(255,107,53,0.5)' }}
          >
            <span className="font-heading font-bold text-white" style={{ fontSize: 'clamp(20px, 2.5vw, 24px)' }}>
              VALOR TOTAL REAL
            </span>
            <span className="font-heading font-bold" style={{ color: 'var(--orange-500)', fontSize: 'clamp(20px, 2.5vw, 24px)' }}>
              $1.493 USD
            </span>
          </div>
        </motion.div>

        {/* Card de precio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 lg:p-14 text-center mx-auto max-w-[600px]"
          style={{
            background: 'var(--navy-800)',
            border: '2px solid var(--orange-500)',
            boxShadow: '0 30px 80px rgba(255,107,53,0.25)',
          }}
        >
          <p
            className="font-body font-bold uppercase mb-4"
            style={{ color: 'var(--orange-500)', fontSize: '14px', letterSpacing: '0.1em' }}
          >
            ⚡ HOY ACCEDES A TODO POR:
          </p>

          <p
            className="font-body font-medium line-through mb-2"
            style={{ color: 'var(--gray-400)', fontSize: '22px' }}
          >
            $1.493 USD
          </p>

          <div
            className="font-heading font-bold text-white mb-3"
            style={{ fontSize: 'clamp(72px, 12vw, 120px)', lineHeight: 1, letterSpacing: '-0.04em' }}
          >
            $29 USD
          </div>

          <p
            className="font-body font-medium mb-8"
            style={{ color: 'var(--gray-400)', fontSize: '14px' }}
          >
            Único pago · Acceso de por vida · Garantía 7 días
          </p>

          {/* TODO: conectar Hotmart/Stripe — reemplazar href="#" con URL real de checkout */}
          <a
            href="#"
            className="btn-cta block w-full text-center"
            style={{ fontSize: 'clamp(16px, 2vw, 20px)', paddingTop: '20px', paddingBottom: '20px' }}
            onClick={(e) => {
              e.preventDefault()
              trackPixelEvent('InitiateCheckout', { value: 29.0, currency: 'USD' })
              // TODO: redireccionar al enlace final de Hotmart/Stripe
            }}
          >
            QUIERO MI CUPO POR $29 →
          </a>
        </motion.div>

        {/* Bloque de escasez */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 max-w-[700px] mx-auto"
        >
          <p
            className="font-heading font-bold text-center mb-6"
            style={{ color: 'var(--yellow-500)', fontSize: 'clamp(20px, 2.5vw, 24px)' }}
          >
            ⚠️ PRECIO QUE SUBE POR CUPOS
          </p>

          <div className="flex flex-col gap-3 mb-6">
            {/* Tramo 1 — activo */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span>🟢</span>
              <span className="font-body font-medium text-white" style={{ fontSize: '16px' }}>
                Primeras 50 fundadoras (alumnas) → <strong>$29 USD</strong>
              </span>
              <span
                className="font-body font-bold animate-pulse-dot ml-auto"
                style={{ color: 'var(--green-500)', fontSize: '12px', whiteSpace: 'nowrap' }}
              >
                ← ESTÁS AQUÍ
              </span>
            </div>

            {/* Tramo 2 */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span>🟡</span>
              <span className="font-body font-medium" style={{ color: 'var(--gray-400)', fontSize: '16px' }}>
                Alumnas 51–300 → $59 USD
              </span>
            </div>

            {/* Tramo 3 */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <span>🟠</span>
              <span className="font-body font-medium" style={{ color: 'var(--gray-400)', fontSize: '16px' }}>
                Alumnas 301–1.000 → $97 USD
              </span>
            </div>
          </div>

          <p
            className="font-body text-center"
            style={{ color: 'var(--gray-400)', fontSize: '14px', lineHeight: 1.6 }}
          >
            No es falsa urgencia. Es un compromiso con quien llega primero. Cuando se llenen los 50 cupos, el precio sube automáticamente. Sin excepciones.
          </p>

          {/* Contador de cupos */}
          {/* TODO: conectar con backend real (Supabase, Sanity, o similar) */}
          <div className="flex justify-center mt-8">
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
              style={{
                background: 'rgba(31,186,114,0.1)',
                border: '1px solid var(--green-500)',
              }}
            >
              <span className="font-body font-bold" style={{ color: 'var(--green-500)', fontSize: '16px' }}>
                🔥 Quedan 47 cupos a este precio
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
