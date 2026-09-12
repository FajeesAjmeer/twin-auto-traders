import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { usePageMeta } from "@/hooks/usePageMeta";

const Terms = () => {
  usePageMeta(
    "Terms & Conditions | Twin Auto Traders",
    "Terms and conditions for using the Twin Auto Traders website and ordering from us."
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground mb-10">Last updated: 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Orders & Pricing
              </h2>
              <p>
                Prices and availability for parts are confirmed at the time
                of enquiry via WhatsApp, phone, or email, and may change
                without prior notice. An order is only confirmed once we
                have verbally or in writing confirmed the part, price, and
                availability with you.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Genuine vs. Aftermarket Parts
              </h2>
              <p>
                We stock both genuine and aftermarket parts. We will always
                tell you which type you are purchasing before you commit to
                an order.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Delivery
              </h2>
              <p>
                We deliver island-wide across Sri Lanka. Delivery time and
                cost depend on your location and will be confirmed with you
                when you place an order.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Returns & Warranty
              </h2>
              <p>
                Where applicable, genuine parts carry manufacturer warranty
                coverage. Returns are handled case by case — contact us as
                soon as possible if a part does not fit or arrives damaged.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Contact Us
              </h2>
              <p>
                Questions about these terms can be directed to{" "}
                <a href="mailto:twinautotraders@gmail.com" className="text-foreground underline">
                  twinautotraders@gmail.com
                </a>{" "}
                or via WhatsApp.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Terms;
