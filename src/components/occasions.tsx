import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { occasions, waLink } from "@/lib/site";

export function Occasions() {
  return (
    <section id="occasions" className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Occasions
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">
            Made for your big moments.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {occasions.map((item, i) => (
            <Reveal key={item.id} delay={i * 50}>
              <a
                href={waLink(`Hi Crumb & Cream! I'd like a cake for a ${item.title.toLowerCase()} celebration. Please send me a quote.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group img-zoom relative block overflow-hidden rounded-3xl ring-1 ring-border"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="aspect-portrait w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-chocolate/80 via-chocolate/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                  <h3 className="font-display text-3xl">{item.title}</h3>
                  <p className="mt-1 text-sm text-cream/85">{item.copy}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium tracking-wide uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
                    Order for this
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
