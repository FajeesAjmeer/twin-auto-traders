import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Target, Heart, Users, Award } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We never compromise on the quality of our products. Every part is carefully sourced and inspected.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We go the extra mile to ensure you get exactly what you need.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our knowledgeable staff has years of experience in the automotive industry.",
  },
  {
    icon: Award,
    title: "Trusted Service",
    description:
      "We've built our reputation on honesty, reliability, and exceptional customer service.",
  },
];

const About = () => {
  usePageMeta(
    "About Us | Twin Auto Traders",
    "Learn about Twin Auto Traders — a trusted supplier of genuine Japanese vehicle spare parts based in Kalmunai, Sri Lanka."
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
                Your Trusted <span className="text-gradient">Auto Partner</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Twin Auto Traders is a small business dedicated to providing
                quality auto spare parts and trusted service to vehicle owners
                everywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}

<section className="py-20 bg-secondary">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Story Content */}
      <div>
        <span className="text-primary font-semibold uppercase tracking-wider text-sm">
          Driven by Trust, Powered by Quality
        </span>

```
    <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 mt-3">
      Our Story
    </h2>

    <div className="space-y-4 text-muted-foreground leading-relaxed">
      <p>
        At Twin Auto Traders, our journey is built on a passion for
        automobiles and a commitment to delivering quality automotive
        products at fair prices. Founded with a clear vision, we strive
        to make reliable spare parts and vehicle accessories accessible
        to every customer through trusted service and a customer-first
        approach.
      </p>

      <p>
        Our product range includes Japanese vehicle spare parts,
        ev vehicle components, and a wide selection of
        automotive accessories. We focus on product quality,
        competitive pricing, and personalized service to help our
        customers make confident purchasing decisions.
      </p>

      <p>
        Today, Twin Auto Traders continues to build lasting relationships
        with individual vehicle owners, vehicle enthusiasts,
        professional mechanics, and automotive businesses. As we grow,
        our commitment remains unchanged: to earn your trust through
        quality, integrity, and dependable service.
      </p>
    </div>

    <div className="mt-8 border-l-4 border-primary pl-4">
      <p className="font-heading text-lg md:text-xl font-semibold text-foreground">
        Twin Auto Traders — Your Trusted Partner in Automotive Excellence.
      </p>
    </div>
  </div>

  {/* Brand Highlights */}
  <div className="relative">
    <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
      <div className="text-center max-w-md">
        <div className="font-heading text-5xl md:text-7xl font-bold text-primary mb-3">
          TAT
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          Built on Trust.
          <br />
          Driven by Quality.
        </h3>

        <p className="text-muted-foreground leading-relaxed mb-8">
          Committed to quality automotive products, fair pricing,
          and dependable customer service.
        </p>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-background/70 rounded-xl p-4">
            <div className="font-heading text-lg font-bold text-primary">
              Quality
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Product Focus
            </div>
          </div>

          <div className="bg-background/70 rounded-xl p-4">
            <div className="font-heading text-lg font-bold text-primary">
              Trust
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Customer First
            </div>
          </div>

          <div className="bg-background/70 rounded-xl p-4">
            <div className="font-heading text-lg font-bold text-primary">
              Value
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Fair Pricing
            </div>
          </div>

          <div className="bg-background/70 rounded-xl p-4">
            <div className="font-heading text-lg font-bold text-primary">
              Service
            </div>
            <div className="text-sm text-muted-foreground mt-1">
              Customer Support
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

  </div>
</section>

