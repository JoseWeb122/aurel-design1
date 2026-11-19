import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";

interface NavbarProps {
  bagCount: number;
  wishlistCount: number;
  onOpenBag: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  onNavigateCategory: (category: "All" | "Women's Wear" | "Beauty" | "Health & Wellness") => void;
}

const NAV_ITEMS = [
  { label: "Home", href: "#home", action: "scroll" as const },
  { label: "Shop", href: "#shop", action: "all" as const },
  { label: "Women's Wear", href: "#shop", action: "womens" as const },
  { label: "Health & Beauty", href: "#beauty-wellness", action: "scroll" as const },
  { label: "About", href: "#about", action: "scroll" as const },
  { label: "Contact", href: "#contact", action: "scroll" as const },
];

export const Navbar: React.FC<NavbarProps> = ({
  bagCount,
  wishlistCount,
  onOpenBag,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  onNavigateCategory,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: (typeof NAV_ITEMS)[number]
  ) => {
    e.preventDefault();
    setMobileOpen(false);

    if (item.action === "all") {
      onNavigateCategory("All");
    } else if (item.action === "womens") {
      onNavigateCategory("Women's Wear");
    }

    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Minimal Announcement Bar */}
      <div className="bg-[#261811] text-[#FAF6EE] text-[11px] tracking-[0.2em] uppercase py-2 px-4 text-center font-light">
        Complimentary Express Delivery Over $180 &nbsp;·&nbsp; Curated Botanical Samples With Every Order
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF6EE]/92 backdrop-blur-md border-b border-[#E2D6C5]/80 py-3.5 shadow-[0_8px_30px_rgb(59,40,30,0.04)]"
            : "bg-[#FAF6EE]/80 backdrop-blur-sm border-b border-[#E2D6C5]/40 py-4.5"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-1.5 -ml-1.5 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer"
            >
              <Menu className="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          {/* Left Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="editorial-link text-[12px] tracking-[0.14em] uppercase text-[#3B281E] hover:text-[#6E5A4F] transition-colors font-normal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 flex flex-col items-center group"
          >
            <span className="font-serif text-2xl sm:text-[26px] tracking-[0.26em] uppercase text-[#3B281E] font-medium leading-none">
              Aurelia
            </span>
            <span className="text-[8.5px] tracking-[0.38em] uppercase text-[#6E5A4F] mt-1">
              Maison
            </span>
          </a>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              onClick={onOpenSearch}
              aria-label="Search"
              className="flex items-center space-x-1.5 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer group"
            >
              <Search className="w-[18px] h-[18px] stroke-[1.5] group-hover:scale-105 transition-transform" />
              <span className="hidden xl:inline text-[11px] tracking-[0.15em] uppercase">
                Search
              </span>
            </button>

            <button
              onClick={onOpenAccount}
              aria-label="Account"
              className="hidden sm:flex items-center space-x-1.5 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer group"
            >
              <User className="w-[18px] h-[18px] stroke-[1.5] group-hover:scale-105 transition-transform" />
              <span className="hidden xl:inline text-[11px] tracking-[0.15em] uppercase">
                Account
              </span>
            </button>

            <button
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="relative flex items-center space-x-1.5 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer group"
            >
              <Heart className="w-[18px] h-[18px] stroke-[1.5] group-hover:scale-105 transition-transform" />
              {wishlistCount > 0 && (
                <motion.span
                  key={wishlistCount}
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-2 xl:static xl:ml-0.5 min-w-[16px] h-4 px-1 rounded-full bg-[#3B281E] text-[#FAF6EE] text-[10px] flex items-center justify-center font-medium"
                >
                  {wishlistCount}
                </motion.span>
              )}
            </button>

            <button
              onClick={onOpenBag}
              aria-label="Shopping Bag"
              className="relative flex items-center space-x-1.5 text-[#3B281E] hover:text-[#6E5A4F] transition-colors cursor-pointer group"
            >
              <ShoppingBag className="w-[18px] h-[18px] stroke-[1.5] group-hover:scale-105 transition-transform" />
              <span className="hidden xl:inline text-[11px] tracking-[0.15em] uppercase">
                Bag
              </span>
              <motion.span
                key={bagCount}
                initial={{ scale: 0.75 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 450, damping: 22 }}
                className="min-w-[18px] h-[18px] px-1 rounded-full bg-[#3B281E] text-[#FAF6EE] text-[10px] flex items-center justify-center font-medium"
              >
                {bagCount}
              </motion.span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Height Animated Navigation Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 bg-[#261811]/40 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-[85%] max-w-sm h-full bg-[#FAF6EE] text-[#3B281E] flex flex-col justify-between p-7 shadow-2xl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E2D6C5]">
                  <div>
                    <span className="font-serif text-2xl tracking-[0.24em] uppercase font-medium">
                      Aurelia
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                    className="p-1.5 text-[#3B281E] hover:text-[#6E5A4F] cursor-pointer"
                  >
                    <X className="w-5 h-5 stroke-[1.5]" />
                  </button>
                </div>

                <nav className="mt-8 flex flex-col space-y-5">
                  {NAV_ITEMS.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + idx * 0.05,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="flex items-center justify-between font-serif text-2xl text-[#3B281E] py-1 border-b border-[#E2D6C5]/40"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-[#6E5A4F] stroke-[1.25]" />
                    </motion.a>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-[#E2D6C5] space-y-3">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenAccount();
                  }}
                  className="w-full flex items-center justify-between py-2.5 text-xs tracking-[0.18em] uppercase text-[#3B281E]"
                >
                  <span className="flex items-center gap-2.5">
                    <User className="w-4 h-4 stroke-[1.5]" />
                    Maison Account
                  </span>
                  <span>Sign In</span>
                </button>
                <p className="text-xs text-[#6E5A4F] leading-relaxed">
                  Thoughtfully selected women&apos;s wear, botanical beauty, and everyday rituals.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
