import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Star, ShoppingBag, Eye } from "lucide-react";
import { Product } from "../data/catalog";

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToBag: (product: Product, variant?: string) => void;
  onQuickView: (product: Product) => void;
  index?: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onToggleWishlist,
  onAddToBag,
  onQuickView,
  index = 0,
}) => {
  const [addedFeedback, setAddedFeedback] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToBag(product, product.variants[0]);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 1200);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onQuickView(product)}
      className="group cursor-pointer flex flex-col"
    >
      {/* Portrait Product Frame */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F2EBE0] border border-[#E2D6C5]/70">
        {/* Primary Image */}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-0"
        />
        {/* Secondary Hover Image */}
        <img
          src={product.hoverImage}
          alt={`${product.name} alternate view`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:scale-100"
        />

        {/* Subtle New Tag */}
        {product.isNewArrival && (
          <span className="absolute top-3.5 left-3.5 bg-[#FAF6EE]/92 backdrop-blur-sm text-[#3B281E] text-[9.5px] tracking-[0.22em] uppercase px-2.5 py-1 border border-[#E2D6C5]/60">
            New Arrival
          </span>
        )}

        {/* Top-Right Wishlist & Quick View Buttons */}
        <div className="absolute top-3.5 right-3.5 flex flex-col gap-2 z-10">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product);
            }}
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 cursor-pointer ${
              isWishlisted
                ? "bg-[#3B281E] text-[#FAF6EE] border-[#3B281E]"
                : "bg-[#FAF6EE]/88 text-[#3B281E] border-[#E2D6C5]/80 hover:bg-[#3B281E] hover:text-[#FAF6EE]"
            }`}
          >
            <Heart
              className={`w-4 h-4 stroke-[1.5] ${
                isWishlisted ? "fill-current" : ""
              }`}
            />
          </motion.button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            aria-label="Quick view"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#FAF6EE]/88 text-[#3B281E] border border-[#E2D6C5]/80 backdrop-blur-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#3B281E] hover:text-[#FAF6EE] transition-all duration-300 cursor-pointer hidden sm:flex"
          >
            <Eye className="w-4 h-4 stroke-[1.5]" />
          </button>
        </div>

        {/* Hover Reveal Add to Bag Bar */}
        <div className="absolute inset-x-3 bottom-3 z-10 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <button
            onClick={handleAdd}
            className="w-full py-3 bg-[#3B281E]/95 hover:bg-[#261811] text-[#FAF6EE] backdrop-blur-sm text-[11px] tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
          >
            <ShoppingBag className="w-3.5 h-3.5 stroke-[1.5]" />
            <span>{addedFeedback ? "Added to Bag" : "Add to Bag"}</span>
          </button>
        </div>
      </div>

      {/* Product Metadata */}
      <div className="pt-4 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 text-[10.5px] tracking-[0.18em] uppercase text-[#6E5A4F]">
            <span>{product.subCategory}</span>
            <span className="inline-flex items-center gap-1 text-[#3B281E]">
              <Star className="w-3 h-3 fill-[#A67C52] text-[#A67C52]" />
              <span>{product.rating.toFixed(1)}</span>
            </span>
          </div>

          <h3 className="mt-1.5 font-serif text-lg sm:text-[20px] leading-snug text-[#3B281E] group-hover:text-[#6E5A4F] transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-2.5 flex items-center justify-between">
          <span className="text-sm font-medium text-[#3B281E]">
            ${product.price.toFixed(0)}
          </span>
          {/* Mobile-friendly quick add button */}
          <button
            onClick={handleAdd}
            className="sm:hidden text-[10.5px] tracking-[0.16em] uppercase underline underline-offset-4 text-[#3B281E]"
          >
            {addedFeedback ? "Added" : "+ Add"}
          </button>
        </div>
      </div>
    </motion.article>
  );
};
