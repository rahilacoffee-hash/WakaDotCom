import { motion } from "framer-motion";
import {
  HiCheck,
  HiShieldCheck,
  HiCurrencyDollar,
  HiSparkles,
} from "react-icons/hi2";

const reasons = [
  {
    number: "01",
    title: "Verified Fixers",
    description:
      "Every tradesperson is identity-checked before they're allowed on the platform.",
    icon: HiShieldCheck,
  },
  {
    number: "02",
    title: "Warranty Option",
    description:
      "Choose WakaDotCom. Handles It for end-to-end management with a warranty.",
    icon: HiCheck,
  },
  {
    number: "03",
    title: "Transparent Pricing",
    description:
      "Agree the job and price upfront — no surprises after the work starts.",
    icon: HiCurrencyDollar,
  },
  {
    number: "04",
    title: "Assured Premium Services",
    description:
      "Premium users have premium benefits as WakaDotCom sends a team that inspects and ensures all services were handled properly.",
    icon: HiSparkles,
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

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="
        relative
        overflow-hidden
        bg-[#F5F9FD]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#1769C2]/[0.05]
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#1769C2]/[0.04]
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#1769C2]/10
              bg-[#E5F1FC]
              px-5
              py-2.5
              text-sm
              font-medium
              text-[#1769C2]
              shadow-sm
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#1769C2]" />

            Why Choose Us
          </div>

          {/* Heading */}

          <h2
            className="
              mt-8
              text-[42px]
              font-semibold
              leading-[1.05]
              tracking-[-0.045em]
              text-[#171717]

              sm:text-5xl
              md:text-6xl
              lg:text-[68px]
            "
          >
            Everything home repairs
            <br className="hidden sm:block" />

            <span className="text-[#1769C2]">
              {" "}should be done right.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-[#5F6873]
              sm:text-lg
            "
          >
            From finding the right professional to getting the job
            completed, SmartFixer keeps every step reliable,
            transparent, and stress-free.
          </p>
        </motion.div>

        {/* =========================================
            CARDS
        ========================================= */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            mt-14
            grid
            gap-5
            sm:mt-16
            md:grid-cols-2
            lg:mt-20
            lg:gap-6
          "
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <motion.div
                key={reason.number}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-[#DCE8F3]
                  bg-white
                  p-7
                  shadow-[0_10px_40px_rgba(23,105,194,0.05)]
                  transition-all
                  duration-500
                  hover:border-[#1769C2]/20
                  hover:shadow-[0_25px_60px_rgba(23,105,194,0.12)]
                  sm:p-8
                  lg:p-9
                "
              >
                {/* Hover glow */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-48
                    w-48
                    rounded-full
                    bg-[#1769C2]/[0.06]
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Top row */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#1769C2]
                      text-white
                      shadow-[0_10px_25px_rgba(23,105,194,0.22)]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:shadow-[0_15px_35px_rgba(23,105,194,0.3)]
                    "
                  >
                    <Icon className="text-2xl" />
                  </div>

                  {/* Number */}

                  <span
                    className="
                      text-sm
                      font-semibold
                      tracking-widest
                      text-[#1769C2]/35
                    "
                  >
                    {reason.number}
                  </span>
                </div>

                {/* Content */}

                <div className="relative z-10 mt-8">

                  <h3
                    className="
                      text-2xl
                      font-semibold
                      tracking-[-0.025em]
                      text-[#171717]
                      transition-colors
                      duration-300
                      group-hover:text-[#1769C2]
                      sm:text-[26px]
                    "
                  >
                    {reason.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      max-w-xl
                      text-[15px]
                      leading-6
                      text-[#68727E]
                      sm:text-base
                      sm:leading-7
                    "
                  >
                    {reason.description}
                  </p>
                </div>

                {/* Bottom accent */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[3px]
                    w-0
                    bg-[#1769C2]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}