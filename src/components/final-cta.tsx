import { ArrowUpRight, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";
import { site, waLink, defaultOrderMessage } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-28 pb-20">
      <div className="page-wrap">
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src="/images/cta.jpg"
            alt="Candlelit celebration cake on dark marble"
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-chocolate/70 dark:bg-chocolate-deep/75" />
          <div className="relative px-6 py-20 text-center sm:px-12 sm:py-28">
            <h2 className="font-display text-4xl font-medium text-cream sm:text-6xl">Got a sweet idea?</h2>
            <p className="mx-auto mt-4 max-w-lg text-beige">
              Send us a message. Let's turn it into something delicious.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={waLink(defaultOrderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }))}
              >
                <WhatsAppIcon />
                Order on WhatsApp
                <ArrowUpRight className="size-4 opacity-80" />
              </a>
              <a
                href={`tel:${site.phoneTel}`}
                className={cn(buttonVariants({ variant: "inverse", size: "lg" }))}
              >
                <Phone className="size-4" />
                Call {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
