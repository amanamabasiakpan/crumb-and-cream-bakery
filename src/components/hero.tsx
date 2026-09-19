import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink, defaultOrderMessage } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-10 sm:pt-28 lg:pt-32">
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="reveal is-in inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-[0.7rem] font-semibold tracking-[0.16em] text-rose-deep uppercase dark:text-gold-soft">
            <span className="size-1.5 rounded-full bg-rose" aria-hidden="true" />
            {site.badge}
          </p>
          <h1
            className="reveal is-in mt-5 font-display text-[2.6rem] leading-[1.08] font-medium text-fg sm:text-5xl lg:text-[3.6rem]"
            style={{ transitionDelay: "80ms" }}
          >
            {site.headline}
          </h1>
          <p
            className="reveal is-in mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            style={{ transitionDelay: "140ms" }}
          >
            {site.description}
          </p>
          <div
            className="reveal is-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ transitionDelay: "200ms" }}
          >
            <a
              href={waLink(defaultOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "w-full sm:w-auto")}
            >
              <WhatsAppIcon />
              Order on WhatsApp
              <ArrowUpRight className="size-4 opacity-80" />
            </a>
            <a href="#cakes" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full sm:w-auto")}>
              Explore Our Menu
              <ArrowDown className="size-4" />
            </a>
          </div>
          <ul
            className="reveal is-in mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm"
            style={{ transitionDelay: "260ms" }}
          >
            <li className="flex items-center gap-1.5 font-medium">
              <Star className="size-4 fill-gold text-gold" aria-hidden="true" />
              <span>4.9/5</span>
            </li>
            {site.stats.slice(1).map((stat) => (
              <li key={stat.label} className="text-muted">
                <span className="font-semibold text-fg">{stat.value}</span> {stat.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="img-zoom relative overflow-hidden rounded-2xl shadow-lift ring-1 ring-border sm:rounded-3xl">
            <img
              src="/images/hero.jpg"
              alt="Ivory three-tier celebration cake with blush flowers on a marble table"
              className="aspect-hero w-full object-cover sm:aspect-photo lg:aspect-hero"
              fetchPriority="high"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-chocolate/25 via-transparent to-transparent" />
          </div>

          <div className="float-card absolute top-6 -left-2 hidden rounded-2xl bg-surface/95 px-4 py-3 shadow-lift ring-1 ring-border backdrop-blur-md sm:block lg:-left-8">
            <p className="text-[0.65rem] tracking-[0.16em] text-muted uppercase">Studio</p>
            <p className="font-display text-lg text-fg">Custom orders</p>
          </div>
          <div className="float-card float-card-delay absolute top-1/2 -right-2 hidden -translate-y-1/2 rounded-2xl bg-surface/95 px-4 py-3 shadow-lift ring-1 ring-border backdrop-blur-md sm:block lg:-right-6">
            <p className="text-[0.65rem] tracking-[0.16em] text-muted uppercase">Kitchen</p>
            <p className="font-display text-lg text-fg">Freshly baked</p>
          </div>
          <div className="float-card float-card-delay-2 absolute bottom-8 left-6 hidden rounded-2xl bg-chocolate px-4 py-3 text-cream shadow-lift sm:block dark:bg-gold dark:text-chocolate">
            <p className="text-[0.65rem] tracking-[0.16em] uppercase opacity-70">Coverage</p>
            <p className="font-display text-lg">Lagos delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
