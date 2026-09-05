import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiEdit3,
  FiLink,
  FiBriefcase,
  FiStar,
  FiMapPin,
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiClock,
  FiChevronRight,
  FiZap,
  FiCheck,
} from "react-icons/fi";

/* =========================================================
   DATA
========================================================= */

const steps = [
  {
    id: "01",
    title: "Tell us what needs fixing",
    shortTitle: "Describe the issue",
    description:
      "Tell us what went wrong, where it happened, and when you need help. It takes less than a minute.",
    icon: FiEdit3,
    color: "#1769C2",
    eyebrow: "START HERE",
    stat: "< 1 min",
    statLabel: "to post a job",
  },
  {
    id: "02",
    title: "Meet the right fixer",
    shortTitle: "Get matched",
    description:
      "SmartFixer finds verified professionals near you based on your job, location, availability and ratings.",
    icon: FiLink,
    color: "#1769C2",
    eyebrow: "SMART MATCH",
    stat: "4.9★",
    statLabel: "average rating",
  },
  {
    id: "03",
    title: "Get it fixed. Rate it.",
    shortTitle: "Job done",
    description:
      "Your fixer gets the job done, you approve the result, and your rating helps make the community better.",
    icon: FiBriefcase,
    color: "#1769C2",
    eyebrow: "ALL DONE",
    stat: "100%",
    statLabel: "peace of mind",
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const ease = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease,
    },
  },
};

/* =========================================================
   SCREEN 01
========================================================= */

