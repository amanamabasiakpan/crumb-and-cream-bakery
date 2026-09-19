import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 py-16 lg:py-24">
      <div className="page-wrap grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="text-[0.7rem] font-semibold tracking-[0.2em] text-rose-deep uppercase dark:text-gold-soft">
            Questions
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium text-fg sm:text-5xl">Before you order</h2>
          <p className="mt-4 text-muted">If you don't see your question, WhatsApp us. We answer quickly.</p>
        </Reveal>
        <Reveal delay={60}>
          <Accordion.Root type="single" collapsible className="divide-y divide-border rounded-3xl bg-surface ring-1 ring-border">
            {faqs.map((item) => (
              <Accordion.Item key={item.q} value={item.q} className="px-6">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-fg">
                    {item.q}
                    <ChevronDown className="size-4 shrink-0 text-muted transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-none">
                  <p className="pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
