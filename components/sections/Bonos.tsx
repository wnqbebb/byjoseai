'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Gift, MessageSquare, TrendingUp, Users, RefreshCw, Star, CheckSquare } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const bonos = [
  {
    icon: Gift,
    title: 'Vault de Prompts Probados',
    value: '$97',
    desc: '+200 prompts organizados por categoría: rostro, dataset, voz, movimiento y UGC. Copiados directamente de producciones reales.',
  },
  {
    icon: MessageSquare,
    title: 'Plantillas de Email para Marcas',
    value: '$47',
    desc: '7 plantillas de outreach frío que generan respuestas. Con el subject, el cuerpo y el cierre que convierte.',
  },
  {
    icon: TrendingUp,
    title: 'Kit de Precio UGC',
    value: '$37',
    desc: 'Cómo estructurar tus tarifas, cuándo subir precios y cómo responder a marcas que quieren pagar menos de lo que vales.',
  },
  {
    icon: Users,
    title: 'Comunidad Privada de Creadores',
    value: '$197',
    desc: 'Acceso al grupo privado donde José responde dudas, comparte nuevas herramientas y da feedback a portafolios.',
  },
  {
    icon: RefreshCw,
    title: 'Actualizaciones de por Vida',
    value: '$∞',
    desc: 'La IA cambia cada semana. El curso también. Cada vez que José actualice el sistema, tú recibes el contenido nuevo sin costo adicional.',
  },
  {
    icon: Star,
    title: 'Sesión de Revisión de Portafolio',
    value: '$127',
    desc: 'Una sesión en grupo (live o grabada) donde José revisa portafolios reales y da feedback accionable antes de enviarlos a marcas.',
  },
  {
    icon: CheckSquare,
    title: 'Checklist de Lanzamiento Rápido',
    value: '$27',
    desc: 'El checklist exacto para tener tu primer video UGC con IA listo en 72 horas. Paso a paso, sin excusas.',
  },
]

export default function Bonos() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bono-card',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.09,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.bonos-grid',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const totalValue = bonos
    .filter((b) => b.value !== '$∞')
    .reduce((sum, b) => sum + parseInt(b.value.replace('$', '')), 0)

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-4 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-yellow/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-yellow text-sm uppercase tracking-widest font-semibold mb-4">
            Incluido en el precio
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            7 bonos que valen{' '}
            <span className="text-yellow">${totalValue}+</span>
          </h2>
          <p className="font-body text-white/60 text-lg mt-4">
            Y que tú obtienes sin costo adicional.
          </p>
        </div>

        <div className="bonos-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bonos.map((bono, i) => {
            const Icon = bono.icon
            return (
              <div
                key={i}
                className={`bono-card flex flex-col gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-yellow/30 rounded-2xl p-6 transition-all duration-300 ${i === 6 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-yellow/10 border border-yellow/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-yellow" />
                  </div>
                  <span className="font-heading font-black text-yellow text-lg">
                    {bono.value}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">
                    {bono.title}
                  </h3>
                  <p className="font-body text-white/55 text-sm leading-relaxed">
                    {bono.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Value stack summary */}
        <div className="mt-10 bg-yellow/5 border border-yellow/20 rounded-2xl px-8 py-6 text-center">
          <p className="font-body text-white/60 text-sm mb-2">
            Valor total de los bonos
          </p>
          <p className="font-heading font-black text-4xl text-yellow">
            ${totalValue}+ USD
          </p>
          <p className="font-body text-white/40 text-sm mt-2">
            Incluidos sin costo adicional cuando entras hoy.
          </p>
        </div>
      </div>
    </section>
  )
}
