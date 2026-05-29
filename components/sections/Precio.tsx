'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, Shield, Zap, Clock } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const includes = [
  { label: '9 módulos completos en video', value: '$197' },
  { label: 'Vault de +200 prompts probados', value: '$97' },
  { label: 'Plantillas de email para marcas', value: '$47' },
  { label: 'Kit de precio UGC', value: '$37' },
  { label: 'Comunidad privada de creadores', value: '$197' },
  { label: 'Actualizaciones de por vida', value: '$∞' },
  { label: 'Sesión de revisión de portafolio', value: '$127' },
  { label: 'Checklist lanzamiento rápido', value: '$27' },
]

export default function Precio() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.precio-card',
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.precio-card',
            start: 'top 80%',
          },
        }
      )
      gsap.fromTo(
        '.valor-row',
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.valor-list',
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const scrollToCheckout = () => {
    // TODO: conectar Hotmart/Stripe — reemplazar href en el botón
    document.getElementById('precio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="precio"
      className="relative py-24 md:py-32 px-4 overflow-hidden"
    >
      {/* Strong glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-orange/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-body text-orange text-sm uppercase tracking-widest font-semibold mb-4">
            Oferta de lanzamiento
          </p>
          <h2 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Stack de valor + Precio
          </h2>
        </div>

        {/* Value stack */}
        <div className="valor-list bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden mb-8">
          {includes.map((item, i) => (
            <div
              key={i}
              className="valor-row flex items-center justify-between px-6 py-4 border-b border-white/[0.06] last:border-0"
            >
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-green flex-shrink-0" />
                <span className="font-body text-white/80 text-base">{item.label}</span>
              </div>
              <span className="font-heading font-bold text-white/40 text-sm">
                {item.value}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-between px-6 py-5 bg-white/[0.04]">
            <span className="font-heading font-bold text-white uppercase tracking-wide text-sm">
              Valor total
            </span>
            <span className="font-heading font-black text-white text-xl line-through opacity-40">
              $729+ USD
            </span>
          </div>
        </div>

        {/* Price card */}
        <div className="precio-card bg-gradient-to-br from-navy-card to-navy border border-orange/30 rounded-3xl p-8 md:p-12 text-center glow-orange">
          {/* Cupos counter */}
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/30 rounded-full px-4 py-2 mb-8">
            <Clock className="w-3.5 h-3.5 text-orange" />
            <span className="font-body text-orange text-sm font-semibold">
              {/* TODO: conectar con backend real — Supabase o hardcoded */}
              Quedan <strong>47 cupos</strong> al precio de lanzamiento
            </span>
          </div>

          <p className="font-body text-white/50 text-base mb-2">
            Precio normal
          </p>
          <p className="font-heading font-black text-3xl text-white/30 line-through mb-2">
            $59 USD
          </p>
          <p className="font-body text-white/60 text-sm mb-4">
            Precio de lanzamiento — solo por tiempo limitado
          </p>
          <div className="font-heading font-black text-8xl md:text-9xl text-orange leading-none mb-2">
            $29
          </div>
          <p className="font-body text-white/60 text-base mb-10">
            USD · Pago único · Acceso de por vida
          </p>

          {/* CTA Button */}
          {/* TODO: reemplazar href="#" con URL real de Hotmart o Stripe */}
          <a
            href="#"
            className="group block w-full bg-orange hover:bg-orange/90 text-white font-heading font-black text-xl py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] glow-orange mb-6"
            onClick={(e) => {
              e.preventDefault()
              // TODO: redirigir a checkout real
            }}
          >
            <Zap className="inline w-5 h-5 mb-1 mr-2" />
            QUIERO EL SISTEMA AHORA →
          </a>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-white/40 text-sm font-body">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-green" />
              <span>Garantía 30 días</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-green" />
              <span>Pago seguro</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-green" />
              <span>Acceso inmediato</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
