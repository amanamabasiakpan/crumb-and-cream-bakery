import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <a href="#home" className={cn("group flex items-center gap-2.5", className)} aria-label={site.shortName}>
      <span
        className="grid size-9 place-items-center rounded-full bg-chocolate text-cream shadow-soft dark:bg-gold dark:text-chocolate"
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="none">
          <path
            d="M7 14c0-2 2.2-3.4 5-3.4s5 1.4 5 3.4v4.2H7V14Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 10.6c.4-1.6 1.5-2.6 2.8-2.6s2.4 1 2.8 2.6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path d="M12 6.2V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="12" cy="4.2" r="0.9" fill="currentColor" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="font-display text-xl font-medium tracking-tight text-fg sm:text-[1.35rem]">
          Crumb <span className="italic text-rose">&</span> Cream
        </span>
        {!compact ? (
          <span className="mt-0.5 block text-[0.65rem] tracking-[0.18em] text-muted uppercase">Bakery · Lagos</span>
        ) : null}
      </span>
    </a>
  );
}
