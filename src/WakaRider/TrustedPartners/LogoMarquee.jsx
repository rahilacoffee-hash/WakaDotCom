import React from "react";
import { motion } from "framer-motion";
import ClientLogo from "./ClientLogo";

const LogoMarquee = ({ partners, direction = "left" }) => {
  // Duplicate the list so the animation can loop seamlessly.
  const duplicatedPartners = [...partners, ...partners];

  const isLeft = direction === "left";

  return (
    <div className="group relative overflow-hidden">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-white/95 to-transparent sm:w-20" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-white/95 to-transparent sm:w-20" />

      <motion.div
        className="flex w-max gap-3 px-4 sm:gap-4 sm:px-6"
        animate={{
          x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        whileHover={{
          animationPlayState: "paused",
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <ClientLogo
            key={`${partner.id}-${index}`}
            partner={partner}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarquee;