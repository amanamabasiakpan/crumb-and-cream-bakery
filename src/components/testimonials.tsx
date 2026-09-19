import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, []);

  const item = testimonials[index]!;

  return (
    <section id="reviews" className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Demo reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">Loved across Lagos</h2>
          <p className="mt-3 text-sm text-faint">Sample stories for this demonstration template.</p>
        </Reveal>

        <Reveal className="relative mx-auto mt-10 max-w-3xl rounded-3xl bg-surface px-8 py-12 text-center shadow-soft ring-1 ring-border sm:px-14">
          <div className="flex justify-center gap-1" aria-label={`${item.stars} out of 5 stars`}>
            {Array.from({ length: item.stars }).map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" />
            ))}
          </div>
          <blockquote className="mt-6 font-display text-2xl leading-snug text-fg sm:text-3xl">
            “{item.quote}”
          </blockquote>
          <p className="mt-6 text-sm font-medium text-fg">
            {item.name} <span className="text-muted">— {item.area}</span>
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-border text-fg hover:bg-surface-2"
              aria-label="Previous review"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-chocolate dark:bg-gold" : "w-2 bg-border",
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-border text-fg hover:bg-surface-2"
              aria-label="Next review"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
