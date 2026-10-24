import { useRef } from 'react'
import { House, Headphones, Shirt, Gift, Sparkles } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const categories = [
  { name: 'Hogar', href: '#productos-hogar', desc: 'Comodidad y orden para tu casa', Icon: House, bg: 'bg-peach-deep' },
  { name: 'Tecnología', href: '#productos-tecnologia', desc: 'Innovación para tu día a día', Icon: Headphones, bg: 'bg-stone' },
  { name: 'Moda', href: '#productos', desc: 'Estilo para todos los días', Icon: Shirt, bg: 'bg-blush' },
  { name: 'Accesorios', href: '#productos', desc: 'Detalles que hacen la diferencia', Icon: Gift, bg: 'bg-peach-deep' },
  { name: 'Novedades', href: '#productos-novedades', desc: 'Lo nuevo que acaba de llegar', Icon: Sparkles, bg: 'bg-stone' },
]

export default function Categories() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} id="categorias" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div data-reveal="0" className="mb-14 max-w-2xl">
        <h2 className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
          Nuestras categorías
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-ink">
          Todo para tu casa, tu trabajo y tu día a día.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {categories.map(({ name, href, desc, Icon, bg }, i) => (
          <a
            key={name}
            id={`cat-${name.toLowerCase()}`}
            href={href}
            data-reveal={i}
            className="group flex flex-col items-start rounded-3xl border border-gold/25 bg-white/70 p-6 transition-[transform,box-shadow,border-color] duration-200 ease-[var(--ease-snap)] hover:-translate-y-1.5 hover:border-slate/30 hover:shadow-[0_14px_30px_rgba(43,47,51,0.12)] active:scale-[0.97]"
          >
            <span className={`flex size-16 items-center justify-center rounded-2xl ${bg} text-slate`}>
              <Icon size={30} strokeWidth={1.6} />
            </span>
            <h3 className="mt-5 text-lg font-bold text-ink">{name}</h3>
            <p className="mt-1 text-base leading-relaxed text-ink-soft">{desc}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
