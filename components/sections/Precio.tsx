'use client'

import { motion } from 'framer-motion'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

// Wording from the instructions
const valorRows = [
  { label: 'Sistema Modo Creador (9 módulos paso a paso)', valor: '$497 USD' },
  { label: 'Acceso de por vida + actualizaciones', valor: '$197 USD' },
  { label: '🎁 Skill "Recrea Cualquier Video"', valor: '$97 USD' },
  { label: '🎁 Skill "Carrusel Automático"', valor: '$147 USD' },
  { label: '🎁 GPT "Guiones de Reels que Venden"', valor: '$97 USD' },
  { label: '🎁 GPT "Hooks UGC Probados"', valor: '$67 USD' },
  { label: '🎁 Biblioteca de Prompts Virales', valor: '$97 USD' },
  { label: '🎁 Lista Marcas + Scripts Outreach', valor: '$197 USD' },
  { label: '🎁 Workflows Probados', valor: '$97 USD' },
]

export default function Precio() {

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  const tableContainerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: power2Out,
        staggerChildren: 0.04,
        delayChildren: 0.1,
      }
    }
  }

  const rowVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: power2Out }
    }
  }

  const tramosVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: power3Out,
        staggerChildren: 0.06,
        delayChildren: 0.15
      }
    }
  }

  const tramoItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: power2Out }
    }
  }

  const handleCheckoutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // InitiateCheckout Pixel Event
    trackPixelEvent('InitiateCheckout', { value: 29.0, currency: 'USD' })
    // TODO: conectar Hotmart/Stripe
  }

  return (
    <section 
      id="precio" 
      className="py-20 lg:py-24 w-full relative overflow-hidden flex items-center justify-center select-none" 
      style={{ backgroundColor: '#101820' }}
    >
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 pointer-events-none dot-pattern-dark" />

      {/* Sutil background green ambient blend radial glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full select-none"
        style={{ 
          background: 'radial-gradient(circle, rgba(0,107,91,0.06) 0%, transparent 70%)', 
          filter: 'blur(80px)' 
        }}
      />

      <div className="container-base max-w-[900px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* H2 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.05, ease: power3Out }}
          className="font-heading font-extrabold text-white text-center mb-12 text-[26px] lg:text-[38px] leading-[1.15] tracking-[-0.01em] max-w-[780px] mx-auto select-none"
        >
          ESTO ES TODO LO QUE RECIBES AL ACTIVAR MODO CREADOR
        </motion.h2>

        {/* Clean Stack Value Table */}
        <motion.div
          variants={tableContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="bg-white/[0.045] border border-white/10 rounded-[28px] p-5 lg:p-[28px_32px] mb-16 text-left select-none"
        >
          {valorRows.map((row, i) => (
            <motion.div
              key={i}
              variants={rowVariants}
              className="flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-2 sm:gap-4 border-b border-white/8 select-none"
            >
              <span className="font-body font-medium text-white text-[15px] lg:text-[17px] leading-[1.4] select-none">
                {row.label}
              </span>
              <span className="font-body font-bold text-[#a89f94] text-[15px] lg:text-[17px] shrink-0 whitespace-nowrap select-none">
                {row.valor}
              </span>
            </motion.div>
          ))}

          {/* Fila TOTAL */}
          <motion.div
            variants={rowVariants}
            className="flex flex-col sm:flex-row sm:items-center justify-between py-4 mt-2 pt-5 border-t-2 border-[#ffcd00]/40 gap-2 sm:gap-4 select-none"
          >
            <span className="font-heading font-extrabold text-[#ffcd00] text-[20px] lg:text-[24px] select-none">
              VALOR TOTAL REAL
            </span>
            <span className="font-heading font-extrabold text-[#ffcd00] text-[20px] lg:text-[24px] shrink-0 select-none">
              $1.493 USD
            </span>
          </motion.div>
        </motion.div>

        {/* Card Destacada de Precio — cinematic entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 36 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: power3Out }}
          className="bg-white border-2 border-[#006b5b] rounded-[32px] p-[34px_24px] lg:p-[48px_56px] text-center mx-auto max-w-[600px] shadow-[0_30px_90px_rgba(0,0,0,0.28)] select-none"
        >
          {/* Header Action Tag */}
          <p className="font-body font-bold uppercase tracking-[0.10em] text-[#006b5b] text-[14px] mb-4 select-none">
            ⚡ HOY ACCEDES A TODO POR:
          </p>

          {/* Strikethrough Value */}
          <p className="font-body font-medium line-through text-[#a89f94] text-[22px] mb-2 select-none">
            $1.493 USD
          </p>

          {/* Giant Price — enters with slight scale */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: power3Out }}
            className="font-heading font-extrabold text-[#101820] text-[72px] lg:text-[120px] leading-[0.95] tracking-[-0.04em] mb-3 select-none"
          >
            $29 USD
          </motion.div>

          {/* Subheading terms */}
          <p 
            className="font-body font-medium text-[14px] lg:text-[15px] mb-8 select-none"
            style={{ color: 'rgba(61, 44, 46, 0.75)' }}
          >
            Único pago · Acceso de por vida · Garantía 7 días
          </p>

          {/* Giant conversion CTA Anchor */}
          <a
            href="#"
            onClick={handleCheckoutClick}
            className="block w-full text-center font-body font-bold uppercase py-5 lg:py-6 rounded-[16px] bg-[#006b5b] text-white hover:bg-[#00584b] hover:shadow-[0_12px_40px_rgba(0,107,91,0.3)] hover:scale-[1.02] active:scale-[0.98] text-[17px] lg:text-[20px] tracking-[0.03em] transition-all duration-200 ease-out border border-transparent select-none cursor-pointer"
          >
            QUIERO MI CUPO POR $29 →
          </a>
        </motion.div>

        {/* Bloque de Escasez Real */}
        <motion.div
          variants={tramosVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-12 max-w-[700px] mx-auto text-left select-none"
        >
          {/* Escasez Title */}
          <h3 className="font-heading font-bold text-[#ffcd00] text-[20px] lg:text-[24px] text-center mb-6 select-none">
            ⚠️ PRECIO QUE SUBE POR CUPOS
          </h3>

          {/* 3 Tiers List */}
          <div className="flex flex-col gap-3 mb-6 select-none">
            
            {/* Tramo 1 — Activo */}
            <motion.div
              variants={tramoItemVariants}
              className="flex items-center gap-3 p-4 bg-white/[0.045] border border-white/[0.09] rounded-[18px] text-white select-none"
            >
              <span className="shrink-0 select-none">🟢</span>
              <span className="font-body font-medium text-[15px] lg:text-[16px] select-none">
                Primeros 50 alumnos → <strong className="font-bold">$29 USD</strong>
              </span>
              <span
                className="font-body font-bold text-[12px] text-[#006b5b] ml-auto shrink-0 animate-pulse-dot select-none"
                style={{ whiteSpace: 'nowrap' }}
              >
                ← ESTÁS AQUÍ
              </span>
            </motion.div>

            {/* Tramo 2 */}
            <motion.div
              variants={tramoItemVariants}
              className="flex items-center gap-3 p-4 bg-white/[0.045] border border-white/[0.09] rounded-[18px] text-[#a89f94] select-none"
            >
              <span className="shrink-0 select-none">🟡</span>
              <span className="font-body font-medium text-[15px] lg:text-[16px] select-none">
                Alumnos 51–300 → $59 USD
              </span>
            </motion.div>

            {/* Tramo 3 */}
            <motion.div
              variants={tramoItemVariants}
              className="flex items-center gap-3 p-4 bg-white/[0.045] border border-white/[0.09] rounded-[18px] text-[#a89f94] select-none"
            >
              <span className="shrink-0 select-none">🟠</span>
              <span className="font-body font-medium text-[15px] lg:text-[16px] select-none">
                Alumnos 301–1.000 → $97 USD
              </span>
            </motion.div>

          </div>

          {/* Escasez Subtext */}
          <p className="font-body font-normal text-[#a89f94] text-center text-[14px] lg:text-[15px] leading-[1.6] mt-6 select-none">
            No es falsa urgencia. Es un compromiso con quien llega primero. Cuando se llenen los 50 cupos, el precio sube automáticamente. Sin excepciones.
          </p>

          {/* Contador de Cupos Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: power3Out }}
            className="flex justify-center mt-8 select-none"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#006b5b]/12 border border-[#006b5b]/45 select-none shadow-[0_2px_12px_rgba(0,107,91,0.05)]">
              <span className="font-body font-bold text-white text-[16px] select-none">
                🔥 Quedan <span className="text-[#ffcd00] font-extrabold mx-1 drop-shadow-[0_1px_4px_rgba(255,205,0,0.2)]">47</span> cupos a este precio
              </span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
