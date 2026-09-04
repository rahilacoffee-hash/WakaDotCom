import { motion } from "framer-motion";
import { BsGooglePlay } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

export default function GetApp() {
  return (
    <section
      className="
        relative
        z-30
        -mt-3
        sm:-mt-28
        lg:-mt-28
        bg-[#F5F9FD]
        pb-16
        sm:pb-20
        lg:pb-24
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 120,
          scale: 0.96,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-4
          sm:mx-6
          lg:mx-auto
          max-w-7xl
          overflow-hidden

          rounded-[24px]
          sm:rounded-[30px]

          border
          border-white/20

          bg-[#1769C2]

          shadow-[0_25px_70px_rgba(23,105,194,0.28)]

          p-7
          sm:p-10
          lg:p-14

          ring-4
          ring-[#1769C2]/10
        "
      >
        {/* =========================================
            BACKGROUND DECORATION
        ========================================= */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            -left-24
            h-72
            w-72
            rounded-full
            bg-white/10
            blur-3xl
          "
        />

        {/* Small decorative circles */}

        <div
          className="
            pointer-events-none
            absolute
            right-10
            top-10
            h-3
            w-3
            rounded-full
            bg-white/20
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-10
            left-10
            h-2
            w-2
            rounded-full
            bg-white/20
          "
        />

        {/* =========================================
            CONTENT
        ========================================= */}

        <div className="relative z-10 text-center">

          {/* HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-[-0.03em]
              text-white

              sm:text-4xl
              md:text-5xl
              lg:text-6xl
            "
          >
            Get SmartFixer{" "}
            <span className="text-white/90">
              on your phone
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
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
              duration: 0.6,
              delay: 0.25,
            }}
            className="
              mx-auto
              mt-4
              max-w-2xl

              text-sm
              leading-6
              text-white/75

              sm:text-base
              md:text-lg
            "
          >
            Available on iOS and Android. Download to get started...
          </motion.p>

          {/* =========================================
              STORE BUTTONS
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.6,
              delay: 0.35,
            }}
            className="
              mt-8

              flex
              flex-col
              items-center
              justify-center
              gap-4

              sm:flex-row
              sm:gap-5
            "
          >

            {/* =====================================
                APP STORE
            ===================================== */}

            <a
              href="#"
              aria-label="Download SmartFixer on the App Store"
              className="
                group
                flex
                h-[68px]
                w-[220px]
                items-center
                justify-center

                rounded-[12px]

                bg-white

                px-5

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-2xl
              "
            >
              <div className="flex items-center gap-3">

                <FaApple
                  className="
                    text-[#171717]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  size={30}
                />

                <div className="text-left leading-none">

                  <span
                    className="
                      block
                      text-[11px]
                      text-[#171717]
                    "
                  >
                    Download on the
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[26px]
                      font-medium
                      tracking-tight
                      text-[#171717]
                    "
                  >
                    App Store
                  </span>

                </div>
              </div>
            </a>

            {/* =====================================
                GOOGLE PLAY
            ===================================== */}

            <a
              href="#"
              aria-label="Download SmartFixer on Google Play"
              className="
                group
                flex
                h-[68px]
                w-[220px]
                items-center
                justify-center

                rounded-[12px]

                bg-white

                px-5

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
                hover:scale-[1.02]
                hover:shadow-2xl
              "
            >
              <div className="flex items-center gap-3">

                <BsGooglePlay
                  className="
                    text-[#171717]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  size={30}
                />

                <div className="text-left leading-none">

                  <span
                    className="
                      block
                      text-[11px]
                      uppercase
                      text-[#171717]
                    "
                  >
                    Get it on
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[25px]
                      font-medium
                      tracking-tight
                      text-[#171717]
                    "
                  >
                    Google Play
                  </span>

                </div>
              </div>
            </a>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}