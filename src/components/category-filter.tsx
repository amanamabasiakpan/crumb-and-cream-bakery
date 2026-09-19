import { Cake, Cookie, Croissant, Gift, IceCreamCone, Square } from "lucide-react";
import { categories, type ProductCategory } from "@/lib/site";
import { cn } from "@/lib/utils";

const icons = {
  cake: Cake,
  cupcake: IceCreamCone,
  cookie: Cookie,
  croissant: Croissant,
  brownie: Square,
  gift: Gift,
};

export function CategoryFilter({
  value,
  onChange,
}: {
  value: ProductCategory;
  onChange: (next: ProductCategory) => void;
}) {
  return (
    <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:overflow-visible sm:px-0">
      <div
        role="tablist"
        aria-label="Product categories"
        className="flex w-max gap-2 sm:w-full sm:flex-wrap sm:justify-center"
      >
        {categories.map((cat) => {
          const Icon = icons[cat.icon];
          const active = value === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onChange(cat.id)}
              className={cn(
                "inline-flex h-12 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-[background-color,color,border-color,transform] duration-200",
                active
                  ? "border-chocolate bg-chocolate text-cream dark:border-cream dark:bg-cream dark:text-chocolate"
                  : "border-border bg-surface text-muted hover:border-fg/30 hover:text-fg",
              )}
            >
              <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
