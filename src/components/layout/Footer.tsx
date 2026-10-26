import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-heading text-xl font-bold leading-tight">Twin Auto</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Traders</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for quality auto spare parts, imported Japanese vehicles, and electric vehicle components. Based in Kalmunai, Sri Lanka.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="https://www.facebook.com/share/1HiqFvUcWe/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-md transition-transform" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" style={{ color: "#1877F2" }} viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-4 3.87-4 1.12 0 2.3.2 2.3.2v2.5h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.85l-.46 2.91h-2.39v7.04A10 10 0 0022 12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/twin_auto_traders?igsh=bjRpY3p6a2ZxYjJk" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-md transition-transform" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="igGradientFooter" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFDC80"/>
                      <stop offset="25%" stopColor="#FCAF45"/>
                      <stop offset="50%" stopColor="#E1306C"/>
                      <stop offset="75%" stopColor="#C13584"/>
                      <stop offset="100%" stopColor="#5851DB"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#igGradientFooter)" d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 00-1.77 1.15 4.9 4.9 0 00-1.15 1.77c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 001.15 1.77 4.9 4.9 0 001.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 001.77-1.15 4.9 4.9 0 001.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 00-1.15-1.77 4.9 4.9 0 00-1.77-1.15c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.97.04 1.5.21 1.85.34.46.18.79.39 1.14.74.35.35.56.68.74 1.14.13.35.3.88.34 1.85.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.97-.21 1.5-.34 1.85-.18.46-.39.79-.74 1.14-.35.35-.68.56-1.14.74-.35.13-.88.3-1.85.34-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.04-1.5-.21-1.85-.34a3.1 3.1 0 01-1.14-.74 3.1 3.1 0 01-.74-1.14c-.13-.35-.3-.88-.34-1.85C3.81 14.99 3.8 14.67 3.8 12s.01-2.99.06-4.04c.04-.97.21-1.5.34-1.85.18-.46.39-.79.74-1.14.35-.35.68-.56 1.14-.74.35-.13.88-.3 1.85-.34C9.01 3.81 9.33 3.8 12 3.8zm0 3.05a5.15 5.15 0 100 10.3 5.15 5.15 0 000-10.3zm0 8.5a3.35 3.35 0 110-6.7 3.35 3.35 0 010 6.7zm5.35-8.7a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                </svg>
              </a>
              <a href="https://wa.me/94740505718" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-md transition-transform" aria-label="WhatsApp">
                <svg className="w-5 h-5 fill-current" style={{ color: "#25D366" }} viewBox="0 0 24 24">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.4-1.42a9.87 9.87 0 004.64 1.18h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0012.04 2zm0 1.8c2.14 0 4.15.83 5.67 2.35a7.96 7.96 0 012.33 5.65c0 4.42-3.6 8.02-8.03 8.02a8 8 0 01-4.1-1.13l-.29-.17-3.2.84.86-3.12-.19-.3a7.95 7.95 0 01-1.24-4.29c0-4.43 3.6-8.02 8.19-8.02zM9 7.3c-.17 0-.45.07-.69.33-.23.25-.9.87-.9 2.13 0 1.25.92 2.46 1.05 2.63.13.17 1.8 2.88 4.44 3.93.63.26 1.12.42 1.5.53.63.2 1.2.17 1.66.1.5-.07 1.56-.63 1.78-1.25.22-.62.22-1.14.15-1.25-.06-.11-.24-.17-.5-.3-.26-.14-1.56-.78-1.8-.86-.24-.09-.42-.14-.6.13-.17.26-.68.86-.84 1.04-.15.17-.3.19-.56.07-.26-.14-1.1-.4-2.1-1.3-.78-.68-1.3-1.52-1.46-1.78-.15-.26-.02-.4.12-.53.12-.12.26-.3.4-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.14-.6-1.47-.84-2.01-.22-.52-.45-.45-.6-.46H9z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@twin_auto_traders" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-md transition-transform" aria-label="TikTok">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#25F4EE" d="M19.09 7.47a4.83 4.83 0 01-3.27-3.5V2h-3.03v14.17a2.4 2.4 0 01-4.3 1.44 2.4 2.4 0 012.7-3.73v-3.1a5.5 5.5 0 00-4.3 9.1 5.5 5.5 0 009.56-3.71V9.1a8.03 8.03 0 004.5 1.38V7.5a4.8 4.8 0 01-1.86-.03z"/>
                  <path fill="#FE2C55" d="M18.35 6.93a4.83 4.83 0 01-3.27-3.5V2h-2.03v14.17a2.4 2.4 0 01-4.3 1.44 2.4 2.4 0 012.7-3.73v-3.1a5.5 5.5 0 00-4.3 9.1 5.5 5.5 0 009.56-3.71V9.1a8.03 8.03 0 004.5 1.38V7.56a4.8 4.8 0 01-2.86-.63z"/>
                  <path fill="#111111" d="M19.59 7.5a4.83 4.83 0 01-3.77-4.25V2h-2.45v14.17a2.39 2.39 0 01-4.3 1.44 2.39 2.39 0 012.69-3.73v-3.1a5.49 5.49 0 00-4.3 9.1 5.49 5.49 0 009.55-3.71V8.69a8.18 8.18 0 004.79 1.53V7.58a4.85 4.85 0 01-2.21-.08z"/>
                </svg>
              </a>
              <a href="https://x.com/fajees_ajmeer" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-md transition-transform" aria-label="Twitter/X">
                <svg className="w-5 h-5 fill-current text-foreground" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Japanese Parts" },
                { to: "/#future-mobility", label: "Future Mobility" },
                { to: "/support", label: "Support" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <span>Japanese Car Parts</span>
              <span>High Capacity Bike Parts</span>
              <span>Vehicle Accessories</span>
              <span>Custom Orders</span>
              <span>Bulk Orders</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+94740505718" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +94 740 505 718
              </a>
              <a href="https://wa.me/94740505718" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="w-4 h-4 flex-shrink-0" />
                WhatsApp Chat
              </a>
              <a href="mailto:twinautotraders@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" />
                twinautotraders@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Kalmunai, Eastern Province, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Twin Auto Traders. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
