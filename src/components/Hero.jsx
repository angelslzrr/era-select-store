import { ArrowRight } from 'lucide-react'

// Foto de Unsplash con una gran pared vacía arriba: el texto va libre sobre ese espacio.
const BG =
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=80'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-start bg-cover bg-top"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* Velo casi imperceptible, claro, de izquierda a transparente: refuerza la lectura sin ensuciar la pared */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/40 via-white/10 to-transparent" />

      <div className="animate-fade-up relative mx-auto w-full max-w-7xl px-5 pb-16 pt-12 md:px-10 md:pt-14">
        <div className="max-w-5xl">
          <h1 className="font-serif text-4xl font-bold leading-[1.1] tracking-tight text-ink drop-shadow-lg sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Dale a tu vida un toque cálido, útil y divertido
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink md:text-lg">
            Tecnología útil, comodidad para tu hogar y detalles con estilo. Elige lo que va contigo y
            pídelo directo por WhatsApp.
          </p>
          <a
            id="hero-cta"
            href="#categorias"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate px-8 py-3.5 font-bold text-white shadow-[0_8px_20px_rgba(43,47,51,0.25)] transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-snap)] hover:bg-ink hover:shadow-[0_12px_26px_rgba(43,47,51,0.32)] active:scale-[0.97]"
          >
            Explorar más <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
