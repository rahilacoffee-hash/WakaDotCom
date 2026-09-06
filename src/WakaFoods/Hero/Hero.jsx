import React from "react";
import { motion } from "framer-motion";
import {
  FiClock,
  FiMapPin,
  FiStar,
  FiCheckCircle,
  FiArrowLeft,
} from "react-icons/fi";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

const heroImages = [
  {
    src: "/wakafoods-hero-1.webp",
    alt: "Delicious meal",
    className:
      "w-[92px] h-[128px] sm:w-[175px] sm:h-[230px] lg:w-[225px] lg:h-[300px]",
  },
  {
    src: "/wakafoods-hero-2.webp",
    alt: "Fresh food",
    className:
      "w-[104px] h-[148px] sm:w-[195px] sm:h-[260px] lg:w-[245px] lg:h-[330px]",
  },
  {
    src: "/wakafoods-hero-3.webp",
    alt: "Tasty meal",
    className:
      "w-[88px] h-[122px] sm:w-[165px] sm:h-[220px] lg:w-[215px] lg:h-[285px]",
  },
];

const storeButtonVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section
     className="relative min-h-screen overflow-hidden bg-[#FCF3F6]">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#902141]/10 blur-[110px]" />

        <div className="absolute -right-40 top-[25%] h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[120px]" />

        <div className="absolute bottom-[-220px] left-[30%] h-[500px] w-[500px] rounded-full bg-[#902141]/5 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#902141 1px, transparent 1px), linear-gradient(90deg, #902141 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-0 max-w-7xl items-start px-5 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-screen lg:items-center lg:px-12 lg:pb-16 lg:pt-32">
        {/*
          FIX: this grid's two children (left copy, right food visual)
          had no min-width set. CSS Grid items default to min-width:auto,
          which sizes them to their content's intrinsic (max-content)
          width rather than 0. The food-image row below uses fixed,
          non-wrapping pixel widths, so on narrow phones its intrinsic
          width exceeded the viewport — and because both grid children
          share the same implicit column, that forced the LEFT column
          (headline + paragraph) to the same oversized width too, even
          though the images are further down the page. The section's
          overflow-hidden then silently clipped the excess on the right,
          cutting the paragraph off mid-word. Adding min-w-0 to both
          children lets them shrink to the real column width instead.
        */}
        <div className="grid w-full items-center gap-4 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">

          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="min-w-0 max-w-2xl"
          >
            {/* =================================================
                BADGE
            ================================================== */}
             <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#902141]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md sm:mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-xs font-semibold text-[#902141] sm:text-sm">
                Fresh food. Fast delivery.
              </span>
            </motion.div>

            {/* =================================================
                HEADING
            ================================================== */}
            <h1 className="text-[clamp(2.8rem,12vw,5.5rem)] font-black leading-[0.94] tracking-[-0.055em] text-[#24161B] sm:text-[clamp(3rem,6vw,5.5rem)]">
              Your cravings.
              <br />

              <span className="relative inline-block text-[#902141]">
                Delivered hot.

                <svg
                  className="absolute -bottom-2 left-0 w-full sm:-bottom-3"
                  viewBox="0 0 300 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 14C72 3 177 3 296 10"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================== */}
            <p className="mt-6 max-w-xl text-[15px] leading-6 text-gray-600 sm:mt-8 sm:text-lg sm:leading-7">
              Whatever you're craving, someone nearby is cooking it. Browse
              local kitchens and favourite spots, then sit back while your
              rider brings it hot.
            </p>

            {/* =================================================
                CTA
            ================================================== */}
            <div className="mt-7 flex flex-col gap-4 sm:mt-9 sm:flex-row">
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.25,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              >
                {/* Apple */}
                <motion.a
                  variants={storeButtonVariants}
                  href="#"
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex h-[54px] w-full min-w-[165px] items-center justify-center gap-3 rounded-[17px] bg-[#141310] px-5 text-white shadow-[0_15px_35px_rgba(20,19,16,0.14)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(20,19,16,0.22)] sm:h-[56px] sm:w-auto"
                >
                  <FaApple className="text-[27px]" />

                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[9px] font-medium text-white/55">
                      Download on the
                    </span>

                    <span className="mt-1 text-[15px] font-bold tracking-tight">
                      App Store
                    </span>
                  </span>
                </motion.a>

                {/* Google Play */}
                <motion.a
                  variants={storeButtonVariants}
                  href="#"
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="flex h-[54px] w-full min-w-[165px] items-center justify-center gap-3 rounded-[17px] bg-[#141310] px-5 text-white shadow-[0_15px_35px_rgba(20,19,16,0.14)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(20,19,16,0.22)] sm:h-[56px] sm:w-auto"
                >
                  <BiLogoPlayStore className="text-[27px] text-[#902141]" />

                  <span className="flex flex-col items-start leading-none">
                    <span className="text-[9px] font-medium text-white/55">
                      GET IT ON
                    </span>

                    <span className="mt-1 text-[15px] font-bold tracking-tight">
                      Google Play
                    </span>
                  </span>
                </motion.a>
              </motion.div>
            </div>

            {/* =================================================
                TRUST ROW
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-gray-500 sm:mt-9 sm:gap-x-6 sm:text-sm"
            >
              <div className="flex items-center gap-2">
                <FiCheckCircle className="text-[#902141]" />
                <span>Fresh meals</span>
              </div>

              <div className="flex items-center gap-2">
                <FiClock className="text-[#902141]" />
                <span>Fast delivery</span>
              </div>

              <div className="flex items-center gap-2">
                <FiStar className="fill-[#902141] text-[#902141]" />
                <span>Top-rated restaurants</span>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT / FOOD VISUAL
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              x: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="relative -mt-2 flex min-h-[270px] min-w-0 items-center justify-center sm:mt-0 sm:min-h-[500px] lg:min-h-[650px]"
          >
            {/* Large glow */}
            <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#902141]/15 blur-[60px] sm:h-[500px] sm:w-[500px] sm:blur-[70px]" />

            {/* Decorative rings */}
            <div className="absolute left-1/2 top-1/2 h-[235px] w-[235px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#902141]/10 sm:h-[440px] sm:w-[440px]" />

            <div className="absolute left-1/2 top-1/2 h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#902141]/10 sm:h-[340px] sm:w-[340px]" />

            {/* =================================================
                FOOD IMAGES
            ================================================== */}
            <div className="relative z-10 flex max-w-full items-center justify-center gap-0.5 sm:gap-3 lg:gap-4">
              {heroImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  animate={{
                    y:
                      index === 0
                        ? [0, -10, 0]
                        : index === 1
                        ? [0, 8, 0]
                        : [0, -7, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.06,
                    rotate:
                      index === 0 ? -2 : index === 1 ? 0 : 2,
                    zIndex: 40,
                  }}
                  className={`relative shrink-0 overflow-hidden rounded-[22px] border-[4px] border-white/90 shadow-[0_25px_55px_rgba(55,20,30,0.18)] sm:rounded-[35px] sm:border-[6px] ${image.className} ${
                    index === 0
                      ? "-rotate-6"
                      : index === 1
                      ? "z-20"
                      : "rotate-6"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 1 ? "eager" : "lazy"}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                </motion.div>
              ))}
            </div>

            {/* =================================================
                DELIVERY CARD
            ================================================== */}
            <motion.div
              variants={floatVariants}
              animate="animate"
              className="absolute left-0 top-[15%] z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_45px_rgba(55,20,30,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#902141]/10 text-[#902141]">
                <FiClock size={21} />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Delivery time
                </p>

                <p className="font-bold text-gray-900">
                  25–35 mins
                </p>
              </div>
            </motion.div>

            {/* =================================================
                ORDER STATUS
            ================================================== */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-[38%] z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_45px_rgba(55,20,30,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                <FiCheckCircle size={21} />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Order status
                </p>

                <p className="font-bold text-gray-900">
                  On its way
                </p>
              </div>
            </motion.div>

            {/* =================================================
                LOCATION CARD
            ================================================== */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[13%] left-[3%] z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_45px_rgba(55,20,30,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#902141]/10 text-[#902141]">
                <FiMapPin size={21} />
              </div>

              <div>
                <p className="text-xs font-medium text-gray-500">
                  Delivering to
                </p>

                <p className="font-bold text-gray-900">
                  Your doorstep
                </p>
              </div>
            </motion.div>

            {/* =================================================
                RATING
            ================================================== */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="absolute bottom-[3%] right-[3%] z-30 rounded-full border border-white/70 bg-white/90 px-3 py-2 shadow-[0_15px_35px_rgba(55,20,30,0.12)] backdrop-blur-xl sm:bottom-[8%] sm:right-[5%] sm:px-4 sm:py-2.5"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar
                      key={star}
                      size={13}
                      className="fill-[#902141] text-[#902141]"
                    />
                  ))}
                </div>

                <span className="text-sm font-bold text-gray-900">
                  4.9
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/60 to-transparent" />
    </section>
  );
};

export default Hero;