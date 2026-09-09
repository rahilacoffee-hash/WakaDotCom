import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiCheck,
  FiShield,
  FiCreditCard,
  FiTruck,
  FiRefreshCw,
} from "react-icons/fi";

let benefits = [
  {
    title: "Trusted Sellers",
    description:
      "Shop confidently from verified sellers offering quality products you can trust.",
    icon: FiShield,
  },
  {
    title: "Secure Payments",
    description:
      "Enjoy a safe, seamless checkout with secure payment processing every time.",
    icon: FiCreditCard,
  },
  {
    title: "Reliable Delivery",
    description:
      "Get your orders delivered quickly and conveniently from store to door.",
    icon: FiTruck,
  },
  {
    title: "Easy Returns",
    description:
      "Shop with confidence with simple returns and clear customer protection.",
    icon: FiRefreshCw,
  },
];

function WhyChooseUs() {
  let shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-20 overflow-hidden bg-[#FEEBEC] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 bottom-[-180px] h-[420px] w-[65%] rounded-full bg-[#E30613]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-[-180px] h-[380px] w-[500px] rounded-full bg-[#E30613]/10 blur-3xl" />

        <div
          className="
            absolute right-10 top-10 h-32 w-32 opacity-20
            [background-image:radial-gradient(#E30613_2px,transparent_2px)]
            [background-size:14px_14px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">

          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-6 inline-flex items-center gap-3
                rounded-full border border-[#E30613]/10
                bg-white/80 px-5 py-3
                shadow-sm backdrop-blur-md
              "
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E30613]/10 text-[#E30613]">
                <FiCheck className="text-sm" strokeWidth={3} />
              </span>

              <span className="text-sm font-bold text-[#E30613] sm:text-base">
                Why shop with us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                max-w-[720px]
                text-[42px] font-black leading-[1.02]
                tracking-[-0.045em] text-[#24161B]
                sm:text-[52px]
                lg:text-[64px]
              "
            >
              Shopping made
              <br />

              <span className="relative inline-block text-[#E30613]">
                simple & trusted.
                <svg
                  className="absolute -bottom-1 left-0 h-3 w-full sm:-bottom-2 sm:h-4"
                  viewBox="0 0 260 20"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M3 14C60 3 170 3 257 10"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h2>

            {/* Intro */}
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mt-7 max-w-[610px]
                text-base leading-8 text-gray-600
                sm:text-lg
              "
            >
              From trusted sellers to reliable delivery, WakaStores makes
              online shopping easier, safer, and more convenient.
            </motion.p>

            {/* BENEFIT CARDS */}
            <div className="mt-9 space-y-4">
              {benefits.map((item, index) => {
                let Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: shouldReduceMotion ? 0 : index * 0.1,
                    }}
                    whileHover={
                      shouldReduceMotion
                        ? undefined
                        : { y: -4, transition: { duration: 0.2 } }
                    }
                    className="
                      group relative flex items-start gap-4
                      rounded-[26px]
                      border border-[#E30613]/10
                      bg-[#FFDDE0]/80
                      p-5
                      shadow-[0_12px_45px_rgba(227,6,19,0.05)]
                      backdrop-blur
                      sm:gap-6 sm:p-7
                    "
                  >
                    {/* Icon */}
                    <div
                      className="
                        flex h-[76px] w-[76px]
                        shrink-0 items-center justify-center
                        rounded-full
                        bg-[#E30613]/10
                        text-[#E30613]
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon className="text-[30px]" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            flex h-6 w-6 shrink-0
                            items-center justify-center
                            rounded-full bg-[#E30613]
                            text-white
                          "
                        >
                          <FiCheck className="text-xs" strokeWidth={3} />
                        </span>

                        <h3 className="text-xl font-extrabold tracking-tight text-[#24161B] sm:text-[25px]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-2 max-w-[560px] text-sm leading-6 text-gray-600 sm:ml-9 sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[680px]"
          >
            {/* Glow */}
            <div className="absolute -inset-8 rounded-[50px] bg-[#E30613]/10 blur-3xl" />

            {/* Image */}
            <div
              className="
                relative overflow-hidden
                rounded-[38px]
                shadow-[0_30px_90px_rgba(144,33,65,0.18)]
              "
            >
              <img
                src="/whychooseus1.webp"
                alt="WakaStores shopping experience"
                loading="lazy"
                className="
                  h-full w-full
                  object-cover
                  transition-transform duration-700
                  hover:scale-[1.02]
                "
              />

              {/* Bottom gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1020]/20 via-transparent to-transparent" />
            </div>

            {/* Floating check card */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: [-2, 2, -2] }
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -left-5 top-[18%]
                flex items-center gap-3
                rounded-2xl
                border border-white/80
                bg-white/95
                px-4 py-3
                shadow-[0_20px_45px_rgba(144,33,65,0.18)]
                backdrop-blur-xl
                sm:-left-8 sm:px-5 sm:py-4
              "
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E30613] text-white">
                <FiCheck strokeWidth={3} />
              </span>

              <div>
                <p className="text-xs font-bold text-gray-900">
                  Order Confirmed
                </p>
                <p className="text-[11px] text-gray-500">
                  Your order is on the way
                </p>
              </div>
            </motion.div>

            {/* Decorative dots */}
            <div
              className="
                pointer-events-none absolute
                -bottom-8 -right-8 hidden
                h-28 w-28 opacity-30 sm:block
                [background-image:radial-gradient(#E30613_2px,transparent_2px)]
                [background-size:13px_13px]
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="pointer-events-none absolute bottom-[-120px] left-[-5%] h-[200px] w-[75%] rotate-[3deg] rounded-[50%] bg-white" />
    </section>
  );
}

export default WhyChooseUs;
