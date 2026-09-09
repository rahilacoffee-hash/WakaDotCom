import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  FiSearch,
  FiShoppingCart,
  FiCreditCard,
  FiTruck,
  FiArrowRight,
  FiMapPin,
  FiPackage,
  FiShield,
  FiClock,
} from "react-icons/fi";

/* =========================================================
   DATA
========================================================= */

let steps = [
  {
    id: 1,
    number: "01",
    label: "BROWSE",
    title: "Find what you need.",
    description:
      "Explore a growing marketplace filled with products from trusted sellers.",
    icon: FiSearch,
  },
  {
    id: 2,
    number: "02",
    label: "CHOOSE",
    title: "Pick your favourites.",
    description:
      "Check out product details, compare your options and add your favourites to your cart.",
    icon: FiShoppingCart,
  },
  {
    id: 3,
    number: "03",
    label: "CHECKOUT",
    title: "Order in a few taps.",
    description:
      "Confirm your delivery details and complete your order through a simple checkout.",
    icon: FiCreditCard,
  },
  {
    id: 4,
    number: "04",
    label: "DELIVERED",
    title: "Relax. We'll bring it.",
    description:
      "Track your order as it moves and get your purchase delivered right to your door.",
    icon: FiTruck,
  },
];

let visualContent = [
  { label: "Shopping", title: "Everything in one place.", sub: "10,000+ products" },
  { label: "Your Cart", title: "Your picks, ready to go.", sub: "3 items selected" },
  { label: "Checkout", title: "Almost there.", sub: "Secure checkout" },
  { label: "On the way", title: "Your order is moving.", sub: "Arriving today" },
];

/* =========================================================
   SMALL HEART ICON
========================================================= */

function FiHeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/* =========================================================
   STEP CARD
========================================================= */

