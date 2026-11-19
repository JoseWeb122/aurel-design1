import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { Product } from "../data/catalog";
import { EditorialReveal } from "./MotionPrimitives";

interface BeautyWellnessSectionProps {
  products: Product[];
  onAddToBag: (product: Product, variant?: string) => void;
  onQuickView: (product: Product) => void;
  onExploreAllBeauty: () => void;
}

type RitualGroup = "Skincare" | "Personal Care" | "Wellness Essentials";

const RITUAL_GROUPS: {
  id: RitualGroup;
  title: string;
  subtitle: string;
  description: string;
  editorialImage: string;
}[] = [
  {
    id: "Skincare",
    title: "Skincare",
    subtitle: "Cellular Radiance & Barrier Repair",
    description:
      "Cold-pressed botanical lipids, plant peptides, and ceramides designed to restore luminosity and calm sensitive skin.",
    editorialImage:
      "https://images.pexels.com/photos/7797733/pexels-photo-7797733.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: "Personal Care",
    title: "Personal Care",
    subtitle: "Sensory Daily Cleansing & Hydration",
    description:
      "Silky dry body oils and gentle pH-balanced nectars infused with neroli, white tea, and sweet almond.",
    editorialImage:
      "https://images.pexels.com/photos/6767761/pexels-photo-6767761.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
  {
    id: "Wellness Essentials",
    title: "Wellness Essentials",
    subtitle: "Evening Unwinding & Sanctuary",
    description:
      "Mineral-rich Dead Sea bath soaks and hand-poured sandalwood candles that turn quiet evenings into restorative rituals.",
    editorialImage:
      "https://images.pexels.com/photos/16039532/pexels-photo-16039532.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  },
];

export const BeautyWellnessSection: React.FC<BeautyWellnessSectionProps> = ({
  products,
  onAddToBag,
  onQuickView,
  onExploreAllBeauty,
}) => {
  const [activeGroup, setActiveGroup] = useState<RitualGroup>("Skincare");

  const activeMeta = RITUAL_GROUPS.find((g) => g.id === activeGroup)!;
  const groupProducts = products.filter((p) => p.ritualGroup === activeGroup);

  return (
    <section
      id="beauty-wellness"
      className="py-24 sm:py-32 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto"
    >
      {/* Top Editorial Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 sm:mb-18">
        <div className="lg:col-span-7">
          <EditorialReveal>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#A67C52]" />
              <span>Apothecary &amp; Sanctuary</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-[54px] leading-[1.08] text-[#3B281E] font-light">
              Beauty, Wellness &amp;{" "}
              <span className="italic">Everyday Rituals</span>
            </h2>
          </EditorialReveal>
        </div>

        <div className="lg:col-span-5 lg:pb-1">
          <EditorialReveal delay={0.12}>
            <p className="text-sm sm:text-base text-[#6E5A4F] leading-relaxed font-light">
              Clean formulations crafted in small batches—free from synthetic
              dyes or harsh fillers, bottled in UV-protective amber glass for
              daily nourishment.
            </p>
          </EditorialReveal>
        </div>
      </div>

      {/* Interactive 3-Pillar Ritual Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-12">
        {RITUAL_GROUPS.map((group, idx) => {
          const isSelected = activeGroup === group.id;
          return (
            <motion.button
              key={group.id}
              onClick={() => setActiveGroup(group.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className={`group text-left p-6 sm:p-7 border transition-all duration-400 cursor-pointer relative overflow-hidden ${
                isSelected
                  ? "bg-[#3B281E] text-[#FAF6EE] border-[#3B281E]"
                  : "bg-[#FDFBF7] text-[#3B281E] border-[#E2D6C5] hover:border-[#3B281E]/50"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-[10px] tracking-[0.24em] uppercase ${
                    isSelected ? "text-[#FAF6EE]/70" : "text-[#6E5A4F]"
                  }`}
                >
                  0{idx + 1} &nbsp; Ritual
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-colors ${
                    isSelected ? "bg-[#FAF6EE]" : "bg-[#E2D6C5]"
                  }`}
                />
              </div>
              <h3 className="font-serif text-2xl sm:text-[26px] font-normal">
                {group.title}
              </h3>
              <p
                className={`mt-2 text-xs sm:text-sm leading-relaxed font-light ${
                  isSelected ? "text-[#FAF6EE]/80" : "text-[#6E5A4F]"
                }`}
              >
                {group.description}
              </p>
            </motion.button>
          );
        })}
      </div>

      {/* Active Ritual Showcase Split Panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#F2EBE0]/65 border border-[#E2D6C5] p-5 sm:p-8 lg:p-10"
        >
          {/* Left Portrait Mood Visual */}
          <div className="lg:col-span-5 relative aspect-[4/5] lg:aspect-auto lg:min-h-[440px] overflow-hidden bg-[#E2D6C5]">
            <img
              src={activeMeta.editorialImage}
              alt={activeMeta.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#261811]/65 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#FAF6EE]">
              <p className="text-[10px] tracking-[0.25em] uppercase opacity-80">
                {activeMeta.subtitle}
              </p>
              <p className="font-serif text-2xl sm:text-3xl mt-1 font-light">
                {activeMeta.title} Collection
              </p>
            </div>
          </div>

          {/* Right Curated Products for Selected Ritual */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {groupProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => onQuickView(product)}
                  className="group cursor-pointer bg-[#FDFBF7] border border-[#E2D6C5]/80 p-4 flex flex-col justify-between hover:border-[#3B281E]/50 transition-colors"
                >
                  <div>
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#F2EBE0] mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#6E5A4F]">
                      {product.subCategory}
                    </p>
                    <h4 className="font-serif text-xl text-[#3B281E] mt-1 group-hover:text-[#6E5A4F] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#6E5A4F] mt-2 line-clamp-2 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E2D6C5]/60 flex items-center justify-between">
                    <span className="text-sm font-medium text-[#3B281E]">
                      ${product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onAddToBag(product, product.variants[0]);
                      }}
                      className="inline-flex items-center gap-1.5 text-[10.5px] tracking-[0.18em] uppercase bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] px-3.5 py-2 transition-colors cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#E2D6C5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-[#6E5A4F] font-light">
                Complimentary botanical sample vial included with every beauty or
                wellness selection.
              </p>
              <button
                onClick={onExploreAllBeauty}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#3B281E] font-medium hover:text-[#6E5A4F] transition-colors cursor-pointer shrink-0"
              >
                <span className="editorial-link">View Full Apothecary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
