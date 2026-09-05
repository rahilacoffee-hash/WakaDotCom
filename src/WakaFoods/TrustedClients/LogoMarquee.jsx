import { motion } from "framer-motion";
import { useState } from "react";

import ClientLogo from "./ClientLogo";

export default function LogoMarquee({
  clients,
  reverse = false,
  speed = 30,
}) {
  const [paused, setPaused] = useState(false);

  if (!clients?.length) return null;

  const marqueeClients = [...clients, ...clients];

  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        py-1.5
        sm:py-3
      "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Left Fade */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-8
          bg-gradient-to-r
          from-[#FCF3F6]
          to-transparent

          sm:w-16
          lg:w-40
        "
      />

      {/* Right Fade */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-8
          bg-gradient-to-l
          from-[#FCF3F6]
          to-transparent

          sm:w-16
          lg:w-40
        "
      />

      {/* Marquee */}
      <motion.div
        className="
          flex
          w-max
          gap-2.5
          sm:gap-4
          lg:gap-6
        "
        animate={
          paused
            ? undefined
            : {
                x: reverse
                  ? ["-50%", "0%"]
                  : ["0%", "-50%"],
              }
        }
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {marqueeClients.map((client, index) => (
          <ClientLogo
            key={`${client.id}-${index}`}
            client={client}
          />
        ))}
      </motion.div>
    </div>
  );
}