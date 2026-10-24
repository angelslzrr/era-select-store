import { useRef, useState } from 'react'
import { MessageCircle, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { WHATSAPP_NUMBER } from './Navbar'
import useReveal from '../hooks/useReveal'
import { productsData, categoryOrder, buildPages } from '../data/productsData'

const orderLink = (title, price) => {
  const priceText = price === 'S/ 00.00' ? '' : ` por ${price}`
  return `https://wa.me/${WHATSAPP_NUMBER}?text=` +
    encodeURIComponent(`¡Hola Era Select Store! Me interesa: ${title}${priceText}`)
}
// Los archivos originales tienen espacios en el nombre.
const src = (path) => encodeURI(path)

const slug = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

function FeaturedCard({ p, eager = false }) {
  return (
    <article className="group relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-3xl bg-peach-deep">
      <img
        src={src(p.image)}
        alt={`${p.title} – ${p.tag}`}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/45 via-45% to-transparent" />
      <div className="relative p-6 md:p-8">
        <span className="inline-block rounded-full bg-cream px-3.5 py-1.5 text-sm font-bold text-slate">
          {p.tag}
        </span>
        <h4 className="mt-3 font-serif text-3xl font-bold leading-tight text-white md:text-4xl">
          {p.title}
        </h4>
        {/* Renderizado condicional del precio */}
        {p.price !== 'S/ 00.00' && (
          <p className="mt-2 font-semibold text-white/90 text-xl tabular-nums tracking-tight">
            {p.price}
          </p>
        )}
        <a
          href={orderLink(p.title, p.price)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${p.title} por WhatsApp`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 font-bold text-slate transition-[transform,background-color] duration-200 ease-[var(--ease-snap)] hover:bg-white active:scale-[0.97]"
        >
          <MessageCircle size={18} /> Pedir por WhatsApp
        </a>
      </div>
    </article>
  )
}

function RowCard({ p }) {
  return (
    <article className="group flex flex-1 items-center gap-4 rounded-3xl border border-gold/20 bg-white p-3.5 transition-colors duration-300 ease-out hover:bg-[#f4f0ea] sm:gap-5 sm:p-4">
      <div className="aspect-square w-28 shrink-0 overflow-hidden rounded-2xl bg-peach sm:w-36">
        <img
          src={src(p.image)}
          alt={`${p.title} – ${p.tag}`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-center">
        <span className="text-sm font-bold text-slate">{p.tag}</span>
        <h4 className="mt-0.5 text-lg font-bold leading-snug text-ink md:text-xl">{p.title}</h4>
        <p className="mt-1 text-[0.95rem] leading-relaxed text-ink">{p.description}</p>
        {/* Renderizado condicional del precio */}
        {p.price !== 'S/ 00.00' && (
          <span className="mt-2.5 font-semibold text-stone-800 text-lg tabular-nums tracking-tight">
            {p.price}
          </span>
        )}
        <a
          href={orderLink(p.title, p.price)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${p.title} por WhatsApp`}
          className="mt-1.5 inline-flex w-fit items-center gap-1.5 font-bold text-slate underline-offset-4 transition-transform duration-200 ease-[var(--ease-snap)] hover:underline active:scale-[0.97]"
        >
          Pedir por WhatsApp <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  )
}

function PagerButton({ onClick, label, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full text-slate/70 transition-[transform,background-color,color] duration-300 ease-out hover:bg-white hover:text-slate active:scale-[0.92]"
    >
      {children}
    </button>
  )
}

function PageDots({ total, current, onSelect, category }) {
  return (
    <div className="flex items-center" role="group" aria-label={`Páginas de ${category}`}>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onSelect(i)}
          aria-label={`Ir a la página ${i + 1} de ${total} en ${category}`}
          aria-current={i === current ? 'true' : undefined}
          className="group flex size-6 items-center justify-center"
        >
          <span
            className={`block size-2.5 rounded-full transition-[transform,background-color] duration-300 ease-out group-active:scale-90 ${i === current ? 'scale-125 bg-slate' : 'bg-slate/25 group-hover:bg-slate/50'
              }`}
          />
        </button>
      ))}
    </div>
  )
}

function CategoryShowcase({ category, items, priority = false }) {
  const pages = buildPages(items)
  const [page, setPage] = useState(0)
  const current = pages[page]
  const multi = pages.length > 1

  const go = (delta) => setPage((p) => (p + delta + pages.length) % pages.length)

  return (
    <div id={`productos-${slug(category)}`} data-reveal="0" className="scroll-mt-28">
      <h3 className="mb-6 font-serif text-2xl font-bold text-ink md:text-3xl">{category}</h3>

      <div
        key={`${category}-${page}`}
        className="page-in grid gap-5 lg:min-h-[36rem] lg:grid-cols-[1.1fr_1fr]"
      >
        <FeaturedCard p={current.featured} eager={priority && page === 0} />
        <div className="flex flex-col gap-5">
          {current.stack.map((p) => (
            <RowCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      {multi && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <PagerButton onClick={() => go(-1)} label={`Página anterior de ${category}`}>
            <ChevronLeft size={20} />
          </PagerButton>
          <PageDots total={pages.length} current={page} onSelect={setPage} category={category} />
          <PagerButton onClick={() => go(1)} label={`Página siguiente de ${category}`}>
            <ChevronRight size={20} />
          </PagerButton>
          <span className="sr-only" aria-live="polite">
            Página {page + 1} de {pages.length}
          </span>
        </div>
      )}
    </div>
  )
}

export default function Products() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} id="productos" className="scroll-mt-16 bg-peach/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div data-reveal="0" className="mb-16 max-w-2xl">
          <h2 className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            Productos estrella
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Piezas seleccionadas para hacer tu día más práctico, cómodo y especial.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {categoryOrder.map((cat, i) => (
            <CategoryShowcase
              key={cat}
              priority={i === 0}
              category={cat}
              items={productsData.filter((p) => p.category === cat)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
