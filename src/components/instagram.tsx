import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { InstagramIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { instagramFeed, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Instagram() {
  return (
    <section className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
              Instagram
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">Fresh from the kitchen.</h2>
            <p className="mt-3 text-muted">Follow @{site.instagram}</p>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "md" }))}
          >
            <InstagramIcon className="size-4" />
            View Instagram
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {instagramFeed.map((img, i) => (
            <a
              key={img.src}
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="img-zoom overflow-hidden rounded-2xl ring-1 ring-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                className={cn("aspect-square w-full object-cover", i === 0 && "sm:col-span-1")}
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
