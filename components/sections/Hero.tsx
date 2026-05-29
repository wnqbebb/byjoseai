'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowDown, Zap } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-bg-orb',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: 'power2.out', stagger: 0.3 }
      )
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const scrollToPrecio = () => {
    document.getElementById('precio')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
    >
      {/* Background orbs */}
      <div className="hero-bg-orb absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-green/10 blur-[120px] pointer-events-none" />
      <div className="hero-bg-orb absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-orange/8 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-green/10 border border-green/30 rounded-full px-4 py-2 mb-8"
        >
          <Zap className="w-3.5 h-3.5 text-yellow fill-yellow" />
          <span className="text-green text-xs font-body font-semibold uppercase tracking-widest">
            Sistema Modo Creador
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] tracking-tight mb-6"
        >
          Crea contenido{' '}
          <span className="text-gradient-green">que vende.</span>
          <br />
          Sin grabarte.{' '}
          <span className="text-orange">Con IA.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          El sistema completo de{' '}
          <span className="text-white font-semibold">José Díaz</span> para
          producir UGC premium con tu clon de IA, conseguir marcas y cobrar
          como agencia — sin equipo, sin cámara, sin excusas.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={scrollToPrecio}
            className="group relative bg-orange hover:bg-orange/90 text-white font-heading font-bold text-base px-8 py-4 rounded-full transition-all duration-300 glow-orange hover:scale-105 w-full sm:w-auto"
          >
            QUIERO EL SISTEMA →
          </button>
          <button
            onClick={() =>
              document
                .getElementById('producto')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className="font-body text-white/60 hover:text-white text-sm underline underline-offset-4 transition-colors"
          >
            Ver qué incluye
          </button>
        </motion.div>

        {/* Social proof pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-3 mb-16"
        >
          {/* TODO: reemplazar avatars con fotos reales de compradores */}
          <div className="flex -space-x-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-navy-card border-2 border-green/40 flex items-center justify-center text-xs text-white/40"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <span className="text-white/50 text-sm font-body">
            <span className="text-green font-semibold">+47 creadores</span> ya
            dentro · Quedan{' '}
            <span className="text-yellow font-semibold">47 cupos</span> al
            precio de lanzamiento
          </span>
        </motion.div>

        {/* Hero photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* TODO: PENDIENTE — reemplazar con foto de José con gafas naranja */}
          <div className="placeholder-box w-full h-[400px] md:h-[500px] rounded-3xl">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-3xl">
              🍌
            </div>
            <p className="text-center px-8 leading-relaxed">
              FOTO HERO — José con gafas naranja
              <br />
              <span className="text-white/25 text-xs">
                Dimensiones sugeridas: 1000×600px · PNG con fondo
                semitransparente
              </span>
            </p>
          </div>

          {/* Floating badge — cupos */}
          <div className="absolute -top-4 -right-4 bg-yellow text-navy font-heading font-black text-xs px-3 py-2 rounded-xl rotate-3 shadow-lg">
            ⚡ LANZAMIENTO
          </div>

          {/* Floating badge — precio tachado */}
          <div className="absolute -bottom-4 -left-4 bg-navy-card border border-white/10 rounded-xl px-4 py-3 shadow-xl">
            <div className="text-white/40 text-xs line-through font-body">
              $59 USD
            </div>
            <div className="text-green font-heading font-black text-xl">
              $29 USD
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs font-body uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
