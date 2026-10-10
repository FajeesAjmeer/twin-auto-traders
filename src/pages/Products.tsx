import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { usePageMeta } from "@/hooks/usePageMeta";
import {
  Wrench,
  Sparkles,
  Settings,
  Store,
  Ship,
  Car,
  ShoppingCart,
  Package,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const WHATSAPP_NUMBER = "94740505718";

// Our registered business scope — what Twin Auto Traders is licensed and
// set up to do, not a catalogue of individual parts in stock.
const businessActivities = [
  {
    icon: Wrench,
    title: "Motor Vehicle Spare Parts Trading",
    description: "Buying and selling genuine and aftermarket spare parts for motor vehicles.",
  },
  {
    icon: Sparkles,
    title: "Automotive Accessories",
    description: "Interior, exterior, and styling accessories for cars and motorcycles.",
  },
  {
    icon: Settings,
    title: "Vehicle Components",
    description: "Engine, brake, suspension, and electrical components for a wide range of vehicles.",
  },
  {
    icon: Store,
    title: "Wholesale & Retail Trading",
    description: "Supplying individual customers as well as mechanics, workshops, and bulk buyers.",
  },
  {
    icon: Ship,
    title: "Import & Distribution of Automotive Products",
    description: "Sourcing automotive products and distributing them across Sri Lanka.",
  },
  {
    icon: Car,
    title: "Motor Vehicle Trading",
    description: "Trading in motor vehicles alongside our spare parts business.",
  },
  {
    icon: ShoppingCart,
    title: "Online / E-commerce Sale of Automotive Products",
    description: "Ordering parts and accessories online via our website and WhatsApp.",
  },
];

const specialServices = [
  {
    icon: Settings,
    title: "Custom Orders",
    description:
      "Can't find what you're looking for? We can source and order specific parts for you.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description:
      "Special pricing available for mechanics, workshops, and bulk buyers.",
  },
];

const Products = () => {
  usePageMeta({
    title: "Products & Services | Twin Auto Traders",
    description:
      "Browse genuine and aftermarket auto parts for Japanese vehicles, motorcycle components, and premium accessories at Twin Auto Traders.",
    path: "/products",
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                Products & Services
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
                Quality <span className="text-gradient">Auto Parts</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore our extensive range of automotive spare parts,
                accessories, and services designed to keep your vehicle running
                smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Business Scope */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Do
              </h2>
              <p className="text-muted-foreground text-lg">
                Twin Auto Traders' registered business activities span the
                full chain from sourcing to selling.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessActivities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 card-shadow hover:elevated-shadow transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-lg font-bold mb-2">
                    {activity.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Special Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Beyond our standard inventory, we offer additional services to
                meet your needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {specialServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 text-center card-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card relative overflow-hidden border-y border-border">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Specific Part?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us with your requirements and we'll help you find the
              exact part you need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;