const Screen01 = () => {
  return (
    <div className="flex h-full flex-col bg-[#0B0D10] px-5 pb-6 pt-11 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-bold tracking-[0.2em] text-white/30">
            SMARTFIXER
          </p>

          <h3 className="mt-1 text-[17px] font-bold tracking-tight">
            Post a job
          </h3>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.04]">
          <FiShield className="text-sm text-[#5BA5F5]" />
        </div>
      </div>

      {/* Progress */}
      <div className="mt-5 flex gap-1.5">
        <div className="h-1 flex-1 rounded-full bg-[#1769C2]" />
        <div className="h-1 flex-1 rounded-full bg-white/10" />
        <div className="h-1 flex-1 rounded-full bg-white/10" />
      </div>

      {/* Main icon */}
      <div className="mt-7 flex justify-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.55,
            ease,
          }}
          className="
            relative
            flex h-[74px] w-[74px]
            items-center justify-center
            rounded-[24px]
            border border-[#1769C2]/25
            bg-[#1769C2]/10
          "
        >
          <div className="absolute inset-2 rounded-[18px] bg-[#1769C2]/10 blur-xl" />

          <FiEdit3 className="relative z-10 text-[27px] text-[#5BA5F5]" />
        </motion.div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/30">
          What needs fixing?
        </p>

        <p className="mt-1 text-[12px] text-white/55">
          Give us a few details
        </p>
      </div>

      {/* Fields */}
      <div className="mt-5 space-y-2.5">
        {[
          ["Issue", "Leaking Kitchen Tap"],
          ["Location", "Wuse 2, Abuja"],
          ["When", "Today · Afternoon"],
        ].map(([label, value], index) => (
          <motion.div
            key={label}
            initial={{
              opacity: 0,
              x: -12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15 + index * 0.1,
              duration: 0.4,
            }}
            className="
              rounded-[16px]
              border border-white/[0.07]
              bg-white/[0.035]
              px-4 py-3
            "
          >
            <p className="text-[8px] font-bold uppercase tracking-[0.15em] text-white/25">
              {label}
            </p>

            <p className="mt-1 text-[11px] font-medium text-white/85">
              {value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.5,
        }}
        className="
          mt-4
          flex items-center justify-center gap-2
          rounded-[16px]
          bg-[#1769C2]
          py-3.5
          text-[11px]
          font-bold
          shadow-[0_15px_40px_rgba(23,105,194,0.25)]
        "
      >
        Find a Fixer
        <FiArrowRight />
      </motion.div>

      <div className="mt-auto flex items-center justify-center gap-1.5 pt-5">
        <FiShield className="text-[9px] text-white/20" />

        <span className="text-[8px] text-white/25">
          Your information stays private
        </span>
      </div>
    </div>
  );
};

/* =========================================================
   SCREEN 02
========================================================= */

const Screen02 = () => {
  const fixers = [
    {
      name: "Tunde Plumbing Co.",
      rating: "4.9",
      distance: "0.8 km",
      featured: true,
    },
    {
      name: "Ifeoma Repairs",
      rating: "4.8",
      distance: "1.2 km",
    },
    {
      name: "Bright Fix Ltd",
      rating: "4.7",
      distance: "2.0 km",
    },
  ];

  return (
    <div className="flex h-full flex-col bg-[#0B0D10] px-5 pb-6 pt-11 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] font-bold tracking-[0.2em] text-white/30">
            SMARTFIXER
          </p>

          <h3 className="mt-1 text-[17px] font-bold tracking-tight">
            Matches nearby
          </h3>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-[#1769C2]/10 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />

          <span className="text-[8px] font-bold text-[#5BA5F5]">
            3 found
          </span>
        </div>
      </div>

      {/* Location */}
      <div
        className="
          mt-5
          flex items-center gap-2
          rounded-[14px]
          border border-white/[0.06]
          bg-white/[0.03]
          px-3 py-2.5
        "
      >
        <FiMapPin className="text-xs text-[#5BA5F5]" />

        <span className="text-[9px] text-white/45">
          Wuse 2, Abuja
        </span>

        <span className="ml-auto text-[8px] font-semibold text-white/25">
          5 km radius
        </span>
      </div>

      {/* Fixers */}
      <div className="mt-4 space-y-2.5">
        {fixers.map((fixer, index) => (
          <motion.div
            key={fixer.name}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.12 + index * 0.1,
              duration: 0.4,
            }}
            className={`
              relative
              overflow-hidden
              rounded-[18px]
              border
              p-3.5
              ${
                fixer.featured
                  ? "border-[#1769C2]/25 bg-[#1769C2]/10"
                  : "border-white/[0.06] bg-white/[0.025]"
              }
            `}
          >
            {fixer.featured && (
              <div className="absolute right-0 top-0 rounded-bl-xl bg-[#1769C2] px-2.5 py-1">
                <span className="text-[7px] font-bold uppercase tracking-wider text-white">
                  Best match
                </span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-10 w-10 shrink-0
                  items-center justify-center
                  rounded-full
                  bg-white/[0.08]
                  text-sm font-bold
                "
              >
                {fixer.name.charAt(0)}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-white">
                  {fixer.name}
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[8px] text-white/40">
                    <FiStar className="fill-yellow-400 text-yellow-400" />
                    {fixer.rating}
                  </span>

                  <span className="text-white/15">•</span>

                  <span className="text-[8px] text-white/35">
                    {fixer.distance}
                  </span>
                </div>
              </div>

              {fixer.featured && (
                <FiCheckCircle className="shrink-0 text-sm text-green-400" />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-auto rounded-[18px] border border-white/[0.06] bg-white/[0.025] p-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-400/10">
            <FiClock className="text-sm text-green-400" />
          </div>

          <div>
            <p className="text-[9px] font-bold text-white/70">
              Fast response
            </p>

            <p className="mt-0.5 text-[8px] text-white/30">
              Average response under 5 mins
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

/* =========================================================
   SCREEN 03
========================================================= */

const Screen03 = () => {
  return (
    <div className="flex h-full flex-col items-center bg-[#0B0D10] px-5 pb-6 pt-11 text-white">
      {/* Header */}
      <div className="w-full">
        <p className="text-[8px] font-bold tracking-[0.2em] text-white/30">
          SMARTFIXER
        </p>

        <h3 className="mt-1 text-[17px] font-bold tracking-tight">
          Job complete
        </h3>
      </div>

      {/* Success */}
      <motion.div
        initial={{
          scale: 0.6,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 180,
        }}
        className="
          relative
          mt-12
          flex h-[92px] w-[92px]
          items-center justify-center
          rounded-full
          border border-green-400/20
          bg-green-400/10
        "
      >
        <div className="absolute inset-0 rounded-full bg-green-400/10 blur-2xl" />

        <FiCheck
          className="relative text-[38px] text-green-400"
          strokeWidth={2.5}
        />
      </motion.div>

      <div className="mt-6 text-center">
        <h4 className="text-xl font-bold">
          Nice one. It's fixed.
        </h4>

        <p className="mt-1.5 text-[9px] text-white/35">
          Tunde Plumbing Co. · Today
        </p>
      </div>

      {/* Rating */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        className="mt-7 text-center"
      >
        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-white/25">
          How was your experience?
        </p>

        <div className="mt-3 flex gap-2">
          {[0, 1, 2, 3, 4].map((star) => (
            <FiStar
              key={star}
              className="fill-yellow-400 text-yellow-400"
              size={19}
            />
          ))}
        </div>
      </motion.div>

      {/* Review */}
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.45,
        }}
        className="
          mt-6
          w-full
          rounded-[18px]
          border border-white/[0.06]
          bg-white/[0.03]
          p-4
        "
      >
        <p className="text-[10px] leading-5 text-white/65">
          “Fast, professional, and fixed it right the first time.”
        </p>
      </motion.div>

      {/* CTA */}
      <div
        className="
          mt-auto
          w-full
          rounded-[16px]
          bg-[#1769C2]
          py-3.5
          text-center
          text-[10px]
          font-bold
          shadow-[0_15px_40px_rgba(23,105,194,0.25)]
        "
      >
        Book Again
      </div>
    </div>
  );
};

const screens = [Screen01, Screen02, Screen03];

/* =========================================================
   MOBILE TIMELINE ITEM
========================================================= */

const MobileTimelineItem = ({
  step,
  index,
  active,
  setActive,
}) => {
  const Icon = step.icon;
  const isActive = active === index;
  const isLast = index === steps.length - 1;

  return (
    <div className="relative flex gap-4">
      {/* Timeline rail */}
      <div className="relative flex w-12 shrink-0 justify-center">
        {/* Connecting line */}
        {!isLast && (
          <div
            className="
              absolute
              left-1/2
              top-12
              h-[calc(100%+12px)]
              w-px
              -translate-x-1/2
              bg-[#1769C2]/15
            "
          />
        )}

        {/* Active connecting line */}
        {!isLast && isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "calc(100% + 12px)" }}
            transition={{
              duration: 0.5,
              ease,
            }}
            className="
              absolute
              left-1/2
              top-12
              z-10
              w-px
              -translate-x-1/2
              origin-top
              bg-[#1769C2]
            "
          />
        )}

        {/* Node */}
        <motion.button
          type="button"
          onClick={() => setActive(index)}
          animate={{
            scale: isActive ? 1 : 0.94,
          }}
          whileTap={{
            scale: 0.88,
          }}
          className={`
            relative
            z-20
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-[17px]
            border
            transition-all
            duration-500
            ${
              isActive
                ? "border-[#1769C2] bg-[#1769C2] text-white shadow-[0_10px_30px_rgba(23,105,194,0.25)]"
                : "border-[#1769C2]/10 bg-white text-[#1769C2] shadow-sm"
            }
          `}
          aria-label={`View step ${step.id}`}
        >
          <Icon className="text-lg" />
        </motion.button>
      </div>

      {/* Content */}
      <motion.button
        type="button"
        onClick={() => setActive(index)}
        initial={{
          opacity: 0,
          x: 15,
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
          delay: index * 0.08,
          duration: 0.6,
          ease,
        }}
        className={`
          mb-4
          min-w-0
          flex-1
          rounded-[24px]
          border
          p-5
          text-left
          transition-all
          duration-500
          ${
            isActive
              ? "border-[#1769C2]/15 bg-white shadow-[0_20px_55px_rgba(23,105,194,0.10)]"
              : "border-black/[0.045] bg-white/55"
          }
        `}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p
              className={`
                text-[9px]
                font-black
                tracking-[0.2em]
                transition-colors
                duration-300
                ${
                  isActive
                    ? "text-[#1769C2]"
                    : "text-black/20"
                }
              `}
            >
              {step.eyebrow}
            </p>

            <h3 className="mt-1 text-[16px] font-bold leading-snug text-[#111] sm:text-lg">
              {step.title}
            </h3>
          </div>

          <motion.div
            animate={{
              x: isActive ? 0 : -3,
              rotate: isActive ? 0 : -45,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`
              mt-1
              flex
              h-7
              w-7
              shrink-0
              items-center
              justify-center
              rounded-full
              ${
                isActive
                  ? "bg-[#EEF6FF] text-[#1769C2]"
                  : "bg-black/[0.025] text-black/20"
              }
            `}
          >
            <FiChevronRight size={14} />
          </motion.div>
        </div>

        {/* Expandable content */}
        <AnimatePresence initial={false}>
          {isActive && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-[13px] leading-6 text-black/45 sm:text-sm">
                {step.description}
              </p>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-[#EEF6FF] px-3 py-1.5 text-[9px] font-bold text-[#1769C2]">
                  {step.stat}
                </span>

                <span className="text-[9px] font-medium text-black/30">
                  {step.statLabel}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Step indicator */}
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`
              h-1
              rounded-full
              transition-all
              duration-500
              ${
                isActive
                  ? "w-8 bg-[#1769C2]"
                  : "w-4 bg-black/10"
              }
            `}
          />

          <span className="text-[9px] font-bold tracking-wider text-black/20">
            STEP {step.id}
          </span>
        </div>
      </motion.button>
    </div>
  );
};

/* =========================================================
   MAIN
========================================================= */

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* =======================================================
     AUTO ROTATE
  ======================================================== */

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const ActiveScreen = screens[active];

  return (
    <section
      id="get-started"
      className="
        relative
        overflow-hidden
        bg-[#F4F8FF]
        py-20
        sm:py-24
        lg:py-32
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Top glow */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-40
            -top-48
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#CFE3FF]/70
            blur-[110px]
          "
        />

        {/* Bottom glow */}
        <motion.div
          animate={{
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-56
            -left-40
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#1769C2]/10
            blur-[110px]
          "
        />

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.022]
            [background-image:linear-gradient(#1769C2_1px,transparent_1px),linear-gradient(90deg,#1769C2_1px,transparent_1px)]
            [background-size:72px_72px]
          "
        />
      </div>

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
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
              bg-white/70
              px-4
              py-2
              shadow-[0_8px_30px_rgba(23,105,194,0.05)]
              backdrop-blur-md
            "
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-[#1769C2]/30" />

              <span className="relative h-2 w-2 rounded-full bg-[#1769C2]" />
            </span>

            <span className="text-xs font-bold text-[#1769C2]">
              How SmartFixer works
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-6
              max-w-3xl
              text-[clamp(2.5rem,6vw,4.8rem)]
              font-black
              leading-[0.98]
              tracking-[-0.055em]
              text-[#111]
            "
          >
            From “something's broken”
            <span className="block text-[#1769C2]">
              to “sorted.”
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-sm
              leading-7
              text-black/45
              sm:text-base
            "
          >
            No chasing strangers. No guesswork. Just tell us what
            you need and SmartFixer takes care of the rest.
          </p>
        </motion.div>

        {/* =====================================================
            MOBILE TIMELINE
        ====================================================== */}

        <div className="mt-10 lg:hidden">
          <div className="relative">
            {steps.map((step, index) => (
              <MobileTimelineItem
                key={step.id}
                step={step}
                index={index}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
        </div>

        {/* =====================================================
            DESKTOP EXPERIENCE
        ====================================================== */}

        <div className="mt-16 hidden items-center gap-16 lg:grid lg:grid-cols-[0.92fr_0.78fr] xl:gap-24">
          {/* ===================================================
              LEFT TIMELINE
          ==================================================== */}

          <div className="relative">
            {/* Connecting line */}
            <div
              className="
                absolute
                left-[31px]
                top-8
                bottom-8
                w-px
                bg-gradient-to-b
                from-[#1769C2]/25
                via-[#1769C2]/15
                to-transparent
              "
            />

            <div className="space-y-3">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = active === index;

                return (
                  <motion.button
                    key={step.id}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onClick={() => setActive(index)}
                    initial={{
                      opacity: 0,
                      x: -30,
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
                      delay: index * 0.1,
                      duration: 0.6,
                      ease,
                    }}
                    whileHover={{
                      x: 5,
                    }}
                    className={`
                      group
                      relative
                      w-full
                      rounded-[28px]
                      border
                      p-6
                      text-left
                      transition-all
                      duration-500
                      ${
                        isActive
                          ? "border-[#1769C2]/15 bg-white shadow-[0_25px_70px_rgba(23,105,194,0.10)]"
                          : "border-black/[0.045] bg-white/50 hover:bg-white hover:shadow-[0_15px_50px_rgba(23,105,194,0.06)]"
                      }
                    `}
                  >
                    <div className="flex items-start gap-5">
                      {/* Number */}
                      <div
                        className={`
                          relative
                          z-20
                          flex
                          h-[62px]
                          w-[62px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-[20px]
                          border
                          transition-all
                          duration-500
                          ${
                            isActive
                              ? "border-[#1769C2] bg-[#1769C2] text-white shadow-[0_12px_30px_rgba(23,105,194,0.22)]"
                              : "border-black/[0.06] bg-[#F4F8FF] text-[#1769C2]"
                          }
                        `}
                      >
                        <Icon className="text-xl" />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1 pt-0.5">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p
                              className={`
                                text-[9px]
                                font-black
                                tracking-[0.2em]
                                ${
                                  isActive
                                    ? "text-[#1769C2]"
                                    : "text-black/20"
                                }
                              `}
                            >
                              {step.eyebrow}
                            </p>

                            <h3 className="mt-1 text-lg font-bold text-[#111] xl:text-xl">
                              {step.title}
                            </h3>
                          </div>

                          <motion.div
                            animate={{
                              x: isActive ? 0 : -5,
                              opacity: isActive ? 1 : 0,
                            }}
                            className="shrink-0"
                          >
                            <FiArrowRight className="text-[#1769C2]" />
                          </motion.div>
                        </div>

                        {/* Description */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              initial={{
                                opacity: 0,
                                height: 0,
                              }}
                              animate={{
                                opacity: 1,
                                height: "auto",
                              }}
                              exit={{
                                opacity: 0,
                                height: 0,
                              }}
                              transition={{
                                duration: 0.35,
                                ease: "easeOut",
                              }}
                              className="
                                mt-3
                                max-w-xl
                                overflow-hidden
                                text-sm
                                leading-6
                                text-black/45
                              "
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>

                        {/* Stat */}
                        {isActive && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              y: 5,
                            }}
                            animate={{
                              opacity: 1,
                              y: 0,
                            }}
                            className="mt-4 flex items-center gap-3"
                          >
                            <span className="rounded-full bg-[#EEF6FF] px-3 py-1.5 text-[9px] font-bold text-[#1769C2]">
                              {step.stat}
                            </span>

                            <span className="text-[9px] font-medium text-black/30">
                              {step.statLabel}
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ===================================================
              RIGHT — APP PREVIEW
          ==================================================== */}

          <div
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative flex justify-center"
          >
            {/* Ambient glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                h-[330px]
                w-[330px]
                rounded-full
                bg-[#1769C2]/20
                blur-[100px]
              "
            />

            {/* Floating top label */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                -right-5
                top-14
                z-30
                flex
                items-center
                gap-2
                rounded-full
                border border-white/80
                bg-white/90
                px-3.5
                py-2.5
                shadow-[0_15px_45px_rgba(23,105,194,0.12)]
                backdrop-blur-xl
              "
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-400/10">
                <FiCheckCircle className="text-xs text-green-500" />
              </span>

              <div>
                <p className="text-[9px] font-bold text-black/70">
                  Verified professionals
                </p>

                <p className="text-[7px] text-black/30">
                  Always checked
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.9,
                ease,
              }}
              className="relative"
            >
              <div
                className="
                  relative
                  h-[620px]
                  w-[315px]
                  overflow-hidden
                  rounded-[50px]
                  border-[7px]
                  border-[#050505]
                  bg-[#050505]
                  shadow-[0_50px_110px_rgba(0,0,0,0.30)]
                "
              >
                {/* Outer highlight */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    z-[80]
                    rounded-[43px]
                    border
                    border-white/[0.08]
                  "
                />

                {/* Notch */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    z-[90]
                    flex
                    h-[28px]
                    w-[110px]
                    -translate-x-1/2
                    items-center
                    justify-center
                    gap-2
                    rounded-b-[20px]
                    bg-black
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                  <span className="h-1 w-10 rounded-full bg-white/10" />
                </div>

                {/* Screen */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{
                      opacity: 0,
                      scale: 0.97,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.97,
                      y: -15,
                    }}
                    transition={{
                      duration: 0.4,
                      ease,
                    }}
                    className="h-full w-full"
                  >
                    <ActiveScreen />
                  </motion.div>
                </AnimatePresence>

                {/* Home indicator */}
                <div
                  className="
                    absolute
                    bottom-3
                    left-1/2
                    z-[100]
                    h-1
                    w-20
                    -translate-x-1/2
                    rounded-full
                    bg-white/20
                  "
                />
              </div>

              {/* Step indicators */}
              <div className="mt-6 flex items-center justify-center gap-2.5">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`View ${step.title}`}
                    className="group flex items-center gap-2"
                  >
                    <span
                      className={`
                        block
                        h-1.5
                        rounded-full
                        transition-all
                        duration-500
                        ${
                          active === index
                            ? "w-9 bg-[#1769C2]"
                            : "w-1.5 bg-black/15 group-hover:bg-black/30"
                        }
                      `}
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            MOBILE SUMMARY
        ====================================================== */}

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
          className="
            mt-6
            rounded-[26px]
            border
            border-[#1769C2]/10
            bg-[#EAF4FF]/70
            p-5
            lg:hidden
          "
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-[#1769C2] text-white">
              <FiZap className="text-sm" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#111]">
                Simple from start to finish.
              </p>

              <p className="mt-0.5 text-[11px] leading-5 text-black/40">
                One platform. Verified fixers. No unnecessary stress.
              </p>
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM TRUST
        ====================================================== */}

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
            delay: 0.1,
          }}
          className="
            mt-14
            flex
            flex-wrap
            items-center
            justify-center
            gap-x-8
            gap-y-4
            border-t
            border-black/[0.06]
            pt-7
            lg:mt-20
          "
        >
          {[
            {
              icon: FiShield,
              text: "Verified professionals",
            },
            {
              icon: FiClock,
              text: "Fast response",
            },
            {
              icon: FiCheckCircle,
              text: "Transparent process",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.text}
                className="
                  flex
                  items-center
                  gap-2
                  text-[10px]
                  font-semibold
                  text-black/35
                  sm:text-xs
                "
              >
                <Icon className="text-[#1769C2]" />

                {item.text}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;