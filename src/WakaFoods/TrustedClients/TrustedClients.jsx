import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import defaultClients from "./clients";
import LogoMarquee from "./LogoMarquee";

export default function TrustedClients() {
  const clients = defaultClients;

  return (
    <section
      id="trusted"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FCF3F6]
        py-16
        sm:py-24
        lg:py-36
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Main Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[35%]
            h-[300px]
            w-[300px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#902141]/[0.045]
            blur-[90px]

            sm:h-[500px]
            sm:w-[500px]

            lg:h-[700px]
            lg:w-[700px]
            lg:blur-[130px]
          "
        />

        {/* Left Glow */}
        <div
          className="
            absolute
            -left-32
            top-20
            h-[180px]
            w-[180px]
            rounded-full
            bg-[#902141]/[0.03]
            blur-[80px]

            sm:h-[280px]
            sm:w-[280px]
            sm:blur-[100px]
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            -right-32
            bottom-10
            h-[200px]
            w-[200px]
            rounded-full
            bg-pink-300/15
            blur-[80px]

            sm:h-[300px]
            sm:w-[300px]
            sm:blur-[110px]
          "
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.014]"
          style={{
            backgroundImage:
              "linear-gradient(#902141 1px, transparent 1px), linear-gradient(90deg, #902141 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
        "
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.7,
            ease: "easeOut",
          }}
          className="
            mx-auto
            max-w-4xl
            px-5
            text-center

            sm:px-8
          "
        >
          {/* Eyebrow */}
          <div
            className="
              mb-4
              flex
              items-center
              justify-center
              gap-2.5

              sm:mb-6
              sm:gap-3
            "
          >
            <span
              className="
                h-px
                w-6
                bg-[#902141]/40

                sm:w-12
              "
            />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-[#902141]

                sm:text-xs
                sm:tracking-[0.4em]
              "
            >
              Trusted by food lovers
            </span>

            <span
              className="
                h-px
                w-6
                bg-[#902141]/40

                sm:w-12
              "
            />
          </div>

          {/* Heading */}
          <h2
            className="
              text-[clamp(2.35rem,11vw,5.5rem)]
              font-black
              leading-[0.92]
              tracking-[-0.055em]
              text-[#24161B]

              sm:text-[clamp(3rem,7vw,5.5rem)]
            "
          >
            Good food brings

            <span className="block text-[#902141]">
              people together.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-[600px]
              px-2
              text-[13px]
              leading-5
              text-[#24161B]/60

              sm:mt-8
              sm:px-0
              sm:text-lg
              sm:leading-8
            "
          >
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
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-60px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            mt-10
            sm:mt-16
            lg:mt-24
          "
        >
          <LogoMarquee
            clients={clients}
            speed={32}
          />

          <div
            className="
              h-2
              sm:h-4
              lg:h-7
            "
          />

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
            y: 20,
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
            delay: 0.15,
          }}
          className="
            mx-auto
            mt-10
            flex
            w-full
            max-w-xl
            justify-center
            px-5

            sm:mt-16
          "
        >
          <div
            className="
              group
              flex
              max-w-full
              items-center
              gap-2

              rounded-full
              border
              border-[#902141]/10
              bg-white/70

              px-3
              py-2

              shadow-[0_8px_30px_rgba(144,33,65,0.05)]
              backdrop-blur-xl

              transition-all
              duration-300

              hover:border-[#902141]/20
              hover:shadow-[0_15px_45px_rgba(144,33,65,0.1)]

              sm:gap-3
              sm:px-5
              sm:py-3
            "
          >
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#902141]
                shadow-[0_0_0_4px_rgba(144,33,65,0.08)]

                sm:h-2.5
                sm:w-2.5
              "
            />

            <span
              className="
                min-w-0
                text-center
                text-[9px]
                font-semibold
                leading-4
                text-[#24161B]/60

                sm:text-sm
                sm:leading-normal
              "
            >
              150+ restaurants and food partners are growing with
              WakaFoods
            </span>

            <ArrowUpRight
              size={14}
              className="
                shrink-0
                text-[#902141]
                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5

                sm:h-4
                sm:w-4
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}