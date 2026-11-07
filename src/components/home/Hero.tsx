import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import ParticleNetwork from "@/components/motion/ParticleNetwork";

// Three.js lives in its own chunk — only downloaded on capable desktops.
const ParticleScene3D = lazy(() => import("@/components/motion/ParticleScene3D"));

const canUse3D = () => {
  if (typeof window === "undefined") return false;
  if (window.innerWidth < 1024) return false;
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
};

const WHATSAPP_NUMBER = "94740505718";

const Hero = () => {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    setUse3D(canUse3D());
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const showVideo = !videoFailed && !prefersReducedMotion;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Background drifts slower than the scroll for a subtle parallax depth cue.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  // Foreground content moves faster than the background and fades out, so the
  // layers separate as you scroll — the cinematic depth cue.
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background: solid placeholder that fades into the video once it's ready.
          No fallback image file needed — pure CSS/code. */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: bgY }}
        className="absolute inset-0 bg-gradient-to-br from-secondary to-background"
      >
        {showVideo && (
          <video
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-100" : "opacity-0"
            }`}
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            // @ts-expect-error -- fetchPriority is valid HTML but not yet in React's TS types
            fetchpriority="high"
            onCanPlay={() => setVideoReady(true)}
            onError={() => setVideoFailed(true)}
          />
        )}
        {/* Faint tech/EV-flavored particle network drifting over the video —
            the "live" touch, kept to the hero only and skipped under
            prefers-reduced-motion. Dark, low-opacity dots/lines so it reads
            against both the video and the plain gradient fallback. */}
        {use3D && !prefersReducedMotion ? (
          <Suspense fallback={null}>
            <ParticleScene3D
              scrollTarget={sectionRef}
              className="absolute inset-0 w-full h-full"
            />
          </Suspense>
        ) : (
          <ParticleNetwork
            disabled={prefersReducedMotion}
            className="absolute inset-0 w-full h-full"
          />
        )}
        {/* No full-bleed overlay — the video should be fully visible.
            Text readability is handled by the frosted-glass panel below instead. */}
      </motion.div>

      {/* Content */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 container mx-auto px-4 py-24 md:py-0"
      >
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
            electric vehicle components, and premium vehicle accessories.
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
                <WhatsAppIcon className="w-5 h-5" />
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
                300+
              </div>
              <div className="text-sm text-muted-foreground">
                Parts in Stock
              </div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Happy Customers
              </div>
            </div>
          </div>
        </div>
      </motion.div>

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
