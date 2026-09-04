import React, { useEffect, useState } from "react";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiCake,
  HiTruck,
  HiShoppingBag,
} from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];

/**
 * FIX: every href here was either malformed ("#smartfixers.vercel.app/" —
 * a hash glued to a domain, which just scrolls to a non-existent in-page
 * anchor) or a bare in-page anchor ("#wakarider" etc.) that doesn't point
 * anywhere real. These now point to the live app for each ecosystem
 * product, opened in a new tab since they're separate deployments — swap
 * in the real production domains if they differ from the *.vercel.app
 * ones below.
 */
const services = [
  {
    name: "SmartFixer",
    description: "Fix anything, anywhere",
    href: "https://smartfixers.vercel.app/",
    icon: HiWrench,
  },
  {
    name: "WakaRider",
    description: "Fast & reliable deliveries",
    href: "https://wakarider.vercel.app/",
    icon: HiTruck,
  },
  {
    name: "WakaFoods",
    description: "Your favourite meals",
    href: "https://wakafoods.vercel.app/",
    icon: HiCake,
  },
  {
    name: "WakaStores",
    description: "Shop what you need",
    href: "https://wakastores.vercel.app/",
    icon: HiShoppingBag,
  },
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    scale: 0.98,
    transition: {
      duration: 0.15,
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =========================================
     SCROLL STATE
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     LOCK BODY SCROLL WHEN MOBILE MENU OPENS
  ========================================= */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    closeMobileMenu();
  };

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-500
      `}
    >
      {/* =========================================
          NAVBAR BACKGROUND
      ========================================= */}

      <div
        className={`
          absolute
          inset-x-0
          top-0
          transition-all
          duration-500

          ${
            isScrolled
              ? `
                h-[72px]
                bg-[#FFF5EB]/85
                shadow-[0_8px_35px_rgba(27,27,27,0.08)]
              `
              : `
                h-20
                bg-[#FFF5EB]/75
              `
          }

          backdrop-blur-xl
          border-b
          border-black/[0.05]
        `}
      />

      {/* =========================================
          NAV
      ========================================= */}

      <nav
        className={`
          relative
          z-20
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-5
          transition-all
          duration-500
          sm:px-7
          lg:px-8

          ${
            isScrolled
              ? "h-[72px]"
              : "h-20"
          }
        `}
      >
        {/* =======================================
            LOGO
        ======================================= */}

        <a
          href="/"
          onClick={closeMobileMenu}
          aria-label="WakaDotCom home"
          className="
            relative
            z-[60]
            flex
            items-center
            transition-transform
            duration-300
            hover:scale-[1.02]
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#FB7A00]
            focus-visible:ring-offset-4
            focus-visible:ring-offset-[#FFF5EB]
          "
        >
          <img
            src="/Wakadotcom-logo.webp"
            alt="WakaDotCom"
            className="
              w-[128px]
              object-contain
              sm:w-[140px]
              lg:w-[145px]
            "
          />
        </a>

        {/* =======================================
            DESKTOP NAVIGATION
        ======================================= */}

        <div className="hidden lg:flex lg:items-center lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="
                group
                relative
                py-2
                text-[14px]
                font-semibold
                text-[#1B1B1B]
                transition-colors
                duration-300
                hover:text-[#FB7A00]
                focus:outline-none
                focus-visible:text-[#FB7A00]
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  w-0
                  rounded-full
                  bg-[#FB7A00]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

          {/* =====================================
              SERVICES
          ===================================== */}

          <div
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() =>
                setIsServicesOpen((current) => !current)
              }
              aria-expanded={isServicesOpen}
              className="
                group
                flex
                items-center
                gap-1.5
                py-2
                text-[14px]
                font-semibold
                text-[#1B1B1B]
                transition-colors
                duration-300
                hover:text-[#FB7A00]
                focus:outline-none
                focus-visible:text-[#FB7A00]
              "
            >
              <span>Services</span>

              <HiChevronDown
                className={`
                  text-lg
                  transition-transform
                  duration-300
                  ${
                    isServicesOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  rounded-full
                  bg-[#FB7A00]
                  transition-all
                  duration-300
                  ${
                    isServicesOpen
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }
                `}
              />
            </button>

            {/* ===================================
                DESKTOP DROPDOWN
            =================================== */}

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="
                    absolute
                    left-1/2
                    top-full
                    w-[330px]
                    -translate-x-1/2
                    pt-4
                  "
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-[22px]
                      border
                      border-[#F0DED0]
                      bg-white/95
                      p-2
                      shadow-[0_25px_70px_rgba(27,27,27,0.13)]
                      backdrop-blur-xl
                    "
                  >
                    {/* Dropdown header */}

                    <div className="px-4 pb-3 pt-3">
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#9A8F87]
                        "
                      >
                        Our Ecosystem
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-[#6C6B6A]
                        "
                      >
                        Everything you need, in one place.
                      </p>
                    </div>

                    {/* Services */}

                    <div className="space-y-1">
                      {services.map((service) => {
                        const Icon = service.icon;

                        return (
                          <a
                            key={service.name}
                            href={service.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleServiceClick}
                            className="
                              group
                              flex
                              items-center
                              gap-3
                              rounded-[16px]
                              p-3
                              transition-all
                              duration-200
                              hover:bg-[#FFF5EB]
                            "
                          >
                            {/* Icon */}

                            <div
                              className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#FEEAD7]
                                text-[#FB7A00]
                                transition-all
                                duration-200
                                group-hover:scale-105
                                group-hover:bg-[#FB7A00]
                                group-hover:text-white
                              "
                            >
                              <Icon size={18} />
                            </div>

                            {/* Text */}

                            <div className="min-w-0 flex-1">
                              <p
                                className="
                                  text-sm
                                  font-bold
                                  text-[#1B1B1B]
                                  transition-colors
                                  duration-200
                                  group-hover:text-[#FB7A00]
                                "
                              >
                                {service.name}
                              </p>

                              <p
                                className="
                                  mt-0.5
                                  text-[11px]
                                  leading-4
                                  text-[#77716C]
                                "
                              >
                                {service.description}
                              </p>
                            </div>

                            {/* Arrow */}

                            <span
                              className="
                                text-[#B7ADA5]
                                opacity-0
                                transition-all
                                duration-200
                                group-hover:translate-x-1
                                group-hover:text-[#FB7A00]
                                group-hover:opacity-100
                              "
                            >
                              →
                            </span>
                          </a>
                        );
                      })}
                    </div>

                    {/* Bottom strip */}

                    <div
                      className="
                        mt-2
                        rounded-[14px]
                        bg-[#1B1B1B]
                        px-4
                        py-3
                      "
                    >
                      <p className="text-[10px] text-white/50">
                        One platform.
                      </p>

                      <p className="text-xs font-semibold text-white">
                        Many ways to make life easier.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* =======================================
            RIGHT SIDE
        ======================================= */}

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}

          <a
            href="#get-started"
            className="
              hidden
              items-center
              justify-center
              rounded-full
              bg-[#FB7A00]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_10px_30px_rgba(251,122,0,0.18)]
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:bg-[#e96f00]
              hover:shadow-[0_15px_40px_rgba(251,122,0,0.28)]
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#FB7A00]
              focus-visible:ring-offset-2
              lg:flex
            "
          >
            Get Started
          </a>

          {/* Mobile menu */}

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            className="
              relative
              z-[60]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#EBDDD2]
              bg-white/70
              text-[#1B1B1B]
              transition-all
              duration-300
              hover:border-[#FB7A00]
              hover:bg-[#FEEAD7]
              hover:text-[#FB7A00]
              lg:hidden
            "
          >
            <HiMenu className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* =========================================
          MOBILE OVERLAY
      ========================================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
            className="
              fixed
              inset-0
              z-40
              bg-[#1B1B1B]/35
              backdrop-blur-[4px]
              lg:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-screen
              w-[88%]
              max-w-[400px]
              flex-col
              overflow-y-auto
              bg-[#FFF5EB]
              shadow-[-20px_0_70px_rgba(0,0,0,0.15)]
              lg:hidden
            "
          >
            {/* =====================================
                MOBILE HEADER
            ===================================== */}

            <div
              className="
                flex
                h-20
                shrink-0
                items-center
                justify-between
                border-b
                border-[#ECDBCD]
                px-6
              "
            >
              <img
                src="/Wakadotcom-logo.webp"
                alt="WakaDotCom"
                className="w-[130px]"
              />

              <button
                type="button"
                onClick={closeMobileMenu}
                aria-label="Close menu"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#1B1B1B]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-[#FEEAD7]
                  hover:text-[#FB7A00]
                "
              >
                <HiX className="text-xl" />
              </button>
            </div>

            {/* =====================================
                MOBILE CONTENT
            ===================================== */}

            <div className="flex flex-1 flex-col px-6 pb-8">
              {/* Mobile links */}

              <div className="mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#ECDBCD]
                      py-5
                      text-lg
                      font-bold
                      text-[#1B1B1B]
                      transition-colors
                      duration-300
                      hover:text-[#FB7A00]
                    "
                  >
                    {link.name}

                    <span className="text-[#C1B6AE]">
                      →
                    </span>
                  </a>
                ))}
              </div>

              {/* ===================================
                  MOBILE SERVICES
              =================================== */}

              <div className="border-b border-[#ECDBCD]">
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileServicesOpen(
                      (current) => !current
                    )
                  }
                  aria-expanded={isMobileServicesOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-5
                    text-lg
                    font-bold
                    text-[#1B1B1B]
                  "
                >
                  <span>Services</span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FEEAD7]
                      text-[#FB7A00]
                    "
                  >
                    <HiChevronDown
                      className={`
                        text-lg
                        transition-transform
                        duration-300
                        ${
                          isMobileServicesOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    />
                  </span>
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-4">
                        {services.map((service) => {
                          const Icon = service.icon;

                          return (
                            <a
                              key={service.name}
                              href={service.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={handleServiceClick}
                              className="
                                group
                                flex
                                items-center
                                gap-3
                                rounded-2xl
                                p-3
                                transition-colors
                                duration-200
                                hover:bg-[#FEEAD7]
                              "
                            >
                              <div
                                className="
                                  flex
                                  h-10
                                  w-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-xl
                                  bg-white
                                  text-[#FB7A00]
                                  shadow-sm
                                "
                              >
                                <Icon size={18} />
                              </div>

                              <div>
                                <p className="text-sm font-bold text-[#1B1B1B]">
                                  {service.name}
                                </p>

                                <p className="mt-0.5 text-[11px] text-[#77716C]">
                                  {service.description}
                                </p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ===================================
                  MOBILE CTA
              =================================== */}

              <a
                href="#get-started"
                onClick={closeMobileMenu}
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FB7A00]
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_35px_rgba(251,122,0,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#e96f00]
                  active:scale-[0.98]
                "
              >
                Get Started
              </a>

              {/* ===================================
                  MOBILE FOOTER
              =================================== */}

              <div className="mt-auto pt-10">
                <div className="h-px w-full bg-[#ECDBCD]" />

                <div className="flex items-center justify-between pt-5">
                  <p className="text-[10px] text-[#8C8178]">
                    One App. Many Solutions.
                  </p>

                  <span className="h-2 w-2 rounded-full bg-[#FB7A00]" />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}