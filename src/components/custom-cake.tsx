import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import { customOptions, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const message =
  "Hi Crumb & Cream! I have a custom cake in mind. I'd love to talk flavour, size, and design. Please send me a quote.";

export function CustomCake() {
  return (
    <section id="custom" className="scroll-mt-28 py-8 lg:py-16">
      <div className="page-wrap">
        <div className="overflow-hidden rounded-3xl bg-surface shadow-soft ring-1 ring-border lg:grid lg:grid-cols-2">
          <div className="img-zoom relative min-h-72">
            <img
              src="/images/custom.jpg"
              alt="Baker piping rose buttercream onto a celebration cake"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          </div>
          <Reveal className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
              Made for you
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">
              Have something special in mind?
            </h2>
            <p className="mt-4 text-muted">
              Tell us what you're imagining and we'll help turn the idea into a cake.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {customOptions.map((opt) => (
                <li
                  key={opt}
                  className="rounded-full border border-border bg-bg px-3.5 py-1.5 text-sm text-fg"
                >
                  {opt}
                </li>
              ))}
            </ul>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "mt-8 w-full sm:w-fit")}
            >
              <WhatsAppIcon />
              Discuss My Cake on WhatsApp
              <ArrowUpRight className="size-4 opacity-80" />
            </a>
            <p className="mt-4 text-xs text-faint">
              Custom cake prices depend on size, design, flavour, and finishing.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
