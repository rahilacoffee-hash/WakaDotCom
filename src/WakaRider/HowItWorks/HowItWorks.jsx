import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  ShieldCheck,
  Smartphone,
  Truck,
  UserRound,
} from "lucide-react";

const steps = [
  {
    id: 1,
    number: "01",
    label: "REQUEST",
    title: "Tell us what needs to move.",
    description:
      "Enter your pickup and destination, add your package details, and let WakaRider handle the rest.",
    icon: Package,
    color: "#008F68",
  },
  {
    id: 2,
    number: "02",
    label: "MATCH",
    title: "We find your rider.",
    description:
      "A trusted dispatch rider near your pickup location is matched to your delivery in seconds.",
    icon: UserRound,
    color: "#008F68",
  },
  {
    id: 3,
    number: "03",
    label: "TRACK",
    title: "Watch it move.",
    description:
      "Follow your package in real time from pickup to destination with live delivery updates.",
    icon: MapPin,
    color: "#008F68",
  },
  {
    id: 4,
    number: "04",
    label: "DELIVER",
    title: "Delivered. Just like that.",
    description:
      "Your package arrives safely at its destination and you get a delivery confirmation.",
    icon: CheckCircle2,
    color: "#008F68",
  },
];

const timelineVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  /*
   * Automatically move through the delivery journey.
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === steps.length ? 1 : prev + 1));
    }, 4200);

    return () => clearInterval(interval);
  }, []);

  const currentStep = steps[activeStep - 1];
  const CurrentIcon = currentStep.icon;

  return (
    <section
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main green glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#EFFFF9] blur-3xl" />

        {/* Side glow */}
        <div className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-[#BFEBDD]/30 blur-3xl" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#008F68 1px, transparent 1px), linear-gradient(90deg, #008F68 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#008F68]/15 bg-[#EFFFF9] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#008F68] opacity-50" />
              <span className="relative h-2 w-2 rounded-full bg-[#008F68]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#006B4D]">
              How WakaRider works
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-black tracking-[-0.045em] text-[#171A19] sm:text-5xl lg:text-[60px] lg:leading-[1.02]">
            From pickup to
            <span className="block text-[#008F68]">
              delivered.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#66736E] sm:text-lg">
            Sending something shouldn't feel complicated. WakaRider keeps
            every step simple, transparent, and completely trackable.
          </p>
        </motion.div>

        {/* =====================================================
            MAIN JOURNEY
        ====================================================== */}
        <div className="mt-16 lg:mt-20">
          {/* Desktop timeline */}
          <div className="relative hidden lg:block">
            {/* Background line */}
            <div className="absolute left-[12.5%] right-[12.5%] top-[29px] h-px bg-[#DDEFE8]" />

            {/* Animated progress */}
            <motion.div
              className="absolute left-[12.5%] top-[29px] h-px origin-left bg-[#008F68]"
              animate={{
                width: `${((activeStep - 1) / (steps.length - 1)) * 75}%`,
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
              }}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step) => {
                const Icon = step.icon;
                const isActive = activeStep === step.id;
                const isComplete = activeStep > step.id;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(step.id)}
                    className="group text-left outline-none"
                  >
                    {/* Timeline node */}
                    <div className="relative z-10 flex justify-center">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.12 : 1,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className={[
                          "flex h-[58px] w-[58px] items-center justify-center rounded-full border-4 transition-all duration-300",
                          isActive
                            ? "border-[#BFEBDD] bg-[#008F68] text-white shadow-[0_10px_30px_rgba(0,143,104,0.25)]"
                            : isComplete
                            ? "border-[#EFFFF9] bg-[#008F68] text-white"
                            : "border-[#EFFFF9] bg-white text-[#66736E] shadow-sm",
                        ].join(" ")}
                      >
                        {isComplete ? (
                          <CheckCircle2
                            className="h-5 w-5"
                            strokeWidth={2.5}
                          />
                        ) : (
                          <Icon
                            className="h-5 w-5"
                            strokeWidth={1.9}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Step content */}
                    <div className="mt-7 text-center">
                      <span
                        className={[
                          "text-[10px] font-black tracking-[0.2em] transition-colors",
                          isActive
                            ? "text-[#008F68]"
                            : "text-[#A2B0AB]",
                        ].join(" ")}
                      >
                        {step.number} / {step.label}
                      </span>

                      <h3
                        className={[
                          "mt-3 text-xl font-bold tracking-tight transition-colors",
                          isActive
                            ? "text-[#171A19]"
                            : "text-[#66736E]",
                        ].join(" ")}
                      >
                        {step.title}
                      </h3>

                      <p className="mx-auto mt-3 max-w-[245px] text-sm leading-6 text-[#7A8581]">
                        {step.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================================
              MOBILE / TABLET STEPS
          ====================================================== */}
          <div className="space-y-4 lg:hidden">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="w-full text-left"
                >
                  <motion.div
                    layout
                    className={[
                      "rounded-3xl border p-5 transition-all duration-300",
                      isActive
                        ? "border-[#008F68]/20 bg-[#EFFFF9] shadow-[0_15px_45px_rgba(0,107,77,0.08)]"
                        : "border-[#008F68]/10 bg-white",
                    ].join(" ")}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={[
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all",
                          isActive
                            ? "bg-[#008F68] text-white"
                            : "bg-[#EFFFF9] text-[#008F68]",
                        ].join(" ")}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[10px] font-black tracking-[0.18em] text-[#008F68]">
                            {step.number} / {step.label}
                          </span>

                          <ArrowUpRight
                            className={[
                              "h-4 w-4 transition-all",
                              isActive
                                ? "text-[#008F68]"
                                : "text-[#B3C0BB]",
                            ].join(" ")}
                          />
                        </div>

                        <h3 className="mt-2 text-lg font-bold text-[#171A19]">
                          {step.title}
                        </h3>

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
                              className="mt-2 overflow-hidden text-sm leading-6 text-[#66736E]"
                            >
                              {step.description}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            LIVE DELIVERY EXPERIENCE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-16 overflow-hidden rounded-[2rem] bg-[#171A19] shadow-[0_30px_90px_rgba(0,0,0,0.15)] sm:mt-20 lg:mt-24"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left */}
            <div className="relative overflow-hidden p-7 sm:p-10 lg:p-12">
              {/* Glow */}
              <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#008F68]/25 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#BFEBDD]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#008F68]" />
                  Your delivery, in motion
                </span>

                <h3 className="mt-6 max-w-md text-3xl font-black leading-tight tracking-[-0.035em] text-white sm:text-4xl">
                  You’re never left wondering
                  <span className="text-[#52C99E]"> where your package is.</span>
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-base">
                  Every delivery comes with clear status updates, rider
                  information, and an estimated arrival time.
                </p>

                {/* Mini features */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <MapPin className="h-5 w-5 text-[#52C99E]" />

                    <p className="mt-3 text-sm font-bold text-white">
                      Live tracking
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Know where it is
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Clock3 className="h-5 w-5 text-[#52C99E]" />

                    <p className="mt-3 text-sm font-bold text-white">
                      Smart ETA
                    </p>

                    <p className="mt-1 text-xs text-white/40">
                      Know when it arrives
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Tracking UI */}
            <div className="relative min-h-[420px] overflow-hidden bg-[#EFFFF9] p-6 sm:p-8">
              {/* Map background */}
              <div className="absolute inset-0 opacity-40">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 700 500"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M-50 130 C100 40 170 190 280 120 S480 50 750 140"
                    fill="none"
                    stroke="#B7DCD0"
                    strokeWidth="2"
                  />

                  <path
                    d="M-50 320 C120 240 180 390 320 300 S500 230 750 350"
                    fill="none"
                    stroke="#B7DCD0"
                    strokeWidth="2"
                  />

                  <path
                    d="M150 -20 C110 100 260 150 220 250 S190 430 280 540"
                    fill="none"
                    stroke="#C9E8DE"
                    strokeWidth="2"
                  />

                  <path
                    d="M500 -20 C430 100 570 160 500 280 S470 430 570 540"
                    fill="none"
                    stroke="#C9E8DE"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Route */}
              <div className="absolute left-[17%] right-[17%] top-1/2 h-1 -translate-y-1/2">
                <div className="absolute inset-0 rounded-full bg-[#BFEBDD]" />

                <motion.div
                  animate={{
                    width:
                      activeStep === 1
                        ? "12%"
                        : activeStep === 2
                        ? "38%"
                        : activeStep === 3
                        ? "72%"
                        : "100%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-0 h-full rounded-full bg-[#008F68]"
                />

                {/* Rider marker */}
                <motion.div
                  animate={{
                    left:
                      activeStep === 1
                        ? "10%"
                        : activeStep === 2
                        ? "35%"
                        : activeStep === 3
                        ? "69%"
                        : "95%",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border-4 border-[#EFFFF9] bg-[#008F68] text-white shadow-[0_10px_25px_rgba(0,143,104,0.3)]"
                >
                  <Truck className="h-5 w-5" />
                </motion.div>
              </div>

              {/* Pickup */}
              <div className="absolute left-[9%] top-1/2 -translate-y-1/2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#EFFFF9] bg-white text-[#008F68] shadow-lg">
                  <Package className="h-4 w-4" />
                </div>

                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-center">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#66736E]">
                    Pickup
                  </p>
                </div>
              </div>

              {/* Destination */}
              <div className="absolute right-[9%] top-1/2 -translate-y-1/2">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#EFFFF9] bg-white text-[#008F68] shadow-lg">
                  <MapPin className="h-4 w-4" />
                </div>

                <div className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap text-center">
                  <p className="text-[9px] font-black uppercase tracking-[0.15em] text-[#66736E]">
                    Destination
                  </p>
                </div>
              </div>

              {/* Status card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="absolute left-6 right-6 top-6 sm:left-8 sm:right-auto sm:w-[270px]"
                >
                  <div className="rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_20px_50px_rgba(0,107,77,0.12)] backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EFFFF9] text-[#008F68]">
                        <CurrentIcon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#008F68]">
                          {currentStep.label}
                        </p>

                        <p className="mt-0.5 text-sm font-bold text-[#171A19]">
                          {currentStep.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* ETA */}
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8">
                <div className="rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-[#008F68]" />

                    <div>
                      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#66736E]">
                        Estimated arrival
                      </p>

                      <p className="text-sm font-black text-[#171A19]">
                        18–24 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating location dots */}
              <div className="absolute left-[38%] top-[28%] h-3 w-3 rounded-full bg-[#008F68]/30">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#008F68]/20" />
              </div>

              <div className="absolute right-[30%] bottom-[25%] h-2.5 w-2.5 rounded-full bg-[#008F68]/25" />
            </div>
          </div>
        </motion.div>

     
      </div>
    </section>
  );
};

export default HowItWorks;
