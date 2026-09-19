/**
 * Crumb & Cream — template customization hub.
 * Swap this file to rebrand the bakery: name, contacts, products, prices,
 * delivery areas, testimonials, copy, and image paths.
 */

export const site = {
  name: "Crumb & Cream Bakery",
  shortName: "Crumb & Cream",
  tagline: "Beautifully baked. Made for your moments.",
  headline: "Cakes made for moments worth celebrating.",
  description:
    "Custom cakes, pastries, and sweet treats freshly made in Lagos for birthdays, weddings, anniversaries, corporate events, and everyday cravings.",
  badge: "Freshly baked in Lagos",
  city: "Lagos, Nigeria",
  location: "Lagos, Nigeria",
  serviceAreas: [
    "Lekki",
    "Ajah",
    "Victoria Island",
    "Ikoyi",
    "Ikeja",
    "Yaba",
    "Surulere",
  ],
  phoneDisplay: "+234 803 555 0188",
  phoneTel: "+2348035550188",
  whatsapp: "2348035550188",
  email: "hello@crumbandcream.ng",
  instagram: "crumbandcream.ng",
  instagramUrl: "https://instagram.com/crumbandcream.ng",
  tiktokUrl: "https://www.tiktok.com/@crumbandcream.ng",
  facebookUrl: "https://www.facebook.com/crumbandcream.ng",
  stats: [
    { value: "4.9/5", label: "Average rating" },
    { value: "500+", label: "Celebrations" },
    { value: "Freshly baked", label: "" },
  ],
  heroFloats: ["Custom orders", "Freshly baked", "Lagos delivery"],
} as const;

export type ProductCategory =
  | "cakes"
  | "cupcakes"
  | "cookies"
  | "pastries"
  | "brownies"
  | "dessert-boxes";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  from?: boolean;
  category: ProductCategory;
  image: string;
  alt: string;
  featured?: boolean;
};

export const categories: {
  id: ProductCategory;
  label: string;
  icon: "cake" | "cupcake" | "cookie" | "croissant" | "brownie" | "gift";
}[] = [
  { id: "cakes", label: "Cakes", icon: "cake" },
  { id: "cupcakes", label: "Cupcakes", icon: "cupcake" },
  { id: "cookies", label: "Cookies", icon: "cookie" },
  { id: "pastries", label: "Pastries", icon: "croissant" },
  { id: "brownies", label: "Brownies", icon: "brownie" },
  { id: "dessert-boxes", label: "Dessert Boxes", icon: "gift" },
];

