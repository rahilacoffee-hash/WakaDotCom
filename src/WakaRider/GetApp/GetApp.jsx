import { motion } from "framer-motion";
import { FaApple } from "react-icons/fa";


const GooglePlayIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M4 2.5v19a1 1 0 0 0 1.6.8l12-9.5a1 1 0 0 0 0-1.6l-12-9.5A1 1 0 0 0 4 2.5Z" fill="#00D2FF" />
    <path d="M4.4 21.9 15 12 4.4 2.1A1 1 0 0 0 4 2.9v18.2c0 .3.1.5.4.8Z" fill="#00D2FF" />
    <path d="m15 12-3.4-2.7L4.6 2.2c.1 0 .3.1.4.2l12.9 7.2L15 12Z" fill="#00F076" />
    <path d="M17.9 9.6 15 12l2.9 2.4 3.3-1.8a1.1 1.1 0 0 0 0-1.9l-3.3-1.1Z" fill="#FFC900" />
    <path d="m15 12 3.4 2.7-12.9 7.2c-.1.1-.3.1-.4.2L15 12Z" fill="#FF3A44" />
  </svg>
);

export default function GetApp() {
  return (
    <section
      className="
        relative
        z-30
        mt-8
        sm:-mt-2
        lg:-mt-2
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

          bg-[#008F68]

          

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
            Get WakaRider{" "}
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
              href="#contact"
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
              href="#contact"
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

                <GooglePlayIcon
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
