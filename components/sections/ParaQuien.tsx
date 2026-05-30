'use client'

import { motion } from 'framer-motion'

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
  return (
    <section className="py-20 lg:py-24" style={{ background: 'var(--navy-800)' }}>
      <div className="container-base max-w-[1100px]">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white text-center mb-12"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', lineHeight: 1.2 }}
        >
          ¿ES MODO CREADOR PARA TI?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* NO es para ti */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8"
            style={{
              background: 'var(--navy-900)',
              border: '1px solid rgba(239,68,68,0.3)',
            }}
          >
            <p
              className="font-heading font-bold mb-6"
              style={{ color: '#EF4444', fontSize: 'clamp(20px, 2.5vw, 24px)' }}
            >
              ❌ ESTO NO ES PARA TI SI...
            </p>
            <ul className="flex flex-col gap-3">
              {noItems.map((item, i) => (
                <li
                  key={i}
                  className="font-body font-medium"
                  style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.6 }}
                >
                  — {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SÍ es para ti */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl p-8"
            style={{
              background: 'var(--navy-900)',
              border: '1px solid rgba(31,186,114,0.4)',
            }}
          >
            <p
              className="font-heading font-bold mb-6"
              style={{ color: 'var(--green-500)', fontSize: 'clamp(20px, 2.5vw, 24px)' }}
            >
              ✅ ESTO SÍ ES PARA TI SI...
            </p>
            <ul className="flex flex-col gap-3">
              {siItems.map((item, i) => (
                <li
                  key={i}
                  className="font-body font-medium"
                  style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.6 }}
                >
                  — {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
