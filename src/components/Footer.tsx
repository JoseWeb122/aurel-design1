import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ShopFilter } from "./FeaturedProducts";

export type InfoModalType = "faq" | "shipping" | "returns" | "privacy" | "terms";

interface FooterProps {
  onSelectShopFilter: (filter: ShopFilter) => void;
  onOpenInfoModal: (type: InfoModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectShopFilter,
  onOpenInfoModal,
}) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#261811] text-[#FAF6EE] border-t border-[#3B281E]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-serif text-3xl tracking-[0.26em] uppercase font-light">
                Aurelia
              </span>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#C9B9A6] mt-1">
                Maison · Fashion · Beauty · Rituals
              </p>
            </div>
            <p className="text-sm text-[#FAF6EE]/75 font-light leading-relaxed max-w-sm">
              Curated women&apos;s silhouettes, botanical skincare, and
              restorative daily rituals crafted for effortless confidence.
            </p>

            {/* Footer Mini Newsletter */}
            <div className="pt-2">
              <p className="text-[10.5px] tracking-[0.22em] uppercase text-[#C9B9A6] mb-3">
                Private Invitations &amp; Seasonal Edits
              </p>
              {subscribed ? (
                <p className="inline-flex items-center gap-2 text-xs text-[#FAF6EE] bg-[#3B281E] px-4 py-2.5 border border-[#C9B9A6]/30">
                  <Check className="w-3.5 h-3.5" />
                  <span>Thank you for joining Aurelia.</span>
                </p>
              ) : (
                <form
                  onSubmit={handleNewsletter}
                  className="flex border-b border-[#FAF6EE]/30 focus-within:border-[#FAF6EE] transition-colors max-w-xs"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    aria-label="Footer newsletter email"
                    className="bg-transparent py-2.5 text-sm text-[#FAF6EE] placeholder:text-[#FAF6EE]/45 outline-none flex-1"
                  />
                  <button
                    type="submit"
                    aria-label="Join newsletter"
                    className="px-2 text-[#FAF6EE] hover:text-[#C9B9A6] transition-colors cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Shop Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#C9B9A6] mb-5">
              Shop
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FAF6EE]/85">
              <li>
                <button
                  onClick={() => onSelectShopFilter("Women's Wear")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Women&apos;s Wear
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectShopFilter("Beauty")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Beauty
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectShopFilter("Health & Wellness")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Wellness
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectShopFilter("New Arrivals")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  New Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#C9B9A6] mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FAF6EE]/85">
              <li>
                <button
                  onClick={() => scrollToSection("#about")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal("faq")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care Column */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.24em] uppercase text-[#C9B9A6] mb-5">
              Customer Care
            </h4>
            <ul className="space-y-3 text-sm font-light text-[#FAF6EE]/85">
              <li>
                <button
                  onClick={() => onOpenInfoModal("shipping")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Shipping
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal("returns")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Returns
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal("privacy")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInfoModal("terms")}
                  className="hover:text-[#C9B9A6] transition-colors cursor-pointer"
                >
                  Terms
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Social Bar */}
        <div className="mt-16 pt-8 border-t border-[#FAF6EE]/12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C9B9A6]">
          <p className="font-light">
            &copy; {new Date().getFullYear()} Maison Aurelia. All rights reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a
              href="#home"
              aria-label="Instagram"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#FAF6EE] transition-colors tracking-[0.16em] uppercase text-[10.5px]"
            >
              Instagram
            </a>
            <a
              href="#home"
              aria-label="Pinterest"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#FAF6EE] transition-colors tracking-[0.16em] uppercase text-[10.5px]"
            >
              Pinterest
            </a>
            <a
              href="#home"
              aria-label="Journal"
              onClick={(e) => e.preventDefault()}
              className="hover:text-[#FAF6EE] transition-colors tracking-[0.16em] uppercase text-[10.5px]"
            >
              Editorial Journal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
