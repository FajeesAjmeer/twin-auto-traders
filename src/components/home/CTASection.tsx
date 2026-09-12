import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "94740505718";

const CTASection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden border-y border-border">
      {/* Decorative accent glow — this is where Electric Blue belongs: a subtle
          highlight, not the section's own background. */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Need Help Finding Parts?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Message us today and our team will help you find exactly what
            you need.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi, I need help finding a part."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/support">
                Visit Support Page
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
