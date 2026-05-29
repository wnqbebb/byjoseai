'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const faqs = [
  {
    q: '¿Necesito experiencia previa en IA?',
    a: 'No. El sistema está diseñado para que empieces desde cero. Si sabes usar Instagram y YouTube, tienes las habilidades técnicas suficientes para empezar. El módulo 1 arranca desde lo más básico.',
  },
  {
    q: '¿Funciona desde mi celular o necesito una computadora potente?',
    a: 'El 80% del sistema funciona desde tu celular. El módulo 7 está dedicado específicamente a editar y producir contenido premium desde iPhone o Android. No necesitas un setup caro.',
  },
  {
    q: '¿Cuándo tengo acceso al contenido?',
    a: 'Inmediatamente después de pagar. Recibirás un email con tus credenciales de acceso a la plataforma en los próximos 5 minutos.',
  },
  {
    q: '¿El contenido se queda obsoleto con las actualizaciones de IA?',
    a: 'No. Con la garantía de actualizaciones de por vida, cada vez que una herramienta cambie o haya una mejor opción, el curso se actualiza. Pagas una vez, accedes para siempre.',
  },
  {
    q: '¿Hay soporte si me trabo en algún paso?',
    a: 'Sí. Tienes acceso a la comunidad privada donde puedes hacer preguntas y José responde directamente. También hay sesiones grupales de revisión incluidas.',
  },
  {
    q: '¿Funciona para cualquier nicho o solo para ciertos temas?',
    a: 'El sistema funciona para cualquier creador de contenido, independientemente del nicho. El proceso de clonar tu identidad, producir UGC y conseguir marcas aplica igual para fitness, finanzas, lifestyle, educación o cualquier otro verticale.',
  },
  {
    q: '¿Qué pasa exactamente después de que pago?',
    a: 'Recibes acceso inmediato a los 9 módulos, todos los bonos y la comunidad privada. El checklist de lanzamiento rápido te ayuda a tener tu primer video listo en 72 horas.',
  },
  {
    q: '¿Puedo conseguir marcas reales siendo nuevo?',
    a: 'Sí. El módulo 8 está diseñado específicamente para construir un portafolio que convenza a marcas sin necesidad de tener historial previo. Con el sistema correcto, "ser nuevo" deja de ser una desventaja.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.07,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-green text-sm uppercase tracking-widest font-semibold mb-4">
            Preguntas frecuentes
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl leading-[1.1] tracking-tight">
            FAQ
          </h2>
        </div>

        <div className="faq-list space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-heading font-semibold text-white text-base leading-snug">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  {open === i ? (
                    <Minus className="w-3 h-3 text-white" />
                  ) : (
                    <Plus className="w-3 h-3 text-white" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 border-t border-white/[0.06]">
                      <p className="font-body text-white/65 text-base leading-relaxed pt-4">
                        {faq.a}
                      </p>
                    </div>
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
