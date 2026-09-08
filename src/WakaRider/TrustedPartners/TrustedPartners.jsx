import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Clock3 } from "lucide-react";
import LogoMarquee from "./LogoMarquee";

const defaultPartners = [
   {
    id: 1,
    name: "Downtown Grill",
    logo: "/partners/5-downtown grill.png",
    category: "Restaurant",
  },

  {
    id: 2,
    name: "Drumstix",
    logo: "/partners/7-drumstix.png",
    category: "Restaurant",
  },
  {
    id: 3,
    name: "Chester Fries",
    logo: "/partners/4-chester-fries.png",
    category: "Restaurant",
  },
  {
    id: 4,
    name: "Pocho",
    logo: "/partners/11-pocho cafe.png",
    category: "Restaurant",
  },
  {
    id: 5,
    name: "My Barman Kitchen",
    logo: "/partners/9-My makan kitchen.png", // ⚠️ original said "9-My makan kitchen.png" — guessing this is a typo for "barman", confirm actual filename
    category: "Restaurant",
  },
   {
    id: 6,
    name: "Big Bites",
    logo: "18-Big bites.jpg",
    category: "Restaurant",
  },
];

const trustStats = [
  {
    icon: Zap,
    value: "10K+",
    label: "Deliveries completed",
  },
  {
    icon: ShieldCheck,
    value: "30+",
    label: "Business partners",
  },
  {
    icon: Clock3,
    value: "24/7",
    label: "Delivery support",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const TrustedPartners = ({ partners = defaultPartners }) => {
  return (
    <section
      className="relative overflow-hidden bg-[#EFFFF9] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#BFEBDD]/40 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#008F68]/10 blur-3xl" />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#BFEBDD] to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#BFEBDD] bg-white/70 px-4 py-2 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008F68] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#008F68]" />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#006B4D] sm:text-xs">
              Trusted by businesses
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-balance text-4xl font-black leading-[0.98] tracking-[-0.04em] text-[#171A19] sm:text-5xl lg:text-6xl"
          >
            Trusted to move{" "}
            <span className="text-[#008F68]">what matters.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#66736E] sm:text-base sm:leading-8"
          >
            From local restaurants to growing businesses, WakaRider helps
            brands deliver faster, safer and more reliably.
          </motion.p>
        </motion.div>

        {/* Main partner card */}
     
          {/* Top glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[70%] -translate-x-1/2 rounded-full bg-[#008F68]/10 blur-3xl" />

          {/* Small label */}
          <div className="relative mb-7 flex items-center justify-center gap-3 px-5">
            <div className="h-px w-8 bg-[#BFEBDD] sm:w-16" />

            <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#66736E] sm:text-[10px]">
              Growing together
            </span>

            <div className="h-px w-8 bg-[#BFEBDD] sm:w-16" />
          </div>

          {/* First marquee */}
          <LogoMarquee partners={partners} direction="left" />

        

     

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-[1.75rem] border border-[#BFEBDD] bg-white/60 backdrop-blur-xl sm:grid-cols-3 lg:mt-8">
          {trustStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`flex items-center justify-center gap-4 px-6 py-6 sm:py-7 ${
                  index !== trustStats.length - 1
                    ? "border-b border-[#BFEBDD] sm:border-b-0 sm:border-r"
                    : ""
                }`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFFFF9] text-[#008F68]">
                  <Icon size={18} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-xl font-black tracking-tight text-[#171A19]">
                    {stat.value}
                  </p>

                  <p className="text-[10px] font-medium text-[#66736E] sm:text-xs">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom trust statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-center"
        >
          <p className="text-xs text-[#66736E]">
            Reliable deliveries.{" "}
            <span className="font-semibold text-[#006B4D]">
              Stronger businesses.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedPartners;