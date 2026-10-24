import { useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from './Navbar'
import useReveal from '../hooks/useReveal'

const steps = [
  { title: 'Elige lo que te gusta', text: 'Mira las categorías y los productos destacados.' },
  { title: 'Escríbenos por WhatsApp', text: 'Cuéntanos qué te interesó y resolvemos tus dudas.' },
  { title: 'Coordinamos tu pedido', text: 'Acordamos pago y entrega contigo, sin complicaciones.' },
]

export default function Contact() {
  const ref = useRef(null)
  useReveal(ref)

  return (
    <section ref={ref} id="contacto" className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 rounded-[2rem] bg-peach p-8 md:p-14 lg:grid-cols-2 lg:gap-16 lg:p-20">
        <div>
          <h2 data-reveal="0" className="font-serif text-4xl font-bold leading-tight text-ink md:text-5xl">
            ¿Listo para encontrar lo tuyo?
          </h2>
          <p data-reveal="1" className="mt-5 max-w-md text-lg leading-relaxed text-ink">
            Escríbenos por WhatsApp y te ayudamos a elegir lo más práctico para ti, tu casa o para regalar.
          </p>
          <div data-reveal="2" className="mt-9">
            <a
              id="contact-whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-slate px-8 py-4 text-lg font-bold text-white shadow-[0_8px_20px_rgba(43,47,51,0.25)] transition-[transform,box-shadow,background-color] duration-200 ease-[var(--ease-snap)] hover:bg-ink hover:shadow-[0_12px_26px_rgba(43,47,51,0.32)] active:scale-[0.97]"
            >
              <MessageCircle /> Escríbenos por WhatsApp
            </a>
            <p className="mt-4 text-base text-ink">
              o llámanos al{' '}
              <a href="tel:+51993090255" className="font-bold text-slate underline-offset-4 hover:underline">
                +51 993 090 255
              </a>
            </p>
          </div>
        </div>

        <div>
          <h3 data-reveal="1" className="font-serif text-2xl font-bold text-ink">
            Así de fácil es pedir
          </h3>
          <ol className="mt-6 space-y-4">
            {steps.map((s, i) => (
              <li
                key={s.title}
                data-reveal={i + 2}
                className="flex items-start gap-4 rounded-2xl bg-white/70 p-5 transition-[background-color] duration-200 ease-[var(--ease-snap)] hover:bg-white"
              >
                <span
                  aria-hidden="true"
                  className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate font-bold text-white"
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-lg font-bold text-ink">{s.title}</p>
                  <p className="mt-0.5 text-base leading-relaxed text-ink">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
