import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";

const options = [
  {
    number: "01",
    title: "Book a Fixer",
    description:
      "Find a verified professional near you and book the right person for the job in just a few minutes.",
    features: [
      "Verified professionals",
      "Transparent pricing",
      "Quick booking",
    ],
    image: "/smartfixer-2.png",
  },
  {
    number: "02",
    title: "Request a Premium Fix",
    description:
      "Need something handled without the hassle? Request a premium service and let SmartFixer take care of the rest.",
    features: [
      "Premium service",
      "Priority support",
      "End-to-end convenience",
    ],
    image: "/smartfixer-1.png",
  },
];

const HowSmartFixerWorks = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#FFF5EB]
        py-24
        sm:py-28
        lg:py-32
      "
    >
      {/* =====================================================
          WATERMARK
      ===================================================== */}

      <img
        src="/Wakadotcom-logo.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          w-[350px]
          -translate-x-1/2
          -translate-y-1/2
          select-none
          opacity-[0.025]
          sm:w-[500px]
          lg:w-[700px]
        "
      />

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
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* ===================================================
            SECTION HEADER
        =================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            flex
            flex-col
            items-center
            text-center
          "
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
              How SmartFixer Works
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-4xl
              font-bold
              leading-[1.05]
              tracking-[-0.04em]
              text-[#1B1B1B]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Two Ways To Get{" "}
            <span className="text-[#FB7A00]">
              It Fixed.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-[#6C6B6A]
              sm:text-base
            "
          >
            Whether you need a trusted professional or a
            completely hassle-free experience, SmartFixer
            has you covered.
          </p>
        </motion.div>

        {/* ===================================================
            OPTIONS
        =================================================== */}

        <div
          className="
            mt-16
            grid
            gap-6
            lg:grid-cols-2
            lg:gap-8
          "
        >
          {options.map((option, index) => (
            <motion.article
              key={option.number}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-[#EBDDD2]
                bg-white/70
                p-6
                shadow-[0_20px_60px_rgba(27,27,27,0.06)]
                backdrop-blur-sm
                transition-shadow
                duration-500
                hover:shadow-[0_30px_80px_rgba(27,27,27,0.10)]
                sm:p-8
              "
            >
              {/* Orange corner glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-[#FB7A00]/10
                  blur-3xl
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  items-center
                  gap-8
                  sm:grid-cols-[1fr_180px]
                "
              >
                {/* Content */}

                <div>
                  {/* Number */}

                  <span
                    className="
                      text-xs
                      font-bold
                      tracking-[0.15em]
                      text-[#FB7A00]
                    "
                  >
                    {option.number}
                  </span>

                  {/* Title */}

                  <h3
                    className="
                      mt-3
                      text-2xl
                      font-bold
                      tracking-[-0.03em]
                      text-[#1B1B1B]
                      sm:text-3xl
                    "
                  >
                    {option.title}
                  </h3>

                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-[#6C6B6A]
                    "
                  >
                    {option.description}
                  </p>

                  {/* Features */}

                  <div className="mt-5 space-y-2">
                    {option.features.map((feature) => (
                      <div
                        key={feature}
                        className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          font-medium
                          text-[#3F3F3F]
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
                            bg-[#FEEAD7]
                            text-[#FB7A00]
                          "
                        >
                          <FiCheck size={11} />
                        </span>

                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}

               
                </div>

                {/* Image */}

                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    relative
                    mx-auto
                    h-[220px]
                    w-full
                    max-w-[180px]
                    overflow-hidden
                    rounded-[22px]
                    bg-[#FEEAD7]
                  "
                >
                  {option.image ? (
                    <img
                      src={option.image}
                      alt={option.title}
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  ) : (
                    <div
                      className="
                        flex
                        h-full
                        items-center
                        justify-center
                        text-center
                        text-xs
                        font-medium
                        text-[#6C6B6A]
                      "
                    >
                      SmartFixer
                    </div>
                  )}

                  {/* Image overlay */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#1B1B1B]/10
                      to-transparent
                    "
                  />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowSmartFixerWorks;