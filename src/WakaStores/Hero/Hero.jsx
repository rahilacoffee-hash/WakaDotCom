import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  HiArrowUpRight,
  HiOutlineShoppingBag,
  HiOutlineSparkles,
  HiOutlineTruck,
} from "react-icons/hi2";
import { FaApple } from "react-icons/fa";

const images = {
  hero: "/wakastores-hero.webp",
  shop: "/wakastores-shopping.webp",
  tracking: "/wakastores-tracking.webp",
};

/* =========================================================
   GOOGLE PLAY ICON
========================================================= */

const GooglePlayIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      d="M4 2.5v19a1 1 0 0 0 1.6.8l12-9.5a1 1 0 0 0 0-1.6l-12-9.5A1 1 0 0 0 4 2.5Z"
      fill="#00D2FF"
    />

    <path
      d="M4.4 21.9 15 12 4.4 2.1A1 1 0 0 0 4 2.9v18.2c0 .3.1.5.4.8Z"
      fill="#00D2FF"
    />

    <path
      d="m15 12-3.4-2.7L4.6 2.2c.1 0 .3.1.4.2l12.9 7.2L15 12Z"
      fill="#00F076"
    />

    <path
      d="M17.9 9.6 15 12l2.9 2.4 3.3-1.8a1.1 1.1 0 0 0 0-1.9l-3.3-1.1Z"
      fill="#FFC900"
    />

    <path
      d="m15 12 3.4 2.7-12.9 7.2c-.1.1-.3.1-.4.2L15 12Z"
      fill="#FF3A44"
    />
  </svg>
);

