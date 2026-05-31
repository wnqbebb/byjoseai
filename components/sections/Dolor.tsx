'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const dolores = [
  'Tienes talento. Lo sabes. La gente cercana te lo dice.',
  'Publicas a diario. Cuidas cada detalle. Intentas conectar.',
  'Pero las marcas siguen sin verte.',
  'Y mientras tanto ves a otros creadores conseguir colaboraciones — y tú sigues invisible.',
  'Tu contenido se ve "amateur" al lado del de ellos. Y lo sientes.',
  'Sabes que la IA es la oportunidad… pero no sabes ni por dónde empezar.',
  'Y lo más doloroso: cada día que pasa, sientes que vas más tarde.',
]

export default function Dolor() {

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  }

  const dolorItem = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: power3Out }
    }
  }

  return (
    <section
      className="py-20 lg:py-28 w-full relative overflow-hidden flex items-center justify-center section-divider-dark-light"
      style={{ backgroundColor: '#101820' }}
    >
      {/* Ultra subtle dot grid on dark */}
      <div className="absolute inset-0 pointer-events-none dot-pattern-dark" />

      <div className="container-base max-w-[800px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* Dolor asset — spotlight integrado con fondo #101820 */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.05, ease: power3Out }}
          className="w-[140px] lg:w-[200px] mx-auto mb-7 lg:mb-8 pointer-events-none"
          style={{
            maskImage: 'radial-gradient(ellipse 82% 78% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 82% 78% at 50% 50%, black 30%, transparent 100%)',
          }}
        >
          <Image
            src="/dolor-spotlight.png"
            alt="Spotlight tenue sobre un espacio vacío, representando invisibilidad"
            width={800}
            height={800}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'contain',
              objectPosition: 'center',
              display: 'block',
              mixBlendMode: 'screen',
              opacity: 0.92,
            }}
          />
        </motion.div>

        {/* H2 Title — sobria, arrives first */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease: power3Out }}
          className="font-heading font-bold tracking-[-0.01em] uppercase text-white mb-12 text-[28px] lg:text-[44px] leading-tight"
        >
          SEAMOS HONESTOS
        </motion.h2>

        {/* 7 dolores — slower stagger, each line hits like a blow */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex flex-col gap-6 w-full"
        >
          {dolores.map((texto, i) => (
            <motion.p
              key={i}
              variants={dolorItem}
              className="font-body font-medium leading-[1.5] text-[18px] lg:text-[22px]"
              style={{ color: 'rgba(255, 255, 255, 0.85)' }}
            >
              {texto}
            </motion.p>
          ))}
        </motion.div>

        {/* Cierre dramático — enters with more visual weight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: power3Out }}
          className="mt-16 pt-12 text-center"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
        >
          <h3
            className="font-heading font-bold leading-[1.3] text-[24px] lg:text-[36px]"
            style={{ color: '#ffcd00' }}
          >
            No es tu talento. Es que nadie te enseñó el sistema correcto.
          </h3>
        </motion.div>

      </div>
    </section>
  )
}
