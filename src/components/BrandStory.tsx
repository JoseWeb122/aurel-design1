import React from "react";
import { ArrowRight } from "lucide-react";
import { EditorialReveal, ParallaxFrame } from "./MotionPrimitives";

interface BrandStoryProps {
  onOpenStoryModal: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({
  onOpenStoryModal,
}) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left Storytelling Column */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <EditorialReveal>
            <p className="text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F] mb-4">
              Maison Aurelia
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#3B281E] font-light">
              More Than What{" "}
              <span className="italic block sm:inline">You Wear.</span>
            </h2>
          </EditorialReveal>

          <EditorialReveal delay={0.14}>
            <p className="mt-7 text-sm sm:text-base text-[#6E5A4F] leading-[1.9] font-light">
              Aurelia was founded on a quiet conviction: that getting dressed
              and caring for your skin belong to the same unhurried ritual. We
              bring together timeless women&apos;s silhouettes, botanical beauty
              formulations, and restorative wellness essentials—each chosen to
              help you move through the world feeling grounded, confident, and
              deeply cared for.
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#6E5A4F] leading-[1.9] font-light">
              From breathable European linens to cold-pressed serums bottled in
              recyclable amber glass, every object is created to earn a lasting
              place in your daily life.
            </p>
          </EditorialReveal>

          <EditorialReveal delay={0.24}>
            <div className="mt-9 flex items-center gap-6">
              <button
                onClick={onOpenStoryModal}
                className="group inline-flex items-center gap-3 border border-[#3B281E] text-[#3B281E] hover:bg-[#3B281E] hover:text-[#FAF6EE] px-8 py-4 text-xs tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer"
              >
                <span>Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </EditorialReveal>
        </div>

        {/* Right Large Lifestyle Photography */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/4.6] border border-[#E2D6C5] overflow-hidden bg-[#F2EBE0]">
            <ParallaxFrame
              src="/images/brand-story.jpg"
              alt="Serene woman in cream cashmere knit beside travertine marble table with Aurelia skincare bottles"
              className="w-full h-full"
              speed={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
