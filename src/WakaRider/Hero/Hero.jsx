import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  MapPin,
  Package,
  Bike,
  Clock3,
} from "lucide-react";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

/* =========================================================
   HERO IMAGES
========================================================= */

const heroImages = [
  {
    id: 1,
    src: "/wakarider-hero-1.webp",
    alt: "WakaRider delivery rider",
  },
  {
    id: 2,
    src: "/wakarider-hero-2.webp",
    alt: "WakaRider fast delivery",
  },
 
];

const storeButtonVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
/* =========================================================
   HERO
========================================================= */

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  /* =======================================================
     AUTO CHANGE HERO IMAGE
  ======================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) =>
        current === heroImages.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#EFFFF9]
        pt-24
        sm:pt-28
        lg:pt-20
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main green glow */}

        <div
          className="
            absolute
            -right-32
            top-20
            h-[300px]
            w-[300px]
            rounded-full
            bg-[#008F68]/[0.08]
            blur-[100px]

            sm:h-[500px]
            sm:w-[500px]

            lg:h-[650px]
            lg:w-[650px]
          "
        />

        {/* Left glow */}

        <div
          className="
            absolute
            -left-40
            bottom-0
            h-[280px]
            w-[280px]
            rounded-full
            bg-[#00A875]/[0.05]
            blur-[100px]

            sm:h-[450px]
            sm:w-[450px]
          "
        />

        {/* Subtle grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(#008F68 1px, transparent 1px), linear-gradient(90deg, #008F68 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100vh-6rem)]
          max-w-[1400px]
          items-center
          px-5
          py-12

          sm:px-8
          sm:py-16

          lg:px-12
          lg:py-20
        "
      >
        <div
          className="
            grid
            w-full
            grid-cols-1
            items-center
            gap-8

            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-4
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

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
              relative
              z-20
              max-w-2xl

              lg:pr-6
            "
          >
            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#BFEBDD]
                bg-white/75
                px-3
                py-1.5
                shadow-sm
                backdrop-blur-md

                sm:mb-6
                sm:px-4
                sm:py-2
              "
            >
              <span
                className="
                  flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#008F68]
                  shadow-[0_0_0_4px_rgba(0,143,104,0.08)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#008F68]

                  sm:text-[10px]
                  sm:tracking-[0.22em]
                "
              >
                Delivery made easy
              </span>
            </motion.div>

            {/* Heading */}

            <h1
              className="
                max-w-[850px]
                text-[clamp(3rem,12vw,6.8rem)]
                font-black
                leading-[0.88]
                tracking-[-0.065em]
                text-[#171A19]

                lg:text-[clamp(4rem,6.3vw,6.8rem)]
              "
            >
              Send Anything.

              <span
                className="
                  block
                  text-[#008F68]
                "
              >
                Anywhere. Anytime.
              </span>
            </h1>

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
                delay: 0.3,
                duration: 0.6,
              }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-[#66736E]

                sm:mt-7
                sm:text-base
                sm:leading-7

                lg:text-lg
                lg:leading-8
              "
            >
              Fast, reliable door-to-door delivery for parcels,
              food, products and more. Send what you need,
              wherever you need it.
            </motion.p>

            {/* =================================================
                CTA
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.6,
              }}
              className="
                mt-7
                flex
                flex-col
                gap-3

                sm:mt-8
                sm:flex-row
                sm:items-center
              "
            >
        
            </motion.div>

            {/* =================================================
                APP DOWNLOAD
            ================================================== */}

          <div className="mt-4 flex flex-col gap-4 sm:mt-5 sm:flex-row">
                        <motion.div
                          variants={{
                            hidden: {},
                            visible: {
                              transition: {
                                staggerChildren: 0.12,
                                delayChildren: 0.25,
                              },
                            },
                          }}
                          initial="hidden"
                          animate="visible"
                          className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
                        >
                          {/* Apple */}
                          <motion.a
                            variants={storeButtonVariants}
                            href="#"
                            whileHover={{
                              scale: 1.04,
                              y: -3,
                            }}
                            whileTap={{
                              scale: 0.97,
                            }}
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
          
                          {/* Google Play */}
                          <motion.a
                            variants={storeButtonVariants}
                            href="#"
                            whileHover={{
                              scale: 1.04,
                              y: -3,
                            }}
                            whileTap={{
                              scale: 0.97,
                            }}
                            className="flex h-[54px] w-full min-w-[165px] items-center justify-center gap-3 rounded-[17px] bg-[#141310] px-5 text-white shadow-[0_15px_35px_rgba(20,19,16,0.14)] transition-shadow duration-300 hover:shadow-[0_20px_45px_rgba(20,19,16,0.22)] sm:h-[56px] sm:w-auto"
                          >
                            <BiLogoPlayStore className="text-[27px] " />
          
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
                      </div>
          

            {/* =================================================
                TRUST STATS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.6,
              }}
              className="
                mt-8
                flex
                items-center
                gap-5
                border-t
                border-[#BFEBDD]
                pt-5

                sm:mt-10
                sm:gap-8
                sm:pt-6
              "
            >
              <div>
                <p className="text-lg font-black text-[#171A19] sm:text-xl">
                  10K+
                </p>

                <p className="mt-0.5 text-[9px] text-[#66736E] sm:text-[10px]">
                  Deliveries
                </p>
              </div>

              <div className="h-8 w-px bg-[#BFEBDD]" />

              <div>
                <p className="text-lg font-black text-[#171A19] sm:text-xl">
                  30+
                </p>

                <p className="mt-0.5 text-[9px] text-[#66736E] sm:text-[10px]">
                  Locations
                </p>
              </div>

              <div className="h-8 w-px bg-[#BFEBDD]" />

              <div>
                <p className="text-lg font-black text-[#171A19] sm:text-xl">
                  24/7
                </p>

                <p className="mt-0.5 text-[9px] text-[#66736E] sm:text-[10px]">
                  Availability
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT HERO VISUAL
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
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
              flex
              min-h-[340px]
              items-center
              justify-center

              sm:min-h-[480px]

              lg:min-h-[650px]
            "
          >
            {/* =================================================
                MAP / DECORATIVE CIRCLE
            ================================================== */}

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
                border-[#008F68]/10

                sm:h-[420px]
                sm:w-[420px]

                lg:h-[560px]
                lg:w-[560px]
              "
            />

            <div
              className="
                absolute
                left-1/2
                top-1/2
                h-[210px]
                w-[210px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-dashed
                border-[#008F68]/10

                sm:h-[330px]
                sm:w-[330px]

                lg:h-[440px]
                lg:w-[440px]
              "
            />

            {/* =================================================
                HERO IMAGE
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                w-full
                items-center
                justify-center
              "
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={heroImages[activeImage].id}
                  src={heroImages[activeImage].src}
                  alt={heroImages[activeImage].alt}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    h-auto
                    w-[88%]
                    max-w-[620px]
                    object-contain
                    drop-shadow-[0_25px_35px_rgba(0,107,77,0.12)]

                    sm:w-[90%]

                    lg:w-full
                  "
                />
              </AnimatePresence>
            </div>

            {/* =================================================
                FLOATING DELIVERY CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [0, -8, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 0.8,
                },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                bottom-8
                left-1
                z-20
                hidden
                items-center
                gap-3
                rounded-2xl
                border
                border-[#BFEBDD]
                bg-white/90
                px-3
                py-2.5
                shadow-[0_15px_40px_rgba(0,107,77,0.12)]
                backdrop-blur-xl

                sm:flex
                sm:left-3
                sm:bottom-10

                lg:left-0
                lg:bottom-16
              "
            >
              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D5F8EC]
                  text-[#008F68]
                "
              >
                <Package size={18} />
              </div>

              <div>
                <p className="text-[9px] font-semibold text-[#66736E]">
                  Delivery status
                </p>

                <p className="text-xs font-bold text-[#171A19]">
                  On the way
                </p>
              </div>

              <span className="h-2 w-2 rounded-full bg-[#008F68]" />
            </motion.div>

            {/* =================================================
                ETA CARD
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: [0, 8, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.6,
                  delay: 1,
                },
                y: {
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="
                absolute
                right-1
                top-10
                z-20
                hidden
                items-center
                gap-2.5
                rounded-2xl
                border
                border-[#BFEBDD]
                bg-white/90
                px-3
                py-2.5
                shadow-[0_15px_40px_rgba(0,107,77,0.12)]
                backdrop-blur-xl

                sm:flex
                sm:right-3

                lg:right-0
                lg:top-20
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#D5F8EC]
                  text-[#008F68]
                "
              >
                <Clock3 size={16} />
              </div>

              <div>
                <p className="text-[9px] text-[#66736E]">
                  Estimated arrival
                </p>

                <p className="text-xs font-bold text-[#171A19]">
                  18 mins
                </p>
              </div>
            </motion.div>

            {/* =================================================
                LOCATION BADGE
            ================================================== */}

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
                duration: 0.6,
                delay: 1.1,
              }}
              className="
                absolute
                right-8
                bottom-14
                z-20
                hidden
                items-center
                gap-2
                rounded-full
                border
                border-[#BFEBDD]
                bg-white/90
                px-3
                py-2
                shadow-[0_12px_30px_rgba(0,107,77,0.1)]
                backdrop-blur-xl

                sm:flex

                lg:right-12
                lg:bottom-24
              "
            >
              <MapPin
                size={14}
                className="text-[#008F68]"
              />

              <span className="text-[10px] font-semibold text-[#171A19]">
                Live tracking
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          IMAGE INDICATORS
      ====================================================== */}

      
    </section>
  );
}