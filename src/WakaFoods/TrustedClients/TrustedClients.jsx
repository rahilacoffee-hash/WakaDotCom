import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import defaultClients from "./clients";
import LogoMarquee from "./LogoMarquee";

export default function TrustedClients() {
  const [clients, setClients] = useState(defaultClients);

 
  return (
    <section
      id="trusted"
      className="relative overflow-hidden bg-[#FCF3F6] py-20 sm:py-28 lg:py-36"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main glow */}
        <div className="absolute left-1/2 top-[35%] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#902141]/[0.055] blur-[130px] sm:h-[700px] sm:w-[700px]" />

        {/* Small accent glows */}
        <div className="absolute -left-32 top-20 h-[280px] w-[280px] rounded-full bg-[#902141]/[0.04] blur-[100px]" />

        <div className="absolute -right-32 bottom-10 h-[300px] w-[300px] rounded-full bg-pink-300/20 blur-[110px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(#902141 1px, transparent 1px), linear-gradient(90deg, #902141 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1500px]">
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          className="mx-auto max-w-4xl px-5 text-center sm:px-8"
        >
          {/* Eyebrow */}

          <div className="mb-5 flex items-center justify-center gap-3 sm:mb-6">
            <span className="h-px w-8 bg-[#902141]/40 sm:w-12" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#902141] sm:text-xs sm:tracking-[0.4em]">
              Trusted by food lovers
            </span>

            <span className="h-px w-8 bg-[#902141]/40 sm:w-12" />
          </div>

          {/* Heading */}

          <h2 className="text-[clamp(2.4rem,7vw,5.5rem)] font-black leading-[0.94] tracking-[-0.055em] text-[#24161B]">
            Good food brings
            <span className="block text-[#902141]">
              people together.
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[#24161B]/60 sm:mt-8 sm:text-lg sm:leading-8">
            From neighbourhood favourites to the kitchens everyone is
            talking about, WakaFoods connects hungry people with food
            worth coming back for.
          </p>
        </motion.div>

        {/* =================================================
            MARQUEES
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-14 sm:mt-20 lg:mt-24"
        >
          <LogoMarquee
            clients={clients}
            speed={32}
          />

          <div className="h-3 sm:h-5 lg:h-7" />

          <LogoMarquee
            clients={clients}
            reverse
            speed={38}
          />
        </motion.div>

        {/* =================================================
            BOTTOM TRUST
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-14 flex max-w-xl items-center justify-center px-5 sm:mt-20"
        >
          <div
            className="
              group flex items-center gap-3
              rounded-full
              border border-[#902141]/10
              bg-white/70
              px-4 py-2.5
              shadow-[0_10px_35px_rgba(144,33,65,0.06)]
              backdrop-blur-xl
              transition-all duration-300
              hover:border-[#902141]/20
              hover:shadow-[0_15px_45px_rgba(144,33,65,0.1)]
              sm:px-5 sm:py-3
            "
          >
            <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-[#902141] shadow-[0_0_0_5px_rgba(144,33,65,0.08)]" />

            <span className="text-xs font-semibold text-[#24161B]/60 sm:text-sm">
              150+ restaurants and food partners are growing with WakaFoods
            </span>

            <ArrowUpRight
              size={16}
              className="shrink-0 text-[#902141] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}