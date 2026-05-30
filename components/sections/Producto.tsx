'use client'

import { motion } from 'framer-motion'
import { useLenis } from '@/lib/lenis-provider'
import { trackPixelEvent } from '@/components/analytics/meta-pixel'

export default function Producto() {
  const { scrollTo } = useLenis()

  const handleCTAClick = () => {
    trackPixelEvent('Lead', { cta_location: 'Producto' })
    scrollTo('#precio')
  }
  return (
    <section id="producto" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: 'var(--navy-800)' }}>
      {/* Blob naranja sutil */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(255,107,53,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="container-base max-w-[900px] text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-body font-medium mb-4"
          style={{ color: 'var(--orange-500)', fontSize: '16px' }}
        >
          Te presento...
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-heading font-bold mb-6 bg-gradient-to-r from-white to-[#FF6B35] bg-clip-text text-transparent"
          style={{ fontSize: 'clamp(48px, 8vw, 96px)', letterSpacing: '-0.03em', lineHeight: 1 }}
        >
          SISTEMA MODO CREADOR
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-white mb-8 max-w-[700px] mx-auto"
          style={{ fontSize: 'clamp(20px, 3vw, 26px)', lineHeight: 1.3 }}
        >
          El sistema completo para crear contenido premium con IA — y cerrar tu primera colaboración paga con una marca en los próximos 30 días.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-[700px] mx-auto text-left"
        >
          <p className="font-body mb-5" style={{ color: 'var(--gray-400)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.6 }}>
            Modo Creador no es un curso más de IA. Es la hoja de ruta exacta que aplico (y que enseño a mis clientes) para que creadoras sin experiencia técnica, sin equipo caro y sin años de carrera construyan contenido que parece de campaña — y empiecen a cobrar como tal.
          </p>
          <p className="font-body" style={{ color: 'var(--gray-400)', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: 1.6 }}>
            Aquí no aprendes &quot;trucos sueltos&quot;. Aprendes el **sistema** que las creadoras profesionales usan en silencio para verse premium y cobrar como marcas.
          </p>
        </motion.div>

        {/* ── Infinite Scrolling Tools Marquee ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          viewport={{ once: true }}
          className="mt-16 w-full max-w-5xl mx-auto"
        >
          <p className="font-body uppercase text-xs tracking-[0.2em] mb-6 text-center font-bold" style={{ color: 'var(--orange-500)' }}>
            HERRAMIENTAS QUE DOMINARÁS AL 100% ADENTRO:
          </p>
          <div className="relative w-full overflow-hidden py-4 bg-[rgba(15,30,51,0.5)] border-y border-[rgba(255,255,255,0.05)] rounded-2xl">
            {/* Fade overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0F1E33] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0F1E33] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex gap-8 whitespace-nowrap items-center">
              {[
                { name: 'NanoBanana Pro', logo: '/nano%20banana%20pro.jpg' },
                { name: 'Flux 2.0', logo: '/Flux%202.0.jpg' },
                { name: 'ElevenLabs', logo: '/ElevenLabs.png' },
                { name: 'Magnific AI', logo: '/Magnific%20AI.jpg' },
                { name: 'Kling AI', logo: '/Kling%20AI.jpg' },
                { name: 'Google VEO 3.1', logo: '/Google%20VEO%203.1.png' },
                { name: 'Hedra Voice', logo: '/Hedra%20Voice.png' },
                { name: 'ChatGPT', logo: '/ChatGPT%202.png' },
                { name: 'Lupa AI', logo: '/Lupa%20AI.png' },
                { name: 'OpenArt', logo: '/OpenArt%20Upscaler.png' },
              ].concat([
                { name: 'NanoBanana Pro', logo: '/nano%20banana%20pro.jpg' },
                { name: 'Flux 2.0', logo: '/Flux%202.0.jpg' },
                { name: 'ElevenLabs', logo: '/ElevenLabs.png' },
                { name: 'Magnific AI', logo: '/Magnific%20AI.jpg' },
                { name: 'Kling AI', logo: '/Kling%20AI.jpg' },
                { name: 'Google VEO 3.1', logo: '/Google%20VEO%203.1.png' },
                { name: 'Hedra Voice', logo: '/Hedra%20Voice.png' },
                { name: 'ChatGPT', logo: '/ChatGPT%202.png' },
                { name: 'Lupa AI', logo: '/Lupa%20AI.png' },
                { name: 'OpenArt', logo: '/OpenArt%20Upscaler.png' },
              ]).map((tool, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-xl px-5 py-3 hover:border-[rgba(255,107,53,0.3)] transition-colors duration-300"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-8 h-8 rounded-lg object-cover bg-white"
                  />
                  <span className="font-heading text-sm font-semibold tracking-wider uppercase text-white select-none">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <button onClick={handleCTAClick} className="btn-cta">
            QUIERO EL SISTEMA →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
