import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiShoppingBag, FiMapPin, FiHeart } from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa6";
import { Package } from "lucide-react";

const benefits = [
  {
    title: "Wide Selection",
    description:
      "Order from a growing range of restaurants and food vendors near you.",
    icon: FiShoppingBag,
  },
  {
    title: "Fast Delivery",
    description:
      "Meals get to you while they're still hot, tracked from kitchen to door.",
    icon: FaMotorcycle,
  },
  {
    title: "Track Live Map",
    description:
      "Easily track your order in real-time with our live map feature, ultimate convenience and keeping you updated every step of the way!",
    icon: FiMapPin,
  },
];

const WhyChooseUs = () => {
  return (
    <section
    id="why-choose-us"
     className="relative overflow-hidden bg-[#EFFFF9] py-20 sm:py-24 lg:py-28">
      {/* Decorative background — recolored to the site's WakaRider green */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-[-220px] h-[420px] w-[70%] rounded-[50%] bg-[#008F68]/10 blur-sm" />

        <div className="absolute -right-20 bottom-[-170px] h-[300px] w-[520px] rounded-[50%] bg-[#008F68]/90" />

        <div
          className="
            absolute right-7 top-12
            h-32 w-32 opacity-25
            [background-image:radial-gradient(#008F68_2px,transparent_2px)]
            [background-size:14px_14px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* LEFT */}
          <div>
            {/* Badge — white/70 pill, green border/icon */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-8 inline-flex items-center gap-3
                rounded-full border border-[#008F68]/10
                bg-white/70 backdrop-blur-md
                px-5 py-3 shadow-sm
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-[#008F68]/10
                  text-[#008F68]
                "
              >
                <FiHeart className="text-sm" />
              </span>

              <span className="text-base font-semibold text-[#008F68] sm:text-lg">
                Why choose us
              </span>
            </motion.div>

            {/* Heading — ink color and weight, green accent with hand-drawn underline */}
          <motion.h2
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="
    max-w-[720px]
    text-[42px] font-black leading-[1.05]
    tracking-[-0.04em]
    text-[#171A19]
    sm:text-[54px]
    lg:text-[64px]
  "
>
  Every delivery,
  <br />
  handled with{" "}
  <span className="relative inline-block text-[#008F68]">
    care.
    <svg
      className="absolute -bottom-2 left-0 w-full"
      viewBox="0 0 140 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 14C34 3 82 3 138 10"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  </span>
</motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="
                mt-7 max-w-[610px]
                text-base leading-8
                text-[#66736E]
                sm:text-lg
              "
            >
             From everyday errands to important deliveries, WakaRider makes every journey simple, secure, and seamless.
            </motion.p>

            {/* Benefit cards */}
            <div className="mt-9 space-y-4">
              {benefits.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.2 },
                    }}
                    className="
                      group
                      relative
                      flex items-start gap-4
                      rounded-[26px]
                      border border-[#008F68]/10
                      bg-white/80
                      p-5
                      shadow-[0_12px_45px_rgba(0,143,104,0.06)]
                      backdrop-blur
                      sm:gap-6
                      sm:p-7
                    "
                  >
                    {/* Large icon */}
                    <div
                      className="
                        flex h-[76px] w-[76px]
                        shrink-0 items-center justify-center
                        rounded-full
                        bg-[#008F68]/10
                        text-[#008F68]
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon className="text-[30px]" />
                    </div>

                    {/* Divider */}
                    <div className="hidden h-[76px] border-l-2 border-dotted border-[#008F68]/20 sm:block" />

                    {/* Text */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-4">
                        <span
                          className="
                            flex h-7 w-7 shrink-0 items-center justify-center
                            rounded-full bg-[#008F68]
                            text-white
                          "
                        >
                          <FiCheck className="text-xs" strokeWidth={3} />
                        </span>

                        <h3 className="text-xl font-bold text-[#171A19] sm:text-[24px]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-[530px] text-sm leading-7 text-[#66736E] sm:ml-11 sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[680px]"
          >
            {/* Glow */}
            <div className="absolute -inset-5 rounded-[45px] bg-[#008F68]/10 blur-3xl" />

            {/* Main image */}
            <div
              className="
                relative
                aspect-[0.87/1]
                overflow-hidden
                rounded-[38px]
               
              "
            >
              <img
                src="/wakarider-hero-2.webp"
                alt="WakaFoods chef with food and delivery package"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating accent — white/90, backdrop blur, green-tinted shadow */}
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


            {/* Decorative dots */}
            <div
              className="
                absolute -bottom-10 -right-10
                hidden h-28 w-28
                opacity-30
                sm:block
                [background-image:radial-gradient(#ffffff_2px,transparent_2px)]
                [background-size:13px_13px]
              "
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="pointer-events-none absolute bottom-[-115px] left-[-5%] h-[200px] w-[75%] rotate-[3deg] rounded-[50%] bg-white" />
    </section>
  );
};

export default WhyChooseUs;