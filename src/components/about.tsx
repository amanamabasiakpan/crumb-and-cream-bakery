import { Reveal } from "@/components/reveal";
import { aboutPoints } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 bg-bg-warm py-16 lg:py-24">
      <div className="page-wrap grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-3xl ring-1 ring-border">
            <img
              src="/images/baker.jpg"
              alt="Adaeze, the Crumb and Cream baker, piping a cake in a sunlit Lagos kitchen"
              className="aspect-photo w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            The bakery
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">Baked with care in Lagos.</h2>
          <p className="mt-5 text-muted">
            Crumb & Cream started with a simple love for beautiful cakes and really good desserts. Today, we create
            cakes and pastries for birthdays, weddings, corporate events, intimate celebrations, and those random
            moments when you simply deserve something sweet.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutPoints.map((p) => (
              <li key={p.title} className="rounded-2xl bg-surface p-4 ring-1 ring-border">
                <h3 className="font-medium text-fg">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.copy}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
