'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Wording from the instructions (gender-neutralized)
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
    a: 'Sí. Está pensado para creadores latinos y enseña referencias, herramientas y estrategias que funcionan en todo LATAM.',
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
    a: 'Porque los primeros 50 cupos son para fundadores — los que confían en el sistema antes de que sea masivo. Después el precio escala a $59 y luego a $97. Es un compromiso real, no falsa urgencia.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]

  return (
    <section 
      id="faq" 
      className="py-20 lg:py-24 w-full relative overflow-hidden flex items-center justify-center select-none" 
      style={{ backgroundColor: '#f5f1ea' }}
    >
      <div className="container-base max-w-[800px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-[#101820] text-center mb-12 text-[28px] lg:text-[40px] leading-[1.2] tracking-[-0.01em] select-none"
        >
          PREGUNTAS FRECUENTES
        </motion.h2>

        {/* Accordion Container — scale entrance */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.08, ease: power3Out }}
          className="bg-white border border-[#a89f94]/28 rounded-[28px] p-2 px-[18px] lg:p-2.5 lg:px-7 shadow-[0_4px_30px_rgba(16,24,32,0.015)] text-left select-none"
        >
          {faqs.map((faq, i) => {
            const isLast = i === faqs.length - 1
            const isOpen = open === i
            
            return (
              <div
                key={i}
                className={`${isLast ? 'border-b-0' : 'border-b border-[#a89f94]/22'} select-none`}
              >
                {/* Accordion trigger button */}
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group select-none transition-colors duration-200"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-heading font-bold text-[#101820] group-hover:text-[#006b5b] text-[17px] lg:text-[19px] leading-[1.3] transition-colors duration-200 select-none"
                  >
                    {faq.q}
                  </span>
                  
                  {/* Chevron rotating icon — smooth rotation */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={2}
                      className="text-[#006b5b] select-none"
                    />
                  </motion.div>
                </button>

                {/* Accordion content with smooth height toggle */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden select-none"
                    >
                      <p
                        className="font-body pb-6 text-[16px] lg:text-[17px] leading-[1.7] select-none"
                        style={{ color: 'rgba(61, 44, 46, 0.82)' }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}
