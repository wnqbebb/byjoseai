'use client'

import { motion } from 'framer-motion'

const dolores = [
  'Tienes talento. Lo sabes. La gente cercana te lo dice.',
  'Publicas a diario. Cuidas cada detalle. Intentas conectar.',
  'Pero las marcas siguen sin verte.',
  'Y mientras tanto ves a otras creadoras conseguir colaboraciones — y tú sigues invisible.',
  'Tu contenido se ve "amateur" al lado del de ellas. Y lo sientes.',
  'Sabes que la IA es la oportunidad… pero no sabes ni por dónde empezar.',
  'Y lo más doloroso: cada día que pasa, sientes que vas más tarde.',
]

export default function Dolor() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: 'var(--navy-900)' }}>
      <div className="container-base" style={{ maxWidth: '800px' }}>
        {/* H2 */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-h2 text-white text-center mb-12 uppercase"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
        >
          SEAMOS HONESTAS
        </motion.h2>

        {/* 7 dolores */}
        <div className="flex flex-col">
          {dolores.map((texto, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 500,
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.5,
              }}
            >
              {texto}
            </motion.p>
          ))}
        </div>

        {/* Cierre dramático */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p
            className="text-center"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              color: 'var(--yellow-500)',
              fontSize: 'clamp(24px, 3.5vw, 36px)',
              lineHeight: 1.3,
            }}
          >
            No es tu talento. Es que nadie te enseñó el sistema correcto.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
