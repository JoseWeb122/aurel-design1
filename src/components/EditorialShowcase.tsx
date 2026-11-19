import React from "react";
import { ArrowRight } from "lucide-react";
import { EditorialReveal, ParallaxFrame } from "./MotionPrimitives";
import { Product } from "../data/catalog";

interface EditorialShowcaseProps {
  featuredProduct: Product;
  onShopWomensWear: () => void;
  onQuickViewProduct: (product: Product) => void;
}

export const EditorialShowcase: React.FC<EditorialShowcaseProps> = ({
  featuredProduct,
  onShopWomensWear,
  onQuickViewProduct,
}) => {
  return (
    <section className="bg-[#F2EBE0] border-y border-[#E2D6C5] overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Cinematic Image Column */}
        <div className="lg:col-span-7 relative min-h-[500px] sm:min-h-[620px] lg:min-h-[760px]">
          <ParallaxFrame
            src="https://images.pexels.com/photos/36624483/pexels-photo-36624483.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Model wearing an editorial sand wool coat"
            className="w-full h-full min-h-[500px] sm:min-h-[620px] lg:min-h-[760px]"
            speed={38}
          />

          {/* Floating Lookbook Product Pill */}
          <button
            onClick={() => onQuickViewProduct(featuredProduct)}
            className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 bg-[#FAF6EE]/94 backdrop-blur-md border border-[#E2D6C5] p-4 pr-6 flex items-center gap-4 text-left hover:bg-[#FAF6EE] transition-colors shadow-[0_14px_40px_rgba(38,24,17,0.12)] cursor-pointer group max-w-[290px]"
          >
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="w-14 h-18 object-cover shrink-0 border border-[#E2D6C5]/70"
            />
            <div>
              <p className="text-[9.5px] tracking-[0.22em] uppercase text-[#6E5A4F]">
                Featured Look
              </p>
              <p className="font-serif text-base text-[#3B281E] leading-snug mt-0.5 group-hover:underline underline-offset-4">
                {featuredProduct.name}
              </p>
              <p className="text-xs text-[#3B281E] mt-1 font-medium">
                ${featuredProduct.price}
              </p>
            </div>
          </button>
        </div>

        {/* Right Editorial Narrative Column */}
        <div className="lg:col-span-5 flex flex-col justify-center px-6 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
          <EditorialReveal>
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F] mb-4">
              The Tailoring Philosophy
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[56px] leading-[1.06] text-[#3B281E] font-light">
              Made for Your{" "}
              <span className="italic block mt-1">Everyday</span>
            </h2>
          </EditorialReveal>

          <EditorialReveal delay={0.14}>
            <p className="mt-7 text-sm sm:text-base text-[#6E5A4F] leading-[1.85] font-light">
              Every silhouette in our collection begins with natural, tactile
              materials—mulberry silk that moves like water, brushed virgin wool,
              and breathable Belgian linen. Designed to honor both poise and
              ease, each piece transitions effortlessly from quiet mornings to
              evening gatherings without ever asking you to compromise comfort
              for confidence.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={0.22}>
            <div className="mt-9 grid grid-cols-2 gap-6 py-6 border-y border-[#E2D6C5]">
              <div>
                <p className="font-serif text-2xl text-[#3B281E]">100%</p>
                <p className="text-xs text-[#6E5A4F] tracking-wide mt-1">
                  Natural &amp; Noble Fibers
                </p>
              </div>
              <div>
                <p className="font-serif text-2xl text-[#3B281E]">Atelier</p>
                <p className="text-xs text-[#6E5A4F] tracking-wide mt-1">
                  Small-Batch Tailoring
                </p>
              </div>
            </div>
          </EditorialReveal>

          <EditorialReveal delay={0.3}>
            <div className="mt-9">
              <button
                onClick={onShopWomensWear}
                className="group inline-flex items-center gap-3 bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] px-8 py-4 text-xs tracking-[0.22em] uppercase transition-colors duration-300 cursor-pointer"
              >
                <span>Shop Women&apos;s Wear</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </EditorialReveal>
        </div>
      </div>
    </section>
  );
};
