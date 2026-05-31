'use client'

import { motion } from 'framer-motion'

export default function QuienSoy() {
  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]

  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--navy-900)' }}>
      <div className="container-base max-w-[1100px]">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">

          {/* Columna izquierda — foto */}
          <motion.div
            initial={{ opacity: 0, x: -28, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: power3Out }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            {/* Circular placeholder avatar */}
            <div
              className="relative w-[240px] h-[240px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden group flex flex-col items-center justify-center"
              style={{
                border: '4px dashed #006b5b',
                background: 'var(--navy-800)',
                boxShadow: '0 20px 60px rgba(16,24,32,0.06)',
              }}
            >
              {/* Profile icon */}
              <svg
                className="w-16 h-16 text-[#006b5b]/40 mb-3 transition-transform duration-500 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span
                className="font-heading font-bold tracking-wider uppercase text-xs"
                style={{ color: '#006b5b', opacity: 0.8 }}
              >
                AVATAR JOSÉ DÍAZ
              </span>
            </div>
          </motion.div>

          {/* Columna derecha — texto */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: power3Out }}
            viewport={{ once: true }}
          >
            <h2
              className="font-heading font-bold text-navy-700 mb-6"
              style={{ fontSize: 'clamp(24px, 3vw, 36px)', lineHeight: 1.2 }}
            >
              ¿QUIÉN SOY Y POR QUÉ PUEDO ENSEÑARTE ESTO? 👋
            </h2>

            <div style={{ color: 'var(--gray-400)', fontSize: '17px', lineHeight: 1.7 }}>
              <p className="font-body mb-4">
                Hola, soy Jose Díaz. AI UGC Creator.
              </p>
              <p className="font-body mb-4">
                No soy un gurú.<br />
                No soy un nerd técnico.<br />
                No soy un experto académico.
              </p>
              <p className="font-body mb-4">
                Soy una persona que descubrió cómo usar IA de forma simple, visual y estratégica para crear contenido que destaca en redes — y ahora enseño exactamente eso.
              </p>
              <p className="font-body mb-4">
                Empecé como muchas de ustedes: con ganas, sin claridad, viendo creadoras grandes y sintiendo que iba tarde.
              </p>
              <p className="font-body mb-4">
                Hasta que entendí algo clave:
              </p>
              <p
                className="font-heading font-bold text-navy-700 mb-4"
                style={{ fontSize: 'clamp(20px, 2vw, 22px)', lineHeight: 1.3 }}
              >
                El problema nunca fue el talento. Fue no tener un sistema.
              </p>
              <p className="font-body mb-4">
                Hoy ayudo a creadoras pequeñas a verse profesionales, construir autoridad y cobrar como marcas — usando IA como su equipo de producción.
              </p>
              <p className="font-body mb-4">
                Hago esto por un propósito más grande que yo:{' '}
                <strong className="font-heading font-bold text-navy-700" style={{ fontSize: 'clamp(20px, 2vw, 22px)' }}>mis papás y mi esposo Mañungo</strong>. Por ellos no paro. Y por eso este sistema existe — para que tú también puedas construir algo real, sin depender de equipos caros ni de años de experiencia.
              </p>
              <p
                className="font-heading font-bold text-navy-700"
                style={{ fontSize: 'clamp(20px, 2vw, 22px)', lineHeight: 1.3 }}
              >
                Si yo pude, tú puedes. Solo necesitas el orden correcto.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
