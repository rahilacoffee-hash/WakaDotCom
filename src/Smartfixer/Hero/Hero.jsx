import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiArrowLeft,
  FiCheck,
  FiTool,
  FiZap,
  FiHome,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const serviceTags = [
    { label: "AC & Cooling", icon: FiTool },
    { label: "Plumbing", icon: FiTool },
    { label: "Building & Maintenance", icon: FiHome },
    { label: "Electrical", icon: FiZap },
  ];

  return (
    <section
      id="smartfixer"
      className="
        relative
        overflow-hidden
        bg-[#EEF7FF]
        px-0
        pt-24
        pb-10
        sm:pt-32
        sm:pb-36
        lg:min-h-[760px]
        lg:pt-36
        lg:pb-40
      "
    >
      {/* =====================================================
          BACKGROUND
          Smaller on mobile so the blur doesn't eat into the
          viewport, and the animated glow is dropped below the
          lg breakpoint to save a continuously-running paint
          cycle on phones.
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          top-16
          h-[220px]
          w-[220px]
          rounded-full
          bg-[#1769C2]/[0.06]
          blur-2xl
          sm:-left-40
          sm:top-20
          sm:h-[400px]
          sm:w-[400px]
          sm:blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          bottom-0
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#1769C2]/[0.05]
          blur-2xl
          sm:-right-40
          sm:h-[500px]
          sm:w-[500px]
          sm:blur-3xl
        "
      />

      {/* subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#1769C2_1px,transparent_1px),linear-gradient(90deg,#1769C2_1px,transparent_1px)]
          [background-size:36px_36px]
          sm:[background-size:50px_50px]
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-7
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-center
            gap-10
            sm:gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="
              mx-auto
              max-w-xl
              text-center
              lg:mx-0
              lg:pb-8
              lg:text-left
            "
          >
            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Breadcrumb"
              className="
                mx-auto
                mb-5
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-[#1769C2]/10
                bg-white/70
                px-3
                py-2
                shadow-[0_8px_30px_rgba(23,105,194,0.06)]
                backdrop-blur-xl
                sm:mb-7
                sm:px-4
                lg:mx-0
              "
            >
              <Link
                to="/"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-1.5
                  text-xs
                  font-bold
                  text-[#1769C2]
                  transition-all
                  duration-300
                  hover:text-[#0F4F94]
                  sm:text-sm
                "
              >
                <FiArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                <span>WakaDotCom</span>
              </Link>

              <span className="h-4 w-px bg-[#1769C2]/15" />

              <span className="truncate text-xs font-medium text-[#687783] sm:text-sm">
                SmartFixer
              </span>
            </motion.nav>

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                text-[34px]
                font-black
                leading-[1.05]
                tracking-[-0.045em]
                text-[#171717]
                min-[380px]:text-[38px]
                sm:text-5xl
                sm:leading-[0.98]
                sm:tracking-[-0.055em]
                md:text-6xl
                lg:text-[68px]
                xl:text-[74px]
              "
            >
              Something broken?
              <br />
              <span className="text-[#1769C2]">Let's fix it for you!</span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mx-auto
                mt-5
                max-w-md
                text-sm
                leading-6
                text-[#5D6875]
                sm:mt-6
                sm:max-w-lg
                sm:text-base
                sm:leading-7
                lg:mx-0
              "
            >
              Find a reliable professional near you and get your home,
              appliances, and everyday repairs handled quickly and
              professionally.
            </p>

            {/* =================================================
                SERVICE TAGS
            ================================================= */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                justify-center
                gap-2
                sm:mt-6
                lg:justify-start
              "
            >
              {serviceTags.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.span
                    key={service.label}
                    whileHover={prefersReducedMotion ? {} : { y: -2 }}
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-[#D7E5F3]
                      bg-white/75
                      px-3
                      py-1.5
                      text-[11px]
                      font-medium
                      text-[#4B5563]
                      shadow-sm
                      transition-shadow
                      duration-300
                      hover:shadow-md
                    "
                  >
                    <Icon className="text-[#1769C2]" size={12} />
                    {service.label}
                  </motion.span>
                );
              })}
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                gap-4
                sm:mt-8
                sm:flex-row
                sm:justify-center
                lg:justify-start
              "
            >
              <motion.a
                href="#get-started"
                whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#1769C2]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_12px_35px_rgba(23,105,194,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#1259A5]
                  hover:shadow-[0_16px_45px_rgba(23,105,194,0.30)]
                  sm:w-auto
                "
              >
                How it works
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white/15
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                >
                  <FiArrowUpRight size={15} />
                </span>
              </motion.a>
            </div>

            {/* =================================================
                TRUST LINE
            ================================================= */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-2
                text-xs
                text-[#6B7280]
                sm:mt-8
                lg:justify-start
              "
            >
              <span
                className="
                  flex
                  h-5
                  w-5
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#DCEEFF]
                  text-[#1769C2]
                "
              >
                <FiCheck size={11} />
              </span>
              Verified professionals you can trust
            </div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE COMPOSITION
              Shorter and simpler on phones: the two side images
              shrink to fit under 400px-wide viewports without
              their corners colliding, and the floating badges
              scale down a step earlier.
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="
              relative
              mx-auto
              h-[300px]
              w-full
              max-w-[420px]
              min-[380px]:h-[330px]
              sm:h-[470px]
              sm:max-w-[600px]
              lg:h-[530px]
            "
          >
            {/* Main glow — desktop only, it's a nice-to-have accent
                and an extra always-on animation isn't worth the
                battery/perf cost on mobile */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : { scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                hidden
                h-[320px]
                w-[320px]
                -translate-y-1/2
                rounded-full
                bg-[#1769C2]/10
                blur-3xl
                sm:block
              "
            />

            {/* IMAGE 1 */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute
                right-[2%]
                top-[4%]
                h-[190px]
                w-[48%]
                overflow-hidden
                rounded-[18px]
                border
                border-white/80
                bg-white
                shadow-[0_15px_45px_rgba(23,105,194,0.12)]
                min-[380px]:h-[210px]
                sm:h-[300px]
                sm:rounded-[26px]
                sm:shadow-[0_25px_70px_rgba(23,105,194,0.12)]
              "
            >
              <img
                src="smartfixer-1.png"
                alt="SmartFixer professional"
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/20 via-transparent to-transparent" />
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="
                absolute
                bottom-[4%]
                left-[2%]
                h-[185px]
                w-[47%]
                overflow-hidden
                rounded-[18px]
                border
                border-white/80
                bg-white
                shadow-[0_15px_45px_rgba(23,105,194,0.12)]
                min-[380px]:h-[205px]
                sm:h-[295px]
                sm:rounded-[26px]
                sm:shadow-[0_25px_70px_rgba(23,105,194,0.12)]
              "
            >
              <img
                src="smartfixer-2.png"
                alt="SmartFixer home repair"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171717]/20 via-transparent to-transparent" />
            </motion.div>

            {/* CENTER IMAGE — this is the largest, most central
                element so it's the likely LCP candidate; loaded
                eagerly with high fetch priority. */}
            <motion.div
              animate={prefersReducedMotion ? {} : { y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                h-[160px]
                w-[42%]
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-[16px]
                border-[3px]
                border-[#EEF7FF]
                bg-white
                shadow-[0_18px_50px_rgba(23,105,194,0.18)]
                min-[380px]:h-[178px]
                sm:h-[245px]
                sm:rounded-[24px]
                sm:border-[5px]
                sm:shadow-[0_30px_80px_rgba(23,105,194,0.18)]
              "
            >
              <img
                src="smartfixer-3.png"
                alt="SmartFixer professional fixing an appliance"
                loading="eager"
                fetchpriority="high"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* VERIFIED BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="
                absolute
                left-[4%]
                top-[8%]
                z-30
                flex
                items-center
                gap-1.5
                rounded-full
                border
                border-white
                bg-white
                px-2.5
                py-1.5
                shadow-[0_10px_28px_rgba(23,105,194,0.12)]
                sm:left-[8%]
                sm:top-[12%]
                sm:gap-2
                sm:px-3
                sm:py-2
                sm:shadow-[0_15px_40px_rgba(23,105,194,0.12)]
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
                  bg-[#E4F1FF]
                  text-[#1769C2]
                  sm:h-6
                  sm:w-6
                "
              >
                <FiCheck size={11} />
              </span>
              <div>
                <p className="text-[9px] font-bold leading-tight text-[#171717] sm:text-[10px]">
                  Verified
                </p>
                <p className="text-[7px] leading-tight text-[#7B8490] sm:text-[8px]">
                  Professionals
                </p>
              </div>
            </motion.div>

            {/* FLOATING TOOL */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : { rotate: [0, 5, -5, 0], y: [0, -5, 0] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="
                absolute
                bottom-[7%]
                right-[4%]
                z-30
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#1769C2]
                text-white
                shadow-[0_10px_28px_rgba(23,105,194,0.25)]
                sm:bottom-[11%]
                sm:right-[7%]
                sm:h-16
                sm:w-16
                sm:rounded-2xl
                sm:shadow-[0_15px_40px_rgba(23,105,194,0.25)]
              "
            >
              <FiTool size={18} className="sm:hidden" />
              <FiTool size={24} className="hidden sm:block" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;