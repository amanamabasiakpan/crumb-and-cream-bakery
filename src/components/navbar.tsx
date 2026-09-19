import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppIcon } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { nav, site, waLink, defaultOrderMessage } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex w-full max-w-page items-center gap-3 rounded-full border px-2 py-1.5 pl-3 shadow-soft backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
            scrolled
              ? "border-border bg-surface/90"
              : "border-transparent bg-surface/70",
          )}
        >
          <Logo compact className="min-w-0 shrink" />

          <ul className="mx-auto hidden items-center gap-0.5 lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-full px-3 py-2 text-[0.8rem] font-medium tracking-wide text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />
            <a
              href={waLink(defaultOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "whatsapp", size: "sm" }),
                "hidden sm:inline-flex",
              )}
            >
              <WhatsAppIcon className="size-4" />
              Order on WhatsApp
              <ArrowUpRight className="size-3.5 opacity-80" />
            </a>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full border border-border bg-surface text-fg lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-chocolate/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden dark:bg-chocolate-deep/60",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-[min(100%,22rem)] flex-col bg-surface px-6 pt-24 pb-8 shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <ul className="flex flex-col gap-1">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3.5 font-display text-2xl text-fg hover:bg-surface-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={waLink(defaultOrderMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "mt-auto w-full")}
        >
          <WhatsAppIcon />
          Order on WhatsApp
        </a>
        <p className="mt-4 text-center text-sm text-muted">{site.phoneDisplay}</p>
      </div>
    </>
  );
}
