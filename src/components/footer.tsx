import type { ReactNode } from "react";
import { Logo } from "@/components/logo";
import { FacebookIcon, InstagramIcon, TikTokIcon } from "@/components/icons";
import { footerExplore, footerOrders, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-chocolate text-cream dark:bg-chocolate-deep">
      <div className="page-wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo className="[&_span]:text-cream [&_.italic]:text-gold-soft [&_span.grid]:bg-gold [&_span.grid]:text-chocolate" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-beige">{site.tagline}</p>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">Explore</h2>
          <ul className="mt-4 space-y-2">
            {footerExplore.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-beige transition-colors hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">Orders</h2>
          <ul className="mt-4 space-y-2">
            {footerOrders.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-beige transition-colors hover:text-cream">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-soft uppercase">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-beige">
            <li>{site.location}</li>
            <li>
              <a href={`tel:${site.phoneTel}`} className="hover:text-cream">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-cream">
                {site.email}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex items-center gap-2">
            <Social href={site.instagramUrl} label="Instagram">
              <InstagramIcon />
            </Social>
            <Social href={site.tiktokUrl} label="TikTok">
              <TikTokIcon />
            </Social>
            <Social href={site.facebookUrl} label="Facebook">
              <FacebookIcon />
            </Social>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="page-wrap flex flex-col gap-2 py-5 text-xs text-beige/80 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p>Demo template · Lagos bakery</p>
        </div>
      </div>
    </footer>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-white/15 text-cream transition-colors hover:bg-white/10"
    >
      {children}
    </a>
  );
}
