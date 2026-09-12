import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import JapaneseParts from "@/components/home/JapaneseParts";
import FutureMobility from "@/components/home/FutureMobility";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import Testimonials from "@/components/home/Testimonials";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { usePageMeta } from "@/hooks/usePageMeta";

const Index = () => {
  usePageMeta(
    "Twin Auto Traders | Genuine Japanese Auto Parts in Sri Lanka",
    "Twin Auto Traders supplies genuine Japanese vehicle spare parts island-wide in Sri Lanka, with growing support for EV components. Browse parts or request one on WhatsApp."
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <JapaneseParts />
        <FutureMobility />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
