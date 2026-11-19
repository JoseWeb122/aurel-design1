import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onShopCollection: () => void;
  onExploreBeauty: () => void;
}

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onShopCollection,
  onExploreBeauty,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Subtle parallax & gentle cinematic drift on scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-[86vh] lg:min-h-[92vh] flex items-end lg:items-center overflow-hidden bg-[#261811]"
    >
      {/* Background Editorial Visual with Scroll Parallax */}
      <motion.div
        style={{ y: imageY, scale: imageScale }}
        className="absolute inset-0 will-change-transform"
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: LUXURY_EASE }}
          src="/images/hero-editorial.jpg"
          alt="Contemporary woman in a buttercream silk blouse and cocoa tailored coat"
          className="w-full h-full object-cover object-[58%_20%] sm:object-[50%_20%]"
        />
        {/* Tasteful editorial gradient overlay for crisp text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#261811]/75 via-[#261811]/25 to-[#261811]/10 lg:bg-gradient-to-r lg:from-[#261811]/72 lg:via-[#261811]/30 lg:to-transparent" />
      </motion.div>

      {/* Hero Editorial Typography & CTAs */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 pb-14 pt-28 sm:pb-20 lg:py-24"
      >
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: LUXURY_EASE }}
            className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-[#FAF6EE]/85 mb-5"
          >
            Autumn &nbsp;·&nbsp; Winter Edit &nbsp;—&nbsp; Maison Aurelia
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.35, ease: LUXURY_EASE }}
            className="font-serif text-[46px] sm:text-[62px] lg:text-[74px] leading-[1.03] tracking-[-0.015em] text-[#FAF6EE] font-light"
          >
            Style That Feels{" "}
            <span className="italic font-normal block sm:inline">Like You.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: LUXURY_EASE }}
            className="mt-6 text-sm sm:text-base text-[#FAF6EE]/88 leading-relaxed max-w-md font-light"
          >
            Discover thoughtfully selected fashion, beauty, and wellness essentials
            designed to elevate your everyday lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: LUXURY_EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={onShopCollection}
              className="group inline-flex items-center gap-3 bg-[#FAF6EE] text-[#3B281E] hover:bg-[#F2EBE0] px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300 cursor-pointer"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExploreBeauty}
              className="inline-flex items-center gap-2 border border-[#FAF6EE]/70 text-[#FAF6EE] hover:bg-[#FAF6EE]/12 px-7 py-3.5 text-xs tracking-[0.2em] uppercase font-normal backdrop-blur-[2px] transition-all duration-300 cursor-pointer"
            >
              Explore Beauty
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Delicate Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="hidden md:flex absolute bottom-7 right-12 z-10 items-center gap-3 text-[#FAF6EE]/75 text-[10px] tracking-[0.25em] uppercase"
      >
        <span>Scroll to Discover</span>
        <motion.span
          animate={{ scaleX: [0.4, 1, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-[1px] bg-[#FAF6EE]/70 origin-left"
        />
      </motion.div>
    </section>
  );
};
