import { site, waLink, defaultOrderMessage } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink(defaultOrderMessage())}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-pulse group fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-cream shadow-lift transition-transform duration-150 hover:scale-105 active:scale-[0.96] sm:right-6 sm:bottom-6"
      aria-label={`Order on WhatsApp — ${site.phoneDisplay}`}
    >
      <WhatsAppIcon className="size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-chocolate px-3 py-1.5 text-xs font-medium text-cream opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 sm:block dark:bg-cream dark:text-chocolate">
        Order on WhatsApp
      </span>
    </a>
  );
}
