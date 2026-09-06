import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

/**
 * Floating "back to top" button.
 *
 * Usage:
 *   <ScrollToTopButton />                          // shows after 1 viewport height
 *   <ScrollToTopButton threshold={600} />           // shows after 600px scrolled
 *   <ScrollToTopButton accentColor="#902141" />      // WakaFoods maroon
 *   <ScrollToTopButton accentColor="#008F68" />      // WakaRider green
 *   <ScrollToTopButton accentColor="#E4501E" />      // SmartFixer signal-orange
 *   <ScrollToTopButton accentColor="#FB7A00" />      // WakaDotCom orange
 *
 * Drop it once near the bottom of your page (or in a layout component
 * that wraps every page) — it's fixed-position, so placement in the
 * JSX tree doesn't affect where it renders.
 */
const ScrollToTopButton = ({
  threshold,
  accentColor = "#171717",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getThreshold = () =>
      typeof threshold === "number" ? threshold : window.innerHeight;

    const handleScroll = () => {
      setIsVisible(window.scrollY > getThreshold());
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
          style={{ backgroundColor: accentColor }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;