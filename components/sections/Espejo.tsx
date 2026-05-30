'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const items = [
  'Sabes que tienes talento pero no logras destacar',
  'Tu contenido se ve "casero" comparado con creadoras grandes',
  'Quieres trabajar con marcas pero no sabes cómo empezar',
  'Ya probaste IA suelta y no funcionó porque te falta sistema',
  'Estás cansada de ser invisible',
  'Quieres monetizar en redes — pero hacerlo bien, no de cualquier forma',
]

export default function Espejo() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--navy-800)' }}>
      <div className="container-base max-w-[720px]">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white text-center mb-10 uppercase"
          style={{ fontSize: 'clamp(26px, 4vw, 40px)', lineHeight: 1.15, letterSpacing: '-0.01em' }}
        >
          SI ESTO ERES TÚ, SIGUE LEYENDO — ESTA PÁGINA TE VA A CAMBIAR EL AÑO
        </motion.h2>

        <div className="flex flex-col gap-4 mb-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div
                className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(31,186,114,0.15)', border: '1px solid rgba(31,186,114,0.3)' }}
              >
                <Check
                  style={{ color: 'var(--green-500)', width: '20px', height: '20px', strokeWidth: 3 }}
                />
              </div>
              <p
                className="font-body font-medium"
                style={{ color: '#FFFFFF', fontSize: 'clamp(17px, 2vw, 19px)', lineHeight: 1.55, paddingTop: '6px' }}
              >
                {item}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-center"
          style={{ color: 'var(--orange-500)', fontSize: 'clamp(20px, 3vw, 28px)', lineHeight: 1.3 }}
        >
          Entonces lo que viene ahora es para ti.
        </motion.p>
      </div>
    </section>
  )
}
