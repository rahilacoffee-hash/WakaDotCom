import { motion } from "framer-motion";
import { ShieldCheck, Target } from "lucide-react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const viewport = {
  once: true,
  amount: 0.2,
};

export default function AboutWakaDotCom() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#FFF5EB]
        px-6
        py-20
        sm:px-8
        lg:px-12
        lg:py-24
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <img
        src="/Wakadotcom-logo.png"
        alt=""
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[55%]
          w-[280px]
          -translate-x-1/2
          -translate-y-1/2
          opacity-[0.025]
          select-none
          sm:w-[400px]
          lg:w-[550px]
        "
      />

      {/* subtle orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#FEEAD7]
          opacity-50
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-[#FFE3C8]
          opacity-40
          blur-3xl
        "
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-[1100px]">

        {/* =====================================================
            ABOUT HEADER
        ===================================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="
            mx-auto
            max-w-[900px]
            text-center
          "
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#FFD9B7]
              px-4
              py-2
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#FB7A00]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                text-[#292929]
                sm:text-[11px]
              "
            >
              About WakaDotCom
            </span>
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
              text-[38px]
              font-semibold
              leading-[1]
              tracking-[-1.8px]
              text-[#171717]
              sm:text-[48px]
              lg:text-[56px]
            "
          >
            About{" "}
            <span className="text-[#FB7A00]">
              WakaDotCom
            </span>
          </h2>

          {/* Orange line */}

          <div
            className="
              mx-auto
              mt-6
              h-[3px]
              w-16
              rounded-full
              bg-[#FB7A00]
            "
          />

          {/* Description */}

          <p
            className="
              mx-auto
              mt-7
              max-w-[850px]
              text-[14px]
              leading-[1.75]
              tracking-[-0.2px]
              text-[#55504B]
              sm:text-[16px]
              lg:text-[17px]
            "
          >
            WakaDotCom exists because everyday life shouldn't mean juggling
            a dozen unreliable apps to get simple things done. We bring home
            repairs, food, delivery, and commerce together under one platform
            — built on the same trust, the same verification, and the same
            standard, no matter which service you're using.
          </p>
        </motion.div>

        {/* =====================================================
            VALUE + MISSION
        ===================================================== */}

        <div
          className="
            mt-14
            grid
            gap-5
            lg:mt-20
            lg:grid-cols-[1.15fr_.85fr]
          "
        >

          {/* =================================================
              VALUE
          ================================================= */}

          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="
              rounded-[18px]
              border
              border-[#F2D8C1]
              bg-[#FEEAD7]/55
              p-6
              sm:p-8
              lg:p-9
            "
          >
            <div
              className="
                flex
                items-start
                gap-5
              "
            >
              {/* Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#FB7A00]
                  shadow-sm
                  sm:h-14
                  sm:w-14
                "
              >
                <ShieldCheck
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div className="flex-1">

                <h3
                  className="
                    text-[24px]
                    font-semibold
                    tracking-[-0.8px]
                    text-[#171717]
                    sm:text-[28px]
                  "
                >
                  Value
                </h3>

                <div
                  className="
                    mt-2
                    h-[2px]
                    w-8
                    rounded-full
                    bg-[#FB7A00]
                  "
                />

              </div>
            </div>

            <p
              className="
                mt-6
                text-[12px]
                leading-[1.75]
                text-[#55504B]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              We believe trust has to be earned before it's given — every
              fixer, rider, and seller is verified before they ever reach
              you. We believe one platform should mean one standard, not four
              different experiences wearing the same name. And we believe the
              best technology is the kind that disappears into the background,
              quietly making everyday life easier rather than asking for more
              of your time.
            </p>
          </motion.article>

          {/* =================================================
              MISSION
          ================================================= */}

          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            transition={{
              delay: 0.1,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-[18px]
              border
              border-[#F2D8C1]
              bg-white/65
              p-6
              sm:p-8
              lg:p-9
            "
          >
            <div
              className="
                flex
                items-start
                gap-5
              "
            >

              {/* Icon */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FFF0E1]
                  text-[#FB7A00]
                  sm:h-14
                  sm:w-14
                "
              >
                <Target
                  size={24}
                  strokeWidth={1.8}
                />
              </div>

              <div className="flex-1">

                <h3
                  className="
                    text-[24px]
                    font-semibold
                    tracking-[-0.8px]
                    text-[#171717]
                    sm:text-[28px]
                  "
                >
                  Mission
                </h3>

                <div
                  className="
                    mt-2
                    h-[2px]
                    w-8
                    rounded-full
                    bg-[#FB7A00]
                  "
                />

              </div>
            </div>

            <p
              className="
                mt-6
                text-[12px]
                leading-[1.75]
                text-[#55504B]
                sm:text-[14px]
                lg:text-[15px]
              "
            >
              To make everyday life simpler for millions of people across
              Africa, by connecting the services they rely on into one trusted
              ecosystem.
            </p>
          </motion.article>

        </div>

      </div>
    </section>
  );
}