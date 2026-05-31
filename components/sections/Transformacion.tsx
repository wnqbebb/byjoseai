'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

const beforeItems = [
  'Pasas horas grabando y editando',
  'Tu feed se ve "amateur"',
  'Ninguna marca te escribe',
  'Cero ingresos de redes',
  'Improvisas cada publicación',
  'Te sientes invisible y atrasado',
]

const afterItems = [
  'Produces contenido en minutos con IA',
  'Tu feed parece campaña de marca grande',
  'Marcas reales te contactan o respondes outreach',
  'Primera colaboración paga en 30 días',
  'Tienes un sistema replicable que corre solo',
  'Te sientes profesional, seguro, en control',
]

const notifications = [
  {
    emoji: '💬',
    message: '💬 "Hola, vimos tu contenido. ¿Cuál es tu tarifa para una colaboración?"',
    bg: 'rgba(255,255,255,0.10)',
  },
  {
    emoji: '💵',
    message: '💵 "Pago recibido: $350 USD — Marca XYZ"',
    bg: 'rgba(0,107,91,0.16)',
  },
  {
    emoji: '📈',
    message: '📈 "+247 nuevos seguidores hoy"',
    bg: 'rgba(255,205,0,0.16)',
  },
  {
    emoji: '📩',
    message: '📩 "Quiero entrar a tu sistema, ¿cómo me uno?"',
    bg: 'rgba(255,255,255,0.10)',
  },
]

export default function Transformacion() {
  const { scrollTo } = useLenis()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Transformacion' })
    scrollTo('#precio')
  }

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  // Container for list items — stagger
  const listContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.1 }
    }
  }

  const listItem = (direction: 'left' | 'right') => ({
    hidden: { opacity: 0, x: direction === 'left' ? -14 : 14 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: power2Out }
    }
  })

  return (
    <section
      className="py-20 lg:py-24 w-full relative overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: '#101820' }}
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none dot-pattern-dark" />

      <div className="container-base max-w-[1100px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-white text-center mb-16 text-[28px] lg:text-[44px] leading-[1.12] lg:leading-[1.15] tracking-[-0.01em] max-w-[850px] mx-auto select-none"
        >
          ESTO ES LO QUE VA A CAMBIAR EN LOS PRÓXIMOS 30 DÍAS
        </motion.h2>

        {/* Antes vs Después Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full mx-auto mb-20 text-left">
          
          {/* Columna ANTES — slides in from left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : -24, y: isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: power3Out }}
            className="flex flex-col w-full"
          >
            <div className="pb-4 border-b border-white/10 mb-6">
              <h3 className="font-heading font-bold text-[18px] lg:text-[22px] text-[#a89f94]">
                ANTES de Modo Creador 😩
              </h3>
            </div>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-3"
            >
              {beforeItems.map((texto, i) => (
                <motion.div
                  key={i}
                  variants={listItem('left')}
                  className="p-4 lg:p-5 rounded-2xl bg-white/[0.035] border border-white/[0.07] min-h-[56px] flex items-center"
                >
                  <p className="font-body font-medium leading-[1.45] text-[15px] lg:text-[17px] text-[#a89f94]">
                    {texto}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna DESPUÉS — slides in from right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 0 : 24, y: isMobile ? 20 : 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: power3Out }}
            className="flex flex-col w-full"
          >
            <div className="pb-4 border-b border-[#006b5b]/35 mb-6">
              <h3 className="font-heading font-bold text-[18px] lg:text-[22px] text-white">
                DESPUÉS de Modo Creador 🔥
              </h3>
            </div>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="flex flex-col gap-3"
            >
              {afterItems.map((texto, i) => (
                <motion.div
                  key={i}
                  variants={listItem('right')}
                  className="p-4 lg:p-5 rounded-2xl bg-[rgba(0,107,91,0.10)] border border-[rgba(0,107,91,0.30)] min-h-[56px] flex items-center"
                >
                  <p className="font-body font-medium leading-[1.45] text-[15px] lg:text-[17px] text-white">
                    {texto}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>

        {/* Custom iPhone Mockup — cinematic scale entrance */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: power3Out }}
          className="flex flex-col items-center mt-20"
        >
          {/* Glass Phone Shell */}
          <div className="relative w-full max-w-[320px] lg:max-w-[420px] aspect-[9/18.8] rounded-[3rem] p-3.5 lg:p-4 bg-[#121e2b] border border-[#a89f94]/22 shadow-[0_24px_60px_rgba(16,24,32,0.2),_0_0_40px_rgba(0,107,91,0.04)]">
            
            {/* Inner Screen */}
            <div className="h-full w-full rounded-[2rem] bg-gradient-to-b from-[#101820] to-[#05070a] p-4 lg:p-[22px] relative overflow-hidden flex flex-col justify-between select-none">
              
              <div>
                {/* Dynamic Island Notch */}
                <div className="w-[72px] h-[20px] rounded-full bg-[#05070a] mx-auto mb-[24px] flex items-center justify-between px-3 border border-white/5" />

                {/* Clock Status Header */}
                <div className="text-center text-white/50 font-semibold mb-1 text-[9px] tracking-[0.12em] uppercase font-body">
                  sábado, 30 de mayo
                </div>
                <div className="text-center text-white/95 font-medium mb-6 text-3xl tracking-tight" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                  08:20
                </div>

                {/* Notifications Stack — staggered */}
                <motion.div
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } }
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  className="flex flex-col gap-[10px]"
                >
                  {notifications.map((n, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, y: 18, scale: 0.96 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: { duration: 0.5, ease: power2Out }
                        }
                      }}
                      className="flex items-start gap-3 rounded-[18px] p-4 bg-white/[0.08] backdrop-blur-[12px] border border-white/[0.08] text-left"
                    >
                      {/* Icon Circle */}
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-[16px] flex-shrink-0"
                        style={{ backgroundColor: n.bg }}
                      >
                        {n.emoji}
                      </div>

                      {/* Notification Message Text */}
                      <p className="font-body font-medium leading-[1.35] text-[13px] text-white pt-1">
                        {n.message}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Bottom Home Indicator Bar */}
              <div className="w-24 h-1 rounded-full bg-white/20 mx-auto mt-4" />
            </div>

          </div>

          {/* Cierre debajo del mockup */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: power3Out }}
            className="font-body font-normal text-[16px] lg:text-[18px] text-[#a89f94] text-center max-w-[600px] mt-12 mx-auto leading-[1.6]"
          >
            Esto no es una promesa vacía. Es lo que pasa cuando dejas de improvisar y empiezas a aplicar un sistema probado.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: power3Out }}
            className="mt-8 w-full flex justify-center"
          >
            <button
              onClick={handleCTAClick}
              className="w-full lg:w-auto px-8 py-5 lg:px-10 lg:py-6 rounded-[16px] bg-[#006b5b] text-white font-body font-bold text-[16px] lg:text-[18px] uppercase tracking-[0.03em] hover:shadow-[0_12px_40px_rgba(0,107,91,0.22)] hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out border border-transparent select-none cursor-pointer block text-center"
            >
              QUIERO ACCEDER AL SISTEMA →
            </button>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
