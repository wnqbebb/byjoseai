'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function Hero() {
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Hero' })
    scrollTo('#precio')
  }

  // Premium easing curves
  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  // Pill drops down first
  const pillVariants = {
    initial: { opacity: 0, y: -12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.05, ease: power3Out },
  }

  // H1 — strong fade-up entrance
  const h1Variants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.15, ease: power3Out },
  }

  // Subheadline
  const subVariants = {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.3, ease: power3Out },
  }

  // Container for negations — stagger children
  const negationsContainer = {
    initial: {},
    animate: {
      transition: { staggerChildren: 0.07, delayChildren: 0.4 }
    }
  }
  const negationItem = {
    initial: { opacity: 0, x: -10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.45, ease: power2Out } }
  }

  // Promise paragraph
  const promiseVariants = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay: 0.55, ease: power3Out },
  }

  // CTA entrance
  const ctaVariants = {
    initial: { opacity: 0, y: 16, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    transition: { duration: 0.55, delay: 0.65, ease: power3Out },
  }

  return (
    <section
      className="relative min-h-[80vh] lg:min-h-screen flex items-center overflow-hidden py-20 lg:py-32 w-full"
      style={{ backgroundColor: '#f5f1ea' }}
    >
      {/* ── Background texture: ultra subtle editorial grid ── */}
      <div
        className="absolute inset-0 pointer-events-none editorial-grid"
      />

      {/* ── Organic shape behind right column ── */}
      <div
        className="absolute top-[10%] right-[-8%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 107, 91, 0.06) 0%, transparent 65%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="container-base w-full relative z-10">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 lg:gap-16 items-center">

          {/* ── Left Column — Content ── */}
          <div className="flex flex-col items-start text-left">

            {/* 1. Pre-headline pill — enters with fade-down */}
            <motion.div {...pillVariants} className="mb-6 inline-block">
              <span
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full uppercase tracking-[0.08em] font-body font-semibold text-[13px] lg:text-[14px]"
                style={{
                  color: '#006b5b',
                  backgroundColor: 'rgba(0, 107, 91, 0.08)',
                  border: '1px solid rgba(0, 107, 91, 0.22)',
                }}
              >
                🔥 SISTEMA MODO CREADOR · CUPOS LIMITADOS
              </span>
            </motion.div>

            {/* 2. H1 Headline — strong mask-like entrance */}
            <motion.h1
              {...h1Variants}
              className="mb-5 font-heading font-extrabold select-none text-[36px] lg:text-[64px] tracking-[-0.02em] leading-[1.05] max-w-[960px]"
              style={{ color: '#101820' }}
            >
              CONSTRUYE EL SISTEMA QUE CONVIERTE TU CONTENIDO EN PREMIUM CON IA — Y A TI, EN EL CREADOR QUE LAS MARCAS QUIEREN PAGAR.
            </motion.h1>

            {/* 3. Sub-headline */}
            <motion.h2
              {...subVariants}
              className="mb-8 font-heading font-bold text-[20px] lg:text-[28px] leading-[1.3]"
              style={{ color: '#3d2c2e' }}
            >
              Porque no es justo tener talento y seguir siendo{' '}
              <span 
                className="font-accent text-[#006b5b] italic font-normal text-[1.15em] relative top-[2px] px-1"
                style={{ fontFamily: 'var(--font-accent)' }}
              >
                invisible
              </span>
              .
            </motion.h2>

            {/* 4. Negations — staggered left-slide */}
            <motion.ul
              variants={negationsContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-3 mb-8 w-full"
            >
              {[
                'Sin mostrar tu cara si no quieres',
                'Sin cámara ni equipo profesional',
                'Sin ser técnico ni experto en IA',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={negationItem}
                  className="flex items-center gap-3 font-body font-medium text-[16px] lg:text-[18px]"
                  style={{ color: 'rgba(16, 24, 32, 0.90)' }}
                >
                  <span className="select-none text-[16px] lg:text-[18px]">❌</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

            {/* 5. Mini-párrafo de Promesa */}
            <motion.p
              {...promiseVariants}
              className="mb-10 font-body font-normal text-[16px] lg:text-[18px] leading-[1.6] max-w-[620px]"
              style={{
                color: '#3d2c2e',
                opacity: 0.75,
              }}
            >
              Modo Creador es el sistema que enseña a creadores como tú a producir contenido nivel marca grande con IA — y a cerrar tu primera colaboración paga con una marca en los próximos 30 días.
            </motion.p>

            {/* 6. CTA Button — scale entrance */}
            <motion.div {...ctaVariants} className="w-full lg:w-auto">
              <button
                onClick={handleCTAClick}
                className="w-full lg:w-auto px-8 py-5 lg:px-10 lg:py-6 rounded-[16px] bg-[#006b5b] text-white font-body font-bold text-[16px] lg:text-[18px] uppercase tracking-[0.03em] hover:shadow-[0_12px_40px_rgba(0,107,91,0.22)] hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out border border-transparent select-none cursor-pointer"
              >
                QUIERO MI CUPO POR $29 →
              </button>

              {/* 7. Micro-copy */}
              <p
                className="mt-4 font-body text-[13px] text-left"
                style={{ color: '#a89f94' }}
              >
                🔒 Acceso de por vida · Garantía 7 días · Precio sube cada 50 cupos
              </p>
            </motion.div>

          </div>

          {/* ── Right Column — Hero Image ── */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.45, ease: power3Out }}
            className="flex justify-center items-center w-full mt-10 lg:mt-0"
          >
            <div className="relative flex justify-center items-center">

              {/* Organic glow behind image */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: '-20px',
                  background: 'rgba(0, 107, 91, 0.08)',
                  filter: 'blur(55px)',
                  borderRadius: '40px',
                }}
              />

              {/* Image card */}
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 32px 80px rgba(16,24,32,0.20)' }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  borderRadius: '30px',
                  overflow: 'hidden',
                  border: '1px solid rgba(168, 159, 148, 0.28)',
                  boxShadow: '0 24px 70px rgba(16, 24, 32, 0.14)',
                  lineHeight: 0,
                }}
              >
                <Image
                  src="/jose-hero.png"
                  alt="Jose Díaz, creador de Sistema Modo Creador"
                  width={480}
                  height={600}
                  priority
                  sizes="(max-width: 1023px) 280px, 480px"
                  className="w-[280px] lg:w-[480px] h-auto block"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
