import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Product } from "../data/catalog";

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemove: (product: Product) => void;
  onMoveToBag: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemove,
  onMoveToBag,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[#261811]/45 backdrop-blur-xs flex justify-end"
        >
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#FAF6EE] text-[#3B281E] h-full flex flex-col shadow-2xl border-l border-[#E2D6C5]"
          >
            <div className="px-6 py-5 border-b border-[#E2D6C5] flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-normal">Saved Pieces</h2>
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#6E5A4F]">
                  {items.length} {items.length === 1 ? "Item" : "Items"}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close wishlist"
                className="p-2 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <Heart className="w-10 h-10 text-[#C9B9A6] stroke-[1.2] mb-4" />
                  <p className="font-serif text-2xl text-[#3B281E]">
                    Your Wishlist Is Quiet
                  </p>
                  <p className="text-sm text-[#6E5A4F] mt-2 font-light max-w-xs">
                    Tap the heart icon on any garment or skincare ritual to save
                    it here for later.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((product) => (
                    <div
                      key={product.id}
                      className="flex gap-4 pb-6 border-b border-[#E2D6C5]/70"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-26 object-cover bg-[#F2EBE0] border border-[#E2D6C5] shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-lg leading-snug text-[#3B281E]">
                              {product.name}
                            </h4>
                            <button
                              onClick={() => onRemove(product)}
                              aria-label="Remove from wishlist"
                              className="text-[#6E5A4F] hover:text-[#3B281E] p-0.5 cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4 stroke-[1.4]" />
                            </button>
                          </div>
                          <p className="text-xs text-[#6E5A4F] mt-1">
                            ${product.price} &nbsp;·&nbsp; {product.subCategory}
                          </p>
                        </div>

                        <button
                          onClick={() => onMoveToBag(product)}
                          className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] py-2.5 text-[10.5px] tracking-[0.2em] uppercase transition-colors cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Move to Bag</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
