import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { Product } from "../data/catalog";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const SUGGESTIONS = ["Silk", "Wool Trench", "Serum", "Leather", "Candle", "Cashmere"];

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 120);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 4);
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query, products]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#261811]/45 backdrop-blur-sm flex items-start justify-center"
        >
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full bg-[#FAF6EE] border-b border-[#E2D6C5] shadow-2xl"
          >
            <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-8 sm:py-12">
              <div className="flex items-center justify-between border-b border-[#3B281E]/30 pb-4">
                <div className="flex items-center gap-3 flex-1">
                  <Search className="w-5 h-5 text-[#6E5A4F] stroke-[1.5]" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search dresses, coats, skincare, rituals..."
                    className="w-full bg-transparent font-serif text-2xl sm:text-3xl text-[#3B281E] placeholder:text-[#6E5A4F]/50 outline-none"
                  />
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close search"
                  className="p-2 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              {/* Trending Suggestions */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-[10.5px] tracking-[0.2em] uppercase text-[#6E5A4F] mr-2">
                  Popular:
                </span>
                {SUGGESTIONS.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="text-xs px-3 py-1 bg-[#F2EBE0] hover:bg-[#3B281E] hover:text-[#FAF6EE] text-[#3B281E] transition-colors cursor-pointer"
                  >
                    {term}
                  </button>
                ))}
              </div>

              {/* Results Grid */}
              <div className="mt-8">
                <p className="text-[10.5px] tracking-[0.22em] uppercase text-[#6E5A4F] mb-4">
                  {query.trim()
                    ? `${results.length} Matching ${
                        results.length === 1 ? "Piece" : "Pieces"
                      }`
                    : "Curated Highlights"}
                </p>

                {results.length === 0 ? (
                  <p className="py-10 text-sm text-[#6E5A4F] font-light">
                    No pieces found matching &ldquo;{query}&rdquo;. Try searching
                    for silk, wool, serum, or leather.
                  </p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-h-[55vh] overflow-y-auto pr-1">
                    {results.slice(0, 8).map((product) => (
                      <button
                        key={product.id}
                        onClick={() => {
                          onClose();
                          onSelectProduct(product);
                        }}
                        className="group text-left cursor-pointer"
                      >
                        <div className="aspect-[3/4] overflow-hidden bg-[#F2EBE0] border border-[#E2D6C5]/70 mb-2.5">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <p className="text-[10px] tracking-[0.16em] uppercase text-[#6E5A4F]">
                          {product.subCategory}
                        </p>
                        <p className="font-serif text-base text-[#3B281E] mt-0.5 group-hover:underline underline-offset-4">
                          {product.name}
                        </p>
                        <p className="text-xs text-[#3B281E] mt-1 flex items-center justify-between">
                          <span>${product.price}</span>
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
