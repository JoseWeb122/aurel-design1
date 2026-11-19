import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Heart, ShoppingBag, Check } from "lucide-react";
import { Product } from "../data/catalog";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
  onAddToBag: (product: Product, variant: string, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onAddToBag,
}) => {
  const [selectedVariant, setSelectedVariant] = useState("");
  const [activeImage, setActiveImage] = useState("");
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0]);
      setActiveImage(product.image);
      setAdded(false);
    }
  }, [product]);

  if (!product) return null;

  const handleAdd = () => {
    onAddToBag(product, selectedVariant || product.variants[0], 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#261811]/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-4xl bg-[#FAF6EE] border border-[#E2D6C5] shadow-2xl grid grid-cols-1 md:grid-cols-12 overflow-hidden relative max-h-[92vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close product detail"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#FAF6EE]/90 border border-[#E2D6C5] flex items-center justify-center text-[#3B281E] hover:bg-[#3B281E] hover:text-[#FAF6EE] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Gallery Column */}
            <div className="md:col-span-6 bg-[#F2EBE0] p-4 sm:p-6 flex flex-col gap-3">
              <div className="aspect-[3/4] overflow-hidden border border-[#E2D6C5] bg-[#FAF6EE]">
                <img
                  src={activeImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[product.image, product.hoverImage].map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`aspect-[4/3] overflow-hidden border transition-all cursor-pointer ${
                      activeImage === imgUrl
                        ? "border-[#3B281E]"
                        : "border-[#E2D6C5] opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Editorial Spec Column */}
            <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-[10.5px] tracking-[0.22em] uppercase text-[#6E5A4F]">
                  <span>
                    {product.category} &nbsp;·&nbsp; {product.subCategory}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#3B281E] mt-2 leading-tight font-light">
                  {product.name}
                </h2>

                <div className="mt-3 flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#3B281E]">
                    ${product.price}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#6E5A4F]">
                    <Star className="w-3.5 h-3.5 fill-[#A67C52] text-[#A67C52]" />
                    <span className="text-[#3B281E] font-medium">
                      {product.rating.toFixed(1)}
                    </span>
                    <span>({product.reviewCount} reviews)</span>
                  </div>
                </div>

                <p className="mt-5 text-sm text-[#6E5A4F] leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Variants / Sizes */}
                <div className="mt-6">
                  <p className="text-[10.5px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-2.5">
                    Select Option
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        onClick={() => setSelectedVariant(variant)}
                        className={`px-4 py-2 text-xs tracking-[0.14em] uppercase border transition-colors cursor-pointer ${
                          selectedVariant === variant
                            ? "bg-[#3B281E] text-[#FAF6EE] border-[#3B281E]"
                            : "bg-[#FDFBF7] text-[#3B281E] border-[#E2D6C5] hover:border-[#3B281E]"
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Craftsmanship / Ingredients */}
                <div className="mt-7 pt-5 border-t border-[#E2D6C5]">
                  <p className="text-[10.5px] tracking-[0.2em] uppercase text-[#6E5A4F] mb-2.5">
                    Provenance &amp; Details
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#6E5A4F] font-light">
                    {product.details.map((d, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#3B281E]" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Row */}
              <div className="mt-8 pt-5 border-t border-[#E2D6C5] flex items-center gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] py-4 text-xs tracking-[0.22em] uppercase transition-colors cursor-pointer"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                      <span>Add to Bag — ${product.price}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  aria-label="Toggle wishlist"
                  className={`p-4 border transition-colors cursor-pointer ${
                    isWishlisted
                      ? "bg-[#3B281E] text-[#FAF6EE] border-[#3B281E]"
                      : "bg-[#FDFBF7] text-[#3B281E] border-[#E2D6C5] hover:border-[#3B281E]"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 stroke-[1.5] ${
                      isWishlisted ? "fill-current" : ""
                    }`}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
