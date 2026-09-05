import React from "react";
import { motion } from "framer-motion";
import {
  UsersRound,
  MessageSquare,
  BadgeCheck,
  Wrench,
  Soup,
  Bike,
  Tag,
} from "lucide-react";



const stats = [
  {
    title: "5000+ Users",
    description:
      "A fast-growing base of customers using WakaDotCom across food, transport, home services, and commerce",
    icon: UsersRound,
  },
  {
    title: "1000+ Positive Review",
    description:
      "A track record built on consistent, glowing feedback from real experiences across the platform",
    icon: MessageSquare,
  },
  {
    title: "250+ Registered Restaurants",
    description:
      "A long list of jobs done, meals delivered, and errands handled across the ecosystem",
    icon: BadgeCheck,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Stats() {
  return (
    <section className="w-full bg-[#191919] px-4 py-8 sm:px-8">
      <div className="mx-auto w-full max-w-[1050px]">

        {/* App Navigation Pills */}
      

        {/* Stats Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            rounded-[9px]
            border
            border-[#292929]
            bg-[#141414]
            p-[7px]
          "
        >
          <div className="grid grid-cols-1 gap-[7px] md:grid-cols-3">

            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -2,
                    backgroundColor: "#1d1d1d",
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="
                    min-h-[157px]
                    rounded-[8px]
                    border
                    border-[#292929]
                    bg-[#1b1b1b]
                    px-[24px]
                    py-[23px]
                    transition-colors
                    duration-200
                  "
                >
                  <div className="flex items-start justify-between">

                    {/* Text */}
                    <div className="pr-4">
                      <h3
                        className="
                          text-[15px]
                          font-semibold
                          leading-[20px]
                          tracking-[-0.25px]
                          text-[#f5f5f5]
                        "
                      >
                        {stat.title}
                      </h3>
                    </div>

                    {/* Orange Icon */}
                    <motion.div
                      whileHover={{
                        rotate: 6,
                        scale: 1.08,
                      }}
                      className="
                        flex
                        h-[36px]
                        w-[36px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#FCF3F6]
                        text-[#111111]
                      "
                    >
                      <Icon
                        size={17}
                        strokeWidth={2}
                      />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      mt-[15px]
                      max-w-[275px]
                      text-[13px]
                      font-normal
                      leading-[19px]
                      tracking-[-0.1px]
                      text-[#929292]
                    "
                  >
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </motion.div>
      </div>
    </section>
  );
}