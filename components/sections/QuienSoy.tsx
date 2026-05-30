'use client'

import { motion } from 'framer-motion'

export default function QuienSoy() {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--navy-900)' }}>
      <div className="container-base max-w-[1100px]">
        <div className="grid lg:grid-cols-[40%_60%] gap-12 items-center">

          {/* Columna izquierda — foto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            {/* Real circular photo of José Díaz */}
            <div
              className="relative w-[240px] h-[240px] lg:w-[360px] lg:h-[360px] rounded-full overflow-hidden group"
              style={{
                border: '4px solid var(--orange-500)',
                boxShadow: '0 20px 60px rgba(255,107,53,0.3)',
              }}
            >
              <img
                src="/WhatsApp%20Image%202026-05-25%20at%2022.35.47.jpeg"
                alt="José Díaz — byjose.ai"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Columna derecha — texto */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h2
              className="font-heading font-bold text-white mb-6"
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
                Empecé como muchos de ustedes: con ganas, sin claridad, viendo creadores grandes y sintiendo que iba tarde.
              </p>
              <p className="font-body mb-4">
                Hasta que entendí algo clave:
              </p>
              <p
                className="font-heading font-bold text-white mb-4"
                style={{ fontSize: 'clamp(20px, 2vw, 22px)', lineHeight: 1.3 }}
              >
                El problema nunca fue el talento. Fue no tener un sistema.
              </p>
              <p className="font-body mb-4">
                Hoy ayudo a creadores pequeños a verse profesionales, construir autoridad y cobrar como marcas — usando IA como su equipo de producción.
              </p>
              <p className="font-body mb-4">
                Hago esto por un propósito más grande que yo:{' '}
                <strong className="font-heading font-bold text-white" style={{ fontSize: 'clamp(20px, 2vw, 22px)' }}>mis papás y mi esposo Mañungo</strong>. Por ellos no paro. Y por eso este sistema existe — para que tú también puedas construir algo real, sin depender de equipos caros ni de años de experiencia.
              </p>
              <p
                className="font-heading font-bold text-white"
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
