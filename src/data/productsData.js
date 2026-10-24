/**
 * Catálogo de productos de Era Select Store.
 *
 * - `page`: número de página dentro de su categoría (cada página = 1 destacado + el resto apilado).
 * - `isFeatured`: producto que ocupa la tarjeta grande de su página. Si una página no tiene
 *   ninguno marcado, el primero de esa página hace de destacado.
 * - `price`: precio del producto formateado (ej. 'S/ 89.90', o 'S/ 00.00' para colecciones sin precio unitario directo).
 * - `image`: ruta dentro de /public (el componente la codifica con encodeURI porque los
 *   archivos originales tienen espacios en el nombre).
 * - Hogar sólo usa las imágenes dentro de las subcarpetas Hogar-page1 … Hogar-Page5;
 *   las fotos sueltas en la raíz de /Hogar se ignoran a propósito.
 */

const BASE = '/images/catalogo'

export const productsData = [
  // ───────────────────────── HOGAR · Página 1 ─────────────────────────
  {
    id: 'hogar-sanrio-juntas',
    category: 'Hogar',
    page: 1,
    title: 'Colección Sanrio',
    description: 'Cuatro tazas con tapa y sorbete para quien disfruta cada bebida con un toque de ternura.',
    tag: 'Colección',
    price: 'S/ 00.00',
    image: `${BASE}/Hogar/Hogar-page1/Tazas Sanrio juntas.webp`,
    isFeatured: true,
  },
  {
    id: 'hogar-kuromi',
    category: 'Hogar',
    page: 1,
    title: 'Taza Kuromi Magic',
    description: 'Cerámica con tapa y sorbete, entregada en caja lista para regalar.',
    tag: 'Hogar',
    price: 'S/ 89.90',
    image: `${BASE}/Hogar/Hogar-page1/Taza Sanrio Juromi con tapa y caja.webp`,
  },
  {
    id: 'hogar-hello-kitty',
    category: 'Hogar',
    page: 1,
    title: 'Taza Hello Kitty Lazo',
    description: 'Un clásico atemporal con tapa y caja, perfecto para tu rincón de café.',
    tag: 'Hogar',
    price: 'S/ 89.90',
    image: `${BASE}/Hogar/Hogar-page1/Taza Sanrio Hello Kitty con tapa y caja.webp`,
  },
  {
    id: 'hogar-my-melody',
    category: 'Hogar',
    page: 1,
    title: 'Taza My Melody Dulce',
    description: 'Suave por fuera, práctica por dentro: incluye tapa para conservar tu bebida.',
    tag: 'Hogar',
    price: 'S/ 89.90',
    image: `${BASE}/Hogar/Hogar-page1/Taza Sanrio My Melody con tapa y caja.webp`,
  },

  // ───────────────────────── HOGAR · Página 2 ─────────────────────────
  {
    id: 'hogar-marie-juntas',
    category: 'Hogar',
    page: 2,
    title: 'Colección Marie',
    description: 'Tazas Marie en rosa suave: ideales para compartir o regalar.',
    tag: 'Colección',
    price: 'S/ 00.00',
    image: `${BASE}/Hogar/Hogar-Page2/Tazas gata Marie juntas.webp`,
    isFeatured: true,
  },
  {
    id: 'hogar-marie-rose',
    category: 'Hogar',
    page: 2,
    title: 'Taza Marie Rosé',
    description: 'Elegancia en rosa con caja de regalo incluida.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page2/Taza gata Marie rosada con caja.webp`,
  },
  {
    id: 'hogar-marie-petite',
    category: 'Hogar',
    page: 2,
    title: 'Taza Marie Petite',
    description: 'Formato bajo y cómodo de sostener, con caja lista para obsequiar.',
    tag: 'Hogar',
    price: 'S/ 79.90',
    image: `${BASE}/Hogar/Hogar-Page2/Taza baja gata Marie rosada con caja.webp`,
  },

  // ───────────────────────── HOGAR · Página 3 ─────────────────────────
  {
    id: 'hogar-minnie-daisy-juntas',
    category: 'Hogar',
    page: 3,
    title: 'Dúo Minnie & Daisy',
    description: 'Dos clásicos en un solo set, listos para estrenar en tu mesa.',
    tag: 'Colección',
    price: 'S/ 00.00',
    image: `${BASE}/Hogar/Hogar-Page3/Tazas Minnie y Daisy juntas.webp`,
    isFeatured: true,
  },
  {
    id: 'hogar-minnie',
    category: 'Hogar',
    page: 3,
    title: 'Taza Minnie Rosé',
    description: 'Un toque romántico para tu desayuno, con caja de presentación.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page3/Taza rosada Minnie con caja.webp`,
  },
  {
    id: 'hogar-mickey',
    category: 'Hogar',
    page: 3,
    title: 'Taza Mickey Sol',
    description: 'Color alegre y caja de regalo para iluminar cualquier mañana.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page3/Taza amarilla Mickey con caja.webp`,
  },
  {
    id: 'hogar-donald-classic',
    category: 'Hogar',
    page: 3,
    title: 'Taza Donald Classic',
    description: 'Un personaje querido en cerámica, con caja incluida.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page3/Taza Donald con caja de Mickey.webp`,
  },

  // ───────────────────────── HOGAR · Página 4 ─────────────────────────
  {
    id: 'hogar-tom',
    category: 'Hogar',
    page: 4,
    title: 'Taza Tom Cielo',
    description: 'Celeste suave en cerámica, con caja de presentación.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page4/Taza celeste ceramica Tom con caja.webp`,
    isFeatured: true,
  },
  {
    id: 'hogar-jerry',
    category: 'Hogar',
    page: 4,
    title: 'Taza Jerry Sunny',
    description: 'Cerámica amarilla con carácter y caja para regalo.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page4/Taza amarilla ceramica Jerry con caja.webp`,
  },
  {
    id: 'hogar-lotso',
    category: 'Hogar',
    page: 4,
    title: 'Taza Lotso Abrazo',
    description: 'Tan acogedora como un abrazo, con caja incluida.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page4/Taza Lotso con caja.webp`,
  },
  {
    id: 'hogar-stitch',
    category: 'Hogar',
    page: 4,
    title: 'Taza Stitch Aloha',
    description: 'Diversión en cerámica para quienes no se toman la mañana tan en serio.',
    tag: 'Hogar',
    price: 'S/ 84.90',
    image: `${BASE}/Hogar/Hogar-Page4/Taza Stitch con caja.webp`,
  },

  // ───────────────────────── HOGAR · Página 5 ─────────────────────────
  {
    id: 'hogar-gatito-duo',
    category: 'Hogar',
    page: 5,
    title: 'Dúo Gatito Zen',
    description: 'Tazas de cerámica con tapa de bambú y cuchara incluida, para tus pausas de calma.',
    tag: 'Colección',
    price: 'S/ 00.00',
    image: `${BASE}/Hogar/Hogar-Page5/Tazas gatito lila y amarilla con tapa bambu y cuchara.webp`,
    isFeatured: true,
  },
  {
    id: 'hogar-gatito-celeste',
    category: 'Hogar',
    page: 5,
    title: 'Taza Gatito Celeste Zen',
    description: 'Tapa de bambú y cuchara incluida: todo lo que necesitas en una sola pieza.',
    tag: 'Práctico',
    price: 'S/ 64.90',
    image: `${BASE}/Hogar/Hogar-Page5/Taza gatito celeste con tapa bambu y cuchara.webp`,
  },
  {
    id: 'hogar-gatito-rosado',
    category: 'Hogar',
    page: 5,
    title: 'Taza Gatito Rosé Zen',
    description: 'Cerámica en rosa suave con tapa de bambú y cuchara para tus pausas.',
    tag: 'Práctico',
    price: 'S/ 64.90',
    image: `${BASE}/Hogar/Hogar-Page5/Taza gatito rosada con tapa bambu y cuchara.webp`,
  },

  // ───────────────────────── TECNOLOGÍA · Página 1 ─────────────────────────
  {
    id: 'tec-lotso',
    category: 'Tecnología',
    page: 1,
    title: 'Audífonos Lotso Soft',
    description: 'Diseño con personalidad para escuchar tu música favorita todos los días.',
    tag: 'Tecnología',
    price: 'S/ 79.90',
    image: `${BASE}/Tecnologia/Audifonos Lotso.webp`,
  },
  {
    id: 'tec-mickey',
    category: 'Tecnología',
    page: 1,
    title: 'Audífonos Mickey Beat',
    description: 'Un clásico llevado a tu rutina: estilo y sonido en un solo accesorio.',
    tag: 'Tecnología',
    price: 'S/ 79.90',
    image: `${BASE}/Tecnologia/Audifonos Mickey.webp`,
  },
  {
    id: 'tec-minnie',
    category: 'Tecnología',
    page: 1,
    title: 'Audífonos Minnie Bow',
    description: 'Detalle delicado y presencia divertida para acompañarte a donde vayas.',
    tag: 'Tecnología',
    price: 'S/ 79.90',
    image: `${BASE}/Tecnologia/Audifonos Minnie.webp`,
  },
  {
    id: 'tec-pooh',
    category: 'Tecnología',
    page: 1,
    title: 'Audífonos Pooh Honey',
    description: 'Calidez y buen humor para tus playlists de siempre.',
    tag: 'Tecnología',
    price: 'S/ 79.90',
    image: `${BASE}/Tecnologia/Audifonos Winnie Pooh.webp`,
  },

  // ───────────────────────── TECNOLOGÍA · Página 2 ─────────────────────────
  // "Ventilador de perfil.png" queda fuera del catálogo por indicación del cliente.
  {
    id: 'tec-ventilador-negro',
    category: 'Tecnología',
    page: 2,
    title: 'Ventilador Portátil Negro',
    description: 'Un acabado sobrio que combina con tu escritorio, tu estudio o tu oficina.',
    tag: 'Práctico',
    price: 'S/ 44.90',
    image: `${BASE}/Tecnologia/Ventilador negro.webp`,
    isFeatured: true,
  },
  {
    id: 'tec-ventilador-crema',
    category: 'Tecnología',
    page: 2,
    title: 'Ventilador Portátil Crema',
    description: 'Pantalla digital y base de apoyo: frescura a la mano en tu escritorio.',
    tag: 'Práctico',
    price: 'S/ 44.90',
    image: `${BASE}/Tecnologia/Ventilador crema.webp`,
  },
  {
    id: 'tec-ventilador-blanco',
    category: 'Tecnología',
    page: 2,
    title: 'Ventilador Portátil Blanco',
    description: 'Compacto, con acabado limpio y fácil de ubicar en cualquier espacio.',
    tag: 'Práctico',
    price: 'S/ 44.90',
    image: `${BASE}/Tecnologia/Ventilador blanco.webp`,
  },

  // ───────────────────────── NOVEDADES · Página 1 ─────────────────────────
  {
    id: 'nov-vasos-juntas',
    category: 'Novedades',
    page: 1,
    title: 'Colección Vasos 3D',
    description: 'Vasos térmicos de 700 ml con figuras en relieve: hidratación con mucho estilo.',
    tag: 'Novedad',
    price: 'S/ 00.00',
    image: `${BASE}/Novedades/Vasos termicos 3D Sanrio 700 ml juntas.webp`,
    isFeatured: true,
  },
  {
    id: 'nov-vaso-kuromi',
    category: 'Novedades',
    page: 1,
    title: 'Vaso Kuromi 3D',
    description: 'Térmico de 700 ml con figura en relieve, ideal para llevar contigo.',
    tag: 'Novedad',
    price: 'S/ 69.90',
    image: `${BASE}/Novedades/Vaso termico 3D Sanrio Kuromi 700 ml.webp`,
  },
  {
    id: 'nov-vaso-hello-kitty',
    category: 'Novedades',
    page: 1,
    title: 'Vaso Hello Kitty 3D',
    description: 'Térmico de 700 ml para tus bebidas, con un diseño que se nota.',
    tag: 'Novedad',
    price: 'S/ 69.90',
    image: `${BASE}/Novedades/Vaso termico 3D Sanrio Hello Kitty 700 ml.webp`,
  },
  {
    id: 'nov-vaso-my-melody',
    category: 'Novedades',
    page: 1,
    title: 'Vaso My Melody 3D',
    description: 'Capacidad de 700 ml y un acabado dulce para acompañar tu día.',
    tag: 'Novedad',
    price: 'S/ 69.90',
    image: `${BASE}/Novedades/Vaso termico 3D Sanrio My Melody 700 ml.webp`,
  },
]

/** Orden en que se muestran las categorías en la página. */
export const categoryOrder = ['Hogar', 'Tecnología', 'Novedades']

/**
 * Agrupa los productos de una categoría por su campo `page` (orden ascendente).
 * Cada página devuelve { featured, stack }: el producto con `isFeatured` (o, si no hay,
 * el primero de la página) y el resto en el orden en que aparecen en el array.
 */
export function buildPages(items) {
  const byPage = new Map()
  items.forEach((item) => {
    const key = item.page ?? 1
    if (!byPage.has(key)) byPage.set(key, [])
    byPage.get(key).push(item)
  })

  return [...byPage.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, group]) => {
      const featured = group.find((p) => p.isFeatured) ?? group[0]
      return { featured, stack: group.filter((p) => p !== featured) }
    })
}
