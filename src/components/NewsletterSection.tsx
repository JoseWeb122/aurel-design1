import React, { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import { EditorialReveal } from "./MotionPrimitives";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="bg-[#FDFBF7] border border-[#E2D6C5] px-6 py-14 sm:px-12 sm:py-20 text-center">
        <div className="max-w-xl mx-auto">
          <EditorialReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#6E5A4F] mb-3">
              The Aurelia Letter
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#3B281E] font-light">
              Stay in the Know
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#6E5A4F] font-light leading-relaxed">
              &ldquo;Be the first to discover new arrivals, beauty finds, and
              exclusive offers.&rdquo;
            </p>
          </EditorialReveal>

          <EditorialReveal delay={0.14}>
            {submitted ? (
              <div className="mt-8 inline-flex items-center gap-2.5 bg-[#F2EBE0] border border-[#E2D6C5] px-6 py-4 text-xs tracking-[0.16em] uppercase text-[#3B281E]">
                <Check className="w-4 h-4 text-[#3B281E]" />
                <span>Welcome to Maison Aurelia — Your invitation is on its way.</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row items-stretch max-w-md mx-auto gap-3"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-[#FAF6EE] border border-[#E2D6C5] focus:border-[#3B281E] px-4 py-3.5 text-sm text-[#3B281E] placeholder:text-[#6E5A4F]/60 outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] px-7 py-3.5 text-xs tracking-[0.2em] uppercase transition-colors duration-300 cursor-pointer shrink-0"
                >
                  <span>Join Us</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
};
