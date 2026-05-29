import LenisProvider from '@/lib/lenis-provider'
import Navbar from '@/components/ui/Navbar'
import StickyCTA from '@/components/ui/StickyCTA'
import Hero from '@/components/sections/Hero'
import Dolor from '@/components/sections/Dolor'
import Espejo from '@/components/sections/Espejo'
import Transformacion from '@/components/sections/Transformacion'
import Producto from '@/components/sections/Producto'
import Modulos from '@/components/sections/Modulos'
import Bonos from '@/components/sections/Bonos'
import QuienSoy from '@/components/sections/QuienSoy'
import ParaQuien from '@/components/sections/ParaQuien'
import Precio from '@/components/sections/Precio'
import Garantia from '@/components/sections/Garantia'
import FAQ from '@/components/sections/FAQ'
import Cierre from '@/components/sections/Cierre'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <LenisProvider>
      <Navbar />
      <main id="inicio">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Dolor */}
        <Dolor />

        {/* 3. Espejo / Validación */}
        <Espejo />

        {/* 4. Transformación (tabla antes/después + mockup iPhone) */}
        <Transformacion />

        {/* 5. Presentación del producto */}
        <Producto />

        {/* 6. Los 9 módulos */}
        <section id="modulos">
          <Modulos />
        </section>

        {/* 7. Bonos */}
        <Bonos />

        {/* 8. Quién soy */}
        <QuienSoy />

        {/* 9. No es para ti / Sí es para ti */}
        <ParaQuien />

        {/* 10. Stack de valor + precio */}
        <Precio />

        {/* 11. Garantía */}
        <Garantia />

        {/* 12. FAQ */}
        <FAQ />

        {/* 13. Cierre final */}
        <Cierre />
      </main>

      <Footer />

      {/* Sticky mobile CTA — visible al hacer scroll */}
      <StickyCTA />
    </LenisProvider>
  )
}
