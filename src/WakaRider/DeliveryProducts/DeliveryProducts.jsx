import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Package,
  Utensils,
  ShoppingBag,
  Wrench,
  Check,
} from "lucide-react";

/* ============================================================
   ANIMATION
============================================================ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
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

/* ============================================================
   PARCEL ILLUSTRATION
============================================================ */

const ParcelIllustration = () => (
  <svg
    viewBox="0 0 300 190"
    className="h-full w-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="150"
      cy="168"
      rx="82"
      ry="11"
      fill="#91D89D"
      opacity="0.55"
    />

    {/* box */}
    <path
      d="M83 67L145 43L218 65L157 91L83 67Z"
      fill="#F4B06D"
    />

    <path
      d="M83 67V133L157 158V91L83 67Z"
      fill="#D99150"
    />

    <path
      d="M157 91L218 65V130L157 158V91Z"
      fill="#C77940"
    />

    {/* tape */}
    <path
      d="M139 47L170 57L170 78L139 68V47Z"
      fill="#087D4F"
    />

    <path
      d="M139 68L170 78"
      stroke="#087D4F"
      strokeWidth="8"
    />

    {/* label */}
    <rect
      x="97"
      y="89"
      width="35"
      height="29"
      rx="4"
      fill="#FFF8EF"
    />

    <path
      d="M103 98H126M103 104H124M103 110H119"
      stroke="#8B8B8B"
    />

    {/* gift */}
    <rect
      x="142"
      y="126"
      width="43"
      height="30"
      rx="3"
      fill="#07834E"
    />

    <path
      d="M163 126V156"
      stroke="#0DBB70"
      strokeWidth="6"
    />

    <path
      d="M142 137H185"
      stroke="#0DBB70"
      strokeWidth="6"
    />

    {/* envelope */}
    <path
      d="M183 89L221 99V129L181 119L183 89Z"
      fill="#FFFDF7"
    />

    <path
      d="M183 90L201 107L221 99"
      stroke="#C7C7C7"
      strokeWidth="2"
    />

    {/* speed marks */}
    <path
      d="M228 70L239 66"
      stroke="#07834E"
      strokeWidth="6"
      strokeLinecap="round"
    />

    <path
      d="M232 82L244 81"
      stroke="#07834E"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

/* ============================================================
   FOOD ILLUSTRATION
============================================================ */

const FoodIllustration = () => (
  <svg
    viewBox="0 0 300 190"
    className="h-full w-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="151"
      cy="166"
      rx="86"
      ry="10"
      fill="#91D89D"
      opacity="0.55"
    />

    {/* delivery bag */}
    <path
      d="M151 43L217 52L232 141H143L151 43Z"
      fill="#087D4F"
    />

    <path
      d="M164 46L216 53L221 73L159 67L164 46Z"
      fill="#0DA45F"
    />

    {/* drink */}
    <path
      d="M206 66H252L247 119H211L206 66Z"
      fill="#EAF5ED"
    />

    <path
      d="M218 66L230 43"
      stroke="#087D4F"
      strokeWidth="6"
      strokeLinecap="round"
    />

    <ellipse
      cx="229"
      cy="66"
      rx="25"
      ry="8"
      fill="#D9EFE4"
    />

    {/* food box */}
    <path
      d="M83 111L149 98L198 121L130 139L83 111Z"
      fill="#F6F1E5"
    />

    <path
      d="M83 111V144L130 161V139L83 111Z"
      fill="#D9D1C2"
    />

    <path
      d="M130 139L198 121V146L130 161V139Z"
      fill="#C5BDAF"
    />

    {/* burger */}
    <ellipse
      cx="137"
      cy="104"
      rx="47"
      ry="15"
      fill="#D97925"
    />

    <path
      d="M93 103C95 76 111 65 137 65C163 65 180 77 181 103H93Z"
      fill="#EFA33C"
    />

    {/* sesame */}
    <g fill="#FFF1C9">
      <circle cx="111" cy="81" r="2" />
      <circle cx="124" cy="74" r="2" />
      <circle cx="139" cy="82" r="2" />
      <circle cx="154" cy="74" r="2" />
      <circle cx="166" cy="84" r="2" />
    </g>

    {/* lettuce */}
    <path
      d="M91 104C100 97 107 108 116 101C126 95 133 108 143 101C153 94 163 108 179 101L175 113H96L91 104Z"
      fill="#15934F"
    />

    {/* cheese */}
    <path
      d="M98 113H178L171 125L104 124L98 113Z"
      fill="#F5C42B"
    />

    {/* patty */}
    <path
      d="M103 124H175L169 137H109L103 124Z"
      fill="#5B2C17"
    />
  </svg>
);

/* ============================================================
   PRODUCTS ILLUSTRATION
============================================================ */

const ProductsIllustration = () => (
  <svg
    viewBox="0 0 300 190"
    className="h-full w-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="145"
      cy="166"
      rx="92"
      ry="10"
      fill="#91D89D"
      opacity="0.55"
    />

    {/* shopping bag */}
    <path
      d="M94 57H191L202 153H83L94 57Z"
      fill="#07834E"
    />

    {/* handles */}
    <path
      d="M112 70V51C112 27 170 27 170 51V70"
      stroke="#075E3E"
      strokeWidth="8"
      strokeLinecap="round"
    />

    {/* box */}
    <path
      d="M58 118L112 104L150 119L94 137L58 118Z"
      fill="#F1AE6D"
    />

    <path
      d="M58 118V151L94 165V137L58 118Z"
      fill="#D99150"
    />

    <path
      d="M94 137L150 119V150L94 165V137Z"
      fill="#C87B43"
    />

    {/* sneaker */}
    <path
      d="M130 128C145 128 155 137 169 139L207 146C219 148 224 158 216 164H132C119 164 111 154 114 145L130 128Z"
      fill="#F7F7F1"
    />

    <path
      d="M137 131L158 145L194 148L202 158H126C122 158 120 151 124 145L137 131Z"
      fill="#E7E8DF"
    />

    <path
      d="M145 130L164 145"
      stroke="#07834E"
      strokeWidth="7"
    />

    <path
      d="M164 145H194"
      stroke="#07834E"
      strokeWidth="5"
    />

    <path
      d="M178 149L186 158"
      stroke="#07834E"
      strokeWidth="4"
    />
  </svg>
);

/* ============================================================
   TOOLS ILLUSTRATION
============================================================ */

const ToolsIllustration = () => (
  <svg
    viewBox="0 0 300 190"
    className="h-full w-full"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="148"
      cy="166"
      rx="88"
      ry="10"
      fill="#91D89D"
      opacity="0.55"
    />

    {/* toolbox */}
    <rect
      x="92"
      y="78"
      width="104"
      height="73"
      rx="12"
      fill="#087D4F"
    />

    <rect
      x="104"
      y="67"
      width="80"
      height="30"
      rx="9"
      fill="#0B9B5C"
    />

    <path
      d="M127 66V55C127 48 133 44 140 44H157C164 44 170 48 170 55V66"
      stroke="#075E3E"
      strokeWidth="8"
    />

    <rect
      x="105"
      y="99"
      width="78"
      height="8"
      fill="#075E3E"
    />

    {/* wrench */}
    <path
      d="M207 52C214 48 222 49 227 54L215 66L230 81L218 93L203 78L191 90C186 85 185 76 189 69L202 77L215 64L207 52Z"
      fill="#A8ADB1"
    />

    {/* hard hat */}
    <path
      d="M49 132C49 107 64 90 84 90C104 90 119 107 119 132H49Z"
      fill="#F6B91D"
    />

    <path
      d="M42 132H125V142H42C37 142 35 138 38 134L42 132Z"
      fill="#F7C72C"
    />

    <path
      d="M84 90V113"
      stroke="#E59D08"
      strokeWidth="7"
    />

    {/* hose */}
    <path
      d="M157 132C178 126 192 139 183 151C173 163 148 145 159 137"
      stroke="#087D4F"
      strokeWidth="8"
      strokeLinecap="round"
    />

    {/* gears */}
    <circle
      cx="213"
      cy="129"
      r="16"
      fill="#8A9297"
    />

    <circle
      cx="213"
      cy="129"
      r="6"
      fill="#D5D9D8"
    />

    <circle
      cx="235"
      cy="145"
      r="11"
      fill="#777F83"
    />

    <circle
      cx="235"
      cy="145"
      r="4"
      fill="#D5D9D8"
    />
  </svg>
);

/* ============================================================
   DELIVERY DATA
============================================================ */

const deliveryItems = [
  {
    number: "01",
    title: "Parcels",
    description:
      "Documents, packages, gifts and personal items delivered safely to their destination.",
    icon: Package,
    illustration: <ParcelIllustration />,
  },
  {
    number: "02",
    title: "Food",
    description:
      "Meals from WakaFoods and your favourite restaurants, delivered fresh and on time.",
    icon: Utensils,
    illustration: <FoodIllustration />,
  },
  {
    number: "03",
    title: "Products",
    description:
      "Everything from online orders and shopping purchases to everyday business goods.",
    icon: ShoppingBag,
    illustration: <ProductsIllustration />,
  },
  {
    number: "04",
    title: "Parts & Materials",
    description:
      "Tools, spare parts and materials needed for jobs, repairs and everyday projects.",
    icon: Wrench,
    illustration: <ToolsIllustration />,
  },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

const DeliveryProducts = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#EFFFF9]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-10
        lg:py-28
      "
    >
      {/* ======================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* top glow */}

        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -right-48
            -top-48
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#008F68]/10
            blur-3xl
          "
        />

        {/* bottom glow */}

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            -bottom-56
            -left-48
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#63D6B0]/10
            blur-3xl
          "
        />

        {/* grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.035]
            [background-image:linear-gradient(#008F68_1px,transparent_1px),linear-gradient(90deg,#008F68_1px,transparent_1px)]
            [background-size:70px_70px]
          "
        />
      </div>

      {/* ======================================================
          CONTAINER
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* ====================================================
            HEADER
        ==================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          {/* badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[#BFEBDD]
              bg-white/70
              px-4
              py-2
              shadow-[0_8px_25px_rgba(0,143,104,0.06)]
              backdrop-blur-xl
            "
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#008F68] text-white">
              <Package size={12} />
            </span>

            <span className="text-xs font-semibold tracking-wide text-[#006B4D] sm:text-sm">
              WHAT WE DELIVER
            </span>
          </div>

          {/* heading */}

          <h2
            className="
              mt-7
              max-w-[850px]
              text-[42px]
              font-black
              leading-[0.98]
              tracking-[-0.055em]
              text-[#171A19]
              sm:text-[54px]
              lg:text-[64px]
            "
          >
            Whatever you need moved,
            <span className="text-[#008F68]">
              {" "}we've got you.
            </span>
          </h2>

          {/* description */}

          <p
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-[#66736E]
              sm:text-lg
              sm:leading-8
            "
          >
            From everyday essentials to urgent deliveries,
            WakaRider makes it simple to get almost anything
            from A to B.
          </p>
        </motion.div>

        {/* ====================================================
            CARDS
        ==================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:mt-16
            sm:grid-cols-2
            lg:mt-20
            lg:gap-7
          "
        >
          {deliveryItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                variants={cardVariants}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/70
                  bg-[#D5F7ED]/90
                  p-6
                  shadow-[0_15px_45px_rgba(0,80,55,0.055)]
                  transition-shadow
                  duration-500
                  hover:shadow-[0_25px_65px_rgba(0,80,55,0.12)]
                  sm:p-7
                  lg:p-8
                "
              >
                {/* ==================================================
                    CARD GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-52
                    w-52
                    rounded-full
                    bg-[#008F68]/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* ==================================================
                    CARD TOP
                ================================================== */}

                <div className="relative z-10 flex items-center justify-between">
                  {/* number */}

                  <div className="flex items-center gap-3">
                    <span
                      className="
                        text-[13px]
                        font-bold
                        tracking-[0.08em]
                        text-[#008F68]
                      "
                    >
                      {item.number}.
                    </span>

                    <span
                      className="
                        h-px
                        w-8
                        bg-[#008F68]/20
                        transition-all
                        duration-500
                        group-hover:w-12
                        group-hover:bg-[#008F68]/50
                      "
                    />
                  </div>

                  {/* icon */}

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#008F68]/10
                      bg-white/75
                      text-[#008F68]
                      shadow-sm
                      backdrop-blur-md
                      transition-all
                      duration-500
                      group-hover:rotate-6
                      group-hover:bg-[#008F68]
                      group-hover:text-white
                    "
                  >
                    <Icon size={17} strokeWidth={1.8} />
                  </div>
                </div>

                {/* ==================================================
                    CARD CONTENT
                ================================================== */}

                <div className="relative z-10 mt-4 max-w-[330px]">
                  <h3
                    className="
                      text-[27px]
                      font-bold
                      leading-tight
                      tracking-[-0.04em]
                      text-[#171A19]
                      sm:text-[30px]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-[360px]
                      text-sm
                      leading-6
                      text-[#52615B]
                      sm:text-[15px]
                      sm:leading-7
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* ==================================================
                    ILLUSTRATION
                ================================================== */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    -bottom-1
                    right-[-18px]
                    h-[185px]
                    w-[58%]
                    min-w-[190px]
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-[1.06]
                    group-hover:rotate-[1deg]
                  "
                >
                  {item.illustration}
                </motion.div>

                {/* ==================================================
                    BOTTOM ACTION
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-6
                    left-6
                    z-20
                    flex
                    items-center
                    gap-2
                    opacity-0
                    translate-y-2
                    transition-all
                    duration-300
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    sm:left-7
                    lg:left-8
                  "
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#008F68]">
                    Deliver with WakaRider
                  </span>

                  <ArrowUpRight
                    size={14}
                    className="text-[#008F68]"
                  />
                </div>

                {/* ==================================================
                    BORDER
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-[28px]
                    border
                    border-transparent
                    transition-colors
                    duration-500
                    group-hover:border-[#008F68]/15
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* ====================================================
            TRUST STRIP
        ==================================================== */}

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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:mt-12
            sm:flex-row
            sm:gap-5
          "
        >
          <div className="flex items-center gap-2">
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#008F68]
                text-white
              "
            >
              <Check size={12} strokeWidth={3} />
            </span>

            <span className="text-sm font-medium text-[#52615B]">
              Fast & reliable delivery
            </span>
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-[#008F68]/30 sm:block" />

          <div className="flex items-center gap-2">
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#008F68]
                text-white
              "
            >
              <Check size={12} strokeWidth={3} />
            </span>

            <span className="text-sm font-medium text-[#52615B]">
              Trusted dispatch riders
            </span>
          </div>

          <span className="hidden h-1 w-1 rounded-full bg-[#008F68]/30 sm:block" />

          <div className="flex items-center gap-2">
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-[#008F68]
                text-white
              "
            >
              <Check size={12} strokeWidth={3} />
            </span>

            <span className="text-sm font-medium text-[#52615B]">
              Door-to-door convenience
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliveryProducts;