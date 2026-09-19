import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { CustomCake } from "@/components/custom-cake";
import { Delivery } from "@/components/delivery";
import { DessertBox } from "@/components/dessert-box";
import { Faq } from "@/components/faq";
import { FeaturedCakes } from "@/components/featured-cakes";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { HowToOrder } from "@/components/how-to-order";
import { Instagram } from "@/components/instagram";
import { Navbar } from "@/components/navbar";
import { Occasions } from "@/components/occasions";
import { OrderBuilder } from "@/components/order-builder";
import { Pastries } from "@/components/pastries";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { WhatsAppFloat } from "@/components/whatsapp-float";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a
        href="#cakes"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-surface focus:px-4 focus:py-2"
      >
        Skip to menu
      </a>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCakes />
        <CustomCake />
        <Occasions />
        <Pastries />
        <DessertBox />
        <OrderBuilder />
        <Gallery />
        <HowToOrder />
        <Delivery />
        <Testimonials />
        <About />
        <Instagram />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