export const products: Product[] = [
  {
    id: "red-velvet",
    name: "Classic Red Velvet",
    description: "Soft red velvet layers with cream cheese frosting.",
    price: 28000,
    from: true,
    category: "cakes",
    image: "/images/red-velvet.jpg",
    alt: "Sliced red velvet layer cake with cream cheese frosting",
    featured: true,
  },
  {
    id: "chocolate-indulgence",
    name: "Chocolate Indulgence",
    description: "Rich chocolate cake with chocolate ganache.",
    price: 30000,
    from: true,
    category: "cakes",
    image: "/images/chocolate.jpg",
    alt: "Dark chocolate ganache cake with chocolate shards",
    featured: true,
  },
  {
    id: "vanilla-berry",
    name: "Vanilla Berry",
    description: "Vanilla sponge, berry filling, and vanilla buttercream.",
    price: 27000,
    from: true,
    category: "cakes",
    image: "/images/vanilla-berry.jpg",
    alt: "Vanilla cake topped with fresh strawberries and berries",
    featured: true,
  },
  {
    id: "signature-birthday",
    name: "Signature Birthday Cake",
    description: "Custom-designed celebration cake.",
    price: 35000,
    from: true,
    category: "cakes",
    image: "/images/birthday.jpg",
    alt: "Elegant two-tier birthday cake with gold candles and blush flowers",
    featured: true,
  },
  {
    id: "biscoff",
    name: "Lotus Biscoff Cake",
    description: "Biscoff sponge, cream, and crunchy biscuit topping.",
    price: 32000,
    from: true,
    category: "cakes",
    image: "/images/biscoff.jpg",
    alt: "Lotus Biscoff cake with caramel cream and biscuit crumbs",
    featured: true,
  },
  {
    id: "drip",
    name: "Chocolate Drip Cake",
    description: "Chocolate cake finished with a glossy drip and toppings.",
    price: 35000,
    from: true,
    category: "cakes",
    image: "/images/drip.jpg",
    alt: "Chocolate drip cake with strawberries and gold leaf",
    featured: true,
  },
  {
    id: "lemon-drizzle",
    name: "Lemon Drizzle",
    description: "Bright citrus sponge with a glossy lemon glaze.",
    price: 26000,
    from: true,
    category: "cakes",
    image: "/images/lemon.jpg",
    alt: "Lemon drizzle cake with candied lemon slices",
  },
  {
    id: "cupcakes-classic",
    name: "Signature Cupcakes",
    description: "Piped buttercream cupcakes in chocolate, vanilla, or rose.",
    price: 12000,
    from: true,
    category: "cupcakes",
    image: "/images/cupcakes.jpg",
    alt: "Elegant cupcakes with piped ivory, chocolate, and rose frosting",
    featured: true,
  },
  {
    id: "cupcakes-dozen",
    name: "Celebration Dozen",
    description: "A mixed box of twelve cupcakes for sharing.",
    price: 22000,
    from: true,
    category: "cupcakes",
    image: "/images/cupcakes.jpg",
    alt: "Box of celebration cupcakes",
  },
  {
    id: "cookies-chip",
    name: "Chocolate Chip Cookies",
    description: "Thick bakery cookies with melted chocolate pools.",
    price: 1500,
    from: true,
    category: "cookies",
    image: "/images/cookies.jpg",
    alt: "Stack of thick chocolate chip cookies",
    featured: true,
  },
  {
    id: "meat-pie",
    name: "Meat Pie",
    description: "Flaky golden pastry filled with seasoned minced beef.",
    price: 2000,
    category: "pastries",
    image: "/images/meat-pie.jpg",
    alt: "Nigerian meat pies, one cut open to show the filling",
    featured: true,
  },
  {
    id: "chicken-pie",
    name: "Chicken Pie",
    description: "Buttery pastry with a creamy chicken filling.",
    price: 2500,
    category: "pastries",
    image: "/images/chicken-pie.jpg",
    alt: "Golden Nigerian chicken pie with creamy filling",
    featured: true,
  },
  {
    id: "sausage-roll",
    name: "Sausage Roll",
    description: "Puff pastry wrapped around seasoned sausage.",
    price: 1500,
    category: "pastries",
    image: "/images/sausage-roll.jpg",
    alt: "Golden sausage rolls on parchment",
    featured: true,
  },
  {
    id: "doughnut",
    name: "Doughnut",
    description: "Soft glazed doughnuts, vanilla or chocolate.",
    price: 1500,
    category: "pastries",
    image: "/images/doughnut.jpg",
    alt: "Stacked glazed doughnuts on a cream plate",
    featured: true,
  },
  {
    id: "cinnamon-roll",
    name: "Cinnamon Roll",
    description: "Warm swirls with a thick cream cheese glaze.",
    price: 3000,
    category: "pastries",
    image: "/images/cinnamon-roll.jpg",
    alt: "Gooey cinnamon rolls with cream cheese glaze",
    featured: true,
  },
  {
    id: "puff-puff",
    name: "Puff Puff",
    description: "Golden fried dough, lightly sugared. Sold in packs of 10.",
    price: 2500,
    category: "pastries",
    image: "/images/puff-puff.jpg",
    alt: "Bowl of golden Nigerian puff puff",
    featured: true,
  },
  {
    id: "brownie",
    name: "Brownie",
    description: "Fudgy chocolate brownie with a crackly top.",
    price: 2500,
    category: "brownies",
    image: "/images/brownie.jpg",
    alt: "Fudgy chocolate brownies stacked on parchment",
    featured: true,
  },
  {
    id: "brownie-box",
    name: "Brownie Box",
    description: "A box of six fudgy brownies, ready to gift or share.",
    price: 10000,
    from: true,
    category: "brownies",
    image: "/images/brownie.jpg",
    alt: "Box of chocolate brownies",
  },
  {
    id: "dessert-box",
    name: "The Crumb & Cream Dessert Box",
    description: "A little bit of everything you love.",
    price: 18500,
    category: "dessert-boxes",
    image: "/images/dessert-box.jpg",
    alt: "Open kraft dessert box with brownies, cookies, cupcakes and mini doughnuts",
    featured: true,
  },
];

