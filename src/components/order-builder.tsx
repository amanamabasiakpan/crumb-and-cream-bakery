import { useMemo, useState, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";
import {
  flavours,
  formatPrice,
  orderTypes,
  sizeOptions,
  waLink,
} from "@/lib/site";
import { cn } from "@/lib/utils";

type OrderType = (typeof orderTypes)[number]["id"];

export function OrderBuilder() {
  const [type, setType] = useState<OrderType>("cake");
  const [flavour, setFlavour] = useState<string>("Chocolate");
  const [size, setSize] = useState<string>(sizeOptions.cake[0]!.label);
  const [date, setDate] = useState("");

  const sizes = sizeOptions[type] ?? sizeOptions.cake;

  const selected = sizes.find((s) => s.label === size) ?? sizes[0]!;
  const price = selected.price;

  const message = useMemo(() => {
    const kind =
      type === "cake"
        ? `${flavour} Birthday Cake`
        : type === "cupcakes"
          ? `${flavour} Cupcakes`
          : type === "pastries"
            ? "Pastry tray"
            : "Dessert Box";
    const dateBit = date ? ` Date needed: ${formatDate(date)}.` : "";
    return `Hi Crumb & Cream! I'd like to order a ${kind}. Size: ${selected.label}.${dateBit} Please send me a quote.`;
  }, [type, flavour, selected.label, date]);

  function pickType(next: OrderType) {
    setType(next);
    setSize(sizeOptions[next]![0]!.label);
  }

  return (
    <section id="order" className="scroll-mt-28 bg-bg-warm py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            WhatsApp order
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">Build your order</h2>
          <p className="mt-4 text-muted">Pick the details. We'll open WhatsApp with your request ready to send.</p>
        </Reveal>

        <Reveal className="mx-auto mt-10 max-w-3xl rounded-3xl bg-surface p-6 shadow-soft ring-1 ring-border sm:p-10">
          <fieldset className="min-w-0">
            <legend className="text-sm font-medium text-fg">What are you ordering?</legend>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {orderTypes.map((opt) => (
                <Choice key={opt.id} active={type === opt.id} onClick={() => pickType(opt.id)}>
                  {opt.label}
                </Choice>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8 min-w-0">
            <legend className="text-sm font-medium text-fg">Choose a flavour</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {flavours.map((f) => (
                <Choice key={f} active={flavour === f} onClick={() => setFlavour(f)}>
                  {f}
                </Choice>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-8 min-w-0">
            <legend className="text-sm font-medium text-fg">
              {type === "cake" ? "Choose a size" : "Choose quantity"}
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {sizes.map((s) => (
                <Choice key={s.label} active={size === s.label} onClick={() => setSize(s.label)}>
                  {s.label}
                </Choice>
              ))}
            </div>
          </fieldset>

          <label className="mt-8 block">
            <span className="text-sm font-medium text-fg">Date needed</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-3 h-12 w-full rounded-2xl border border-border bg-bg px-4 text-fg"
            />
          </label>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-bg-warm p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs tracking-[0.16em] text-muted uppercase">Estimated starting price</p>
              <p className="mt-1 font-display text-4xl text-fg tabular-nums">{formatPrice(price)}</p>
            </div>
            <a
              href={waLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }), "w-full sm:w-auto")}
            >
              <WhatsAppIcon />
              Continue on WhatsApp
              <ArrowUpRight className="size-4 opacity-80" />
            </a>
          </div>
          <p className="mt-4 text-xs text-faint">
            Starting prices only. Custom design, delivery, and finishing may change the final quote.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Choice({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "min-h-12 rounded-full border px-4 text-sm font-medium transition-colors duration-200",
        active
          ? "border-chocolate bg-chocolate text-cream dark:border-cream dark:bg-cream dark:text-chocolate"
          : "border-border bg-bg text-muted hover:text-fg",
      )}
    >
      {children}
    </button>
  );
}

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long" });
}
