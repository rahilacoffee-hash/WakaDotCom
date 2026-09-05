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
        flex
        h-[96px] w-[145px]
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-[18px]
        border border-black/[0.055]
        bg-white/75
        px-3
        shadow-[0_8px_25px_rgba(36,22,27,0.045)]
        backdrop-blur-xl
        transition-all duration-500

        hover:border-[#902141]/15
        hover:bg-white
        hover:shadow-[0_20px_45px_rgba(144,33,65,0.11)]

        xs:h-[102px]
        xs:w-[160px]

        sm:h-[120px]
        sm:w-[205px]
        sm:rounded-[24px]
        sm:px-5

        lg:h-[140px]
        lg:w-[250px]
        lg:rounded-[30px]
        lg:px-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute
          left-1/2 top-1/2
          h-20 w-20
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#902141]/0
          blur-3xl
          transition-all duration-700

          group-hover:bg-[#902141]/10
          group-hover:scale-150

          sm:h-28 sm:w-28
          lg:h-36 lg:w-36
        "
      />

      {/* Top Corner */}
      <div
        className="
          pointer-events-none absolute
          -right-7 -top-7
          h-16 w-16
          rounded-full
          border border-[#902141]/[0.04]
          bg-[#902141]/[0.025]
          transition-transform duration-700
          group-hover:scale-150

          sm:h-20 sm:w-20
        "
      />

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center">
        {/* Logo */}
        <img
          src={client.logo}
          alt={client.name}
          loading="lazy"
          className="
            max-h-8
            max-w-[100px]
            object-contain
            grayscale
            opacity-55
            transition-all
            duration-500

            group-hover:scale-105
            group-hover:grayscale-0
            group-hover:opacity-100

            sm:max-h-10
            sm:max-w-[140px]

            lg:max-h-14
            lg:max-w-[175px]
          "
        />

        {/* Partner Name */}
        <div
          className="
            mt-2
            flex
            max-w-full
            items-center
            justify-center
            gap-1

            opacity-70
            transition-all duration-300

            group-hover:opacity-100

            sm:mt-3
          "
        >
          <span
            className="
              max-w-[105px]
              truncate
              text-[9px]
              font-semibold
              text-[#24161B]/55

              sm:max-w-[150px]
              sm:text-xs
            "
          >
            {client.name}
          </span>

          <ArrowUpRight
            size={10}
            className="
              shrink-0
              text-[#902141]
              opacity-0
              -translate-x-1
              translate-y-1
              transition-all duration-300

              group-hover:translate-x-0
              group-hover:translate-y-0
              group-hover:opacity-100

              sm:h-3 sm:w-3
            "
          />
        </div>
      </div>

      {/* Category */}
      <span
        className="
          absolute
          bottom-2
          left-1/2
          -translate-x-1/2
          whitespace-nowrap

          rounded-full
          bg-[#902141]/[0.06]
          px-2
          py-0.5

          text-[7px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-[#902141]/70

          opacity-0
          translate-y-2
          transition-all duration-300

          group-hover:translate-y-0
          group-hover:opacity-100

          sm:bottom-3
          sm:px-2.5
          sm:py-1
          sm:text-[8px]
        "
      >
        {client.category || "merchant"}
      </span>

      {/* Bottom Accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          absolute
          bottom-0
          left-3
          right-3
          h-[2px]
          origin-center
          rounded-full
          bg-[#902141]

          sm:left-5
          sm:right-5

          lg:left-6
          lg:right-6
        "
      />
    </motion.div>
  );
}