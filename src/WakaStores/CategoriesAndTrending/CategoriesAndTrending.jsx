import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHome,
  FiCpu,
  FiShoppingBag,
  FiHeart,
  FiCoffee,
  FiGift,
  FiTool,
  FiMoreHorizontal,
  FiArrowRight,
  FiStar,
  FiSmartphone,
} from "react-icons/fi";

const APP_STORE_URL = "https://apps.apple.com";
const PLAY_STORE_URL = "https://play.google.com/store";

const categories = [
  { label: "Home & Living", icon: FiHome },
  { label: "Electronics", icon: FiCpu },
  { label: "Fashion", icon: FiShoppingBag },
  { label: "Beauty", icon: FiHeart },
  { label: "Food & Groceries", icon: FiCoffee },
  { label: "Baby & Kids", icon: FiGift },
  { label: "Tools", icon: FiTool },
  { label: "More", icon: FiMoreHorizontal },
];

const trendingTabs = ["All", "Shoes"];

// NOTE: the two gstatic "encrypted-tbn0" thumbnail links from the original
// code are unreliable (Google's proxy often serves a blank/placeholder
// image instead of the real photo) — replaced with direct Pexels URLs.
const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 40000,
    category: "Shoes",
    rating: 4.8,
    reviews: 124,
    badge: "Popular",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 2,
    name: "Premium White Sneakers",
    price: 50000,
    category: "Shoes",
    rating: 4.9,
    reviews: 86,
    badge: "Trending",
    image:
      "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 3,
    name: "Black & White Trainers",
    price: 75000,
    category: "Shoes",
    rating: 4.7,
    reviews: 64,
    image:
      "https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 4,
    name: "Black & Red Sneakers",
    price: 60000,
    category: "Shoes",
    rating: 4.9,
    reviews: 152,
    badge: "Best Seller",
    image:
      "https://images.pexels.com/photos/20247841/pexels-photo-20247841.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 5,
    name: "Urban White Sneakers",
    price: 40000,
    category: "Shoes",
    rating: 4.6,
    reviews: 43,
    image:
      "https://images.pexels.com/photos/12739974/pexels-photo-12739974.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
  {
    id: 6,
    name: "Modern Nike Sneakers",
    price: 70000,
    category: "Shoes",
    rating: 4.8,
    reviews: 91,
    badge: "New",
    image:
      "https://images.pexels.com/photos/15592489/pexels-photo-15592489.jpeg?auto=compress&cs=tinysrgb&w=900",
  },
];

function formatNaira(amount) {
  return `₦${amount.toLocaleString("en-NG")}`;
}

/* =========================================================
   SCROLLBAR HIDE (utility not shipped in core Tailwind)
========================================================= */

