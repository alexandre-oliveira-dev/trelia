import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PainPoints from "@/components/PainPoints";
import HowWeWork from "@/components/HowWeWork";
import Portfolio from "@/components/Portfolio";
import Testimonial from "@/components/Testimonial";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-ink text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <PainPoints />
        <HowWeWork />
        <Portfolio />
        <Testimonial />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
