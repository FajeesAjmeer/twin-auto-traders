import { Car, ArrowRight, Settings, Disc, Waves, Zap, Sparkles, PaintBucket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const brands = ["Toyota", "Honda", "Nissan", "Suzuki", "Mitsubishi", "Lexus"];

const categories = [
  { icon: Settings, name: "Engine" },
  { icon: Disc, name: "Brake" },
  { icon: Waves, name: "Suspension" },
  { icon: Zap, name: "Electrical" },
  { icon: PaintBucket, name: "Body Parts" },
  { icon: Sparkles, name: "Accessories" },
];

const JapaneseParts = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Japanese Vehicle Parts
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Genuine Parts for Every Japanese Brand
          </h2>
          <p className="text-muted-foreground text-lg">
            We stock and import spare parts for the Japanese brands Sri Lankan
            drivers trust most.
          </p>
        </div>

        {/* Brand Explorer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {brands.map((brand) => (
            <Link
              key={brand}
              to={`/products?brand=${encodeURIComponent(brand)}`}
              className="group flex flex-col items-center justify-center gap-3 bg-card rounded-xl py-8 px-4 card-shadow hover:elevated-shadow border border-transparent hover:border-primary/40 transition-all duration-300"
            >
              <Car className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <span className="font-heading font-semibold text-foreground">
                {brand}
              </span>
            </Link>
          ))}
        </div>

        {/* Featured Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center gap-3 bg-secondary/50 rounded-lg py-4 px-4"
            >
              <category.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">
                {category.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/products">
              Explore Japanese Parts
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JapaneseParts;
