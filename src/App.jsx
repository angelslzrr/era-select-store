import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import Products from './components/Products'
import Contact from './components/Contact'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-ink-soft">
        © {CURRENT_YEAR} Era Select Store · Hecho con cariño
      </footer>
    </>
  )
}
