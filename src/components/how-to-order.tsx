import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { orderSteps } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HowToOrder() {
  return (
    <section className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Simple process
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">How to order</h2>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {orderSteps.map((step, i) => (
            <Reveal key={step.n} delay={i * 70} as="li">
              <article className="h-full rounded-3xl bg-surface p-6 ring-1 ring-border">
                <p className="font-display text-4xl text-gold">{step.n}</p>
                <h3 className="mt-4 font-display text-2xl text-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.copy}</p>
              </article>
            </Reveal>
          ))}
        </ol>
        <Reveal className="mt-10">
          <a href="#order" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
            Start My Order
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
