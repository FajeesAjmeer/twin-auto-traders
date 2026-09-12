import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Truck, ShieldCheck, HelpCircle } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const WHATSAPP_NUMBER = "94740505718";

const faqs = [
  {
    question: "How do I know if a part fits my vehicle?",
    answer:
      "Message us on WhatsApp with your vehicle's make, model, year, and (if you have it) the chassis number or old part's number — we'll confirm compatibility before you order.",
  },
  {
    question: "Are your parts genuine or aftermarket?",
    answer:
      "We stock both. Every listing is marked clearly, and we'll always tell you which one you're buying before you commit.",
  },
  {
    question: "Do you deliver outside Kalmunai?",
    answer:
      "Yes, we deliver island-wide. Delivery time and cost depend on your location — ask us on WhatsApp for an exact quote.",
  },
  {
    question: "Can I return a part if it doesn't fit?",
    answer:
      "Contact us as soon as possible with your order details. Returns are handled case by case depending on the part and its condition.",
  },
];

const Support = () => {
  usePageMeta(
    "Support | Twin Auto Traders",
    "Request a part, check delivery and warranty information, or read frequently asked questions at Twin Auto Traders."
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Support
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
                We're Here to <span className="text-gradient">Help</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Can't find a part, or have a question about delivery or
                warranty? Start here.
              </p>
            </div>
          </div>
        </section>

        {/* Request a Part */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 md:p-10 card-shadow flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-2">
                    Request a Part
                  </h2>
                  <p className="text-muted-foreground max-w-xl">
                    Don't see what you need on our Products page? Tell us the
                    make, model, and part — we'll source it for you.
                  </p>
                </div>
              </div>
              <Button variant="hero" size="lg" asChild className="flex-shrink-0">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    "Hi, I'd like to request a part that's not listed on your website."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Delivery & Warranty */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold mb-3">
                  Delivery Information
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We deliver island-wide across Sri Lanka. Exact delivery
                  time and cost depend on your location and the part — our
                  team will confirm both when you place an order.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 card-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-heading text-xl font-bold mb-3">
                  Warranty Information
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Genuine parts come with manufacturer warranty coverage
                  where applicable. Ask our team about the specific warranty
                  terms for the part you're ordering before you buy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl md:text-3xl font-bold">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="bg-card rounded-2xl px-6 card-shadow">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-heading font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Support;
