import React from "react";
import { motion } from "framer-motion";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const categories = [
  "AC & Cooling",
  "Plumbing",
  "Building & Maintenance",
  "Electrical",
];

const SmartFixer = () => {
  return (
    <section
      id="smartfixer"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFF5EB]
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#FEEAD7]
          opacity-50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#FEEAD7]
          opacity-30
          blur-3xl
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-20
          sm:px-8
          lg:px-12
          lg:py-28
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}

          <div
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
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#FB7A00]
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.12em]
                text-[#1B1B1B]
              "
            >
              Our Flagship App
            </span>
          </div>

          {/* Title */}

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              tracking-[-0.04em]
              text-[#1B1B1B]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Meet{" "}
            <span className="text-[#FB7A00]">
              SmartFixer.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-7
              text-[#6C6B6A]
              sm:text-base
            "
          >
            Get trusted professionals to handle your repairs,
            maintenance and everyday fixes — quickly and reliably.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            mt-16
            grid
            items-center
            gap-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT — PHONE SHOWCASE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="
              relative
              mx-auto
              flex
              h-[390px]
              w-full
              max-w-[520px]
              items-center
              justify-center
              sm:h-[460px]
            "
          >
            {/* Orange glow */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[220px]
                w-[220px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#FB7A00]/10
                blur-3xl
              "
            />

            {/* Decorative circle */}

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-[#ECDBCD]
                sm:h-[350px]
                sm:w-[350px]
              "
            />

            {/* ================= LEFT PHONE ================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-[5%]
                top-[85px]
                z-[2]
                h-[260px]
                w-[125px]
                overflow-hidden
                rounded-[18px]
                border-[5px]
                border-[#1B1B1B]
                bg-[#1B1B1B]
                shadow-[0_25px_50px_rgba(27,27,27,0.18)]
                sm:left-[7%]
                sm:h-[310px]
                sm:w-[150px]
              "
            >
              <img
                src="/smartfixer-1.png"
                alt="SmartFixer app"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </motion.div>

            {/* ================= CENTER PHONE ================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.3,
                ease: "easeInOut",
              }}
              className="
                absolute
                left-1/2
                top-[25px]
                z-[4]
                h-[310px]
                w-[145px]
                -translate-x-1/2
                overflow-hidden
                rounded-[20px]
                border-[5px]
                border-[#1B1B1B]
                bg-[#1B1B1B]
                shadow-[0_30px_70px_rgba(27,27,27,0.25)]
                sm:h-[370px]
                sm:w-[175px]
              "
            >
              <img
                src="/smartfixer-2.png"
                alt="SmartFixer app home"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </motion.div>

            {/* ================= RIGHT PHONE ================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 0.6,
                ease: "easeInOut",
              }}
              className="
                absolute
                right-[5%]
                top-[85px]
                z-[2]
                h-[260px]
                w-[125px]
                overflow-hidden
                rounded-[18px]
                border-[5px]
                border-[#1B1B1B]
                bg-[#1B1B1B]
                shadow-[0_25px_50px_rgba(27,27,27,0.18)]
                sm:right-[7%]
                sm:h-[310px]
                sm:w-[150px]
              "
            >
              <img
                src="/smartfixer-3.png"
                alt="SmartFixer service screen"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </motion.div>

            {/* ================= FLOATING USER CARD ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.7,
              }}
              className="
                absolute
                bottom-[10px]
                left-1/2
                z-10
                flex
                -translate-x-1/2
                items-center
                gap-3
                rounded-full
                border
                border-white
                bg-white/95
                px-4
                py-2.5
                shadow-[0_15px_40px_rgba(27,27,27,0.12)]
                backdrop-blur-md
              "
            >
              {/* Avatars */}

              <div className="flex -space-x-2">
                <div
                  className="
                    h-7
                    w-7
                    rounded-full
                    border-2
                    border-white
                    bg-[#8c6d55]
                  "
                />

                <div
                  className="
                    h-7
                    w-7
                    rounded-full
                    border-2
                    border-white
                    bg-[#5e6b72]
                  "
                />

                <div
                  className="
                    h-7
                    w-7
                    rounded-full
                    border-2
                    border-white
                    bg-[#ad8970]
                  "
                />

                <div
                  className="
                    h-7
                    w-7
                    rounded-full
                    border-2
                    border-white
                    bg-[#46515a]
                  "
                />
              </div>

              <div className="text-left leading-none">
                <p
                  className="
                    text-sm
                    font-bold
                    text-[#1B1B1B]
                  "
                >
                  5k+
                </p>

                <p
                  className="
                    mt-1
                    text-[9px]
                    text-[#6C6B6A]
                  "
                >
                  Active Users
                </p>
              </div>
            </motion.div>

            {/* Sparkles */}

            <motion.span
              animate={{
                rotate: [0, 15, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="
                absolute
                left-[10%]
                top-[35px]
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
                delay: 0.6,
              }}
              className="
                absolute
                right-[10%]
                top-[60px]
                text-lg
                text-[#FB7A00]
              "
            >
              ✦
            </motion.span>
          </motion.div>

          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {/* Small label */}

            <p
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#FB7A00]
              "
            >
              Your problems. Solved.
            </p>

            {/* Heading */}

            <h3
              className="
                mt-4
                max-w-lg
                text-4xl
                font-bold
                leading-[1.05]
                tracking-[-0.04em]
                text-[#1B1B1B]
                sm:text-5xl
              "
            >
              Something broken?
              <br />

              <span className="text-[#FB7A00]">
                Let's fix it for you.
              </span>
            </h3>

            {/* Description */}

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-[#6C6B6A]
                sm:text-base
              "
            >
              Find trusted, verified tradespeople for the repairs
              and maintenance you can't wait to solve. Book a
              professional in minutes and get your problem handled
              without the stress.
            </p>

            {/* Categories */}

            <div className="mt-7 flex max-w-lg flex-wrap gap-2">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
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
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-[#ECDBCD]
                    bg-white/60
                    px-3.5
                    py-2
                    text-xs
                    font-medium
                    text-[#333333]
                    transition-all
                    duration-300
                    hover:border-[#FB7A00]
                    hover:bg-[#FEEAD7]
                  "
                >
                  <FiCheck
                    className="
                      text-[#FB7A00]
                    "
                  />

                  {category}
                </motion.div>
              ))}
            </div>

            {/* App buttons */}

            <div className="mt-9 flex flex-wrap items-center gap-3">
              {/* Apple */}

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  h-12
                  min-w-[145px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  bg-[#1B1B1B]
                  px-4
                  text-white
                  shadow-[0_10px_25px_rgba(27,27,27,0.15)]
                  transition-all
                  duration-300
                "
              >
                <FaApple size={25} />

                <span className="flex flex-col items-start leading-none">
                  <span className="text-[9px] opacity-70">
                    Download on the
                  </span>

                  <span className="mt-1 text-sm font-semibold">
                    App Store
                  </span>
                </span>
              </motion.a>

              {/* Google Play */}

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  flex
                  h-12
                  min-w-[145px]
                  items-center
                  justify-center
                  gap-2.5
                  rounded-xl
                  bg-[#1B1B1B]
                  px-4
                  text-white
                  shadow-[0_10px_25px_rgba(27,27,27,0.15)]
                  transition-all
                  duration-300
                "
              >
                <BiLogoPlayStore
                  size={25}
                  className="text-[#FB7A00]"
                />

                <span className="flex flex-col items-start leading-none">
                  <span className="text-[9px] opacity-70">
                    GET IT ON
                  </span>

                  <span className="mt-1 text-sm font-semibold">
                    Google Play
                  </span>
                </span>
              </motion.a>
            </div>

            {/* Learn more */}

            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartFixer;