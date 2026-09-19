import { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { gallery, galleryFilters, type GalleryFilter } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? gallery : gallery.filter((g) => g.filter === filter)),
    [filter],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? i : (i + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, items.length]);

  return (
    <section id="gallery" className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Gallery
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">A little eye candy.</h2>
        </Reveal>

        <div className="mt-8 -mx-5 overflow-x-auto px-5 hide-scrollbar sm:mx-0 sm:px-0">
          <div role="tablist" aria-label="Gallery filters" className="flex w-max gap-2">
            {galleryFilters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors",
                  filter === f
                    ? "border-chocolate bg-chocolate text-cream dark:border-cream dark:bg-cream dark:text-chocolate"
                    : "border-border bg-surface text-muted hover:text-fg",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
          {items.map((item, i) => (
            <button
              key={`${item.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              className="img-zoom mb-3 block w-full overflow-hidden rounded-2xl ring-1 ring-border sm:mb-4"
            >
              <img
                src={item.src}
                alt={item.alt}
                className={cn("w-full object-cover", item.tall ? "aspect-portrait" : "aspect-square")}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>

      {active !== null && items[active] ? (
        <div
          className="fixed inset-0 z-modal flex items-center justify-center bg-chocolate-deep/90 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-cream text-chocolate"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            className="absolute left-3 grid size-11 place-items-center rounded-full bg-cream/90 text-chocolate sm:left-6"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i - 1 + items.length) % items.length));
            }}
          >
            <ChevronLeft className="size-5" />
          </button>
          <img
            src={items[active].src}
            alt={items[active].alt}
            className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="absolute right-3 grid size-11 place-items-center rounded-full bg-cream/90 text-chocolate sm:right-6"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? i : (i + 1) % items.length));
            }}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