export const pastryMenu = [
  products.find((p) => p.id === "meat-pie")!,
  products.find((p) => p.id === "chicken-pie")!,
  products.find((p) => p.id === "sausage-roll")!,
  products.find((p) => p.id === "doughnut")!,
  products.find((p) => p.id === "cinnamon-roll")!,
  products.find((p) => p.id === "puff-puff")!,
  products.find((p) => p.id === "brownie")!,
  products.find((p) => p.id === "cookies-chip")!,
  products.find((p) => p.id === "cupcakes-classic")!,
];

export const dessertBox = {
  name: "The Crumb & Cream Dessert Box",
  tagline: "A little bit of everything you love.",
  price: 18500,
  image: "/images/dessert-box.jpg",
  alt: "Open kraft dessert box filled with mixed treats",
  contents: [
    "2 Brownies",
    "2 Cookies",
    "2 Cupcakes",
    "2 Mini Doughnuts",
    "Chocolate Dip",
  ],
};

export const occasions = [
  {
    id: "birthdays",
    title: "Birthdays",
    copy: "Make their day extra special.",
    image: "/images/occ-birthday.jpg",
    alt: "Birthday table with an elegant cream and blush cake",
  },
  {
    id: "weddings",
    title: "Weddings",
    copy: "Elegant cakes designed for unforgettable celebrations.",
    image: "/images/occ-wedding.jpg",
    alt: "Tall white wedding cake in a sunlit garden pavilion",
  },
  {
    id: "anniversaries",
    title: "Anniversaries",
    copy: "Sweet surprises for your favourite person.",
    image: "/images/occ-anniversary.jpg",
    alt: "Romantic two-tier anniversary cake with red roses",
  },
  {
    id: "baby-showers",
    title: "Baby Showers",
    copy: "Beautiful cakes for beautiful beginnings.",
    image: "/images/occ-baby.jpg",
    alt: "Blush and cream baby shower cake with sugar flowers",
  },
  {
    id: "corporate",
    title: "Corporate Events",
    copy: "Desserts and cakes for teams, clients, and events.",
    image: "/images/occ-corporate.jpg",
    alt: "Corporate dessert table with cake, cupcakes and pastries",
  },
  {
    id: "just-because",
    title: "Just Because",
    copy: "You don't need an occasion.",
    image: "/images/occ-justbecause.jpg",
    alt: "A slice of cake and coffee on a sunny balcony",
  },
] as const;

export const customOptions = [
  "Flavour",
  "Size",
  "Colour",
  "Theme",
  "Toppings",
  "Message",
  "Decoration",
] as const;

export const orderSteps = [
  {
    n: "01",
    title: "Choose your treat",
    copy: "Browse our cakes, pastries, and dessert boxes.",
  },
  {
    n: "02",
    title: "Tell us what you need",
    copy: "Send your preferred design, flavour, size, and date.",
  },
  {
    n: "03",
    title: "Confirm your order",
    copy: "We'll confirm availability and provide your final quote.",
  },
  {
    n: "04",
    title: "Enjoy the good stuff",
    copy: "Collect your order or arrange delivery.",
  },
] as const;

export const aboutPoints = [
  { title: "Fresh ingredients", copy: "Butter, chocolate, fruit, and flour we actually want to eat." },
  { title: "Made to order", copy: "Baked the day you need it, not sitting in a fridge." },
  { title: "Custom designs", copy: "Bring a picture, a colour, or just a feeling." },
  { title: "Lagos delivery", copy: "Carefully packed and sent across selected areas." },
  { title: "Personal service", copy: "You talk to the bakery, not a call centre." },
] as const;

