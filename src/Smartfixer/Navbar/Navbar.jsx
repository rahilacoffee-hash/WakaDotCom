import React, { useEffect, useState } from "react";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiLightningBolt,
  HiTruck,
  HiShoppingBag,
} from "react-icons/hi";
import { HiWrench } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

/* =========================================================
   NAV LINKS
========================================================= */

const navLinks = [
  {
    name: "Home",
    href: "#",
  },
  {
    name: "Why Choose Us",
    href: "#whychooseus",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [

  {
    name: "WakaRider",
    description: "Fast & reliable deliveries",
    href: "/wakarider",
    icon: HiTruck,
  },
  {
    name: "WakaFoods",
    description: "Your favourite meals",
    href: "/wakafoods",
    icon: HiLightningBolt,
  },
  {
    name: "WakaStores",
    description: "Shop what you need",
    href: "/wakastores",
    icon: HiShoppingBag,
  },
];

/* =========================================================
   ANIMATIONS
========================================================= */

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

/* =========================================================
   NAVBAR
========================================================= */

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =======================================================
     SCROLL STATE
  ======================================================= */

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

  /* =======================================================
     LOCK BODY SCROLL
  ======================================================= */

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

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

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
      className="
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-500
      "
    >
      {/* ===================================================
          NAVBAR BACKGROUND
      =================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          top-0
          backdrop-blur-xl
          border-b
          border-black/[0.05]
          transition-all
          duration-500

          ${
            isScrolled
              ? `
                h-[72px]
                bg-[#EEF7FF]/90
                shadow-[0_8px_35px_rgba(27,27,27,0.08)]
              `
              : `
                h-20
                bg-[#EEF7FF]/75
              `
          }
        `}
      />

      {/* ===================================================
          NAVIGATION
      =================================================== */}

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

          ${isScrolled ? "h-[72px]" : "h-20"}
        `}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <a
          href="/"
          onClick={closeMobileMenu}
          aria-label="SmartFixer home"
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
            focus-visible:ring-[#1769C2]
            focus-visible:ring-offset-4
            focus-visible:ring-offset-[#EEF7FF]
          "
        >
          <img
            src="/smartfixer-logo.png"
            alt="SmartFixer"
            className="
              w-[145px]
              object-contain
              sm:w-[155px]
              lg:w-[165px]
            "
          />
        </a>

        {/* =================================================
            DESKTOP NAV
        ================================================= */}

        <div
          className="
            hidden
            lg:flex
            lg:items-center
            lg:gap-10
          "
        >
          {/* NAV LINKS */}

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
                text-[#171717]
                transition-colors
                duration-300
                hover:text-[#1769C2]
                focus:outline-none
                focus-visible:text-[#1769C2]
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
                  bg-[#1769C2]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
              />
            </a>
          ))}

          {/* =================================================
              SERVICES
          ================================================= */}

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
                relative
                flex
                items-center
                gap-1.5
                py-2
                text-[14px]
                font-semibold
                text-[#171717]
                transition-colors
                duration-300
                hover:text-[#1769C2]
                focus:outline-none
                focus-visible:text-[#1769C2]
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
                  bg-[#1769C2]
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

            {/* =================================================
                DESKTOP DROPDOWN
            ================================================= */}

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
                      rounded-2xl
                      border
                      border-[#DCEBFA]
                      bg-white
                      p-3
                      shadow-[0_25px_70px_rgba(27,27,27,0.12)]
                    "
                  >
                    {/* Dropdown heading */}

                    <div className="px-3 pb-3 pt-2">
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#7A7A7A]
                        "
                      >
                        WakaDotCom Services
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-[#9A9A9A]
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
                          <Link
                            key={service.name}
                            to={service.href}
                            onClick={handleServiceClick}
                            className="
                              group
                              flex
                              items-center
                              gap-3
                              rounded-xl
                              p-3
                              transition-all
                              duration-200
                              hover:bg-[#EEF7FF]
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
                                bg-[#EEF7FF]
                                text-[#1769C2]
                                transition-all
                                duration-200
                                group-hover:bg-[#1769C2]
                                group-hover:text-white
                              "
                            >
                              <Icon size={18} />
                            </div>

                            {/* Text */}

                            <div className="min-w-0">
                              <p
                                className="
                                  text-sm
                                  font-semibold
                                  text-[#171717]
                                  transition-colors
                                  duration-200
                                  group-hover:text-[#1769C2]
                                "
                              >
                                {service.name}
                              </p>

                              <p
                                className="
                                  mt-0.5
                                  text-xs
                                  text-[#777777]
                                "
                              >
                                {service.description}
                              </p>
                            </div>

                            {/* Arrow */}

                            <span
                              className="
                                ml-auto
                                translate-x-[-4px]
                                text-sm
                                text-[#B7B7B7]
                                opacity-0
                                transition-all
                                duration-200
                                group-hover:translate-x-0
                                group-hover:text-[#1769C2]
                                group-hover:opacity-100
                              "
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}

          <a
            href="#get-started"
            className="
              hidden
              items-center
              justify-center
              rounded-full
              bg-[#1769C2]
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              shadow-[0_10px_30px_rgba(23,105,194,0.20)]
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#125AA7]
              hover:shadow-[0_15px_40px_rgba(23,105,194,0.30)]
              lg:flex
            "
          >
            Get Started
          </a>

          {/* Mobile menu button */}

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              transition-colors
              duration-300
              hover:bg-[#DCEBFA]
              lg:hidden
            "
            aria-label="Open menu"
          >
            <HiMenu className="text-2xl text-[#171717]" />
          </button>
        </div>
      </nav>

      {/* ===================================================
          MOBILE OVERLAY
      =================================================== */}

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
              bg-black/30
              backdrop-blur-sm
              lg:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* ===================================================
          MOBILE MENU
      =================================================== */}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="
              fixed
              right-0
              top-0
              z-50
              h-screen
              w-[84%]
              max-w-[390px]
              overflow-y-auto
              bg-[#EEF7FF]
              shadow-2xl
              lg:hidden
            "
          >
            {/* =================================================
                MOBILE HEADER
            ================================================= */}

            <div
              className="
                flex
                h-20
                items-center
                justify-between
                border-b
                border-black/[0.05]
                px-6
              "
            >
              <img
                src="/smartfixer-logo.png"
                alt="SmartFixer"
                className="w-[135px] object-contain"
              />

              <button
                type="button"
                onClick={closeMobileMenu}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#171717]
                  transition-all
                  duration-300
                  hover:bg-[#DCEBFA]
                  hover:text-[#1769C2]
                "
                aria-label="Close menu"
              >
                <HiX className="text-2xl" />
              </button>
            </div>

            {/* =================================================
                MOBILE CONTENT
            ================================================= */}

            <div className="px-7 pb-10 pt-7">
              {/* Nav links */}

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="
                    block
                    border-b
                    border-black/[0.06]
                    py-5
                    text-lg
                    font-semibold
                    text-[#171717]
                    transition-colors
                    duration-300
                    hover:text-[#1769C2]
                  "
                >
                  {link.name}
                </a>
              ))}

              {/* =================================================
                  MOBILE SERVICES
              ================================================= */}

              <div className="border-b border-black/[0.06]">
                <button
                  type="button"
                  onClick={() =>
                    setIsMobileServicesOpen(
                      (current) => !current
                    )
                  }
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-5
                    text-lg
                    font-semibold
                    text-[#171717]
                  "
                >
                  <span>Services</span>

                  <HiChevronDown
                    className={`
                      text-xl
                      text-[#1769C2]
                      transition-transform
                      duration-300

                      ${
                        isMobileServicesOpen
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
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
                              onClick={handleServiceClick}
                              className="
                                group
                                flex
                                items-center
                                gap-3
                                rounded-xl
                                p-3
                                transition-colors
                                duration-200
                                hover:bg-white
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
                                  text-[#1769C2]
                                  shadow-sm
                                "
                              >
                                <Icon size={18} />
                              </div>

                              <div>
                                <p
                                  className="
                                    text-sm
                                    font-semibold
                                    text-[#171717]
                                  "
                                >
                                  {service.name}
                                </p>

                                <p
                                  className="
                                    mt-0.5
                                    text-xs
                                    text-[#777777]
                                  "
                                >
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

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <a
                href="#get-started"
                onClick={closeMobileMenu}
                className="
                  mt-8
                  block
                  rounded-full
                  bg-[#1769C2]
                  py-4
                  text-center
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(23,105,194,0.20)]
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-[#125AA7]
                "
              >
                Get Started
              </a>

              {/* Small footer text */}

              <p
                className="
                  mt-8
                  text-center
                  text-[11px]
                  leading-5
                  text-[#8A8A8A]
                "
              >
                Fix anything. Anywhere.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;