import React from "react";
import { motion } from "framer-motion";
import {
  HiClock,
  HiChartPie,
  HiLightningBolt,
  HiShieldCheck,
  HiAdjustments,
  
} from "react-icons/hi";
import {HiArrowUpRight} from "react-icons/hi2"
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";

/* =========================================================
   STORE BUTTONS
========================================================= */

function StoreButtons({ dark = false }) {
  const base = dark
    ? "bg-white text-[#171717] hover:bg-[#FEEAD7]"
    : "bg-[#171717] text-white hover:bg-[#FB7A00]";

  return (
    <div className="mt-7 flex flex-wrap items-center gap-2.5">
      {/* App Store */}

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`
          flex
          h-[40px]
          items-center
          gap-2
          rounded-[7px]
          px-3.5
          transition-all
          duration-300
          ${base}
        `}
      >
        <FaApple size={17} />

        <span className="flex flex-col items-start leading-none">
          <span className="text-[6px] opacity-70">
            Download on the
          </span>

          <span className="mt-[3px] text-[11px] font-semibold">
            App Store
          </span>
        </span>
      </motion.button>

      {/* Google Play */}

      <motion.button
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className={`
          flex
          h-[40px]
          items-center
          gap-2
          rounded-[7px]
          px-3.5
          transition-all
          duration-300
          ${base}
        `}
      >
        <BiLogoPlayStore
          size={18}
          className="text-[#FB7A00]"
        />

        <span className="flex flex-col items-start leading-none">
          <span className="text-[6px] opacity-70">
            GET IT ON
          </span>

          <span className="mt-[3px] text-[11px] font-semibold">
            Google Play
          </span>
        </span>
      </motion.button>
    </div>
  );
}

/* =========================================================
   FEATURE ROW
========================================================= */

function FeatureRow({
  icon,
  title,
  desc,
  dark,
  isLast,
}) {
  const iconBg = dark
    ? "bg-white/10 text-white group-hover:bg-[#FB7A00]"
    : "bg-[#171717] text-white group-hover:bg-[#FB7A00]";

  const titleColor = dark
    ? "text-white"
    : "text-[#171717]";

  const descColor = dark
    ? "text-white/55"
    : "text-[#5A5550]";

  const border = dark
    ? "border-white/10"
    : "border-black/10";

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -10,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`
        group
        flex
        items-start
        gap-3.5
        py-5
        ${!isLast ? `border-b ${border}` : ""}
      `}
    >
      {/* Icon */}

      <div
        className={`
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center
          rounded-lg
          transition-all
          duration-300
          ${iconBg}
        `}
      >
        {icon}
      </div>

      {/* Text */}

      <div className="min-w-0">
        <h4
          className={`
            text-[14px]
            font-semibold
            ${titleColor}
          `}
        >
          {title}
        </h4>

        <p
          className={`
            mt-1
            text-[11px]
            leading-[1.55]
            ${descColor}
          `}
        >
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   ECOSYSTEM CARD
========================================================= */

