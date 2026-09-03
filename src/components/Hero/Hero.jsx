import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const navBullets = [
    "Something broken? MyFixer fixes.",
    "Got a delivery? WakaRider delivers.",
    "Want to buy something? Go to WakaStores.",
    "Hungry? Go to WakaFoods.",
  ];

  const bulletVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF5EB]
      "
    >
      {/* ================= BACKGROUND DECORATION ================= */}

      <div
        className="
          pointer-events-none
          absolute
          -top-40
          -right-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#FEEAD7]
          blur-3xl
          opacity-50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          top-[45%]
          -left-52
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#FEEAD7]
          blur-3xl
          opacity-30
        "
      />

      {/* =========================================================
          DESKTOP HERO
      ========================================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          hidden
          max-w-7xl
          px-6
          pt-32
          pb-0
          lg:block
          lg:px-12
        "
      >
        {/* ================= TOP CONTENT ================= */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-16
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="flex-1"
          >
            <div className="max-w-2xl">
              {/* Badge */}

              <motion.span
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-[#ECDBCD]
                  bg-[#FEEAD7]
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-[#FB7A00]
                "
              >
                {/* Pulsing dot */}

                <motion.span
                  animate={{
                    scale: [1, 1.25, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    h-2.5
                    w-2.5
                    shrink-0
                    rounded-full
                    bg-[#FB7A00]
                  "
                />

                Africa's connected digital lifestyle ecosystem
              </motion.span>

              {/* Heading */}

              <h1
                className="
                  mt-7
                  text-[clamp(3rem,5vw,4.5rem)]
                  font-bold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#1B1B1B]
                "
              >
                One Signup.
                <br />

                <span className="mt-2 inline-block text-[#FB7A00]">
                  Four Apps. One Waka.
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-lg
                  text-base
                  leading-relaxed
                  text-[#6C6B6A]
                  lg:text-lg
                "
              >
               Find Fixers, Merchants, Vendors and Riders Near You.
              </p>

              {/* CTA */}

              <motion.a
                href="#ecosystem"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  mt-7
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FB7A00]
                  px-7
                  py-3.5
                  font-semibold
                  text-white
                  shadow-[0_15px_40px_rgba(251,122,0,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#e96f00]
                  hover:shadow-[0_20px_50px_rgba(251,122,0,0.32)]
                "
              >
                Explore the Ecosystem

                <span className="ml-2 text-lg">
                  →
                </span>
              </motion.a>
            </div>
          </motion.div>

          {/* ================= RIGHT BULLETS ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="shrink-0"
          >
            <ul
              className="
                space-y-4
                text-right
                font-medium
                text-[#1B1B1B]
              "
            >
              {navBullets.map((item, index) => (
                <motion.li
                  key={item}
                  custom={index}
                  variants={bulletVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                  }}
                  className="
                    flex
                    items-center
                    justify-end
                    gap-3
                    text-sm
                    xl:text-base
                  "
                >
                  <motion.span
                    animate={{
                      scale: [1, 1.25, 1],
                      opacity: [0.55, 1, 0.55],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut",
                    }}
                    className="
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-[#FB7A00]
                    "
                  />

                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP HERO IMAGE
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="
            relative
            mt-8
            lg:mt-10
          "
        >
          {/* Sparkles */}

          <motion.span
            animate={{
              rotate: [0, 15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[20%]
              top-5
              z-10
              text-xl
              text-[#1B1B1B]
            "
          >
            ✦
          </motion.span>

          <motion.span
            animate={{
              rotate: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[22%]
              top-2
              z-10
              text-sm
              text-[#1B1B1B]
            "
          >
            ✦
          </motion.span>

          <motion.span
            animate={{
              rotate: [0, 15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.8,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[56%]
              top-7
              z-10
              text-lg
              text-[#1B1B1B]
            "
          >
            ✦
          </motion.span>

          <motion.span
            animate={{
              rotate: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[58%]
              top-4
              z-10
              text-sm
              text-[#1B1B1B]
            "
          >
            ✦
          </motion.span>

          {/* Image */}

          <img
            src="/hero-lg.png"
            alt="WakaDot ecosystem team"
            className="
              relative
              z-[1]
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>
      </div>

      {/* =========================================================
          MOBILE HERO
      ========================================================= */}

      <div
        className="
          relative
          z-10
          px-5
          pt-28
          pb-8
          text-center
          sm:px-6
          lg:hidden
        "
      >
        {/* Badge */}

        <motion.span
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-[#ECDBCD]
            bg-[#FEEAD7]
            px-4
            py-2
            text-xs
            font-medium
            text-[#FB7A00]
            sm:text-sm
          "
        >
          <motion.span
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              h-2.5
              w-2.5
              shrink-0
              rounded-full
              bg-[#FB7A00]
            "
          />

          Africa's connected digital lifestyle ecosystem
        </motion.span>

        {/* ================= MOBILE HEADING ================= */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            mt-5
            text-[3.6rem]
            font-bold
            leading-[0.8]
            tracking-[-0.045em]
            text-[#1B1B1B]
            sm:text-[4rem]
          "
        >
          One Signup.
          <br />

          <span className="text-[2.5rem] text-[#FB7A00]">
            Four Apps. One Waka.
          </span>
        </motion.h1>

        {/* ================= DESCRIPTION ================= */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="
            mx-auto
            mt-5
            max-w-md
            text-sm
            leading-relaxed
            text-[#6C6B6A]
            sm:text-base
          "
        >
          Find Fixers, Merchants, Vendors and Riders Near You.
        </motion.p>

        {/* ================= BULLETS ================= */}

        <motion.ul
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          className="
            mt-5
            inline-block
            max-w-full
            space-y-2.5
            text-left
          "
        >
          {navBullets.map((item, index) => (
            <li
              key={item}
              className="
                flex
                items-start
                gap-2.5
                text-sm
                font-medium
                text-[#1B1B1B]
              "
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="
                  mt-1.5
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#FB7A00]
                "
              />

              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        {/* ================= CTA ================= */}

        <motion.a
          href="#ecosystem"
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.45,
          }}
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            mt-6
            inline-flex
            items-center
            justify-center
            rounded-full
            bg-[#FB7A00]
            px-6
            py-3
            font-semibold
            text-white
            shadow-[0_15px_40px_rgba(251,122,0,0.22)]
            transition-all
            duration-300
            hover:bg-[#e96f00]
          "
        >
          Explore the Ecosystem

          <span className="ml-2">
            →
          </span>
        </motion.a>

        {/* ================= MOBILE IMAGE ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="
            relative
            mt-8
          "
        >
          {/* Sparkles */}

          <motion.span
            animate={{
              rotate: [0, 15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              left-[8%]
              top-3
              z-10
              text-lg
              text-[#1B1B1B]
            "
          >
            ✦
          </motion.span>

          <motion.span
            animate={{
              rotate: [0, -15, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
              ease: "easeInOut",
            }}
            className="
              absolute
              right-[10%]
              top-1
              z-10
              text-base
              text-[#1B1B1B]
            "
          >
            ✦
          </motion.span>

          {/* Image */}

          <img
            src="/hero-sm.png"
            alt="WakaDot ecosystem team"
            className="
              relative
              z-[1]
              h-auto
              w-full
              select-none
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;