import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiArrowUpRight,
  HiOutlineShoppingBag,
  HiOutlineSparkles,
} from "react-icons/hi2";
import { FaApple } from "react-icons/fa";

/* =========================================================
   ASSETS
   Replace these paths with your actual image locations.
========================================================= */

const images = {
  hero: "wakastores-hero.webp",
  shop: "wakastores-shopping.webp",
  tracking: "wakastores-tracking.webp"
};

const GooglePlayIcon = ({ size = 22, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4 2.5v19a1 1 0 0 0 1.6.8l12-9.5a1 1 0 0 0 0-1.6l-12-9.5A1 1 0 0 0 4 2.5Z" fill="#00D2FF" />
    <path d="M4.4 21.9 15 12 4.4 2.1A1 1 0 0 0 4 2.9v18.2c0 .3.1.5.4.8Z" fill="#00D2FF" />
    <path d="m15 12-3.4-2.7L4.6 2.2c.1 0 .3.1.4.2l12.9 7.2L15 12Z" fill="#00F076" />
    <path d="M17.9 9.6 15 12l2.9 2.4 3.3-1.8a1.1 1.1 0 0 0 0-1.9l-3.3-1.1Z" fill="#FFC900" />
    <path d="m15 12 3.4 2.7-12.9 7.2c-.1.1-.3.1-.4.2L15 12Z" fill="#FF3A44" />
  </svg>
);


/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
const storeButtonVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.04,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   FLOATING BADGE
========================================================= */

function FloatingBadge({
  icon: Icon,
  title,
  description,
  className = "",
}) {
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: 1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        absolute
        z-30
        hidden
        items-center
        gap-3
        rounded-2xl
        border
        border-white/70
        bg-white/85
        px-4
        py-3
        shadow-[0_18px_50px_rgba(70,20,25,0.12)]
        backdrop-blur-xl
        lg:flex
        ${className}
      `}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FDE1E3] text-[#E30613]">
        <Icon className="text-lg" />
      </div>

      <div>
        <p className="text-xs font-bold text-[#1B1B1B]">
          {title}
        </p>

        <p className="mt-0.5 text-[10px] text-[#817879]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#FEEBEC]
        px-4
        pb-[max(2.5rem,env(safe-area-inset-bottom))]
        pt-[100px]
        sm:px-6
        sm:pb-10
        sm:pt-[110px]
        lg:min-h-screen
        lg:px-8
        lg:pb-16
        lg:pt-[125px]
      "
    >
      {/* ===================================================
          BACKGROUND DECORATION
      =================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[15%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#E30613]/[0.035]
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-[-180px]
          right-[-100px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#E30613]/[0.04]
          blur-[110px]
        "
      />

      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          mx-auto
          max-w-[1080px]
        "
      >
        {/* =================================================
            BENTO GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            md:grid-cols-[minmax(0,1fr)_300px]
            lg:grid-cols-[minmax(0,1fr)_320px]
          "
        >
          {/* =================================================
              MAIN HERO CARD
          ================================================= */}

          <motion.div
            variants={imageReveal}
            className="
              group
              relative
              min-h-[480px]
              overflow-hidden
              rounded-[22px]
              bg-white
              shadow-[0_25px_80px_rgba(90,25,30,0.07)]
              sm:min-h-[560px]
              lg:min-h-[650px]
            "
          >
            {/* IMAGE */}

            <img
              src={images.hero}
              alt="WakaStores shopping"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-[1.025]
              "
            />

            {/* IMAGE OVERLAY
                Below lg the card is a single narrow column, so a
                left-to-right fade (built for a wide desktop card)
                leaves almost no visible photo — the white portion
                needed for text legibility covers nearly the whole
                width. On mobile/tablet the card is tall instead of
                wide, and content sits at the top, so a top-to-bottom
                fade keeps the photo visible in the lower portion of
                the card. Desktop switches back to the left-right
                split once there's enough width for both. */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white
                via-white/90
                via-[52%]
                to-transparent
                lg:bg-gradient-to-r
                lg:via-[45%]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/[0.03]
                via-transparent
                to-transparent
              "
            />

            {/* =================================================
                CONTENT
            ================================================= */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                max-w-[510px]
                flex-col
                px-7
                pb-8
                pt-12
                sm:px-10
                sm:pt-14
                lg:px-14
                lg:pt-16
              "
            >
              {/* EYEBROW */}

              <motion.div
                variants={fadeUp}
                className="
                  mb-5
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#F3D9DB]
                  bg-white/75
                  px-3
                  py-1.5
                  backdrop-blur-md
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E30613]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#766B6D]">
                  WakaStores
                </span>
              </motion.div>

              {/* HEADING
                  clamp() instead of three fixed pixel jumps (48 -> 58
                  -> 64px) so the size tracks the viewport continuously
                  and doesn't visibly "snap" right at the sm/lg edges. */}

              <motion.h1
                variants={fadeUp}
                className="
                  max-w-[440px]
                  text-[clamp(2.25rem,9vw,4rem)]
                  font-medium
                  leading-[0.98]
                  tracking-[-0.055em]
                  text-[#1B1B1B]
                "
              >
                Shop What
                <br />
                You Need.
                <br />

                <span className="text-[#E30613]">
                  Delivered.
                </span>
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                variants={fadeUp}
                className="
                  mt-7
                  max-w-[310px]
                  text-[14px]
                  leading-[1.55]
                  text-[#5F595A]
                  sm:text-[15px]
                "
              >
                Your everyday online marketplace for
                products from trusted sellers.
              </motion.p>

              {/* =================================================
                  STORE BUTTONS
              ================================================= */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-7
                  flex
                  flex-wrap
                  items-center
                  gap-3
                "
              >
              <motion.a
                                variants={storeButtonVariants}
                                href="/#contact"
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

               <motion.a
                               variants={storeButtonVariants}
                               href="/#contact"
                               whileHover={prefersReducedMotion ? {} : { scale: 1.04, y: -3 }}
                               whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
                               className="flex h-[54px] w-full min-w-[165px] items-center justify-center gap-3 rounded-[17px] bg-[#141310] px-5 text-white shadow-[0_15px_35px_rgba(20,19,16,0.14)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(20,19,16,0.22)] sm:h-[56px] sm:w-auto"
                             >
                               <GooglePlayIcon size={27} />
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

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <motion.a
                variants={fadeUp}
                href="/#contact"
                className="
                  mt-8
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  bg-[#E30613]
                  px-5
                  py-3
                  text-xs
                  font-bold
                  text-white
                  shadow-[0_12px_30px_rgba(227,6,19,0.2)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#C90511]
                  lg:hidden
                "
              >
                Start Shopping
                <HiArrowUpRight className="text-base" />
              </motion.a>
            </div>

            {/* =================================================
                FLOATING BADGES
            ================================================= */}

            <FloatingBadge
              icon={HiOutlineShoppingBag}
              title="10,000+ Products"
              description="Everything in one place"
              className="
                bottom-7
                left-7
              "
            />

            <FloatingBadge
              icon={HiOutlineSparkles}
              title="Trusted Sellers"
              description="Shop with confidence"
              className="
                right-7
                top-7
              "
            />
          </motion.div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div className="grid grid-cols-1 gap-3 md:grid-rows-2">
            {/* =================================================
                SHOP NOW CARD
            ================================================= */}

            <motion.a
              href="/#contact"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                min-h-[240px]
                overflow-hidden
                rounded-[20px]
                bg-white
                shadow-[0_20px_60px_rgba(90,25,30,0.07)]
                sm:min-h-[280px]
                md:min-h-0
              "
            >
              {/* IMAGE */}

              <img
                src={images.shop}
                alt="Shop now"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-white/85
                  via-transparent
                  to-black/35
                "
              />

              {/* CONTENT */}

              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-black/10
                      bg-white/70
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#1B1B1B]
                      backdrop-blur-md
                    "
                  >
                    Explore
                  </span>

                  <h2
                    className="
                      mt-3
                      max-w-[180px]
                      text-[28px]
                      font-medium
                      leading-[0.95]
                      tracking-[-0.045em]
                      text-[#1B1B1B]
                      sm:text-[32px]
                    "
                  >
                    Shop
                    <br />
                    Now.
                  </h2>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/30
                    bg-black/20
                    px-3
                    py-2.5
                    text-white
                    backdrop-blur-md
                  "
                >
                  <span className="text-[11px] font-semibold">
                    Browse products
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E30613]
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <HiArrowUpRight className="text-base" />
                  </span>
                </div>
              </div>
            </motion.a>

            {/* =================================================
                TRACK ORDER CARD
            ================================================= */}

            <motion.a
              href="/#contact"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group
                relative
                min-h-[240px]
                overflow-hidden
                rounded-[20px]
                bg-white
                shadow-[0_20px_60px_rgba(90,25,30,0.07)]
                sm:min-h-[280px]
                md:min-h-0
              "
            >
              {/* IMAGE */}

              <img
                src={images.tracking}
                alt="Track your order"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              {/* IMAGE TINT */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-[#F5CFC4]/30
                  via-transparent
                  to-black/30
                "
              />

              {/* CONTENT */}

              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      rounded-full
                      border
                      border-white/50
                      bg-white/50
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-[#1B1B1B]
                      backdrop-blur-md
                    "
                  >
                    Delivery
                  </span>

                  <h2
                    className="
                      mt-3
                      max-w-[190px]
                      text-[28px]
                      font-medium
                      leading-[0.95]
                      tracking-[-0.045em]
                      text-[#1B1B1B]
                      sm:text-[32px]
                    "
                  >
                    Track
                    <br />
                    Your
                    <br />
                    Order.
                  </h2>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-white/40
                    bg-white/40
                    px-3
                    py-2.5
                    backdrop-blur-md
                  "
                >
                  <span className="text-[11px] font-semibold text-[#1B1B1B]">
                    Track delivery
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1B1B1B]
                      text-white
                      transition-transform
                      duration-300
                      group-hover:rotate-45
                    "
                  >
                    <HiArrowUpRight className="text-base" />
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* =================================================
            BOTTOM INFO BAR
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mt-4
            flex
            flex-col
            gap-4
            border-t
            border-[#E8C9CC]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <span className="h-7 w-7 rounded-full border-2 border-[#FEEBEC] bg-[#E30613]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#FEEBEC] bg-[#1B1B1B]" />
              <span className="h-7 w-7 rounded-full border-2 border-[#FEEBEC] bg-white" />
            </div>

            <p className="text-[11px] text-[#766B6D]">
              Trusted by shoppers across Nigeria
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div>
              <p className="text-sm font-bold text-[#1B1B1B]">
                10K+
              </p>
              <p className="text-[9px] text-[#8E7C7E]">
                Products
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-[#1B1B1B]">
                5K+
              </p>
              <p className="text-[9px] text-[#8E7C7E]">
                Happy Customers
              </p>
            </div>

            <div>
              <p className="text-sm font-bold text-[#E30613]">
                Fast
              </p>
              <p className="text-[9px] text-[#8E7C7E]">
                Delivery
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