export const nav = [
  { href: "#home", label: "Home" },
  { href: "#cakes", label: "Cakes" },
  { href: "#pastries", label: "Pastries" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const footerExplore = [
  { href: "#home", label: "Home" },
  { href: "#cakes", label: "Cakes" },
  { href: "#pastries", label: "Pastries" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
] as const;

export const footerOrders = [
  { href: "#custom", label: "Custom Cakes" },
  { href: "#cakes", label: "Birthday Cakes" },
  { href: "#occasions", label: "Wedding Cakes" },
  { href: "#dessert-box", label: "Dessert Boxes" },
] as const;

export const galleryFilters = [
  "All",
  "Birthday Cakes",
  "Wedding Cakes",
  "Cupcakes",
  "Pastries",
  "Dessert Boxes",
] as const;

export type GalleryFilter = (typeof galleryFilters)[number];

export const gallery = [
  { src: "/images/birthday.jpg", alt: "Signature birthday cake with gold candles", filter: "Birthday Cakes" as GalleryFilter, tall: true },
  { src: "/images/occ-wedding.jpg", alt: "White wedding cake with sugar flowers", filter: "Wedding Cakes" as GalleryFilter, tall: true },
  { src: "/images/cupcakes.jpg", alt: "Piped buttercream cupcakes", filter: "Cupcakes" as GalleryFilter, tall: false },
  { src: "/images/meat-pie.jpg", alt: "Freshly baked meat pies", filter: "Pastries" as GalleryFilter, tall: false },
  { src: "/images/dessert-box.jpg", alt: "Crumb and Cream dessert box", filter: "Dessert Boxes" as GalleryFilter, tall: false },
  { src: "/images/gallery-floral.jpg", alt: "Blush floral buttercream cake", filter: "Wedding Cakes" as GalleryFilter, tall: true },
  { src: "/images/red-velvet.jpg", alt: "Classic red velvet layer cake", filter: "Birthday Cakes" as GalleryFilter, tall: false },
  { src: "/images/doughnut.jpg", alt: "Glazed doughnuts", filter: "Pastries" as GalleryFilter, tall: false },
  { src: "/images/gallery-slice.jpg", alt: "A slice of layered celebration cake", filter: "Birthday Cakes" as GalleryFilter, tall: false },
  { src: "/images/macarons.jpg", alt: "Pastel macarons in a bakery box", filter: "Dessert Boxes" as GalleryFilter, tall: false },
  { src: "/images/cinnamon-roll.jpg", alt: "Cinnamon rolls with glaze", filter: "Pastries" as GalleryFilter, tall: false },
  { src: "/images/drip.jpg", alt: "Chocolate drip celebration cake", filter: "Birthday Cakes" as GalleryFilter, tall: true },
  { src: "/images/gallery-flatlay.jpg", alt: "Assorted bakery treats flat lay", filter: "Dessert Boxes" as GalleryFilter, tall: false },
  { src: "/images/biscoff.jpg", alt: "Lotus Biscoff cake", filter: "Birthday Cakes" as GalleryFilter, tall: false },
];

export const instagramFeed = [
  { src: "/images/gallery-flatlay.jpg", alt: "Bakery flat lay of cakes and berries" },
  { src: "/images/cupcakes.jpg", alt: "Cupcakes from the kitchen" },
  { src: "/images/custom.jpg", alt: "Piping buttercream roses" },
  { src: "/images/macarons.jpg", alt: "Macaron gift box" },
  { src: "/images/brownie.jpg", alt: "Fresh brownies" },
  { src: "/images/gallery-floral.jpg", alt: "Floral celebration cake" },
  { src: "/images/puff-puff.jpg", alt: "Puff puff from the fryer" },
  { src: "/images/dessert-cups.jpg", alt: "Mini dessert cups and strawberries" },
];

/** Demo testimonials for this template. Replace before going live. */
export const testimonials = [
  {
    quote: "The cake looked even better than the reference picture I sent. And it tasted amazing!",
    name: "Amaka O.",
    area: "Lekki",
    stars: 5,
  },
  {
    quote: "Ordered cupcakes for our office event and everyone loved them.",
    name: "Tunde A.",
    area: "Victoria Island",
    stars: 5,
  },
  {
    quote: "Beautiful cake, excellent communication, and it arrived safely.",
    name: "Jennifer A.",
    area: "Ikeja",
    stars: 5,
  },
  {
    quote: "I ordered a Biscoff cake for my sister and she still talks about it. Soft, not too sweet.",
    name: "Chinedu E.",
    area: "Ajah",
    stars: 5,
  },
  {
    quote: "The dessert box was the perfect hostess gift. Presentation was as good as the taste.",
    name: "Fatima S.",
    area: "Ikoyi",
    stars: 5,
  },
  {
    quote: "Meat pies and puff puff for a small chops table — everything arrived warm and well packed.",
    name: "Blessing K.",
    area: "Yaba",
    stars: 5,
  },
];

export const faqs = [
  {
    q: "How far in advance should I order a cake?",
    a: "For custom cakes we recommend 5–7 days. Wedding cakes need 3–4 weeks. Simple cakes and pastries can often be ready in 48 hours if we have space.",
  },
  {
    q: "Can I send a cake design for reference?",
    a: "Yes. Send a picture, a Pinterest link, or even a rough sketch on WhatsApp and we'll tell you what we can recreate.",
  },
  {
    q: "Do you make custom cakes?",
    a: "That's most of what we do. Flavour, size, colour, theme, toppings, and the message on top are all made to your brief.",
  },
  {
    q: "What flavours are available?",
    a: "Chocolate, vanilla, red velvet, Biscoff, lemon, and custom combinations. If you have a family recipe flavour in mind, ask — we'll be honest about what we can do well.",
  },
  {
    q: "Do you deliver across Lagos?",
    a: "We deliver to Lekki, Ajah, Victoria Island, Ikoyi, Ikeja, Yaba, and Surulere. Other areas are possible on request, depending on the day.",
  },
  {
    q: "Can I order for same-day delivery?",
    a: "Sometimes, for pastries, cupcakes, and undecorated cakes. Same-day custom work is rare. Message us early and we'll say yes or no quickly.",
  },
  {
    q: "Do you provide wedding cakes?",
    a: "Yes. We design two- and three-tier cakes, dessert tables, and cutting cakes. Book a tasting conversation on WhatsApp.",
  },
  {
    q: "How do I pay for my order?",
    a: "We confirm the quote, then you pay by bank transfer. A deposit secures custom cakes. We share account details on WhatsApp after the order is agreed.",
  },
  {
    q: "Can I change my order after confirmation?",
    a: "Flavour and message changes are usually fine up to 48 hours before bake day. Size and design changes depend on how far along we are — just ask.",
  },
];

export const menuSections = [
  {
    title: "Cakes",
    items: [
      { name: "6-inch cake", price: "From ₦25,000" },
      { name: "8-inch cake", price: "From ₦35,000" },
      { name: "10-inch cake", price: "From ₦50,000" },
    ],
  },
  {
    title: "Cupcakes",
    items: [
      { name: "Box of 6", price: "From ₦12,000" },
      { name: "Box of 12", price: "From ₦22,000" },
    ],
  },
  {
    title: "Pastries",
    items: [
      { name: "Meat Pie", price: "₦2,000" },
      { name: "Chicken Pie", price: "₦2,500" },
      { name: "Sausage Roll", price: "₦1,500" },
      { name: "Cinnamon Roll", price: "₦3,000" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Brownie Box", price: "From ₦10,000" },
      { name: "Dessert Box", price: "From ₦18,500" },
    ],
  },
] as const;

export const flavours = [
  "Chocolate",
  "Vanilla",
  "Red Velvet",
  "Biscoff",
  "Lemon",
  "Custom",
] as const;

export const orderTypes = [
  { id: "cake", label: "Cake" },
  { id: "cupcakes", label: "Cupcakes" },
  { id: "pastries", label: "Pastries" },
  { id: "dessert-box", label: "Dessert Box" },
] as const;

export const sizeOptions: Record<string, { label: string; price: number }[]> = {
  cake: [
    { label: "6 inch", price: 25000 },
    { label: "8 inch", price: 35000 },
    { label: "10 inch", price: 50000 },
  ],
  cupcakes: [
    { label: "Box of 6", price: 12000 },
    { label: "Box of 12", price: 22000 },
  ],
  pastries: [
    { label: "6 pieces", price: 12000 },
    { label: "12 pieces", price: 22000 },
    { label: "24 pieces", price: 40000 },
  ],
  "dessert-box": [
    { label: "1 box", price: 18500 },
    { label: "2 boxes", price: 35000 },
    { label: "4 boxes", price: 68000 },
  ],
};

export function formatPrice(naira: number) {
  return `₦${naira.toLocaleString("en-NG")}`;
}

export function waLink(text?: string) {
  const url = `https://wa.me/${site.whatsapp}`;
  return text ? `${url}?text=${encodeURIComponent(text)}` : url;
}

export function defaultOrderMessage() {
  return `Hi ${site.shortName}! I'd like to order a cake. Please send me a quote.`;
}
