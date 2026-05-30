'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Funciona si soy 100% principiante en IA?',
    a: 'Sí. El sistema arranca desde cero. Te enseño qué herramientas usar, en qué orden y cómo aplicarlas. No necesitas experiencia previa.',
  },
  {
    q: '¿Necesito mostrar mi cara?',
    a: 'No. Modo Creador te enseña ambos caminos: cómo clonarte si quieres usar tu imagen, o cómo crear avatares IA si prefieres no aparecer.',
  },
  {
    q: '¿Necesito cámara, micrófono o equipo profesional?',
    a: 'No. Con tu celular y una laptop básica te alcanza. Todo el sistema está diseñado para que arranques con lo que ya tienes.',
  },
  {
    q: '¿En cuánto tiempo voy a conseguir mi primera colaboración paga?',
    a: 'La mayoría empieza a notar cambios en su contenido en la primera semana. La primera colaboración paga suele llegar dentro de los primeros 30 días — aplicando consistente y siguiendo los scripts del Bono #6.',
  },
  {
    q: '¿Cuánto tiempo le tengo que dedicar por semana?',
    a: 'Con 3 a 5 horas semanales avanzas y ves resultados. La clave no es el tiempo — es seguir el orden del sistema.',
  },
  {
    q: '¿Tengo acceso de por vida?',
    a: 'Sí. Y a todas las actualizaciones que haga al sistema. Modo Creador evoluciona contigo.',
  },
  {
    q: '¿Sirve si vivo en México / Colombia / Chile / Argentina?',
    a: 'Sí. Está pensado para creadoras latinas y enseña referencias, herramientas y estrategias que funcionan en todo LATAM.',
  },
  {
    q: '¿Hay soporte 1 a 1?',
    a: 'No. Modo Creador es un curso auto-aplicable. A $29 no es escalable ofrecer 1 a 1. Lo que sí incluye es la comunidad privada donde puedes hacer preguntas.',
  },
  {
    q: '¿Hay garantía?',
    a: 'Sí, 7 días. Si entras y sientes que no es para ti, te devuelvo tu inversión completa.',
  },
  {
    q: '¿Por qué el precio sube?',
    a: 'Porque los primeros 50 cupos son para fundadoras — las que confían en el sistema antes de que sea masivo. Después el precio escala a $59 y luego a $97. Es un compromiso real, no falsa urgencia.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28" style={{ background: 'var(--navy-900)' }}>
      <div className="container-base max-w-[800px]">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white text-center mb-12 text-h2"
        >
          PREGUNTAS FRECUENTES
        </motion.h2>

        <div className="flex flex-col">
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              <button
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="font-heading font-bold text-white"
                  style={{ fontSize: 'clamp(17px, 2vw, 19px)', lineHeight: 1.3 }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    width: '20px',
                    height: '20px',
                    transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                />
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p
                      className="font-body pb-6"
                      style={{ color: 'var(--gray-400)', fontSize: '16px', lineHeight: 1.7 }}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