function EcosystemCard({
   id,
  name,
  image,
  features,
  dark = false,
  featured = false,
}) {
  return (
    <motion.article
    id={id}
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: featured ? -30 : -8,
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-[22px]
        ${
          dark
            ? "bg-[#171717]"
            : "bg-[#FEEAD7]"
        }
        ${
          featured
            ? `
              lg:-translate-y-6
              lg:shadow-[0_30px_70px_rgba(23,23,23,0.18)]
            `
            : `
              shadow-[0_15px_45px_rgba(23,23,23,0.05)]
            `
        }
        transition-shadow
        duration-500
        hover:shadow-[0_30px_75px_rgba(23,23,23,0.15)]
      `}
    >
      {/* ===================================================
          IMAGE
      =================================================== */}

      <div className="relative h-[220px] overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          whileHover={{
            scale: 1.06,
          }}
          transition={{
            duration: 0.6,
          }}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Gradient */}

        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-t
            ${
              dark
                ? "from-[#171717]/70 to-transparent"
                : "from-black/25 to-transparent"
            }
          `}
        />

        {/* Number */}

   

        {/* Arrow */}

        <motion.div
          whileHover={{
            rotate: 45,
          }}
          className="
            absolute
            right-5
            top-5
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#171717]
            shadow-lg
          "
        >
          <HiArrowUpRight size={16} />
        </motion.div>

        {/* Featured */}

        {featured && (
          <div
            className="
              absolute
              bottom-5
              left-5
              rounded-full
              bg-[#FB7A00]
              px-3
              py-1.5
              text-[8px]
              font-bold
              uppercase
              tracking-[0.12em]
              text-white
            "
          >
            Featured
          </div>
        )}
      </div>

      {/* ===================================================
          CONTENT
      =================================================== */}

      <div className="p-6 sm:p-7">
        {/* Header */}

        <div className="flex items-center justify-between">
          <h3
            className={`
              text-[23px]
              font-bold
              tracking-[-0.04em]
              ${
                dark
                  ? "text-white"
                  : "text-[#171717]"
              }
            `}
          >
            {name}
          </h3>

          <span className="h-2 w-2 rounded-full bg-[#FB7A00]" />
        </div>

        {/* Features */}

        <div className="mt-2">
          {features.map((feature, index) => (
            <FeatureRow
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
              dark={dark}
              isLast={
                index === features.length - 1
              }
            />
          ))}
        </div>

        {/* Store buttons */}

        <StoreButtons dark={dark} />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

function EcosystemSection() {
  const ecosystem = [
    {
      id: "wakarider",
      name: "WakaRider",
      image: "wakarider-card.png",
      features: [
        {
          icon: <HiClock size={17} />,
          title: "Real-Time Tracking",
          desc:
            "Know exactly where your package is, from pickup to drop-off, every step of the way.",
        },
        {
          icon: <HiChartPie size={17} />,
          title: "Reliable Riders",
          desc:
            "Verified riders you can trust with anything, from documents to fragile items.",
        },
        {
          icon: <HiLightningBolt size={17} />,
          title: "Fast Pickup",
          desc:
            "Request a rider in minutes and get moving without the wait.",
        },
      ],
    },

    {
       id: "wakafoods",
      name: "WakaFoods",
      image: "wakafoods-card.png",
      dark: true,
      featured: true,
      features: [
        {
          icon: <HiAdjustments size={17} />,
          title: "Wide Selection",
          desc:
            "From local kitchens to your favourite spots, order from a growing range of restaurants and food vendors near you.",
        },
        {
          icon: <HiLightningBolt size={17} />,
          title: "Fast Delivery",
          desc:
            "Meals get to you while they're still hot, tracked from the kitchen straight to your door.",
        },
        {
          icon: <HiShieldCheck size={17} />,
          title: "Fresh & Trusted",
          desc:
            "Every vendor is verified, so you always know exactly what you're getting.",
        },
      ],
    },

    {
      id: "wakastores",
      name: "WakaStore",
      image: "wakastores-card.png",
      features: [
        {
          icon: <HiShieldCheck size={17} />,
          title: "Trusted Sellers",
          desc:
            "Buy materials, parts, and everyday goods from verified sellers you can count on.",
        },
        {
          icon: <HiShieldCheck size={17} />,
          title: "Secure Payments",
          desc:
            "Every transaction is protected, so you can shop with confidence.",
        },
        {
          icon: <HiAdjustments size={17} />,
          title: "Wide Marketplace",
          desc:
            "From spare parts to household items, find what you need in one place.",
        },
      ],
    },
  ];

  return (
    <section
    id="ecosystem"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FFF5EB]
        px-6
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
      "
    >
            <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(#102A72_1px,transparent_1px),linear-gradient(90deg,#102A72_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#FEEAD7]
          opacity-40
          blur-3xl
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[350px]
          w-[350px]
          rounded-full
          bg-[#FEEAD7]
          opacity-30
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =================================================
            HEADER
        ================================================= */}

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
          }}
          className="flex flex-col items-center text-center"
        >
          {/* Badge */}

              <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#ECDBCD]
              bg-[#FEEAD7]
              px-4
              py-2
            "
          >
            <span
              className="
                mr-2
                h-1.5
                w-1.5
                rounded-full
                bg-[#FB7A00]
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.1em]
                text-[#292929]
              "
            >
              More from WakaDotCom
            </span>
          </div>

        

          {/* Heading */}

          <h2
            className="
              mt-5
              text-3xl
              font-semibold
              tracking-[-0.04em]
              text-[#171717]
              sm:text-4xl
              lg:text-5xl
            "
          >
            The rest of the{" "}
            <span className="text-[#FB7A00]">
              ecosystem.
            </span>
          </h2>

          <p
            className="
              mt-4
              max-w-xl
              text-sm
              leading-6
              text-[#6B6661]
              sm:text-base
            "
          >
            One account gives you access to everything
            WakaDotCom has to offer.
          </p>
        </motion.div>

        {/* =================================================
            CARDS
        ================================================= */}

        <div
          className="
            mt-16
            grid
            grid-cols-1
            items-start
            gap-6
            lg:grid-cols-3
          "
        >
          {ecosystem.map((item) => (
            <EcosystemCard
              key={item.name}
              {...item}
            />
          ))}
        </div>

        {/* Bottom line */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-14
            flex
            items-center
            justify-center
            gap-2
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#FB7A00]" />

          <p className="text-xs font-medium text-[#77716C]">
            One signup.{" "}
            <span className="text-[#171717]">
              Everything connected.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default EcosystemSection;