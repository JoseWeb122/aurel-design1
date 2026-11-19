import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { Product } from "../data/catalog";
import { ProductCard } from "./ProductCard";
import { EditorialReveal } from "./MotionPrimitives";

export type ShopFilter =
  | "All"
  | "Women's Wear"
  | "Beauty"
  | "Health & Wellness"
  | "New Arrivals";

interface FeaturedProductsProps {
  products: Product[];
  activeFilter: ShopFilter;
  onChangeFilter: (filter: ShopFilter) => void;
  wishlistIds: string[];
  onToggleWishlist: (product: Product) => void;
  onAddToBag: (product: Product, variant?: string) => void;
  onQuickView: (product: Product) => void;
}

const FILTER_TABS: ShopFilter[] = [
  "All",
  "Women's Wear",
  "Beauty",
  "Health & Wellness",
  "New Arrivals",
];

type SortOption = "featured" | "price-asc" | "price-desc" | "rating";

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  activeFilter,
  onChangeFilter,
  wishlistIds,
  onToggleWishlist,
  onAddToBag,
  onQuickView,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const filteredProducts = useMemo(() => {
    let list = [...products];
    if (activeFilter === "New Arrivals") {
      list = list.filter((p) => p.isNewArrival);
    } else if (activeFilter !== "All") {
      list = list.filter((p) => p.category === activeFilter);
    }

    if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, activeFilter, sortBy]);

  return (
    <section
      id="shop"
      className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 max-w-[1400px] mx-auto border-t border-[#E2D6C5]/70"
    >
      {/* Header Row */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-14">
        <EditorialReveal>
          <p className="text-[11px] tracking-[0.26em] uppercase text-[#6E5A4F] mb-3">
            The Seasonal Selection
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#3B281E] font-light">
            Featured Pieces &amp;{" "}
            <span className="italic">Formulations</span>
          </h2>
        </EditorialReveal>

        {/* Sort Control */}
        <EditorialReveal delay={0.1}>
          <div className="flex items-center gap-3 self-start lg:self-auto">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#6E5A4F]" />
            <label htmlFor="sort-select" className="sr-only">
              Sort products
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent border-b border-[#E2D6C5] focus:border-[#3B281E] py-1.5 pr-4 text-xs tracking-[0.14em] uppercase text-[#3B281E] outline-none cursor-pointer"
            >
              <option value="featured">Curated Order</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </EditorialReveal>
      </div>

      {/* Category Filter Bar */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 border-b border-[#E2D6C5]/60 no-scrollbar">
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab;
          return (
            <button
              key={tab}
              onClick={() => onChangeFilter(tab)}
              className={`relative px-4 sm:px-5 py-2.5 text-[11px] tracking-[0.18em] uppercase whitespace-nowrap transition-colors duration-300 cursor-pointer ${
                isActive
                  ? "text-[#FAF6EE]"
                  : "text-[#6E5A4F] hover:text-[#3B281E]"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeShopPill"
                  transition={{ type: "spring", stiffness: 360, damping: 32 }}
                  className="absolute inset-0 bg-[#3B281E] -z-0"
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}

        <span className="ml-auto hidden sm:inline text-xs text-[#6E5A4F] whitespace-nowrap pl-4">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "object" : "objects"}
        </span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-7 sm:gap-y-14">
        {filteredProducts.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            index={idx}
            isWishlisted={wishlistIds.includes(product.id)}
            onToggleWishlist={onToggleWishlist}
            onAddToBag={onAddToBag}
            onQuickView={onQuickView}
          />
        ))}
      </div>
    </section>
  );
};
