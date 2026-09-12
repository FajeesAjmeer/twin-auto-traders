import { Battery, BatteryCharging, Plug, Zap, Sparkles } from "lucide-react";

const evCards = [
  {
    icon: Zap,
    title: "EV Spare Parts",
    description: "Genuine components for electric vehicles.",
  },
  {
    icon: Battery,
    title: "Battery Components",
    description: "Cells, packs, and battery hardware.",
  },
  {
    icon: Plug,
    title: "Charging Solutions",
    description: "Chargers and charging accessories.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Systems",
    description: "Complete battery system support.",
  },
];

const comingSoon = ["AI Diagnostics", "Battery Analytics", "Smart Mobility"];

const FutureMobility = () => {
  return (
    <section id="future-mobility" className="py-16 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Future Mobility
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-3">
            Electric Mobility, Tomorrow
          </h2>
          <p className="text-muted-foreground">
            As Sri Lanka moves toward electric vehicles, we're building our
            capability to support them too.
          </p>
        </div>

        {/* EV Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {evCards.map((card) => (
            <div
              key={card.title}
              className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                <card.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-1">{card.title}</h3>
              <p className="text-muted-foreground text-xs">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="bg-card/30 backdrop-blur-sm border border-dashed border-primary/30 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading font-semibold">Coming Soon</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {comingSoon.map((item) => (
              <span
                key={item}
                className="text-xs font-medium text-muted-foreground bg-secondary rounded-full px-3 py-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureMobility;
