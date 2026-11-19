import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CategoryName, FEATURED_CATEGORIES } from "../data/catalog";
import { EditorialReveal } from "./MotionPrimitives";

interface FeaturedCategoriesProps {
  onSelectCategory: (category: CategoryName) => void;
}

export const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="py-20 sm:py-28 lg:py-32 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <EditorialReveal>
          <p className="text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F] mb-3">
            Curated Worlds
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B281E] font-light tracking-[-0.01em]">
            Thoughtful Essentials for{" "}
            <span className="italic">Every Facet</span>
          </h2>
        </EditorialReveal>

        <EditorialReveal delay={0.12}>
          <p className="text-sm text-[#6E5A4F] max-w-sm leading-relaxed font-light">
            Three harmonious pillars uniting tailored silhouettes, clean botanical
            beauty, and restorative daily rituals.
          </p>
        </EditorialReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {FEATURED_CATEGORIES.map((category, idx) => (
          <motion.article
            key={category.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.85,
              delay: idx * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => onSelectCategory(category.title)}
            className="group cursor-pointer flex flex-col bg-[#FDFBF7] border border-[#E2D6C5]/80 hover:border-[#3B281E]/40 transition-colors duration-500"
          >
            {/* Portrait Image Frame */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#F2EBE0]">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#261811]/35 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <span className="absolute top-5 left-5 text-[10px] tracking-[0.24em] uppercase bg-[#FAF6EE]/90 backdrop-blur-sm text-[#3B281E] px-3 py-1.5">
                {category.itemCount}
              </span>
            </div>

            {/* Editorial Details */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-2xl sm:text-[28px] text-[#3B281E] font-normal">
                    {category.title}
                  </h3>
                  <span className="w-8 h-8 rounded-full border border-[#E2D6C5] flex items-center justify-center text-[#3B281E] group-hover:bg-[#3B281E] group-hover:text-[#FAF6EE] group-hover:border-[#3B281E] transition-all duration-400">
                    <ArrowUpRight className="w-4 h-4 stroke-[1.5]" />
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#6E5A4F] leading-relaxed font-light">
                  {category.tagline}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E2D6C5]/60">
                <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#3B281E] font-medium">
                  <span className="editorial-link">{category.cta}</span>
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
