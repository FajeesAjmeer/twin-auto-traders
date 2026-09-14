import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_NUMBER = "94740505718";

const Hero = () => {
  const [videoFailed, setVideoFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const showVideo = !videoFailed && !prefersReducedMotion;

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: video if available and motion is OK, image fallback otherwise */}
      <div className="absolute inset-0">
        {showVideo && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero-video.mp4"
            poster={heroBg}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            // @ts-expect-error -- fetchPriority is valid HTML but not yet in React's TS types
            fetchpriority="high"
            onError={() => setVideoFailed(true)}
          />
        )}
        {!showVideo && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroBg})` }}
          />
        )}
        {/* No full-bleed overlay — the video/photo should be fully visible.
            Text readability is handled by the frosted-glass panel below instead. */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24 md:py-0">
        <div className="max-w-2xl bg-background/75 backdrop-blur-md border border-border/40 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Trusted Japanese Auto Parts Supplier
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up">
            Twin Auto <span className="text-gradient">Traders</span>
          </h1>

          {/* Brand positioning line */}
          <p
            className="text-xl md:text-2xl text-foreground/90 mb-4 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Japanese Vehicle Parts Today. Electric Mobility Tomorrow.
          </p>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground mb-8 max-w-xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your one-stop destination for genuine Japanese car parts,
            high-capacity bike components, and premium vehicle accessories.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                Browse Parts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  "Hi, I'm looking for a spare part."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Request a Part
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-8 mt-12 pt-6 border-t border-border animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                1+
              </div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                1K+
              </div>
              <div className="text-sm text-muted-foreground">
                Parts in Stock
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                150+
              </div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
