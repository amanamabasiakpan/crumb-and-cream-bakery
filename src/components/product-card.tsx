import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { formatPrice, waLink, type Product } from "@/lib/site";
import { cn } from "@/lib/utils";

const categoryLabel: Record<Product["category"], string> = {
  cakes: "Cake",
  cupcakes: "Cupcakes",
  cookies: "Cookies",
  pastries: "Pastry",
  brownies: "Brownie",
  "dessert-boxes": "Dessert Box",
};

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const message = `Hi Crumb & Cream! I'd like to order the ${product.name}. Please send me a quote.`;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-surface shadow-soft ring-1 ring-border transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift",
        className,
      )}
    >
      <div className="img-zoom relative aspect-photo overflow-hidden bg-surface-2">
        <img
          src={product.image}
          alt={product.alt}
          className="size-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 rounded-full bg-surface/90 px-3 py-1 text-[0.7rem] font-medium tracking-wide text-fg uppercase backdrop-blur-sm">
          {categoryLabel[product.category]}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl font-medium text-fg">{product.name}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
        <p className="mt-4 font-medium text-fg tabular-nums">
          {product.from ? "From " : ""}
          {formatPrice(product.price)}
        </p>
        <a
          href={waLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "whatsapp", size: "sm" }), "mt-4 w-full")}
        >
          <WhatsAppIcon className="size-4" />
          Order on WhatsApp
          <ArrowUpRight className="size-3.5 opacity-80" />
        </a>
      </div>
    </article>
  );
}