function ScrollbarHideStyle() {
  return (
    <style>{`
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  );
}

/* =========================================================
   CATEGORY PILL
========================================================= */

function CategoryPill({ category, index }) {
  let Icon = category.icon;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
      className="group flex shrink-0 items-center gap-2.5 rounded-full border border-[#E30613]/10 bg-white px-4 py-2.5 text-sm font-medium text-[#1B1B1B] shadow-[0_6px_20px_rgba(227,6,19,0.04)] transition-all duration-300 hover:border-[#E30613] hover:bg-[#E30613] hover:text-white hover:shadow-[0_12px_30px_rgba(227,6,19,0.16)]"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FDE1E3] text-[#E30613] transition-all duration-300 group-hover:bg-white/15 group-hover:text-white">
        <Icon size={14} />
      </span>
      {category.label}
    </motion.button>
  );
}

/* =========================================================
   PRODUCT CARD
========================================================= */

function ProductCard({ product, index }) {
  let [saved, setSaved] = useState(false);
  let [imageFailed, setImageFailed] = useState(false);

  function handleQuickAdd() {
    let target = document.getElementById("get-app");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleImageError() {
    setImageFailed(true);
  }

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[20px] border border-[#E30613]/8 bg-white shadow-[0_8px_30px_rgba(90,25,30,0.05)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(90,25,30,0.12)]"
    >
      {/* IMAGE */}
      <div className="relative aspect-square overflow-hidden bg-[#FDE1E3]">
        {imageFailed ? (
          <div className="flex h-full w-full items-center justify-center text-[#E30613]/40">
            <FiShoppingBag size={28} />
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            onError={handleImageError}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-[#E30613] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_20px_rgba(227,6,19,0.2)]">
            {product.badge}
          </span>
        )}

        <motion.button
          type="button"
          whileTap={{ scale: 0.8 }}
          onClick={() => setSaved((value) => !value)}
          aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={saved}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/70 bg-white/90 text-[#1B1B1B] shadow-lg backdrop-blur-md"
        >
          <FiHeart
            size={16}
            fill={saved ? "currentColor" : "none"}
            className={saved ? "text-[#E30613]" : "text-[#1B1B1B]"}
          />
        </motion.button>

        <motion.button
          type="button"
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 hidden items-center justify-center gap-2 rounded-xl bg-white/95 py-2.5 text-xs font-semibold text-[#1B1B1B] opacity-0 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:flex group-hover:opacity-100 hover:bg-[#E30613] hover:text-white md:flex"
        >
          <FiSmartphone />
          Get it on the app
        </motion.button>
      </div>

      {/* CONTENT */}
      <div className="p-3.5">
        <h3 className="truncate text-sm font-semibold text-[#1B1B1B]">
          {product.name}
        </h3>

        <div className="mt-1.5 flex items-center gap-1.5">
          <FiStar size={12} fill="currentColor" className="text-[#E30613]" />
          <span className="text-xs font-medium text-[#1B1B1B]">
            {product.rating}
          </span>
          <span className="text-[11px] text-[#817879]">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-2.5 flex items-center justify-between gap-2">
          <p className="text-sm font-bold text-[#E30613]">
            {formatNaira(product.price)}
          </p>

          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label="Get it on the app"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FDE1E3] text-[#E30613] transition-all duration-300 hover:bg-[#E30613] hover:text-white md:hidden"
          >
            <FiSmartphone size={14} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   CATEGORIES
========================================================= */

function CategoriesSection() {
  return (
    <section
      id="categories"
      className="relative overflow-hidden border-b border-[#E30613]/10 bg-[#FEEBEC] px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#E30613]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-white blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E30613]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E30613]">
              Explore WakaStores
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <h2 className="max-w-[650px] text-3xl font-medium leading-[1] tracking-[-0.05em] text-[#1B1B1B] sm:text-4xl lg:text-5xl">
                Shop by category.
                <span className="block text-[#E30613]">
                  Find your thing.
                </span>
              </h2>

              <p className="mt-4 max-w-[550px] text-sm leading-6 text-[#766B6D] sm:text-base">
                From everyday essentials to your next favourite find,
                discover products from trusted sellers.
              </p>
            </div>

            <a
              href="#trending"
              className="group flex shrink-0 items-center gap-2 text-sm font-semibold text-[#E30613]"
            >
              View trending
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <div className="scrollbar-hide -mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
          {categories.map((category, index) => (
            <CategoryPill key={category.label} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   TRENDING
========================================================= */

function TrendingSection() {
  let [activeTab, setActiveTab] = useState("All");

  let filteredProducts = useMemo(() => {
    if (activeTab === "All") {
      return products;
    }

    return products.filter((product) => product.category === activeTab);
  }, [activeTab]);

  return (
    <section
      id="trending"
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E30613]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E30613]">
                Trending now
              </span>
            </div>

            <h2 className="text-3xl font-medium tracking-[-0.05em] text-[#1B1B1B] sm:text-4xl">
              What's hot right now?
            </h2>

            <p className="mt-2 text-sm text-[#766B6D]">
              Popular picks shoppers are loving.
            </p>
          </div>

          <div className="scrollbar-hide flex gap-1 overflow-x-auto pb-1">
            {trendingTabs.map((tab) => {
              let active = activeTab === tab;

              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                    active
                      ? "bg-[#E30613] text-white shadow-[0_8px_25px_rgba(227,6,19,0.2)]"
                      : "bg-[#F9F5F5] text-[#766B6D] hover:bg-[#FDE1E3] hover:text-[#E30613]"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </motion.div>

        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5"
            >
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-[24px] border border-dashed border-[#E30613]/20 bg-[#FEEBEC] px-6 py-20 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FDE1E3] text-[#E30613]">
                <FiShoppingBag />
              </div>
              <p className="mt-4 text-sm font-bold text-[#1B1B1B]">
                Nothing here yet
              </p>
              <p className="mt-1 text-xs text-[#766B6D]">
                New products are coming soon.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 scroll-mt-6 overflow-hidden rounded-[24px] bg-[#1B1B1B] p-6 text-white sm:p-7"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-bold">
                Shop them with WakaStores
              </p>
              <p className="mt-1 text-xs text-white/50">
                Available on iOS and Android. Download to get started.
              </p>
            </div>

            <div className="flex w-fit shrink-0 items-center gap-2.5">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1B1B1B]"
              >
                <FiSmartphone />
                App Store
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full bg-[#E30613] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#C90511] hover:shadow-[0_10px_30px_rgba(227,6,19,0.25)]"
              >
                Google Play
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function CategoriesAndTrending() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollbarHideStyle />
      <CategoriesSection />
      <TrendingSection />
    </main>
  );
}
