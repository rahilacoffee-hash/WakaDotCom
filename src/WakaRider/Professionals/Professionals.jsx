import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCog,
  FaArrowLeft,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

const professionals = [
  {
    title: "Plumber",
    description: "Certified & background-checked",
    image:
      "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Electrician",
    description: "Certified & background-checked",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Painter",
    description: "Certified & background-checked",
    image:
      "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Carpenter",
    description: "Certified & background-checked",
    image:
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "AC Technician",
    description: "Certified & background-checked",
    // FIX: was a Google Images cached-thumbnail URL
    // (encrypted-tbn0.gstatic.com) — unreliable to hotlink and of
    // uncertain licensing since it's a scraped search-result thumbnail.
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=90",
  },
  {
    title: "Cleaner",
    description: "Certified & background-checked",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=90",
  },
];

const desktopPages = Math.ceil(professionals.length / 3);

const slideVariants = {
  enter: {
    opacity: 0,
    x: 60,
  },
  center: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: -60,
  },
};

const mobileSlideVariants = {
  enter: {
    opacity: 0,
    x: 45,
    scale: 0.98,
  },
  center: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: -45,
    scale: 0.98,
  },
};

const Professionals = () => {
  const [activePage, setActivePage] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* ==========================================
     DESKTOP AUTOPLAY
  ========================================== */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActivePage((prev) => (prev + 1) % desktopPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ==========================================
     MOBILE AUTOPLAY
  ========================================== */

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setMobileIndex((prev) => (prev + 1) % professionals.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* ==========================================
     DESKTOP SLIDES
  ========================================== */

  const getDesktopProfessionals = () => {
    const start = activePage * 3;

    return professionals.slice(start, start + 3);
  };

  /* ==========================================
     DESKTOP CONTROLS
  ========================================== */

  const nextDesktop = () => {
    setActivePage((prev) => (prev + 1) % desktopPages);
  };

  const previousDesktop = () => {
    setActivePage(
      (prev) => (prev - 1 + desktopPages) % desktopPages
    );
  };

  /* ==========================================
     MOBILE CONTROLS
  ========================================== */

  const nextMobile = () => {
    setMobileIndex(
      (prev) => (prev + 1) % professionals.length
    );
  };

  const previousMobile = () => {
    setMobileIndex(
      (prev) =>
        (prev - 1 + professionals.length) %
        professionals.length
    );
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#EFFFF9]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top right glow — FIX: was at /70 opacity, which for a
            saturated color like #008F68 rendered as a near-solid blob
            instead of a subtle glow. Matched to the sibling glow's /10. */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.25, 0.4, 0.25],
            x: [0, 25, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            -top-40
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#008F68]/10
            blur-3xl
          "
        />

        {/* Bottom left glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.22, 0.12],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-48
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#008F68]/10
            blur-3xl
          "
        />

        {/* Grid — FIX: was #1769C2 (leftover blue), now #008F68 */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(#008F68_1px,transparent_1px),linear-gradient(90deg,#008F68_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* ==========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* ==========================================
            HEADER
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#BFEBDD]
              bg-white/75
              px-4
              py-2
              text-xs
              font-semibold
              text-[#008F68]
              shadow-[0_5px_20px_rgba(0,143,104,0.06)]
              sm:text-sm
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#008F68]/40
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#008F68]
                "
              />
            </span>

            Find trusted Professionals
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.045em]
              text-[#171A19]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Find a dispatch rider 

            <span className="block text-[#008F68]">
              near me
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-[#66736E]
              sm:text-base
            "
          >
            Getting help shouldn't be complicated. Tell us
            what went wrong, we'll find the right fixer, and
            you can get back to your day.
          </p>
        </motion.div>

        {/* ==========================================
            CAROUSEL
        ========================================== */}

        <div
          className="relative mt-14 sm:mt-16 lg:mt-20"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ========================================
              DESKTOP
          ======================================== */}

          <div className="hidden md:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  grid
                  grid-cols-3
                  gap-6
                  lg:gap-8
                "
              >
                {getDesktopProfessionals().map(
                  (professional, index) => (
                    <ProfessionalCard
                      key={professional.title}
                      professional={professional}
                      index={index}
                    />
                  )
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ========================================
              MOBILE
          ======================================== */}

          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                variants={mobileSlideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProfessionalCard
                  professional={professionals[mobileIndex]}
                  mobile
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ========================================
              DESKTOP NAVIGATION
          ======================================== */}

          <div
            className="
              mt-7
              hidden
              items-center
              justify-between
              md:flex
            "
          >
            {/* Progress */}

            <div className="flex items-center gap-2">
              {Array.from({
                length: desktopPages,
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePage(index)}
                  aria-label={`Go to professional slide ${
                    index + 1
                  }`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-500
                    ${
                      activePage === index
                        ? "w-10 bg-[#008F68]"
                        : "w-5 bg-[#008F68]/20 hover:bg-[#008F68]/40"
                    }
                  `}
                />
              ))}
            </div>

            {/* Arrows */}

            <div className="flex items-center gap-2">
              <CarouselButton
                onClick={previousDesktop}
                label="Previous professionals"
              >
                <FaArrowLeft />
              </CarouselButton>

              <CarouselButton
                onClick={nextDesktop}
                label="Next professionals"
              >
                <FaArrowRight />
              </CarouselButton>
            </div>
          </div>

          {/* ========================================
              MOBILE NAVIGATION
          ======================================== */}

          <div
            className="
              mt-6
              flex
              items-center
              justify-between
              md:hidden
            "
          >
            {/* Dots */}

            <div className="flex items-center gap-1.5">
              {professionals.map((professional, index) => (
                <button
                  key={professional.title}
                  onClick={() => setMobileIndex(index)}
                  aria-label={`View ${professional.title}`}
                  className={`
                    h-1.5
                    rounded-full
                    transition-all
                    duration-300
                    ${
                      mobileIndex === index
                        ? "w-6 bg-[#008F68]"
                        : "w-1.5 bg-[#008F68]/25"
                    }
                  `}
                />
              ))}
            </div>

            {/* Arrows */}

            <div className="flex items-center gap-2">
              <CarouselButton
                onClick={previousMobile}
                label="Previous professional"
              >
                <FaArrowLeft />
              </CarouselButton>

              <CarouselButton
                onClick={nextMobile}
                label="Next professional"
              >
                <FaArrowRight />
              </CarouselButton>
            </div>
          </div>
        </div>

        {/* ==========================================
            TRUST MICRO COPY
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-2
            text-center
            text-xs
            text-[#66736E]
            sm:text-sm
          "
        >
          <span
            className="
              flex
              h-5
              w-5
              items-center
              justify-center
              rounded-full
              bg-[#008F68]
              text-white
            "
          >
            <FaCheck className="text-[9px]" />
          </span>

          Verified professionals you can trust
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================
   CAROUSEL BUTTON
============================================================ */

const CarouselButton = ({
  children,
  onClick,
  label,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        border
        border-[#008F68]/10
        bg-white
        text-[#008F68]
        shadow-[0_8px_25px_rgba(0,143,104,0.08)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#008F68]
        hover:text-white
        hover:shadow-[0_10px_30px_rgba(0,143,104,0.2)]
        active:scale-95
      "
    >
      {children}
    </button>
  );
};

/* ============================================================
   PROFESSIONAL CARD
============================================================ */

const ProfessionalCard = ({
  professional,
  index = 0,
  mobile = false,
}) => {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        bg-[#D5F8EC]
        shadow-[0_18px_50px_rgba(0,143,104,0.08)]
        transition-shadow
        duration-500
        hover:shadow-[0_25px_65px_rgba(0,143,104,0.16)]
        ${
          mobile
            ? "h-[360px] w-full"
            : "h-[280px] w-full"
        }
      `}
    >
      {/* Image */}

      <img
        src={professional.image}
        alt={`${professional.title} professional`}
        loading="lazy"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.07]
        "
      />

      {/* Image gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/65
          via-black/5
          to-transparent
        "
      />

      {/* Top shine */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-32
          bg-gradient-to-b
          from-white/10
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* ==========================================
          FLOATING LABEL
      ========================================== */}

      <div
        className="
          absolute
          bottom-5
          left-5
          right-5
          flex
          items-center
          rounded-full
          border
          border-white/50
          bg-white/95
          py-1
          pr-5
          shadow-[0_12px_35px_rgba(0,0,0,0.15)]
          backdrop-blur-xl
        "
      >
        {/* Gear */}

        <div
          className="
            relative
            -ml-1
            flex
            h-[58px]
            w-[58px]
            flex-shrink-0
            items-center
            justify-center
            rounded-full
            border-[5px]
            border-[#008F68]
            bg-white
            shadow-[0_5px_15px_rgba(0,143,104,0.12)]
          "
        >
          <FaCog
            className="
              text-[24px]
              text-[#008F68]
              transition-transform
              duration-700
              group-hover:rotate-90
            "
          />
        </div>

        {/* Text */}

        <div className="ml-3 min-w-0">
          <h3
            className="
              truncate
              text-[17px]
              font-bold
              tracking-[-0.02em]
              text-[#151515]
              sm:text-[18px]
            "
          >
            {professional.title}
          </h3>

          <p
            className="
              mt-0.5
              truncate
              text-[11px]
              font-medium
              text-black/40
              sm:text-xs
            "
          >
            {professional.description}
          </p>
        </div>
      </div>

      {/* Hover border */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-[28px]
          border
          border-white/0
          transition-all
          duration-500
          group-hover:border-white/30
        "
      />
    </motion.article>
  );
};

export default Professionals;