import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiShield,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaMotorcycle } from "react-icons/fa6";
import { Package, Clock3, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Fast & Reliable",
    description:
      "Get your packages moving quickly with dispatch riders ready when you need them.",
    icon: FaMotorcycle,
  },
  {
    title: "Live Tracking",
    description:
      "Follow your delivery in real time and know exactly where your package is.",
    icon: FiMapPin,
  },
  {
    title: "Handled With Care",
    description:
      "From pickup to drop-off, your items are handled carefully and delivered securely.",
    icon: FiShield,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#EFFFF9] py-20 sm:py-24 lg:py-28"
    >
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#008F68]/10 blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#BFEBDD]/50 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#008F68 1px, transparent 1px), linear-gradient(90deg, #008F68 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-xl"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#008F68]/15 bg-white/75 px-4 py-2 shadow-sm backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#008F68] shadow-[0_0_0_4px_rgba(0,143,104,0.1)]" />

                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#006B4D]">
                  Why choose WakaRider
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#171A19] sm:text-5xl lg:text-[58px]"
            >
              Every delivery,
              <span className="block text-[#008F68]">
                handled with care.
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-base leading-7 text-[#66736E] sm:text-lg"
            >
              From everyday errands to important deliveries, WakaRider makes
              every journey simple, secure, and seamless.
            </motion.p>

            {/* Benefits */}
            <motion.div
              variants={containerVariants}
              className="mt-9 space-y-4"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <motion.div
                    key={benefit.title}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="group flex items-start gap-4 rounded-2xl border border-[#008F68]/10 bg-white/75 p-4 shadow-[0_10px_35px_rgba(0,107,77,0.04)] backdrop-blur-md transition-all duration-300 hover:border-[#008F68]/20 hover:bg-white hover:shadow-[0_15px_40px_rgba(0,107,77,0.09)]"
                  >
                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EFFFF9] text-[#008F68] transition-all duration-300 group-hover:bg-[#008F68] group-hover:text-white">
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-[#171A19]">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#66736E]">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Number */}
                    <span className="hidden text-xs font-bold text-[#008F68]/30 sm:block">
                      0{index + 1}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Trust line */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#008F68]" />

                <span className="text-sm font-medium text-[#66736E]">
                  Verified riders
                </span>
              </div>

              <div className="h-1 w-1 rounded-full bg-[#BFEBDD]" />

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#008F68]" />

                <span className="text-sm font-medium text-[#66736E]">
                  Real-time updates
                </span>
              </div>

              <div className="h-1 w-1 rounded-full bg-[#BFEBDD]" />

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#008F68]" />

                <span className="text-sm font-medium text-[#66736E]">
                  Secure delivery
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT SIDE
          ========================== */}
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
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-2xl"
          >
            {/* Main visual container */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-5 rounded-[2.5rem] bg-[#008F68]/10 blur-3xl" />

              {/* Main image */}
              <motion.div
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-2 shadow-[0_30px_80px_rgba(0,107,77,0.15)]"
              >
                <div className="relative aspect-[4/4.3] overflow-hidden rounded-[1.65rem] bg-[#BFEBDD]">
                  <img
                    src="/wakarider-hero-1.webp"
                    alt="WakaRider delivery service"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#006B4D]/50 via-transparent to-transparent" />

                  {/* Top availability pill */}
                  <div className="absolute left-5 top-5">
                    <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/90 px-3 py-2 shadow-lg backdrop-blur-md">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008F68] opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#008F68]" />
                      </span>

                      <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#006B4D]">
                        Rider available
                      </span>
                    </div>
                  </div>

                  {/* Package badge */}
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-5 top-5"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/60 bg-white/90 text-[#008F68] shadow-xl backdrop-blur-md">
                      <Package
                        className="h-6 w-6"
                        strokeWidth={1.8}
                      />
                    </div>
                  </motion.div>

                  {/* Bottom image label */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <div className="rounded-2xl border border-white/30 bg-[#006B4D]/80 p-4 shadow-xl backdrop-blur-md">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#BFEBDD]">
                            Delivery status
                          </p>

                          <p className="mt-1 text-lg font-bold text-white">
                            On the way
                          </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#008F68]">
                          <FaMotorcycle className="text-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =========================
                  FLOATING ETA CARD
              ========================== */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-4 z-20 w-[185px] sm:-left-8 sm:w-[210px]"
              >
                <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,107,77,0.15)] backdrop-blur-xl">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5 text-[#008F68]" />

                        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#66736E]">
                          Estimated arrival
                        </span>
                      </div>

                      <p className="mt-2 text-2xl font-black tracking-tight text-[#171A19]">
                        18–24
                        <span className="ml-1 text-sm font-bold text-[#66736E]">
                          min
                        </span>
                      </p>
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EFFFF9] text-[#008F68]">
                      <FaMotorcycle className="text-sm" />
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-4">
                    <div className="h-1.5 overflow-hidden rounded-full bg-[#EFFFF9]">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "72%" }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: 0.4,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-[#008F68]"
                      />
                    </div>

                    <div className="mt-2 flex justify-between text-[9px] font-semibold text-[#66736E]">
                      <span>Picked up</span>
                      <span>On the way</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =========================
                  ROUTE CARD
              ========================== */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                }}
                className="absolute -right-3 top-1/2 z-20 hidden w-[185px] -translate-y-1/2 sm:block lg:-right-8"
              >
                <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,107,77,0.13)] backdrop-blur-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#66736E]">
                      Live route
                    </span>

                    <span className="rounded-full bg-[#EFFFF9] px-2 py-1 text-[9px] font-bold text-[#008F68]">
                      LIVE
                    </span>
                  </div>

                  <div className="mt-4">
                    {/* Pickup */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFFFF9]">
                        <div className="h-2.5 w-2.5 rounded-full bg-[#008F68]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-[#66736E]">
                          Pickup
                        </p>

                        <p className="text-xs font-bold text-[#171A19]">
                          Package collected
                        </p>
                      </div>
                    </div>

                    {/* Connecting line */}
                    <div className="ml-3.5 h-6 border-l border-dashed border-[#BFEBDD]" />

                    {/* Rider */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#008F68] text-white">
                        <FaMotorcycle className="text-[10px]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-[#66736E]">
                          Current status
                        </p>

                        <p className="text-xs font-bold text-[#008F68]">
                          Rider on the way
                        </p>
                      </div>
                    </div>

                    {/* Connecting line */}
                    <div className="ml-3.5 h-6 border-l border-dashed border-[#BFEBDD]" />

                    {/* Destination */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EFFFF9]">
                        <FiMapPin className="text-xs text-[#008F68]" />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold text-[#66736E]">
                          Destination
                        </p>

                        <p className="text-xs font-bold text-[#171A19]">
                          Almost there
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* =========================
                  DECORATIVE DOTS
              ========================== */}
              <div className="absolute -right-3 -top-3 z-10 grid grid-cols-4 gap-1.5 sm:-right-5 sm:-top-5">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-[#008F68]/30"
                  />
                ))}
              </div>

              {/* Decorative circle */}
              <div className="absolute -bottom-10 -right-10 -z-0 h-28 w-28 rounded-full border border-[#008F68]/15" />

              <div className="absolute -bottom-5 -right-5 -z-0 h-16 w-16 rounded-full border border-[#008F68]/20" />
            </div>
          </motion.div>
        </div>

        {/* =========================
            BOTTOM TRUST STRIP
        ========================== */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-20 border-t border-[#008F68]/10 pt-8 sm:mt-24 lg:mt-28"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#008F68] text-white shadow-lg shadow-[#008F68]/20">
                <CheckCircle2 className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#171A19]">
                  Reliable deliveries. Stronger connections.
                </p>

                <p className="mt-0.5 text-xs text-[#66736E]">
                  Your package is in safe hands.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-[#008F68]/10 bg-white/70 px-3 py-2">
                <FaMotorcycle className="text-xs text-[#008F68]" />

                <span className="text-xs font-semibold text-[#66736E]">
                  Trusted riders
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-[#008F68]/10 bg-white/70 px-3 py-2">
                <FiMapPin className="text-xs text-[#008F68]" />

                <span className="text-xs font-semibold text-[#66736E]">
                  Live tracking
                </span>
              </div>

              <motion.a
                href="#trusted-partners"
                whileHover={{
                  x: 3,
                }}
                className="group flex items-center gap-1.5 text-sm font-bold text-[#008F68]"
              >
                Learn more

                <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================
          BOTTOM WAVE
      ========================== */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,130 420,20 720,60 C1020,100 1200,25 1440,70 L1440,120 L0,120 Z"
            fill="white"
            fillOpacity="0.65"
          />
        </svg>
      </div>
    </section>
  );
};

export default WhyChooseUs;