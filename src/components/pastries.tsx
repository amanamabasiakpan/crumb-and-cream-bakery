import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { pastryMenu } from "@/lib/site";

export function Pastries() {
  return (
    <section id="pastries" className="scroll-mt-28 bg-bg-warm py-16 lg:py-24">
      <div className="page-wrap">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Savoury & sweet
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">More than cake.</h2>
          <p className="mt-4 text-muted">
            Small chops, pastry trays, and the things people actually finish at a party.
          </p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pastryMenu.map((product, i) => (
            <Reveal key={product.id} delay={i * 40}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
