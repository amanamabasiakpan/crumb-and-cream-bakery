import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { menuSections, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const message = "Hi Crumb & Cream! I'd like a custom quote. Here's what I have in mind: ";

export function Pricing() {
  return (
    <section id="menu" className="scroll-mt-28 bg-bg-warm py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Starting prices
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">A simple menu</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {menuSections.map((section, i) => (
            <Reveal key={section.title} delay={i * 50}>
              <article className="rounded-3xl bg-surface p-7 ring-1 ring-border">
                <h3 className="font-display text-3xl text-fg">{section.title}</h3>
                <ul className="mt-5 divide-y divide-border">
                  {section.items.map((item) => (
                    <li key={item.name} className="flex items-baseline justify-between gap-4 py-3">
                      <span className="text-fg">{item.name}</span>
                      <span className="text-sm text-muted tabular-nums">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-faint">
          Prices shown are sample starting prices for demonstration purposes. Custom designs and larger orders may be
          priced differently.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }))}
          >
            Get a Custom Quote
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
