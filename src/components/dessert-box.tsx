import { ArrowUpRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { dessertBox, formatPrice, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const message =
  "Hi Crumb & Cream! I'd like to order The Crumb & Cream Dessert Box. Please send me a quote.";

export function DessertBox() {
  return (
    <section id="dessert-box" className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="img-zoom overflow-hidden rounded-3xl shadow-lift ring-1 ring-border">
            <img
              src={dessertBox.image}
              alt={dessertBox.alt}
              className="aspect-photo w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Signature box
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">{dessertBox.name}</h2>
          <p className="mt-4 text-lg text-muted">{dessertBox.tagline}</p>
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {dessertBox.contents.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-fg">
                <span className="grid size-6 place-items-center rounded-full bg-beige text-chocolate dark:bg-surface-2 dark:text-gold">
                  <Check className="size-3.5" strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 font-display text-4xl text-fg tabular-nums">{formatPrice(dessertBox.price)}</p>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "mt-6 w-full sm:w-fit")}
          >
            <WhatsAppIcon />
            Order Dessert Box
            <ArrowUpRight className="size-4 opacity-80" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
