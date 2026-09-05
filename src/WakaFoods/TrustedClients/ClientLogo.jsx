import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ClientLogo({ client }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group relative
        flex h-[108px] w-[185px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-[22px]
        border border-black/[0.055]
        bg-white/75
        px-5
        shadow-[0_10px_35px_rgba(36,22,27,0.055)]
        backdrop-blur-xl
        transition-all duration-500

        hover:border-[#902141]/15
        hover:bg-white
        hover:shadow-[0_20px_55px_rgba(144,33,65,0.11)]

        sm:h-[125px]
        sm:w-[220px]
        sm:rounded-[26px]
        sm:px-6

        lg:h-[140px]
        lg:w-[250px]
        lg:rounded-[30px]
        lg:px-8
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================== */}

      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-24 w-24
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#902141]/0
          blur-3xl
          transition-all duration-700
          group-hover:bg-[#902141]/10
          group-hover:scale-150
          sm:h-32 sm:w-32
          lg:h-36 lg:w-36
        "
      />

      {/* =================================================
          TOP CORNER
      ================================================== */}

      <div
        className="
          pointer-events-none absolute
          -right-8 -top-8
          h-20 w-20
          rounded-full
          border border-[#902141]/[0.04]
          bg-[#902141]/[0.025]
          transition-transform duration-700
          group-hover:scale-150
        "
      />

      {/* =================================================
          LOGO
      ================================================== */}

      <div className="relative z-10 flex flex-col items-center justify-center">
        <img
          src={client.logo}
          alt={client.name}
          className="
            max-h-10
            max-w-[125px]
            object-contain
            grayscale
            opacity-55
            transition-all
            duration-500

            group-hover:scale-105
            group-hover:grayscale-0
            group-hover:opacity-100

            sm:max-h-12
            sm:max-w-[155px]

            lg:max-h-14
            lg:max-w-[175px]
          "
        />

        {/* Partner name */}

        <div
          className="
            mt-3
            flex items-center gap-1.5
            opacity-70
            transition-all duration-300
            group-hover:opacity-100
            sm:mt-3.5
          "
        >
          <span className="max-w-[130px] truncate text-[10px] font-semibold text-[#24161B]/55 sm:max-w-[160px] sm:text-xs">
            {client.name}
          </span>

          <ArrowUpRight
            size={12}
            className="
              text-[#902141]
              opacity-0
              -translate-x-1
              translate-y-1
              transition-all duration-300
              group-hover:translate-x-0
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          />
        </div>
      </div>

      {/* =================================================
          CATEGORY
      ================================================== */}

      <span
        className="
          absolute
          bottom-3
          left-1/2
          -translate-x-1/2
          rounded-full
          bg-[#902141]/[0.06]
          px-2.5
          py-1
          text-[8px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#902141]/70
          opacity-0
          translate-y-2
          transition-all duration-300

          group-hover:translate-y-0
          group-hover:opacity-100

          sm:bottom-4
          sm:px-3
          sm:text-[9px]
        "
      >
        {client.category || "merchant"}
      </span>

      {/* =================================================
          BOTTOM ACCENT
      ================================================== */}

      <motion.div
        initial={{
          scaleX: 0,
        }}
        whileHover={{
          scaleX: 1,
        }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-0
          left-4
          right-4
          h-[2px]
          origin-center
          rounded-full
          bg-[#902141]
          sm:left-6
          sm:right-6
        "
      />
    </motion.div>
  );
}