'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Garantia() {

  const power3Out: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const power2Out: [number, number, number, number] = [0.25, 1, 0.5, 1]

  return (
    <section 
      id="garantia" 
      className="py-20 w-full relative overflow-hidden flex items-center justify-center select-none" 
      style={{ backgroundColor: '#f5f1ea' }}
    >
      <div className="container-base max-w-[760px] w-full text-center relative z-10 px-5 lg:px-8">
        
        {/* Garantia Card container — cinematic scale */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: power2Out }}
          className="bg-white border-2 border-[#006b5b]/42 rounded-[32px] p-[32px_24px] lg:p-[48px_52px] shadow-[0_24px_70px_rgba(16,24,32,0.10)] relative overflow-hidden flex flex-col items-center select-none"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(0,107,91,0.015) 100%)',
          }}
        >
          
          {/* Sello Verde stamp — scales from 0.7 with slight rotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12, ease: power3Out }}
            className="w-20 h-20 rounded-full bg-[#006b5b]/10 border-2 border-[#006b5b] flex flex-col items-center justify-center mb-6 relative select-none shrink-0"
          >
            <Check 
              size={16} 
              strokeWidth={2.5} 
              className="text-[#006b5b] mb-0.5 select-none" 
            />
            <span 
              className="font-heading font-extrabold text-[14px] text-[#006b5b] tracking-[0.04em] leading-none select-none"
            >
              7 DÍAS
            </span>
          </motion.div>

          {/* H2 Title */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: power3Out }}
            className="font-heading font-extrabold text-[#101820] text-center mb-6 text-[24px] lg:text-[32px] leading-[1.15] select-none"
          >
            ENTRA SIN RIESGO. PRUÉBALO 7 DÍAS.
          </motion.h2>

          {/* Cuerpo Text */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.14, ease: power3Out }}
            className="font-body font-normal text-[16px] lg:text-[17px] leading-[1.7] mb-6 max-w-[600px] mx-auto select-none"
            style={{ color: 'rgba(61, 44, 46, 0.82)' }}
          >
            Sé que decidir invertir da nervios. Por eso te doy 7 días para entrar, ver el sistema completo y aplicarlo. Si en 7 días sientes que esto no es para ti — me escribes y te devuelvo cada centavo. Sin trámites raros. Sin letra chica.
          </motion.p>

          {/* Cierre en Bold */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: power3Out }}
            className="text-center w-full select-none"
          >
            <p className="font-heading font-bold text-[#101820] text-[18px] lg:text-[22px] leading-[1.4] select-none">
              El verdadero riesgo no es entrar.
            </p>
            <p className="font-heading font-bold text-[#101820] text-[18px] lg:text-[22px] leading-[1.4] mt-1 select-none">
              El verdadero riesgo es{' '}
              <span className="text-[#006b5b] font-extrabold select-none">
                seguir un mes más siendo invisible
              </span>{' '}
              para las marcas.
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}
