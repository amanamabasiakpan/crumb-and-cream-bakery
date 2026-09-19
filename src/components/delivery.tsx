import { ArrowUpRight, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const message =
  "Hi Crumb & Cream! I'd like to check delivery availability for my area. My location is: ";

export function Delivery() {
  return (
    <section id="delivery" className="scroll-mt-28 bg-bg-warm py-16 lg:py-24">
      <div className="page-wrap grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Lagos delivery
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">
            Freshly baked. Carefully delivered.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            We deliver across selected areas of Lagos. Delivery fees depend on location and order size.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.serviceAreas.map((area) => (
              <li
                key={area}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-2 text-sm text-fg"
              >
                <MapPin className="size-3.5 text-rose" aria-hidden="true" />
                {area}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">Need delivery outside these areas? Ask us on WhatsApp.</p>
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "mt-6 w-full sm:w-fit")}
          >
            <WhatsAppIcon />
            Check Delivery Availability
            <ArrowUpRight className="size-4 opacity-80" />
          </a>
        </Reveal>
        <Reveal delay={80}>
          <div className="overflow-hidden rounded-3xl ring-1 ring-border">
            <img
              src="/images/gallery-display.jpg"
              alt="Warm bakery display of pies, doughnuts and cinnamon rolls"
              className="aspect-photo w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
