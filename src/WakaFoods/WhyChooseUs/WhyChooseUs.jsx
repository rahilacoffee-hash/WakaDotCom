import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiShoppingBag, FiMapPin, FiHeart } from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa6";

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
     className="relative overflow-hidden bg-[#FCF3F6] py-20 sm:py-24 lg:py-28">
      {/* Decorative background — recolored from bright pink/red to the site's maroon */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 bottom-[-220px] h-[420px] w-[70%] rounded-[50%] bg-[#902141]/10 blur-sm" />

        <div className="absolute -right-20 bottom-[-170px] h-[300px] w-[520px] rounded-[50%] bg-[#902141]/90" />

        <div
          className="
            absolute right-7 top-12
            h-32 w-32 opacity-25
            [background-image:radial-gradient(#902141_2px,transparent_2px)]
            [background-size:14px_14px]
          "
        />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* LEFT */}
          <div>
            {/* Badge — now matches the Hero's badge exactly (white/70 pill, maroon border/icon) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="
                mb-8 inline-flex items-center gap-3
                rounded-full border border-[#902141]/10
                bg-white/70 backdrop-blur-md
                px-5 py-3 shadow-sm
              "
            >
              <span
                className="
                  flex h-8 w-8 items-center justify-center
                  rounded-full bg-[#902141]/10
                  text-[#902141]
                "
              >
                <FiHeart className="text-sm" />
              </span>

              <span className="text-base font-semibold text-[#902141] sm:text-lg">
                Why choose us
              </span>
            </motion.div>

            {/* Heading — ink color and weight now match the Hero, accent uses the same
                hand-drawn underline as "Delivered hot." instead of a serif italic word */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="
                max-w-[720px]
                text-[42px] font-black leading-[1.05]
                tracking-[-0.04em]
                text-[#24161B]
                sm:text-[54px]
                lg:text-[64px]
              "
            >
              Good food,
              <br />
              from people you can{" "}
              <span className="relative inline-block text-[#902141]">
                trust.
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
                text-gray-600
                sm:text-lg
              "
            >
              We're committed to delivering delicious meals, exceptional
              service, and a seamless experience.
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
                      border border-[#902141]/10
                      bg-white/80
                      p-5
                      shadow-[0_12px_45px_rgba(144,33,65,0.06)]
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
                        bg-[#902141]/10
                        text-[#902141]
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    >
                      <Icon className="text-[30px]" />
                    </div>

                    {/* Divider */}
                    <div className="hidden h-[76px] border-l-2 border-dotted border-[#902141]/20 sm:block" />

                    {/* Text */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-4">
                        <span
                          className="
                            flex h-7 w-7 shrink-0 items-center justify-center
                            rounded-full bg-[#902141]
                            text-white
                          "
                        >
                          <FiCheck className="text-xs" strokeWidth={3} />
                        </span>

                        <h3 className="text-xl font-bold text-[#24161B] sm:text-[24px]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-[530px] text-sm leading-7 text-gray-600 sm:ml-11 sm:text-base">
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
            <div className="absolute -inset-5 rounded-[45px] bg-[#902141]/10 blur-3xl" />

            {/* Main image — path now follows the same root-level, wakafoods-prefixed,
                webp convention as the rest of the site (e.g. wakafoods-logo.webp) */}
            <div
              className="
                relative
                aspect-[0.87/1]
                overflow-hidden
                rounded-[38px]
                bg-[#3D1020]
                shadow-[0_30px_90px_rgba(144,33,65,0.18)]
              "
            >
              <img
                src="/whychooseus.webp"
                alt="WakaFoods chef with food and delivery package"
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3D1020]/25 via-transparent to-transparent" />
            </div>

            {/* Floating accent — now matches the Hero's floating info-card style
                (white/90, backdrop blur, maroon-tinted shadow) instead of a solid
                yellow block */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-3, 3, -3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute -left-10 top-[18%]
                flex h-16 
                items-center justify-center
                rounded-2xl
                border border-white/70
                bg-white/90 backdrop-blur-xl
                text-3xl
                shadow-[0_20px_45px_rgba(144,33,65,0.18)]
                sm:h-20 
                px-5
              "
            >
              🍔 wakafoods
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