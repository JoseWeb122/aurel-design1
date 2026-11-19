import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { PRODUCTS, Product } from "./data/catalog";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturedCategories } from "./components/FeaturedCategories";
import { FeaturedProducts, ShopFilter } from "./components/FeaturedProducts";
import { EditorialShowcase } from "./components/EditorialShowcase";
import { BeautyWellnessSection } from "./components/BeautyWellnessSection";
import { PromoBanner } from "./components/PromoBanner";
import { BrandStory } from "./components/BrandStory";
import { Testimonials } from "./components/Testimonials";
import { NewsletterSection } from "./components/NewsletterSection";
import { ContactSection } from "./components/ContactSection";
import { Footer, InfoModalType } from "./components/Footer";
import { BagDrawer, BagItem } from "./components/BagDrawer";
import { WishlistDrawer } from "./components/WishlistDrawer";
import { SearchOverlay } from "./components/SearchOverlay";
import { ProductModal } from "./components/ProductModal";
import {
  AccountModal,
  StoryModal,
  CareInfoModal,
} from "./components/InfoModals";

export function App() {
  const [bagItems, setBagItems] = useState<BagItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [activeShopFilter, setActiveShopFilter] = useState<ShopFilter>("All");

  // Overlays & Modals
  const [bagOpen, setBagOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [storyOpen, setStoryOpen] = useState(false);
  const [infoModal, setInfoModal] = useState<InfoModalType | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  const scrollToShopWithFilter = (filter: ShopFilter) => {
    setActiveShopFilter(filter);
    const shopEl = document.getElementById("shop");
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAddToBag = (
    product: Product,
    variant?: string,
    quantity = 1
  ) => {
    const chosenVariant = variant || product.variants[0];
    setBagItems((prev) => {
      const existing = prev.find(
        (item) =>
          item.product.id === product.id && item.variant === chosenVariant
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.variant === chosenVariant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, variant: chosenVariant, quantity }];
    });
    showToast(`${product.name} added to your bag`);
  };

  const handleUpdateQuantity = (
    productId: string,
    variant: string,
    delta: number
  ) => {
    setBagItems((prev) =>
      prev
        .map((item) =>
          item.product.id === productId && item.variant === variant
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleRemoveBagItem = (productId: string, variant: string) => {
    setBagItems((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.variant === variant)
      )
    );
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed ${product.name} from wishlist`);
        return prev.filter((p) => p.id !== product.id);
      }
      showToast(`Saved ${product.name} to wishlist`);
      return [...prev, product];
    });
  };

  const handleMoveToBag = (product: Product) => {
    handleAddToBag(product, product.variants[0], 1);
    setWishlist((prev) => prev.filter((p) => p.id !== product.id));
    setWishlistOpen(false);
    setBagOpen(true);
  };

  const totalBagCount = bagItems.reduce((sum, item) => sum + item.quantity, 0);
  const featuredCoat =
    PRODUCTS.find((p) => p.id === "aur-02") || PRODUCTS[0];

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#3B281E] flex flex-col">
      <Navbar
        bagCount={totalBagCount}
        wishlistCount={wishlist.length}
        onOpenBag={() => setBagOpen(true)}
        onOpenWishlist={() => setWishlistOpen(true)}
        onOpenSearch={() => setSearchOpen(true)}
        onOpenAccount={() => setAccountOpen(true)}
        onNavigateCategory={(category) => scrollToShopWithFilter(category)}
      />

      <main className="flex-1">
        <HeroSection
          onShopCollection={() => scrollToShopWithFilter("All")}
          onExploreBeauty={() => {
            const el = document.getElementById("beauty-wellness");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        <FeaturedCategories
          onSelectCategory={(category) => scrollToShopWithFilter(category)}
        />

        <FeaturedProducts
          products={PRODUCTS}
          activeFilter={activeShopFilter}
          onChangeFilter={setActiveShopFilter}
          wishlistIds={wishlist.map((p) => p.id)}
          onToggleWishlist={handleToggleWishlist}
          onAddToBag={(product, variant) => handleAddToBag(product, variant, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        <EditorialShowcase
          featuredProduct={featuredCoat}
          onShopWomensWear={() => scrollToShopWithFilter("Women's Wear")}
          onQuickViewProduct={(product) => setQuickViewProduct(product)}
        />

        <BeautyWellnessSection
          products={PRODUCTS}
          onAddToBag={(product, variant) => handleAddToBag(product, variant, 1)}
          onQuickView={(product) => setQuickViewProduct(product)}
          onExploreAllBeauty={() => scrollToShopWithFilter("Beauty")}
        />

        <PromoBanner
          onShopNewArrivals={() => scrollToShopWithFilter("New Arrivals")}
        />

        <BrandStory onOpenStoryModal={() => setStoryOpen(true)} />

        <Testimonials />

        <NewsletterSection />

        <ContactSection />
      </main>

      <Footer
        onSelectShopFilter={(filter) => scrollToShopWithFilter(filter)}
        onOpenInfoModal={(type) => setInfoModal(type)}
      />

      {/* Interactive Drawers & Modals */}
      <BagDrawer
        isOpen={bagOpen}
        onClose={() => setBagOpen(false)}
        items={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveBagItem}
        onClearBag={() => setBagItems([])}
      />

      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        items={wishlist}
        onRemove={handleToggleWishlist}
        onMoveToBag={handleMoveToBag}
      />

      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(product) => setQuickViewProduct(product)}
      />

      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        isWishlisted={
          quickViewProduct
            ? wishlist.some((p) => p.id === quickViewProduct.id)
            : false
        }
        onToggleWishlist={handleToggleWishlist}
        onAddToBag={handleAddToBag}
      />

      <AccountModal
        isOpen={accountOpen}
        onClose={() => setAccountOpen(false)}
      />

      <StoryModal isOpen={storyOpen} onClose={() => setStoryOpen(false)} />

      <CareInfoModal type={infoModal} onClose={() => setInfoModal(null)} />

      {/* Subtle Editorial Toast Feedback */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 bg-[#261811] text-[#FAF6EE] border border-[#3B281E] px-5 py-3.5 shadow-xl flex items-center gap-3 max-w-sm"
          >
            <Check className="w-4 h-4 text-[#C9B9A6] shrink-0" />
            <span className="text-xs tracking-wide font-light">
              {toastMessage}
            </span>
            <button
              onClick={() => {
                setToastMessage(null);
                setBagOpen(true);
              }}
              className="ml-2 text-[10px] tracking-[0.2em] uppercase underline underline-offset-4 text-[#C9B9A6] hover:text-[#FAF6EE] cursor-pointer shrink-0"
            >
              View Bag
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