/* =========================================================
   ANIMATION
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
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

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.8,
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
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
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
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-xl
          bg-[#FDE1E3]
          text-[#E30613]
        "
      >
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
        pb-8
        pt-[100px]
        sm:px-6
        sm:pt-[110px]
        lg:min-h-screen
        lg:px-8
        lg:pb-12
        lg:pt-[125px]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-[12%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#E30613]/[0.045]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -bottom-48
          -right-32
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#E30613]/[0.055]
          blur-[120px]
        "
      />

      {/* subtle grid */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
          [background-image:linear-gradient(rgba(227,6,19,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(227,6,19,0.035)_1px,transparent_1px)]
          [background-size:70px_70px]
          [mask-image:linear-gradient(to_bottom,black,transparent_80%)]
        "
      />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="
          relative
          z-10
          mx-auto
          max-w-[1180px]
        "
      >
        {/* ===================================================
            BENTO
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-3
            md:grid-cols-[minmax(0,1fr)_310px]
            lg:grid-cols-[minmax(0,1fr)_350px]
          "
        >
          {/* =================================================
              MAIN HERO
          ================================================= */}

          <motion.div
            variants={cardReveal}
            className="
              group
              relative
              min-h-[600px]
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-[0_30px_100px_rgba(90,25,30,0.09)]
              sm:min-h-[650px]
              lg:min-h-[680px]
            "
          >
            {/* IMAGE */}

            <img
              src={images.hero}
              alt="WakaStores shopping"
              
  draggable="false"
  fetchPriority="high"
  decoding="async"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-[1400ms]
                ease-out
                group-hover:scale-[1.025]
              "
            />

            {/* Desktop image treatment */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-white
                via-white/90
                via-[45%]
                to-transparent
                lg:bg-gradient-to-r
                lg:from-white
                lg:via-white/95
                lg:via-[42%]
                lg:to-transparent
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/[0.08]
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
                max-w-[560px]
                flex-col
                px-7
                pb-8
                pt-11
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
                  border-[#E30613]/10
                  bg-white/80
                  px-3
                  py-1.5
                  shadow-sm
                  backdrop-blur-md
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E30613]" />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#766B6D]
                  "
                >
                  WakaStores Marketplace
                </span>
              </motion.div>

              {/* HEADING */}

              <motion.h1
                variants={fadeUp}
                className="
                  max-w-[500px]
                  text-[clamp(2.6rem,7vw,4.8rem)]
                  font-medium
                  leading-[0.93]
                  tracking-[-0.06em]
                  text-[#1B1B1B]
                "
              >
                Everything
                <br />
                you want.
                <br />

                <span className="text-[#E30613]">
                  One place.
                </span>
              </motion.h1>

              {/* DESCRIPTION */}

              <motion.p
                variants={fadeUp}
                className="
                  mt-7
                  max-w-[370px]
                  text-[14px]
                  leading-[1.65]
                  text-[#5F595A]
                  sm:text-[15px]
                "
              >
                Discover products from trusted sellers,
                shop with confidence, and have your order
                delivered right to your door.
              </motion.p>

              {/* BUTTONS */}

              <motion.div
                variants={fadeUp}
                className="
                  mt-7
                  flex
                  flex-wrap
                  gap-3
                "
              >
                {/* APP STORE */}

                <motion.a
                  href="#contact"
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 1.03,
                          y: -3,
                        }
                  }
                  whileTap={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 0.97,
                        }
                  }
                  className="
                    flex
                    h-[55px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[17px]
                    bg-[#141310]
                    px-5
                    text-white
                    shadow-[0_15px_35px_rgba(20,19,16,0.14)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_20px_45px_rgba(20,19,16,0.22)]
                    sm:w-auto
                  "
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

                {/* GOOGLE PLAY */}

                <motion.a
                  href="#contact"
                  whileHover={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 1.03,
                          y: -3,
                        }
                  }
                  whileTap={
                    prefersReducedMotion
                      ? {}
                      : {
                          scale: 0.97,
                        }
                  }
                  className="
                    flex
                    h-[55px]
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-[17px]
                    bg-[#141310]
                    px-5
                    text-white
                    shadow-[0_15px_35px_rgba(20,19,16,0.14)]
                    transition-shadow
                    duration-300
                    hover:shadow-[0_20px_45px_rgba(20,19,16,0.22)]
                    sm:w-auto
                  "
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

              {/* PRIMARY CTA */}

              <motion.a
                variants={fadeUp}
                href="#contact"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -2,
                      }
                }
                whileTap={
                  prefersReducedMotion
                    ? {}
                    : {
                        scale: 0.97,
                      }
                }
                className="
                  mt-5
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
                  shadow-[0_12px_35px_rgba(227,6,19,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#C90511]
                  hover:shadow-[0_16px_40px_rgba(227,6,19,0.3)]
                "
              >
                Start shopping

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
              className="bottom-7 left-7"
            />

            <FloatingBadge
              icon={HiOutlineSparkles}
              title="Trusted Sellers"
              description="Shop with confidence"
              className="right-7 top-7"
            />
          </motion.div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div className="grid grid-cols-1 gap-3 md:grid-rows-2">
            {/* SHOP */}

            <motion.a
              href="#categories"
              variants={fadeUp}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -5,
                    }
              }
              className="
                group
                relative
                min-h-[270px]
                overflow-hidden
                rounded-[24px]
                bg-white
                shadow-[0_20px_60px_rgba(90,25,30,0.07)]
                sm:min-h-[300px]
                md:min-h-0
              "
            >
              <img
                src={images.shop}
                alt="Shop products"
                
  draggable="false"
  fetchPriority="high"
  decoding="async"
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

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-white/90
                  via-white/10
                  to-black/45
                "
              />

              <div className="relative z-10 flex h-full flex-col justify-between p-6">
                <div>
                  <span
                    className="
                      inline-flex
                      rounded-full
                      border
                      border-black/10
                      bg-white/75
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#1B1B1B]
                      backdrop-blur-md
                    "
                  >
                    Discover
                  </span>

                  <h2
                    className="
                      mt-4
                      text-[32px]
                      font-medium
                      leading-[0.92]
                      tracking-[-0.05em]
                      text-[#1B1B1B]
                    "
                  >
                    Shop
                    <br />
                    freely.
                  </h2>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
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
                    <HiArrowUpRight />
                  </span>
                </div>
              </div>
            </motion.a>

            {/* TRACK */}

            <motion.a
              href="#contact"
              variants={fadeUp}
              whileHover={
                prefersReducedMotion
                  ? {}
                  : {
                      y: -5,
                    }
              }
              className="
                group
                relative
                min-h-[270px]
                overflow-hidden
                rounded-[24px]
                bg-white
                shadow-[0_20px_60px_rgba(90,25,30,0.07)]
                sm:min-h-[300px]
                md:min-h-0
              "
            >
              <img
                src={images.tracking}
                alt="Track WakaStores order"
                
  draggable="false"
  fetchPriority="high"
  decoding="async"
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

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-[#FDE1E3]/85
                  via-transparent
                  to-black/40
                "
              />

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
                      bg-white/60
                      px-3
                      py-1.5
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#1B1B1B]
                      backdrop-blur-md
                    "
                  >
                    <HiOutlineTruck />
                    Delivery
                  </span>

                  <h2
                    className="
                      mt-4
                      text-[32px]
                      font-medium
                      leading-[0.92]
                      tracking-[-0.05em]
                      text-[#1B1B1B]
                    "
                  >
                    Track
                    <br />
                    your
                    <br />
                    order.
                  </h2>
                </div>

                <div
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-white/40
                    bg-white/45
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
                    <HiArrowUpRight />
                  </span>
                </div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* =================================================
            TRUST BAR
        ================================================= */}

        <motion.div
          variants={fadeUp}
          className="
            mt-5
            flex
            flex-col
            gap-5
            border-t
            border-[#E7C5C8]
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full border-2 border-[#FEEBEC] bg-[#E30613]" />
              <span className="h-8 w-8 rounded-full border-2 border-[#FEEBEC] bg-[#1B1B1B]" />
              <span className="h-8 w-8 rounded-full border-2 border-[#FEEBEC] bg-[#FDE1E3]" />
            </div>

            <div>
              <p className="text-[11px] font-semibold text-[#1B1B1B]">
                Loved by shoppers
              </p>

              <p className="text-[10px] text-[#766B6D]">
                Shop smarter. Shop WakaStores.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
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
                Shoppers
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
