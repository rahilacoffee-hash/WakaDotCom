import React from "react";
import { motion } from "framer-motion";
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
  const serviceTags = [
    {
      label: "AC & Cooling",
      icon: FiTool,
    },
    {
      label: "Plumbing",
      icon: FiTool,
    },
    {
      label: "Building & Maintenance",
      icon: FiHome,
    },
    {
      label: "Electrical",
      icon: FiZap,
    },
  ];

  return (
    <section
      id="smartfixer"
      className="
        relative
        overflow-hidden
        bg-[#EEF7FF]
        pt-28
        pb-14
        sm:pt-32
        sm:pb-20
        lg:min-h-[760px]
        lg:pt-36
        lg:pb-24
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#1769C2]/[0.06]
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#1769C2]/[0.05]
          blur-3xl
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
          [background-size:50px_50px]
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
            gap-12
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-10
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-xl
              lg:pb-8
            "
          >
            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <motion.nav
              initial={{
                opacity: 0,
                y: -12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label="Breadcrumb"
              className="
                mb-6
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
              "
            >
              {/* Back to ecosystem */}
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
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-x-1
                  "
                />

                <span>WakaDotCom</span>
              </Link>

              {/* Divider */}
              <span
                className="
                  h-4
                  w-px
                  bg-[#1769C2]/15
                "
              />

              {/* Current page */}
              <span
                className="
                  truncate
                  text-xs
                  font-medium
                  text-[#687783]
                  sm:text-sm
                "
              >
                SmartFixer
              </span>
            </motion.nav>
            <br/>

            {/* =================================================
                BADGE
            ================================================= */}

            

            {/* =================================================
                HEADING
            ================================================= */}

            <h1
              className="
                text-[42px]
                font-black
                leading-[0.98]
                tracking-[-0.055em]
                text-[#171717]
                sm:text-5xl
                md:text-6xl
                lg:text-[68px]
                xl:text-[74px]
              "
            >
              Something broken?
              <br />

              <span className="text-[#1769C2]">
                Let’s fix it for you!
              </span>
            </h1>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <p
              className="
                mt-6
                max-w-lg
                text-sm
                leading-7
                text-[#5D6875]
                sm:text-base
              "
            >
              Find a reliable professional near you and get
              your home, appliances, and everyday repairs
              handled quickly and professionally.
            </p>

            {/* =================================================
                SERVICE TAGS
            ================================================= */}

            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              {serviceTags.map((service) => {
                const Icon = service.icon;

                return (
                  <motion.span
                    key={service.label}
                    whileHover={{
                      y: -2,
                    }}
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
                    <Icon
                      className="text-[#1769C2]"
                      size={12}
                    />

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
                mt-8
                flex
                flex-col
                items-start
                gap-4
                sm:flex-row
                sm:items-center
              "
            >
              <motion.a
                href="#get-started"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
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

              {/* FIXED ANCHOR */}
             
            </div>

            {/* =================================================
                TRUST LINE
            ================================================= */}

            <div
              className="
                mt-7
                flex
                items-center
                gap-2
                text-xs
                text-[#6B7280]
                sm:mt-8
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
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mx-auto
              h-[370px]
              w-full
              max-w-[600px]
              sm:h-[470px]
              lg:h-[530px]
            "
          >
            {/* Main glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.4, 0.25],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                pointer-events-none
                absolute
                right-4
                top-1/2
                h-[320px]
                w-[320px]
                -translate-y-1/2
                rounded-full
                bg-[#1769C2]/10
                blur-3xl
              "
            />

            {/* IMAGE 1 */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[2%]
                top-[4%]
                h-[235px]
                w-[48%]
                overflow-hidden
                rounded-[26px]
                border
                border-white/80
                bg-white
                shadow-[0_25px_70px_rgba(23,105,194,0.12)]
                sm:h-[300px]
              "
            >
              <img
                src="smartfixer-1.png"
                alt="SmartFixer professional"
                className="h-full w-full object-cover"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#171717]/20
                  via-transparent
                  to-transparent
                "
              />
            </motion.div>

            {/* IMAGE 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="
                absolute
                bottom-[4%]
                left-[2%]
                h-[230px]
                w-[47%]
                overflow-hidden
                rounded-[26px]
                border
                border-white/80
                bg-white
                shadow-[0_25px_70px_rgba(23,105,194,0.12)]
                sm:h-[295px]
              "
            >
              <img
                src="smartfixer-2.png"
                alt="SmartFixer home repair"
                className="h-full w-full object-cover"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#171717]/20
                  via-transparent
                  to-transparent
                "
              />
            </motion.div>

            {/* CENTER IMAGE */}
            <motion.div
              animate={{
                y: [0, -7, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                z-20
                h-[195px]
                w-[42%]
                -translate-x-1/2
                -translate-y-1/2
                overflow-hidden
                rounded-[24px]
                border-[5px]
                border-[#EEF7FF]
                bg-white
                shadow-[0_30px_80px_rgba(23,105,194,0.18)]
                sm:h-[245px]
              "
            >
              <img
                src="smartfixer-3.png"
                alt="SmartFixer professional fixing an appliance"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* VERIFIED BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.5,
                delay: 0.8,
              }}
              className="
                absolute
                left-[5%]
                top-[12%]
                z-30
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white
                bg-white
                px-3
                py-2
                shadow-[0_15px_40px_rgba(23,105,194,0.12)]
                sm:left-[8%]
              "
            >
              <span
                className="
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E4F1FF]
                  text-[#1769C2]
                "
              >
                <FiCheck size={13} />
              </span>

              <div>
                <p className="text-[10px] font-bold text-[#171717]">
                  Verified
                </p>

                <p className="text-[8px] text-[#7B8490]">
                  Professionals
                </p>
              </div>
            </motion.div>

            {/* FLOATING TOOL */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-[9%]
                right-[5%]
                z-30
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-[#1769C2]
                text-white
                shadow-[0_15px_40px_rgba(23,105,194,0.25)]
                sm:bottom-[11%]
                sm:right-[7%]
                sm:h-16
                sm:w-16
              "
            >
              <FiTool size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;