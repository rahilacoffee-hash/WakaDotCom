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
          w-[500px]
          h-[500px]
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
          w-[400px]
          h-[400px]
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
          hidden
          lg:block
          max-w-7xl
          mx-auto
          px-6
          lg:px-12
          pt-32
          pb-0
          relative
          z-10
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
                  px-5
                  py-2.5
                  rounded-full
                  bg-[#FEEAD7]
                  text-[#FB7A00]
                  text-sm
                  font-medium
                  border
                  border-[#ECDBCD]
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
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-[#FB7A00]
                    shrink-0
                  "
                />

                Africa's connected digital lifestyle ecosystem
              </motion.span>

              {/* Heading */}

              <h1
                className="
                  mt-7
                  text-[clamp(3rem,5vw,4.5rem)]
                  leading-[1.05]
                  tracking-[-0.04em]
                  font-bold
                  text-[#1B1B1B]
                "
              >
                One signup.
                <br />

                <span className="inline-block mt-2 text-[#FB7A00]">
                  Many possibilities.
                </span>
              </h1>

              {/* Description */}

              <p
                className="
                  mt-6
                  max-w-lg
                  text-base
                  lg:text-lg
                  leading-relaxed
                  text-[#6C6B6A]
                "
              >
                One account gives you access to everything you need
                for your everyday life — from fixing things and
                getting around to shopping and ordering food.
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
                  inline-flex
                  items-center
                  justify-center
                  mt-7
                  bg-[#FB7A00]
                  hover:bg-[#e96f00]
                  text-white
                  font-semibold
                  px-7
                  py-3.5
                  rounded-full
                  shadow-[0_15px_40px_rgba(251,122,0,0.22)]
                  hover:shadow-[0_20px_50px_rgba(251,122,0,0.32)]
                  transition-all
                  duration-300
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
                      w-2
                      h-2
                      rounded-full
                      bg-[#FB7A00]
                      shrink-0
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
              text-[#1B1B1B]
              text-xl
              z-10
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
              text-[#1B1B1B]
              text-sm
              z-10
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
              text-[#1B1B1B]
              text-lg
              z-10
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
              text-[#1B1B1B]
              text-sm
              z-10
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
              w-full
              h-auto
              object-contain
              select-none
            "
          />
        </motion.div>
      </div>

      {/* =========================================================
          MOBILE HERO
      ========================================================= */}

      <div
        className="
          lg:hidden
          relative
          z-10
          px-5
          sm:px-6
          pt-28
          pb-8
          text-center
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
            px-4
            py-2
            rounded-full
            bg-[#FEEAD7]
            text-[#FB7A00]
            text-xs
            sm:text-sm
            font-medium
            border
            border-[#ECDBCD]
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
              w-2.5
              h-2.5
              rounded-full
              bg-[#FB7A00]
              shrink-0
            "
          />

          Africa's connected digital lifestyle ecosystem
        </motion.span>

        {/* Heading */}

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
            text-[2.5rem]
            sm:text-5xl
            font-bold
            leading-[1.05]
            tracking-[-0.04em]
            text-[#1B1B1B]
          "
        >
          One signup.
          <br />

          <span className="text-[#FB7A00]">
            Many possibilities.
          </span>
        </motion.h1>

        {/* Description */}

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
            mt-5
            max-w-md
            mx-auto
            text-sm
            sm:text-base
            leading-relaxed
            text-[#6C6B6A]
          "
        >
          Everything you need for everyday life,
          all connected in one ecosystem.
        </motion.p>

        {/* Bullets */}

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
            space-y-2.5
            text-left
            inline-block
            max-w-full
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
                  w-2
                  h-2
                  rounded-full
                  bg-[#FB7A00]
                  shrink-0
                "
              />

              <span>{item}</span>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}

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
            inline-flex
            items-center
            justify-center
            mt-6
            bg-[#FB7A00]
            hover:bg-[#e96f00]
            text-white
            font-semibold
            px-6
            py-3
            rounded-full
            shadow-[0_15px_40px_rgba(251,122,0,0.22)]
            transition-all
            duration-300
          "
        >
          Explore the Ecosystem

          <span className="ml-2">
            →
          </span>
        </motion.a>

        {/* Mobile Image */}

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
              text-[#1B1B1B]
              text-lg
              z-10
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
              text-[#1B1B1B]
              text-base
              z-10
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
              w-full
              h-auto
              object-contain
              select-none
            "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;