function StepCard({ step, index, activeStep, setActiveStep }) {
  let Icon = step.icon;
  let isActive = activeStep === index;

  return (
    <motion.button
      type="button"
      onClick={() => setActiveStep(index)}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      className={`group relative w-full overflow-hidden rounded-[24px] border p-5 text-left transition-all duration-500 sm:p-6 ${
        isActive
          ? "border-[#E30613]/20 bg-white shadow-[0_20px_55px_rgba(227,6,19,0.10)]"
          : "border-[#E30613]/8 bg-white/70 hover:border-[#E30613]/15 hover:bg-white hover:shadow-[0_15px_40px_rgba(90,25,30,0.07)]"
      }`}
    >
      <motion.div
        animate={{ opacity: isActive ? 1 : 0 }}
        className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[#E30613]/10 blur-3xl"
      />

      <div className="relative flex items-start gap-4">
        <motion.div
          animate={{ scale: isActive ? 1 : 0.95 }}
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${
            isActive
              ? "bg-[#E30613] text-white shadow-[0_10px_25px_rgba(227,6,19,0.22)]"
              : "bg-[#FDE1E3] text-[#E30613]"
          }`}
        >
          <Icon size={20} />
        </motion.div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <span
              className={`text-[9px] font-bold tracking-[0.18em] transition-colors duration-300 ${
                isActive ? "text-[#E30613]" : "text-[#766B6D]"
              }`}
            >
              {step.number} · {step.label}
            </span>

            <motion.div
              animate={{ rotate: isActive ? 0 : -45, opacity: isActive ? 1 : 0.45 }}
              className={`flex h-7 w-7 items-center justify-center rounded-full ${
                isActive ? "bg-[#FDE1E3] text-[#E30613]" : "bg-[#F8F3F3] text-[#766B6D]"
              }`}
            >
              <FiArrowRight size={13} />
            </motion.div>
          </div>

          <h3 className="mt-2 text-base font-semibold tracking-[-0.02em] text-[#1B1B1B] sm:text-lg">
            {step.title}
          </h3>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 max-w-md overflow-hidden text-xs leading-5 text-[#766B6D] sm:text-sm sm:leading-6"
              >
                {step.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.button>
  );
}

/* =========================================================
   SHOPPING VISUAL
========================================================= */

function ShoppingVisual({ activeStep }) {
  let shouldReduceMotion = useReducedMotion();
  let current = visualContent[activeStep];

  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[32px] bg-[#1B1B1B] p-5 shadow-[0_30px_80px_rgba(27,27,27,0.18)] sm:p-7 lg:min-h-[590px] lg:p-8">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#E30613]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#E30613]/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,1)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
            WakaStores
          </p>

          <AnimatePresence mode="wait">
            <motion.p
              key={current.label}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="mt-1 text-sm font-medium text-white"
            >
              {current.label}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md">
          <FiShoppingCart size={15} />
        </div>
      </div>

      {/* Main visual */}
      <div className="relative z-10 mt-7">
        <div className="relative overflow-hidden rounded-[28px] bg-[#FEEBEC] p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#E30613]" />
            <div className="h-2 w-20 rounded-full bg-[#1B1B1B]/10" />
            <div className="ml-auto h-7 w-7 rounded-full bg-white" />
          </div>

          <div className="relative mt-4 flex h-[250px] items-center justify-center overflow-hidden rounded-[22px] bg-white sm:h-[285px]">
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -8, 0], rotate: [0, 1, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute bottom-1 left-1/2 h-7 w-36 -translate-x-1/2 rounded-full bg-black/10 blur-xl" />

              <div className="relative h-44 w-36 rounded-b-[18px] rounded-t-[8px] bg-[#E30613] shadow-[0_25px_45px_rgba(227,6,19,0.22)] sm:h-48 sm:w-40">
                <div className="absolute -top-8 left-1/2 h-12 w-20 -translate-x-1/2 rounded-t-full border-[5px] border-b-0 border-[#E30613]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-2xl font-black tracking-[-0.08em]">WAKA</div>
                  <div className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.25em] text-white/70">
                    STORES
                  </div>
                </div>

                <div className="absolute left-4 top-5 h-20 w-6 rotate-[20deg] rounded-full bg-white/10 blur-md" />
              </div>
            </motion.div>

            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 rounded-xl border border-black/5 bg-white/95 px-3 py-2 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-md"
            >
              <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#766B6D]">
                Marketplace
              </p>
              <p className="mt-0.5 text-xs font-bold text-[#1B1B1B]">Shop freely</p>
            </motion.div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-3 w-32 rounded-full bg-[#1B1B1B]/10" />
                <div className="mt-2 h-2 w-20 rounded-full bg-[#1B1B1B]/5" />
              </div>

              <div className="text-sm font-bold text-[#E30613]">₦40,000</div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 rounded-xl bg-[#1B1B1B] px-4 py-3 text-center text-[10px] font-bold text-white">
                Add to cart
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FDE1E3] text-[#E30613]">
                <FiHeartIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating status */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="absolute bottom-5 right-5 z-20 w-[190px] rounded-2xl border border-white/10 bg-white/95 p-3 shadow-[0_20px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:bottom-7 sm:right-7"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FDE1E3] text-[#E30613]">
              {activeStep === 0 && <FiSearch size={14} />}
              {activeStep === 1 && <FiShoppingCart size={14} />}
              {activeStep === 2 && <FiCreditCard size={14} />}
              {activeStep === 3 && <FiTruck size={14} />}
            </div>

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#766B6D]">
                {current.sub}
              </p>
              <p className="mt-0.5 text-xs font-bold text-[#1B1B1B]">{current.title}</p>
            </div>
          </div>

          {activeStep === 3 && (
            <div className="mt-3 flex items-center gap-2 border-t border-black/5 pt-3">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E30613] text-white">
                <FiMapPin size={11} />
              </div>

              <div className="flex-1">
                <div className="h-1.5 overflow-hidden rounded-full bg-[#FDE1E3]">
                  <motion.div
                    initial={{ width: "20%" }}
                    animate={{ width: "82%" }}
                    transition={{ duration: 1 }}
                    className="h-full rounded-full bg-[#E30613]"
                  />
                </div>
              </div>

              <span className="text-[9px] font-bold text-[#E30613]">82%</span>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Bottom trust pills */}
      <div className="absolute bottom-5 left-5 z-10 hidden items-center gap-2 sm:flex">
        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
          <FiShield className="text-[#E30613]" size={11} />
          <span className="text-[9px] font-semibold text-white/70">Trusted sellers</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 backdrop-blur-md">
          <FiClock className="text-[#E30613]" size={11} />
          <span className="text-[9px] font-semibold text-white/70">Fast delivery</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function HowItWorks() {
  let [activeStep, setActiveStep] = useState(0);
  let shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    let interval = setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#FEEBEC] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#E30613]/[0.055] blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-white blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(#E30613_0.7px,transparent_0.7px)] [background-size:24px_24px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E30613]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E30613]">
              Simple shopping
            </span>
          </div>

          <h2 className="text-3xl font-medium leading-[1.05] tracking-[-0.055em] text-[#1B1B1B] sm:text-4xl lg:text-5xl">
            From browsing
            <span className="text-[#E30613]"> to your doorstep.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-6 text-[#766B6D] sm:text-base sm:leading-7">
            Shopping on WakaStores is designed to be simple. Find what you
            want, place your order, and we&rsquo;ll help get it to you.
          </p>
        </motion.div>

        {/* DESKTOP LAYOUT */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="relative">
            <div className="pointer-events-none absolute bottom-8 left-[23px] top-8 hidden w-px bg-[#E30613]/10 lg:block" />

            <motion.div
              className="pointer-events-none absolute left-[22px] top-8 hidden w-[3px] rounded-full bg-[#E30613] lg:block"
              animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            <div className="relative space-y-3">
              {steps.map((step, index) => (
                <div key={step.id} className="relative lg:pl-16">
                  <motion.div
                    animate={{
                      scale: activeStep === index ? 1 : 0.7,
                      opacity: activeStep === index ? 1 : 0.35,
                    }}
                    className="absolute left-[15px] top-6 z-10 hidden h-4 w-4 items-center justify-center rounded-full bg-[#E30613] ring-4 ring-[#FEEBEC] lg:flex"
                  >
                    {activeStep === index && (
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </motion.div>

                  <StepCard
                    step={step}
                    index={index}
                    activeStep={activeStep}
                    setActiveStep={setActiveStep}
                  />
                </div>
              ))}
            </div>
          </div>

          <ShoppingVisual activeStep={activeStep} />
        </div>

        {/* MOBILE STEP PROGRESS */}
        <div className="mt-8 lg:hidden">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#766B6D]">
              Your shopping journey
            </span>
            <span className="text-[9px] font-bold text-[#E30613]">
              {String(activeStep + 1).padStart(2, "0")} /{" "}
              {String(steps.length).padStart(2, "0")}
            </span>
          </div>

          <div className="h-1 overflow-hidden rounded-full bg-[#E30613]/10">
            <motion.div
              animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full rounded-full bg-[#E30613]"
            />
          </div>
        </div>

        {/* TRUST STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-1 overflow-hidden rounded-[24px] border border-[#E30613]/10 bg-white/70 backdrop-blur-xl sm:grid-cols-3"
        >
          <div className="flex items-center gap-3 p-5 sm:border-r sm:border-[#E30613]/10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDE1E3] text-[#E30613]">
              <FiShield size={17} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1B1B1B]">Trusted sellers</p>
              <p className="mt-0.5 text-[10px] text-[#766B6D]">Shop with confidence</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[#E30613]/10 p-5 sm:border-r sm:border-t-0 sm:border-[#E30613]/10">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDE1E3] text-[#E30613]">
              <FiPackage size={17} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1B1B1B]">Easy ordering</p>
              <p className="mt-0.5 text-[10px] text-[#766B6D]">Simple from start to finish</p>
            </div>
          </div>

          <div className="flex items-center gap-3 border-t border-[#E30613]/10 p-5 sm:border-t-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FDE1E3] text-[#E30613]">
              <FiTruck size={17} />
            </div>
            <div>
              <p className="text-xs font-bold text-[#1B1B1B]">Fast delivery</p>
              <p className="mt-0.5 text-[10px] text-[#766B6D]">Delivered to your door</p>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col gap-5 rounded-[28px] bg-[#E30613] p-6 text-white shadow-[0_25px_60px_rgba(227,6,19,0.16)] sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div>
            <p className="text-lg font-semibold tracking-[-0.02em]">
              Ready to find something you love?
            </p>
            <p className="mt-1 text-xs text-white/70 sm:text-sm">
              Your next favourite product could be a few clicks away.
            </p>
          </div>

          <a
            href="#categories"
            className="group flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold text-[#E30613] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFF7F7]"
          >
            Start shopping
            <FiArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}