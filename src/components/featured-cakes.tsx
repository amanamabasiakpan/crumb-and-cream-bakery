import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CategoryFilter } from "@/components/category-filter";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { products, type ProductCategory } from "@/lib/site";

export function FeaturedCakes() {
  const [category, setCategory] = useState<ProductCategory>("cakes");

  const visible = useMemo(() => {
    const list = products.filter((p) => p.category === category);
    return list.filter((p, i, arr) => arr.findIndex((x) => x.image === p.image && x.name === p.name) === i).slice(0, 6);
  }, [category]);

  return (
    <section id="cakes" className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            The menu
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">Our customer favourites</h2>
          <p className="mt-4 text-muted">
            From simple and elegant to completely extra, there's something for every celebration.
          </p>
        </Reveal>

        <div className="mt-10">
          <CategoryFilter value={category} onChange={setCategory} />
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => (
            <Reveal key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#menu" className="inline-flex items-center gap-2 text-sm font-medium text-fg underline-offset-4 hover:underline">
            View Full Menu
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
