export type CategoryName = "Women's Wear" | "Beauty" | "Health & Wellness";

export interface Product {
  id: string;
  name: string;
  category: CategoryName;
  subCategory:
    | "Dresses"
    | "Tops"
    | "Outerwear"
    | "Handbags"
    | "Skincare"
    | "Personal Care"
    | "Wellness Essentials";
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  hoverImage: string;
  description: string;
  details: string[];
  variants: string[];
  isNewArrival?: boolean;
  ritualGroup?: "Skincare" | "Personal Care" | "Wellness Essentials";
}

export interface CategoryCardData {
  id: string;
  title: CategoryName;
  tagline: string;
  cta: string;
  image: string;
  itemCount: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
  purchasedItem: string;
  rating: number;
}

export const FEATURED_CATEGORIES: CategoryCardData[] = [
  {
    id: "cat-womens-wear",
    title: "Women's Wear",
    tagline:
      "Fashion-forward clothing, everyday essentials, and statement pieces tailored in natural silks and breathable wool.",
    cta: "Explore Women's Wear",
    image:
      "https://images.pexels.com/photos/6727407/pexels-photo-6727407.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    itemCount: "01 — Apparel & Accessories",
  },
  {
    id: "cat-beauty",
    title: "Beauty",
    tagline:
      "Clean botanical beauty and personal-care essentials formulated for luminous skin and effortless everyday confidence.",
    cta: "Explore Beauty",
    image:
      "https://images.pexels.com/photos/8148742/pexels-photo-8148742.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    itemCount: "02 — Botanical Formulations",
  },
  {
    id: "cat-wellness",
    title: "Health & Wellness",
    tagline:
      "Restorative wellness rituals and serene tactile essentials designed to support a calm, balanced lifestyle.",
    cta: "Explore Wellness",
    image:
      "https://images.pexels.com/photos/7797748/pexels-photo-7797748.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    itemCount: "03 — Daily Rituals",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "aur-01",
    name: "Céleste Draped Silk Slip Dress",
    category: "Women's Wear",
    subCategory: "Dresses",
    price: 340,
    rating: 4.9,
    reviewCount: 64,
    image: "/images/promo-editorial.jpg",
    hoverImage:
      "https://images.pexels.com/photos/7166021/pexels-photo-7166021.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Cut on the bias from 100% heavyweight mulberry silk in warm buttercream, featuring a subtle front twist and fluid floor-skimming drape.",
    details: [
      "100% 22-momme organic mulberry silk",
      "Bias-cut silhouette with cowl neckline",
      "French seams for weightless movement",
    ],
    variants: ["XS", "S", "M", "L"],
    isNewArrival: true,
  },
  {
    id: "aur-02",
    name: "Atelier Double-Faced Wool Trench",
    category: "Women's Wear",
    subCategory: "Outerwear",
    price: 580,
    rating: 5.0,
    reviewCount: 48,
    image:
      "https://images.pexels.com/photos/4456729/pexels-photo-4456729.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/6726841/pexels-photo-6726841.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "An architectural longline coat crafted from brushed merino wool in toasted sand, finished with horn buttons and relaxed storm lapels.",
    details: [
      "90% virgin merino wool, 10% cashmere",
      "Unlined hand-finished seams",
      "Includes matching tailored waist tie",
    ],
    variants: ["XS", "S", "M", "L"],
    isNewArrival: true,
  },
  {
    id: "aur-03",
    name: "Margaux Linen & Silk Atelier Blouse",
    category: "Women's Wear",
    subCategory: "Tops",
    price: 215,
    rating: 4.8,
    reviewCount: 82,
    image:
      "https://images.pexels.com/photos/6203797/pexels-photo-6203797.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/15764812/pexels-photo-15764812.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Crisp yet supple ivory blouse woven from Belgian flax linen and fine silk threads, tailored for effortless day-to-evening dressing.",
    details: [
      "65% Belgian linen, 35% mulberry silk",
      "Concealed mother-of-pearl placket",
      "Relaxed sculptural cuff sleeves",
    ],
    variants: ["XS", "S", "M", "L"],
  },
  {
    id: "aur-04",
    name: "Sienna Sculpted Calfskin Saddle Bag",
    category: "Women's Wear",
    subCategory: "Handbags",
    price: 460,
    rating: 4.9,
    reviewCount: 53,
    image:
      "https://images.pexels.com/photos/15059374/pexels-photo-15059374.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/22432989/pexels-photo-22432989.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Handcrafted in rich espresso cocoa vegetable-tanned leather with burnished brass hardware and a suede-lined interior compartment.",
    details: [
      "Full-grain Italian calfskin leather",
      "Adjustable shoulder & crossbody strap",
      "Hand-painted cocoa edge finishing",
    ],
    variants: ["Espresso Cocoa", "Warm Chestnut"],
    isNewArrival: true,
  },
  {
    id: "aur-05",
    name: "Botanical Cellular Barrier Serum",
    category: "Beauty",
    subCategory: "Skincare",
    ritualGroup: "Skincare",
    price: 98,
    rating: 4.9,
    reviewCount: 129,
    image:
      "https://images.pexels.com/photos/7797733/pexels-photo-7797733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/7795849/pexels-photo-7795849.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "A silky cold-pressed squalane, sea buckthorn, and niacinamide serum housed in UV-protective amber glass for deep radiance.",
    details: [
      "30 ml / 1.0 fl oz apothecary dropper",
      "Cold-pressed botanical actives & ceramides",
      "Dermatologist tested, fragrance-free",
    ],
    variants: ["30 ml", "50 ml"],
    isNewArrival: true,
  },
  {
    id: "aur-06",
    name: "Velvet Crème Hydrating Balm",
    category: "Beauty",
    subCategory: "Skincare",
    ritualGroup: "Skincare",
    price: 84,
    rating: 4.8,
    reviewCount: 94,
    image:
      "https://images.pexels.com/photos/30345428/pexels-photo-30345428.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/17698355/pexels-photo-17698355.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Whipped shea, cloudberry peptides, and rosehip lipid moisture crème that melts onto skin for a cushioned, satin finish.",
    details: [
      "50 ml refillable frosted glass jar",
      "Rich in plant peptides & hyaluronic spheres",
      "Ideal under mineral makeup or overnight",
    ],
    variants: ["50 ml"],
  },
  {
    id: "aur-07",
    name: "Neroli & White Tea Body Ritual Oil",
    category: "Beauty",
    subCategory: "Personal Care",
    ritualGroup: "Personal Care",
    price: 76,
    rating: 4.9,
    reviewCount: 71,
    image:
      "https://images.pexels.com/photos/6767761/pexels-photo-6767761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/40557470/pexels-photo-40557470.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Fast-absorbing dry body oil infused with Moroccan neroli blossom, sweet almond, and antioxidant white tea extract.",
    details: [
      "100 ml / 3.4 fl oz amber glass bottle",
      "Silky dry-touch finish, never greasy",
      "Subtle notes of bergamot, fig, and cedar",
    ],
    variants: ["100 ml"],
  },
  {
    id: "aur-08",
    name: "Linen & Cashmere Lounge Wrap",
    category: "Women's Wear",
    subCategory: "Tops",
    price: 265,
    rating: 5.0,
    reviewCount: 39,
    image:
      "https://images.pexels.com/photos/6976078/pexels-photo-6976078.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/15764811/pexels-photo-15764811.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Effortlessly draped ivory wrap knit in whisper-soft combed cashmere, made for slow mornings and elevated layering.",
    details: [
      "100% Grade-A Inner Mongolian cashmere",
      "Self-tie waist ribbon & dropped shoulder",
      "Breathable mid-weight rib trim",
    ],
    variants: ["XS/S", "M/L"],
  },
  {
    id: "aur-09",
    name: "Santal & Smoked Amber Ritual Candle",
    category: "Health & Wellness",
    subCategory: "Wellness Essentials",
    ritualGroup: "Wellness Essentials",
    price: 68,
    rating: 4.9,
    reviewCount: 112,
    image:
      "https://images.pexels.com/photos/16039532/pexels-photo-16039532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/6794173/pexels-photo-6794173.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Hand-poured coconut and beeswax botanical candle blended with Australian sandalwood, cardamom seed, and warm vanilla bean.",
    details: [
      "60-hour clean cotton-wick burn time",
      "100% phthalate-free essential oil blend",
      "Reusable ceramic vessel",
    ],
    variants: ["240 g"],
    isNewArrival: true,
  },
  {
    id: "aur-10",
    name: "Atelier Leather City Tote",
    category: "Women's Wear",
    subCategory: "Handbags",
    price: 520,
    rating: 4.9,
    reviewCount: 41,
    image:
      "https://images.pexels.com/photos/26316185/pexels-photo-26316185.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/19354540/pexels-photo-19354540.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Structured everyday leather tote generously proportioned for work and weekend travel, crafted in supple cocoa calfskin.",
    details: [
      "Fits 14-inch laptop & beauty essentials",
      "Detachable zipped leather pouch",
      "Reinforced rolled shoulder handles",
    ],
    variants: ["Deep Cocoa", "Toffee"],
  },
  {
    id: "aur-11",
    name: "Restorative Mineral & Oat Bath Soak",
    category: "Health & Wellness",
    subCategory: "Wellness Essentials",
    ritualGroup: "Wellness Essentials",
    price: 58,
    rating: 4.8,
    reviewCount: 87,
    image:
      "https://images.pexels.com/photos/18350286/pexels-photo-18350286.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/4202328/pexels-photo-4202328.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Magnesium-rich Dead Sea salts, colloidal oat milk, and Roman chamomile to quiet the nervous system and soften skin.",
    details: [
      "400 g ceramic apothecary jar",
      "Calms tension & restores skin moisture",
      "100% natural mineral & botanical blend",
    ],
    variants: ["400 g"],
  },
  {
    id: "aur-12",
    name: "Pure Botanical Cleansing Nectar",
    category: "Beauty",
    subCategory: "Personal Care",
    ritualGroup: "Personal Care",
    price: 62,
    rating: 4.9,
    reviewCount: 76,
    image:
      "https://images.pexels.com/photos/7797735/pexels-photo-7797735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    hoverImage:
      "https://images.pexels.com/photos/6800936/pexels-photo-6800936.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    description:
      "Silky oil-to-milk facial and hand cleanser enriched with sweet almond, chamomile hydrosol, and vitamin E.",
    details: [
      "120 ml glass pump bottle",
      "Dissolves SPF and makeup effortlessly",
      "Respects the skin's natural pH barrier",
    ],
    variants: ["120 ml"],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "The wool trench drapes like a bespoke piece from a Parisian atelier, and the Botanical Serum has completely transformed my morning routine. Everything feels deeply intentional.",
    author: "Camille Laurent",
    location: "New York, NY",
    purchasedItem: "Atelier Double-Faced Wool Trench",
    rating: 5,
  },
  {
    id: "t-2",
    quote:
      "Finally, a destination that understands modern women don't separate how we dress from how we care for ourselves. The silk slip dress and mineral soak are my Sunday staples.",
    author: "Elena Rostova",
    location: "San Francisco, CA",
    purchasedItem: "Céleste Draped Silk Slip Dress",
    rating: 5,
  },
  {
    id: "t-3",
    quote:
      "From the tactile buttercream packaging to the supple espresso leather bag, every detail feels serene and elevated. It is quiet luxury at its finest.",
    author: "Naomi Vance",
    location: "London, UK",
    purchasedItem: "Sienna Sculpted Saddle Bag",
    rating: 5,
  },
];
