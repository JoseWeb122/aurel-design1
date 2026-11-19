import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag, Check } from "lucide-react";
import { Product } from "../data/catalog";

export interface BagItem {
  product: Product;
  variant: string;
  quantity: number;
}

interface BagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BagItem[];
  onUpdateQuantity: (productId: string, variant: string, delta: number) => void;
  onRemoveItem: (productId: string, variant: string) => void;
  onClearBag: () => void;
}

const FREE_SHIPPING_THRESHOLD = 180;

export const BagDrawer: React.FC<BagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
}) => {
  const [checkedOut, setCheckedOut] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  const handleCheckout = () => {
    setCheckedOut(true);
    setTimeout(() => {
      onClearBag();
    }, 300);
  };

  const handleClose = () => {
    setCheckedOut(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleClose}
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
            {/* Header */}
            <div className="px-6 py-5 border-b border-[#E2D6C5] flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl font-normal">Shopping Bag</h2>
                <p className="text-[11px] tracking-[0.18em] uppercase text-[#6E5A4F]">
                  {items.reduce((acc, i) => acc + i.quantity, 0)} Selected
                </p>
              </div>
              <button
                onClick={handleClose}
                aria-label="Close bag"
                className="p-2 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>

            {/* Complimentary Shipping Progress */}
            {!checkedOut && items.length > 0 && (
              <div className="px-6 py-3.5 bg-[#F2EBE0]/80 border-b border-[#E2D6C5]">
                <p className="text-xs text-[#3B281E] font-light">
                  {remaining === 0
                    ? "You have unlocked complimentary express shipping."
                    : `Add $${remaining.toFixed(0)} more for complimentary express shipping.`}
                </p>
                <div className="mt-2 h-1 w-full bg-[#E2D6C5] overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-[#3B281E]"
                  />
                </div>
              </div>
            )}

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {checkedOut ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#3B281E] text-[#FAF6EE] flex items-center justify-center">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-3xl text-[#3B281E]">
                    Order Reserved
                  </h3>
                  <p className="text-sm text-[#6E5A4F] font-light leading-relaxed">
                    Thank you for shopping with Maison Aurelia. Your curated
                    pieces and botanical samples are being prepared in our
                    atelier.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-4 bg-[#3B281E] text-[#FAF6EE] px-8 py-3.5 text-xs tracking-[0.2em] uppercase cursor-pointer"
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center px-4">
                  <ShoppingBag className="w-10 h-10 text-[#C9B9A6] stroke-[1.2] mb-4" />
                  <p className="font-serif text-2xl text-[#3B281E]">
                    Your Bag Is Empty
                  </p>
                  <p className="text-sm text-[#6E5A4F] mt-2 font-light max-w-xs">
                    Explore our timeless women&apos;s wear, botanical skincare,
                    and calm daily rituals.
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 border border-[#3B281E] px-7 py-3 text-xs tracking-[0.2em] uppercase text-[#3B281E] hover:bg-[#3B281E] hover:text-[#FAF6EE] transition-colors cursor-pointer"
                  >
                    Discover Collection
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.variant}`}
                      className="flex gap-4 pb-6 border-b border-[#E2D6C5]/70"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-20 h-26 object-cover bg-[#F2EBE0] border border-[#E2D6C5] shrink-0"
                      />
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h4 className="font-serif text-lg leading-snug text-[#3B281E]">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() =>
                                onRemoveItem(item.product.id, item.variant)
                              }
                              aria-label="Remove item"
                              className="text-[#6E5A4F] hover:text-[#3B281E] transition-colors p-0.5 cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4 stroke-[1.4]" />
                            </button>
                          </div>
                          <p className="text-[11px] tracking-[0.16em] uppercase text-[#6E5A4F] mt-1">
                            Option: {item.variant}
                          </p>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="inline-flex items-center border border-[#E2D6C5] bg-[#FDFBF7]">
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.variant,
                                  -1
                                )
                              }
                              aria-label="Decrease quantity"
                              className="p-2 text-[#3B281E] hover:bg-[#F2EBE0] transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                onUpdateQuantity(
                                  item.product.id,
                                  item.variant,
                                  1
                                )
                              }
                              aria-label="Increase quantity"
                              className="p-2 text-[#3B281E] hover:bg-[#F2EBE0] transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-sm font-medium text-[#3B281E]">
                            ${(item.product.price * item.quantity).toFixed(0)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Summary */}
            {!checkedOut && items.length > 0 && (
              <div className="px-6 py-6 bg-[#FDFBF7] border-t border-[#E2D6C5] space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6E5A4F] font-light">Subtotal</span>
                  <span className="font-serif text-2xl text-[#3B281E]">
                    ${subtotal.toFixed(0)}
                  </span>
                </div>
                <p className="text-[11px] text-[#6E5A4F] font-light">
                  Complimentary gift wrapping &amp; botanical samples included at
                  checkout.
                </p>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#3B281E] hover:bg-[#261811] text-[#FAF6EE] py-4 text-xs tracking-[0.22em] uppercase font-medium transition-colors cursor-pointer"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
