import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "The Heritage",
    slug: "the-heritage",
    category: "Classic",
    material: "Solid Mahogany",
    style: "Traditional Panel",
    price: 899,
    description:
      "Handcrafted from premium Honduran mahogany, The Heritage door embodies timeless elegance. Each panel features intricate raised detailing that catches light beautifully, making every entry a statement of refined taste.",
    features: [
      "Solid Honduran mahogany construction",
      "Classic raised panel design",
      "Hand-finished with Danish oil",
      "Stainless steel hardware included",
      "Weather-sealed for exterior use",
      "5-year craftsmanship warranty",
    ],
    dimensions: '36" x 80" x 1.75"',
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop",
    ],
    rating: 4.8,
    inStock: true,
  },
  {
    id: "2",
    name: "The Modernist",
    slug: "the-modernist",
    category: "Modern",
    material: "White Oak",
    style: "Slab",
    price: 1299,
    originalPrice: 1499,
    description:
      "Clean lines and minimal form define The Modernist. Crafted from quarter-sawn white oak with a natural matte finish, this slab door brings contemporary sophistication to any space.",
    features: [
      "Quarter-sawn white oak",
      "Minimalist slab design",
      "Natural matte UV-cured finish",
      "Concealed hinge system",
      "Acoustic core for sound reduction",
      "10-year structural warranty",
    ],
    dimensions: '36" x 84" x 1.75"',
    image: "https://images.pexels.com/photos/20778677/pexels-photo-20778677.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    images: [
      "https://images.pexels.com/photos/20778677/pexels-photo-20778677.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/5438860/pexels-photo-5438860.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    ],
    rating: 4.6,
    inStock: true,
    isSale: true,
  },
  {
    id: "3",
    name: "The Versailles",
    slug: "the-versailles",
    category: "Luxury",
    material: "French Oak",
    style: "French Double Door",
    price: 2499,
    description:
      "Inspired by the palace gates of France, The Versailles is a masterpiece of craftsmanship. This pair of French doors features hand-carved floral motifs and beveled glass inserts.",
    features: [
      "French oak with hand-carving",
      "Dual door system with astragal",
      "Beveled double-glazed glass panels",
      "Forged iron decorative hardware",
      "Multi-point locking system",
      "Bespoke sizing available",
    ],
    dimensions: '72" x 96" x 2" (pair)',
    image: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&h=800&fit=crop",
    ],
    rating: 5.0,
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    name: "The Rustic",
    slug: "the-rustic",
    category: "Rustic",
    material: "Reclaimed Barn Wood",
    style: "Sliding Barn Door",
    price: 749,
    description:
      "Authentic character meets modern function. The Rustic is crafted from reclaimed barn wood, each door telling a unique story through its natural grain, knots, and weathered patina.",
    features: [
      "100% reclaimed barn wood",
      "Industrial steel sliding hardware",
      "Each door is uniquely grained",
      "Eco-friendly reclaimed materials",
      "Smooth-glide roller system",
      "Interior use recommended",
    ],
    dimensions: '42" x 84" x 1.5"',
    image: "https://images.pexels.com/photos/17762950/pexels-photo-17762950.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    images: [
      "https://images.pexels.com/photos/17762950/pexels-photo-17762950.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/6931451/pexels-photo-6931451.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    ],
    rating: 4.7,
    inStock: true,
  },
  {
    id: "5",
    name: "The Artisan",
    slug: "the-artisan",
    category: "Luxury",
    material: "Black Walnut",
    style: "Carved",
    price: 1899,
    description:
      "A canvas for artistry. The Artisan door features deep hand-carved patterns inspired by Mediterranean architecture, transforming your entryway into a gallery of fine wood craftsmanship.",
    features: [
      "Solid black walnut, kiln-dried",
      "Hand-carved geometric patterns",
      "Triple-coated lacquer finish",
      "Custom panel options available",
      "Mortise lock preparation",
      "Heirloom-quality construction",
    ],
    dimensions: '36" x 80" x 2"',
    image: "https://images.pexels.com/photos/28406962/pexels-photo-28406962.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    images: [
      "https://images.pexels.com/photos/28406962/pexels-photo-28406962.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/30564716/pexels-photo-30564716.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    ],
    rating: 4.9,
    inStock: true,
    isNew: true,
  },
  {
    id: "6",
    name: "The Craftsman",
    slug: "the-craftsman",
    category: "Classic",
    material: "Red Oak",
    style: "Mission / Craftsman",
    price: 1099,
    description:
      "Honoring the American Arts & Crafts movement, The Craftsman door features clean vertical lines and hand-pegged joinery. Built from solid red oak with a warm amber stain.",
    features: [
      "Solid red oak construction",
      "Mission-style vertical battens",
      "Hand-pegged mortise & tenon joints",
      "Amber aniline dye stain",
      "Satin polyurethane finish",
      "Designed to match Craftsman homes",
    ],
    dimensions: '36" x 80" x 1.75"',
    image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=800&fit=crop",
    ],
    rating: 4.5,
    inStock: true,
  },
  {
    id: "7",
    name: "The Contemporary",
    slug: "the-contemporary",
    category: "Modern",
    material: "Ash",
    style: "Vertical Grain",
    price: 1599,
    description:
      "Sleek and sophisticated, The Contemporary showcases vertically-oriented ash veneer in a continuous grain pattern. A flush-mounted handle completes the seamless look.",
    features: [
      "European ash veneer over engineered core",
      "Continuous vertical grain matching",
      "Flush-mounted aluminum handle",
      "Magnetic catch system",
      "Fire-rated core option available",
      "Commercial and residential grade",
    ],
    dimensions: '36" x 84" x 1.75"',
    image: "https://images.pexels.com/photos/3060669/pexels-photo-3060669.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    images: [
      "https://images.pexels.com/photos/3060669/pexels-photo-3060669.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/7031409/pexels-photo-7031409.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    ],
    rating: 4.4,
    inStock: true,
  },
  {
    id: "8",
    name: "The Colonial",
    slug: "the-colonial",
    category: "Classic",
    material: "Poplar",
    style: "Raised Panel",
    price: 679,
    description:
      "An American classic at an accessible price. The Colonial features six raised panels in durable poplar, primed and ready for your choice of paint. Timeless style, everyday value.",
    features: [
      "Select grade poplar",
      "Six-panel raised design",
      "Primed, ready to paint",
      "Pre-hung option available",
      "Budget-friendly craftsmanship",
      "2-year warranty",
    ],
    dimensions: '32" x 80" x 1.375"',
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=600&h=800&fit=crop",
    ],
    rating: 4.3,
    inStock: true,
  },
  {
    id: "9",
    name: "The Nordic",
    slug: "the-nordic",
    category: "Modern",
    material: "Birch",
    style: "Scandinavian",
    price: 949,
    description:
      "Light, bright, and effortlessly elegant. The Nordic door embodies Scandinavian design principles — clean lines, natural birch veneer, and a focus on simplicity that enhances any interior.",
    features: [
      "Baltic birch veneer over particle core",
      "Scandinavian minimalist design",
      "Clear matte lacquer finish",
      "Lightweight engineered construction",
      "Paint-grade option available",
      "FSC-certified materials",
    ],
    dimensions: '36" x 80" x 1.375"',
    image: "https://images.pexels.com/photos/7755136/pexels-photo-7755136.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    images: [
      "https://images.pexels.com/photos/7755136/pexels-photo-7755136.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/2467285/pexels-photo-2467285.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    ],
    rating: 4.6,
    inStock: true,
  },
  {
    id: "10",
    name: "The Imperial",
    slug: "the-imperial",
    category: "Luxury",
    material: "African Mahogany",
    style: "Grand Entry",
    price: 3299,
    description:
      "Make an unforgettable first impression. The Imperial is a grand entry door crafted from African mahogany with hand-carved rosettes, sidelights, and an elegant transom — the pinnacle of entrance design.",
    features: [
      "African mahogany with hand-carved details",
      "Matching sidelights and transom",
      "Double-bore mortise lock system",
      "Heat-insulated engineered core",
      "Bronze architectural hardware",
      "Lifetime limited warranty",
    ],
    dimensions: '48" x 96" x 2" (with sidelights)',
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=800&fit=crop",
    ],
    rating: 5.0,
    inStock: true,
    isNew: true,
  },
  {
    id: "11",
    name: "The Garden",
    slug: "the-garden",
    category: "Modern",
    material: "Sapele",
    style: "Glass & Wood",
    price: 1449,
    description:
      "Bring the outdoors in. The Garden door pairs rich sapele wood with energy-efficient frosted glass panels, creating a bright, airy transition between your interior and exterior spaces.",
    features: [
      "Sapele wood frame with frosted glass inserts",
      "Dual-pane tempered glass (argon filled)",
      "UV-resistant finish",
      "Low-E glass coating for energy efficiency",
      "Screen-ready track system",
      "5-year glass warranty",
    ],
    dimensions: '36" x 80" x 1.75"',
    image: "https://images.pexels.com/photos/11025279/pexels-photo-11025279.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    images: [
      "https://images.pexels.com/photos/11025279/pexels-photo-11025279.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/15676408/pexels-photo-15676408.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    ],
    rating: 4.7,
    inStock: true,
  },
  {
    id: "12",
    name: "The Urban",
    slug: "the-urban",
    category: "Modern",
    material: "Engineered Wood",
    style: "Industrial",
    price: 829,
    description:
      "Raw meets refined. The Urban door features an engineered wood core with a dark matte finish and exposed stainless steel accent strips — perfect for lofts, studios, and contemporary offices.",
    features: [
      "Engineered wood with HPL laminate",
      "Matte charcoal finish",
      "Stainless steel accent inlays",
      "Scratch and impact resistant",
      "Commercial grade hinges included",
      "Acoustic rated STC 35",
    ],
    dimensions: '36" x 84" x 1.75"',
    image: "https://images.pexels.com/photos/8316373/pexels-photo-8316373.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    images: [
      "https://images.pexels.com/photos/8316373/pexels-photo-8316373.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/7031409/pexels-photo-7031409.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    ],
    rating: 4.2,
    inStock: true,
    isSale: true,
  },
];

export const categories = ["All", "Classic", "Modern", "Luxury", "Rustic"] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.rating >= 4.7).slice(0, 4);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getSaleProducts(): Product[] {
  return products.filter((p) => p.isSale);
}
