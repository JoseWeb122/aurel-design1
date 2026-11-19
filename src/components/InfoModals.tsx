import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { InfoModalType } from "./Footer";

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [signedIn, setSignedIn] = useState(false);
  const [email, setEmail] = useState("camille@atelier.com");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#261811]/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#FAF6EE] border border-[#E2D6C5] p-8 relative shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close account modal"
              className="absolute top-4 right-4 p-2 text-[#6E5A4F] hover:text-[#3B281E] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="text-[10.5px] tracking-[0.24em] uppercase text-[#6E5A4F]">
              Maison Aurelia
            </p>
            <h3 className="font-serif text-3xl text-[#3B281E] mt-1 font-light">
              {signedIn ? "Welcome, Camille" : "Client Salon"}
            </h3>

            {signedIn ? (
              <div className="mt-6 space-y-5">
                <div className="bg-[#FDFBF7] border border-[#E2D6C5] p-4">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#6E5A4F]">
                    Membership Tier
                  </p>
                  <p className="font-serif text-xl text-[#3B281E] mt-1">
                    Private Atelier Circle
                  </p>
                  <p className="text-xs text-[#6E5A4F] mt-1 font-light">
                    Complimentary tailoring &amp; early access to seasonal
                    capsules.
                  </p>
                </div>

                <div className="text-xs text-[#6E5A4F] space-y-2">
                  <p className="flex items-center gap-2 text-[#3B281E]">
                    <Check className="w-3.5 h-3.5" />
                    <span>Active Account: {email}</span>
                  </p>
                  <p className="font-light">
                    No open orders at the moment. Saved wishlist items sync
                    automatically during your session.
                  </p>
                </div>

                <button
                  onClick={() => setSignedIn(false)}
                  className="w-full border border-[#3B281E] py-3 text-xs tracking-[0.2em] uppercase text-[#3B281E] hover:bg-[#3B281E] hover:text-[#FAF6EE] transition-colors cursor-pointer"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSignedIn(true);
                }}
                className="mt-6 space-y-4"
              >
                <p className="text-sm text-[#6E5A4F] font-light leading-relaxed">
                  Sign in to access your saved pieces, bespoke sizing profile,
                  and seasonal previews.
                </p>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#FDFBF7] border border-[#E2D6C5] focus:border-[#3B281E] px-3.5 py-2.5 text-sm text-[#3B281E] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    defaultValue="••••••••••"
                    className="w-full bg-[#FDFBF7] border border-[#E2D6C5] focus:border-[#3B281E] px-3.5 py-2.5 text-sm text-[#3B281E] outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] py-3.5 text-xs tracking-[0.22em] uppercase transition-colors cursor-pointer"
                >
                  Enter Salon
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#261811]/55 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 14 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl bg-[#FAF6EE] border border-[#E2D6C5] p-7 sm:p-12 relative shadow-2xl max-h-[88vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close story modal"
              className="absolute top-5 right-5 p-2 text-[#6E5A4F] hover:text-[#3B281E] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F]">
              Our Philosophy
            </p>
            <h3 className="font-serif text-3xl sm:text-5xl text-[#3B281E] mt-2 font-light">
              More Than What <span className="italic">You Wear.</span>
            </h3>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-[#6E5A4F] leading-[1.85] font-light">
              <p>
                Born between our New York tailoring studio and a botanical
                formulation lab in Provence, Maison Aurelia was imagined as a
                calm counterpoint to fast, fragmented retail.
              </p>
              <p>
                We believe the ritual of dressing—slipping into cool mulberry
                silk or wrapping yourself in brushed merino—is inseparable from
                the quiet nourishment of applying cold-pressed barrier serum or
                lighting sandalwood at dusk.
              </p>
              <p>
                Every garment is produced in limited seasonal runs with
                traceable European mills, and every skincare and wellness object
                is bottled in recyclable amber glass without synthetic
                fragrances, silicones, or harsh preservatives.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2D6C5] grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-serif text-2xl text-[#3B281E]">100%</p>
                <p className="text-[10.5px] tracking-[0.16em] uppercase text-[#6E5A4F] mt-1">
                  Clean Botanicals
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#3B281E]">Small-Batch</p>
                <p className="text-[10.5px] tracking-[0.16em] uppercase text-[#6E5A4F] mt-1">
                  Atelier Craft
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#3B281E]">Refillable</p>
                <p className="text-[10.5px] tracking-[0.16em] uppercase text-[#6E5A4F] mt-1">
                  Glass Vessels
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const INFO_CONTENT: Record<
  InfoModalType,
  { title: string; subtitle: string; body: string[] }
> = {
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Maison Guide",
    body: [
      "Sizing & Tailoring: All Aurelia garments follow true-to-size European tailoring with relaxed ease. Detailed garment measurements are available through our concierge desk.",
      "Skincare Sensitivity: Every beauty and wellness formulation is dermatologist-tested, free from synthetic fragrance, parabens, and essential-oil sensitizers.",
      "Gift Packaging: Every order arrives wrapped in signature buttercream linen paper with two complimentary botanical sample vials.",
    ],
  },
  shipping: {
    title: "Shipping & Delivery",
    subtitle: "Dispatch & Timing",
    body: [
      "Complimentary Express Delivery is automatically applied to all orders over $180.",
      "Orders placed before 2:00 PM EST ship the same business day from our New York atelier in climate-conscious recyclable packaging.",
      "Standard domestic delivery arrives within 3–5 business days; express courier arrives in 1–2 business days.",
    ],
  },
  returns: {
    title: "Returns & Exchanges",
    subtitle: "30-Day Consideration",
    body: [
      "Unworn women's wear with original tags and unopened apothecary items may be returned or exchanged within 30 days of delivery.",
      "Complimentary prepaid return labels are provided for all domestic orders, with instant credit available for size exchanges.",
    ],
  },
  privacy: {
    title: "Privacy Policy",
    subtitle: "Client Discretion",
    body: [
      "Maison Aurelia respects your privacy and never sells or shares client information with third-party data brokers.",
      "Your preferences and order details are used solely to personalize your boutique experience and fulfill requests.",
    ],
  },
  terms: {
    title: "Terms of Service",
    subtitle: "Boutique Standards",
    body: [
      "All seasonal editions and botanical formulations are crafted in small batches and offered subject to atelier availability.",
      "Prices are listed in USD and include complimentary signature gift wrapping upon request.",
    ],
  },
};

interface CareInfoModalProps {
  type: InfoModalType | null;
  onClose: () => void;
}

export const CareInfoModal: React.FC<CareInfoModalProps> = ({
  type,
  onClose,
}) => {
  const data = type ? INFO_CONTENT[type] : null;

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#261811]/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg bg-[#FAF6EE] border border-[#E2D6C5] p-8 relative shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 text-[#6E5A4F] hover:text-[#3B281E] cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <p className="text-[10.5px] tracking-[0.24em] uppercase text-[#6E5A4F]">
              {data.subtitle}
            </p>
            <h3 className="font-serif text-3xl text-[#3B281E] mt-1 font-light">
              {data.title}
            </h3>

            <div className="mt-5 space-y-4 text-sm text-[#6E5A4F] leading-relaxed font-light">
              {data.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <button
              onClick={onClose}
              className="mt-7 border border-[#3B281E] px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-[#3B281E] hover:bg-[#3B281E] hover:text-[#FAF6EE] transition-colors cursor-pointer"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
