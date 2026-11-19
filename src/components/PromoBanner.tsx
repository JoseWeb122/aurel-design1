import React from "react";
import { ArrowRight } from "lucide-react";
import { EditorialReveal, ImageReveal } from "./MotionPrimitives";

interface PromoBannerProps {
  onShopNewArrivals: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({
  onShopNewArrivals,
}) => {
  return (
    <section className="px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto my-8 sm:my-12">
      <div className="bg-[#261811] text-[#FAF6EE] grid grid-cols-1 lg:grid-cols-12 items-center overflow-hidden border border-[#3B281E]">
        {/* Editorial Copy Side */}
        <div className="lg:col-span-7 px-7 py-14 sm:px-14 sm:py-20 lg:px-20">
          <EditorialReveal>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[#E2D6C5]/75 mb-4">
              Seasonal Capsule
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] leading-[1.08] font-light text-[#FAF6EE]">
              Your New Favorites{" "}
              <span className="italic block sm:inline">Are Waiting</span>
            </h2>
          </EditorialReveal>

          <EditorialReveal delay={0.14}>
            <p className="mt-6 text-sm sm:text-base text-[#FAF6EE]/80 leading-relaxed max-w-md font-light">
              Explore our latest arrivals and discover pieces designed to fit
              beautifully into your everyday life.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={0.24}>
            <div className="mt-9">
              <button
                onClick={onShopNewArrivals}
                className="group inline-flex items-center gap-3 bg-[#FAF6EE] hover:bg-[#F2EBE0] text-[#261811] px-8 py-4 text-xs tracking-[0.22em] uppercase font-medium transition-colors duration-300 cursor-pointer"
              >
                <span>Shop New Arrivals</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </EditorialReveal>
        </div>

        {/* Right Editorial Still-Life Portrait */}
        <div className="lg:col-span-5 h-[420px] sm:h-[480px] lg:h-[540px] relative">
          <ImageReveal className="w-full h-full">
            <img
              src="/images/promo-editorial.jpg"
              alt="Woman wearing buttercream silk slip dress holding cocoa leather handbag"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#261811]/55 via-transparent to-transparent hidden lg:block" />
          </ImageReveal>
        </div>
      </div>
    </section>
  );
};
