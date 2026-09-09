import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiClock,
  FiMapPin,
  FiStar,
  FiCheckCircle,
} from "react-icons/fi";
import { FaApple } from "react-icons/fa";

/*
  FIX: the three food images previously jumped between three fixed
  pixel sizes at base/sm/lg (e.g. 92px -> 175px -> 225px). Between
  those breakpoints — and especially below 360px, where the base
  sizes (92 + 104 + 88 + gaps ≈ 288px) leave almost no room next to
  a 40px horizontal padding on a 320px-wide phone — the row could
  overflow by a few pixels and get silently clipped by the section's
  overflow-hidden. Switching to clamp()-based widths makes each
  image scale continuously with the viewport instead of snapping
  between three fixed sizes, so there's no width that produces an
  overflow.
*/
const heroImages = [
  {
    src: "/wakafoods-hero-1.webp",
    alt: "Delicious meal",
    width: "clamp(78px, 22vw, 225px)",
    height: "clamp(110px, 30vw, 300px)",
  },
  {
    src: "/wakafoods-hero-2.webp",
    alt: "Fresh food",
    width: "clamp(88px, 25vw, 245px)",
    height: "clamp(126px, 34vw, 330px)",
  },
  {
    src: "/wakafoods-hero-3.webp",
    alt: "Tasty meal",
    width: "clamp(74px, 21vw, 215px)",
    height: "clamp(104px, 28vw, 285px)",
  },
];

const storeButtonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const GooglePlayIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 2.5v19a1 1 0 0 0 1.6.8l12-9.5a1 1 0 0 0 0-1.6l-12-9.5A1 1 0 0 0 4 2.5Z" fill="#00D2FF" />
    <path d="M4.4 21.9 15 12 4.4 2.1A1 1 0 0 0 4 2.9v18.2c0 .3.1.5.4.8Z" fill="#00D2FF" />
    <path d="m15 12-3.4-2.7L4.6 2.2c.1 0 .3.1.4.2l12.9 7.2L15 12Z" fill="#00F076" />
    <path d="M17.9 9.6 15 12l2.9 2.4 3.3-1.8a1.1 1.1 0 0 0 0-1.9l-3.3-1.1Z" fill="#FFC900" />
    <path d="m15 12 3.4 2.7-12.9 7.2c-.1.1-.3.1-.4.2L15 12Z" fill="#FF3A44" />
  </svg>
);

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#FCF3F6] lg:min-h-screen">
      {/* =====================================================
          BACKGROUND
          Smaller glows on mobile — they're blurred decoration,
          not worth their full desktop footprint (or the paint
          cost of animating them) on a small screen.
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[240px] w-[240px] rounded-full bg-[#902141]/10 blur-[70px] sm:-left-40 sm:-top-40 sm:h-[450px] sm:w-[450px] sm:blur-[110px]" />

        <div className="absolute -right-24 top-[20%] h-[260px] w-[260px] rounded-full bg-pink-300/20 blur-[70px] sm:-right-40 sm:top-[25%] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />

        <div className="absolute bottom-[-140px] left-[20%] h-[260px] w-[260px] rounded-full bg-[#902141]/5 blur-[70px] sm:bottom-[-220px] sm:left-[30%] sm:h-[500px] sm:w-[500px] sm:blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#902141 1px, transparent 1px), linear-gradient(90deg, #902141 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 mx-auto flex min-h-0 max-w-7xl items-start px-5 pb-[max(2.5rem,env(safe-area-inset-bottom))] pt-24 sm:px-8 sm:pb-14 sm:pt-32 lg:min-h-screen lg:items-center lg:px-12 lg:pb-16 lg:pt-32">
        {/*
          Grid items default to min-width: auto (they size to their
          content's intrinsic width). The fixed-width food row further
          down could push that intrinsic width past the viewport on
          narrow phones, and because both children share the implicit
          column, that widened the LEFT column too — the section's
          overflow-hidden then silently clipped text mid-word.
          min-w-0 on both children lets them shrink to the real
          column width instead.
        */}
        <div className="grid w-full items-center gap-8 sm:gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">
          {/* =================================================
              LEFT CONTENT
          ================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-w-0 max-w-2xl text-center lg:text-left"
          >
            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#902141]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md sm:mb-6 lg:mx-0"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-xs font-semibold text-[#902141] sm:text-sm">
                Fresh food. Fast delivery.
              </span>
            </motion.div>

            {/* HEADING */}
            <h1 className="text-[clamp(2.4rem,10vw,5.5rem)] font-black leading-[1] tracking-[-0.045em] text-[#24161B] sm:text-[clamp(3rem,6vw,5.5rem)] sm:leading-[0.94] sm:tracking-[-0.055em]">
              Your cravings.
              <br />
              <span className="relative inline-block text-[#902141]">
                Delivered hot.
                <svg
                  className="absolute -bottom-1 left-0 w-full sm:-bottom-3"
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

            {/* DESCRIPTION */}
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-6 text-gray-600 sm:mt-8 sm:text-lg sm:leading-7 lg:mx-0">
              Whatever you're craving, someone nearby is cooking it. Browse
              local kitchens and favourite spots, then sit back while your
              rider brings it hot.
            </p>

            {/* CTA */}
            <div className="mt-7 flex flex-col items-center gap-4 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start">
              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
                  },
                }}
                initial="hidden"
                animate="visible"
                className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
              >
                {/* Apple */}
                <motion.a
                  variants={storeButtonVariants}
                  href="#contact"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -3 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
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
                  href="#contact"
                  whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -3 }}
                  whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                  className="flex h-[54px] w-full min-w-[165px] items-center justify-center gap-3 rounded-[17px] bg-[#141310] px-5 text-white shadow-[0_15px_35px_rgba(20,19,16,0.14)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(20,19,16,0.22)] sm:h-[56px] sm:w-auto"
                >
                  <GooglePlayIcon className="text-[27px] text-[#902141]" />
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

            {/* TRUST ROW */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs text-gray-500 sm:mt-9 sm:gap-x-6 sm:text-sm lg:justify-start"
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
            initial={{ opacity: 0, scale: 0.9, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex min-h-[240px] min-w-0 items-center justify-center sm:min-h-[500px] lg:min-h-[650px]"
          >
            {/* Large glow */}
            <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#902141]/15 blur-[50px] sm:h-[500px] sm:w-[500px] sm:blur-[70px]" />

            {/* Decorative rings */}
            <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#902141]/10 sm:h-[440px] sm:w-[440px]" />
            <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#902141]/10 sm:h-[340px] sm:w-[340px]" />

            {/* =================================================
                FOOD IMAGES
                Fluid clamp()-based sizing instead of three fixed
                pixel sizes per breakpoint — scales continuously so
                there's no viewport width where the row can overflow.
            ================================================== */}
            <div className="relative z-10 flex max-w-full items-center justify-center gap-0.5 min-[360px]:gap-1 sm:gap-3 lg:gap-4">
              {heroImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : {
                          y:
                            index === 0
                              ? [0, -10, 0]
                              : index === 1
                              ? [0, 8, 0]
                              : [0, -7, 0],
                        }
                  }
                  transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 1.06,
                          rotate: index === 0 ? -2 : index === 1 ? 0 : 2,
                          zIndex: 40,
                        }
                  }
                  style={{ width: image.width, height: image.height }}
                  className={`relative shrink-0 overflow-hidden rounded-[16px] border-2 border-white/90 shadow-[0_18px_40px_rgba(55,20,30,0.16)] min-[360px]:border-[3px] sm:rounded-[35px] sm:border-[6px] sm:shadow-[0_25px_55px_rgba(55,20,30,0.18)] ${
                    index === 0 ? "-rotate-6" : index === 1 ? "z-20" : "rotate-6"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index === 1 ? "eager" : "lazy"}
                    fetchPriority={index === 1 ? "high" : undefined}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
                </motion.div>
              ))}
            </div>

            {/* DELIVERY CARD — desktop/tablet only */}
            <motion.div
              variants={floatVariants}
              animate={prefersReducedMotion ? undefined : "animate"}
              className="absolute left-0 top-[15%] z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_45px_rgba(55,20,30,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#902141]/10 text-[#902141]">
                <FiClock size={21} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Delivery time</p>
                <p className="font-bold text-gray-900">25–35 mins</p>
              </div>
            </motion.div>

            {/* ORDER STATUS — desktop/tablet only */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-0 top-[38%] z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_45px_rgba(55,20,30,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                <FiCheckCircle size={21} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Order status</p>
                <p className="font-bold text-gray-900">On its way</p>
              </div>
            </motion.div>

            {/* LOCATION CARD — desktop/tablet only */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[13%] left-[3%] z-30 hidden rounded-2xl border border-white/70 bg-white/90 p-3 shadow-[0_20px_45px_rgba(55,20,30,0.12)] backdrop-blur-xl sm:flex sm:items-center sm:gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#902141]/10 text-[#902141]">
                <FiMapPin size={21} />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Delivering to</p>
                <p className="font-bold text-gray-900">Your doorstep</p>
              </div>
            </motion.div>

            {/* RATING — visible at every breakpoint, but shrinks on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-[2%] right-[2%] z-30 rounded-full border border-white/70 bg-white/90 px-2 py-1 shadow-[0_15px_35px_rgba(55,20,30,0.12)] backdrop-blur-xl min-[360px]:px-2.5 min-[360px]:py-1.5 sm:bottom-[8%] sm:right-[5%] sm:px-4 sm:py-2.5"
            >
              <div className="flex items-center gap-1 min-[360px]:gap-1.5 sm:gap-2">
                <div className="flex items-center gap-0.5 text-[10px] min-[360px]:text-[11px] sm:text-[13px]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FiStar key={star} className="fill-[#902141] text-[#902141]" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-900 sm:text-sm">4.9</span>
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
