import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

export const WHATSAPP_NUMBER = '51993090255'
export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=` +
  encodeURIComponent('¡Hola Era Select Store! Quisiera más información sobre sus productos.')

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Categorías', href: '#categorias' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-cream/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <a
          href="#inicio"
          className="-ml-2 inline-block shrink-0 bg-gradient-to-r from-rose-deep via-rose to-gold bg-clip-text px-2 py-2 pr-4 font-script text-3xl leading-[1.35] text-transparent md:text-4xl"
          aria-label="Era Select Store - Inicio"
        >
          Era Select Store
        </a>

        <div className="flex items-center gap-8 lg:gap-12">
          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-sm font-semibold text-ink-soft transition-colors hover:text-rose"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-rose transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              id="nav-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-slate px-5 py-2 text-sm font-bold text-white shadow-sm transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-snap)] hover:bg-ink hover:shadow-md active:scale-[0.97] sm:inline-flex"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <button
              id="nav-toggle"
              className="rounded-full p-2 text-ink md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Abrir menú"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-gold/20 bg-cream px-5 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-blush/50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
