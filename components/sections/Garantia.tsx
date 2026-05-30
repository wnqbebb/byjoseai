'use client'

import { motion } from 'framer-motion'

export default function Garantia() {
  return (
    <section className="py-20 text-center" style={{ background: 'var(--navy-800)' }}>
      <div className="container-base max-w-[700px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-3xl p-10 lg:p-12"
          style={{
            background: 'var(--navy-900)',
            border: '2px solid var(--green-500)',
          }}
        >
          {/* Sello verde */}
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'rgba(31,186,114,0.15)',
                border: '2px solid var(--green-500)',
              }}
            >
              <span style={{ color: 'var(--green-500)', fontSize: '28px', lineHeight: 1 }}>✓</span>
              <span
                className="font-heading font-bold"
                style={{ color: 'var(--green-500)', fontSize: '11px', letterSpacing: '0.04em', lineHeight: 1.2 }}
              >
                7 DÍAS
              </span>
            </div>
          </div>

          <h2
            className="font-heading font-bold text-white mb-6"
            style={{ fontSize: 'clamp(24px, 3vw, 32px)', lineHeight: 1.2 }}
          >
            ENTRA SIN RIESGO. PRUÉBALO 7 DÍAS.
          </h2>

          <p
            className="font-body mb-6 mx-auto"
            style={{ color: 'var(--gray-400)', fontSize: '16px', lineHeight: 1.7, maxWidth: '560px' }}
          >
            Sé que decidir invertir da nervios. Por eso te doy 7 días para entrar, ver el sistema completo y aplicarlo. Si en 7 días sientes que esto no es para ti — me escribes y te devuelvo cada centavo. Sin trámites raros. Sin letra chica.
          </p>

          <div>
            <p
              className="font-heading font-bold text-white"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', lineHeight: 1.4 }}
            >
              El verdadero riesgo no es entrar.
            </p>
            <p
              className="font-heading font-bold text-white"
              style={{ fontSize: 'clamp(18px, 2.2vw, 22px)', lineHeight: 1.4 }}
            >
              El verdadero riesgo es seguir un mes más siendo invisible para las marcas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
