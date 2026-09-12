import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { usePageMeta } from "@/hooks/usePageMeta";

const PrivacyPolicy = () => {
  usePageMeta(
    "Privacy Policy | Twin Auto Traders",
    "How Twin Auto Traders collects, uses, and protects your information."
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-10">Last updated: 2026</p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Information We Collect
              </h2>
              <p>
                When you use our Contact form, Review form, or message us on
                WhatsApp, we collect the information you provide directly —
                such as your name, phone number, email address, and the
                content of your message. We do not collect this information
                through any other means.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                How We Use Your Information
              </h2>
              <p>
                We use the information you provide only to respond to your
                enquiry, process orders, arrange delivery, and improve our
                customer service. We do not sell or rent your personal
                information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Customer Reviews
              </h2>
              <p>
                If you submit a review through our Review form, your name,
                rating, and review text may be displayed publicly on our
                website after approval.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Third-Party Services
              </h2>
              <p>
                Our website may use third-party services (such as WhatsApp
                for messaging, and review display widgets) that have their
                own privacy policies governing how they handle your data.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, contact us at{" "}
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

export default PrivacyPolicy;
