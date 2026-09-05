import React from "react";
import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";

/**
 * Image paths follow your existing convention (root-level, wakafoods-
 * prefixed). Drop matching files into /public and they'll pick up.
 */
const dishes = [
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwn16qcQVv_D668Gzq1YGyWJQUfDeXGIxj0keiKgiSww&s=10", alt: "Crispy fries" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJ203VhKuEqLH1_XuG3d7flf6KzHWN2VYbw26K17TU1hvZbH6BZtEFTA&s=10", alt: "Spaghetti with herbs" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlzxdU0GFB4yQBFdoBWRWHszyMCb8OYkUsSKKqHVtOiESK7ditzqoy2XWc&s=10", alt: "Pepperoni and olive pizza" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5N652G6Nx0D4Lio8CZ37UOzS0EDQE1Irh2RzzB88yDrTVM9F3N8PwdyZ3&s=10", alt: "Grilled chicken and rice" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHUwnFAF2hb9bqimwha-eR-BNxGFF0HCZLXbB1vB_VOhkgblg79FxVOQ&s=10", alt: "Jollof rice with sides" },
];


const GooglePlayIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 2.5v19a1 1 0 0 0 1.6.8l12-9.5a1 1 0 0 0 0-1.6l-12-9.5A1 1 0 0 0 4 2.5Z" fill="#00D2FF" />
    <path d="M4.4 21.9 15 12 4.4 2.1A1 1 0 0 0 4 2.9v18.2c0 .3.1.5.4.8Z" fill="#00D2FF" />
    <path d="m15 12-3.4-2.7L4.6 2.2c.1 0 .3.1.4.2l12.9 7.2L15 12Z" fill="#00F076" />
    <path d="M17.9 9.6 15 12l2.9 2.4 3.3-1.8a1.1 1.1 0 0 0 0-1.9l-3.3-1.1Z" fill="#FFC900" />
    <path d="m15 12 3.4 2.7-12.9 7.2c-.1.1-.3.1-.4.2L15 12Z" fill="#FF3A44" />
  </svg>
);

const Dishes = () => {
  return (
    <section
    id="get-started"
    className="relative overflow-hidden bg-[#FCF3F6] px-5 py-16 text-center sm:py-20">
      <style>{`
        .yd-scroll::-webkit-scrollbar { display: none; }
        .yd-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* Badge */}
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-block rounded-full border border-[#902141]/10 bg-[#F7DFE8] px-4 py-1.5 text-xs font-semibold text-[#3A2530] sm:text-sm"
      >
        Yummy Dishes
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold leading-tight text-[#1B1013] sm:text-4xl md:text-5xl"
      >
        Access over 1000+ dishes with just a tap
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto mt-3 max-w-xl text-sm text-gray-600 sm:text-base"
      >
        Your next meal is just a scroll or a tap away. Discover something
        delicious today!
      </motion.p>

      {/*
        FIX: the row's visible width is now capped at a fixed pixel value
        (max-w-[1050px]) via a wrapper, centered with mx-auto, while the
        cards inside are sized so their combined width always exceeds
        that cap (5 cards at up to 288px + gaps comfortably clears
        1050px). Because the cap is a fixed number rather than a
        percentage of the viewport, the row overflows — and a card gets
        visibly cut at both edges — on any screen size, not just narrow
        ones where the viewport itself was doing the clipping before.
      */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative mx-auto mt-10 max-w-[1050px]"
      >
        {/* Edge fades — reinforce the "there's more" cue on top of the
            hard crop, and hide the scrollbar-less clip line softly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[#FCF3F6] to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[#FCF3F6] to-transparent sm:w-16" />

        <div className="yd-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 sm:gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.src}
              className="h-40 w-52 shrink-0 snap-start overflow-hidden rounded-2xl border border-white shadow-[0_10px_30px_rgba(144,33,65,0.10)] sm:h-52 sm:w-72"
            >
              <img
                src={dish.src}
                alt={dish.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-10 flex items-center justify-center gap-3"
      >
        <a
          href="#"
          className="flex items-center gap-2 rounded-xl bg-[#902141] px-5 py-2.5 text-white shadow-md transition-transform duration-300 hover:scale-[1.03]"
        >
          <FaApple className="text-2xl" />
          <span className="text-left leading-tight">
            <span className="block text-[10px] font-medium opacity-90">
              Download on the
            </span>
            <span className="block text-base font-bold">App Store</span>
          </span>
        </a>

        <a
          href="#"
          className="flex items-center gap-2 rounded-xl bg-[#902141] px-5 py-2.5 text-white shadow-md transition-transform duration-300 hover:scale-[1.03]"
        >
          <GooglePlayIcon size={22} />
          <span className="text-left leading-tight">
            <span className="block text-[10px] font-medium opacity-90">
              GET IT ON
            </span>
            <span className="block text-base font-bold">Google Play</span>
          </span>
        </a>
      </motion.div>
    </section>
  );
};

export default Dishes;