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
import { Link } from "react-router-dom";

/* =========================================================
   NAV LINKS
========================================================= */

const navLinks = [
  {
    name: "Home",
    href: "/wakastores",
  },
  {
    name: "About Us",
    href: "/#about",
  },
  {
    name: "Contact Us",
    href: "/#contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

const services = [
  {
    name: "SmartFixer",
    description: "Fix anything, anywhere",
    href: "/smartfixer",
    icon: HiWrench,
  },
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
    icon: HiCake,
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
    y: 10,
    scale: 0.97,
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
    y: 10,
    scale: 0.97,
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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] =
    useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  /* =======================================================
     SCROLL DETECTION
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
     BODY SCROLL LOCK
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

  /* =======================================================
     SERVICE CLICK
  ======================================================= */

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    closeMobileMenu();
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* ===================================================
          NAVBAR BACKGROUND
      =================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          top-0
          border-b
          transition-all
          duration-500
          backdrop-blur-xl

          ${
            isScrolled
              ? `
                h-[70px]
                border-[#F3D9DB]
                bg-[#FEEBEC]/90
                shadow-[0_8px_35px_rgba(100,30,35,0.08)]
              `
              : `
                h-[78px]
                border-transparent
                bg-[#FEEBEC]/80
              `
          }
        `}
      />

      {/* ===================================================
          NAV
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

          ${isScrolled ? "h-[70px]" : "h-[78px]"}
        `}
      >
        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
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
          "
        >
          <img
            src="/wakastore-logo.webp"
            alt="WakaDotCom"
            className="
              w-[128px]
              object-contain
              sm:w-[140px]
              lg:w-[145px]
            "
          />
        </Link>

        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <div className="hidden items-center gap-2 lg:flex">
          {/* HOME / ABOUT / CONTACT */}

          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="
                group
                relative
                rounded-xl
                px-4
                py-2.5
                text-[13px]
                font-semibold
                text-[#1B1B1B]
                transition-all
                duration-300
                hover:text-[#E30613]
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-[#E30613]
                  transition-all
                  duration-300
                  group-hover:w-5
                "
              />
            </Link>
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
              className={`
                group
                flex
                items-center
                gap-1.5
                rounded-xl
                px-4
                py-2.5
                text-[13px]
                font-semibold
                transition-all
                duration-300

                ${
                  isServicesOpen
                    ? "bg-white text-[#E30613]"
                    : "text-[#1B1B1B] hover:bg-white/70 hover:text-[#E30613]"
                }
              `}
            >
              <span>Services</span>

              <HiChevronDown
                className={`
                  text-base
                  transition-transform
                  duration-300
                  ${
                    isServicesOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              />
            </button>

            {/* =================================================
                DROPDOWN
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
                    pt-3
                  "
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-[20px]
                      border
                      border-[#F3D9DB]
                      bg-white/95
                      p-2
                      shadow-[0_25px_70px_rgba(100,30,35,0.14)]
                      backdrop-blur-xl
                    "
                  >
                    {/* HEADER */}

                    <div className="px-4 pb-3 pt-3">
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#A18C8E]
                        "
                      >
                        Our Ecosystem
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-[#777070]
                        "
                      >
                        Everything you need, in one place.
                      </p>
                    </div>

                    {/* SERVICES */}

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
                              rounded-[15px]
                              p-3
                              transition-all
                              duration-200
                              hover:bg-[#FEEBEC]
                            "
                          >
                            {/* ICON */}

                            <div
                              className="
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-xl
                                bg-[#FDE1E3]
                                text-[#E30613]
                                transition-all
                                duration-200
                                group-hover:scale-105
                                group-hover:bg-[#E30613]
                                group-hover:text-white
                              "
                            >
                              <Icon size={18} />
                            </div>

                            {/* TEXT */}

                            <div className="min-w-0 flex-1">
                              <p
                                className="
                                  text-sm
                                  font-bold
                                  text-[#1B1B1B]
                                  transition-colors
                                  duration-200
                                  group-hover:text-[#E30613]
                                "
                              >
                                {service.name}
                              </p>

                              <p
                                className="
                                  mt-0.5
                                  text-[11px]
                                  leading-4
                                  text-[#777070]
                                "
                              >
                                {service.description}
                              </p>
                            </div>

                            {/* ARROW */}

                            <span
                              className="
                                text-[#C2AEB0]
                                opacity-0
                                transition-all
                                duration-200
                                group-hover:translate-x-1
                                group-hover:text-[#E30613]
                                group-hover:opacity-100
                              "
                            >
                              →
                            </span>
                          </Link>
                        );
                      })}
                    </div>

                    {/* BOTTOM STRIP */}

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

        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="flex items-center gap-3">
          {/* DESKTOP CTA */}

          <Link
            to="/#contact"
            className="
              hidden
              items-center
              justify-center
              rounded-xl
              bg-[#E30613]
              px-6
              py-3
              text-[13px]
              font-bold
              text-white
              shadow-[0_10px_25px_rgba(227,6,19,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#C90511]
              hover:shadow-[0_15px_35px_rgba(227,6,19,0.28)]
              lg:flex
            "
          >
            Get Started
          </Link>

          {/* MOBILE MENU BUTTON */}

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
              rounded-xl
              text-[#1B1B1B]
              transition-all
              duration-300
              hover:border-[#E30613]
              hover:bg-white
              hover:text-[#E30613]
              lg:hidden
            "
          >
            <HiMenu className="text-2xl" />
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
              bg-[#1B1B1B]/40
              backdrop-blur-[5px]
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
              bg-[#FEEBEC]
              shadow-[-20px_0_70px_rgba(0,0,0,0.18)]
              lg:hidden
            "
          >
            {/* MOBILE HEADER */}

            <div
              className="
                flex
                h-20
                shrink-0
                items-center
                justify-between
                border-b
                border-[#F3D9DB]
                px-6
              "
            >
              <img
                src="/wakastore-logo.webp"
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
                  rounded-xl
                  
                  text-[#1B1B1B]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:bg-[#E30613]
                  hover:text-white
                "
              >
                <HiX className="text-xl" />
              </button>
            </div>

            {/* MOBILE CONTENT */}

            <div className="flex flex-1 flex-col px-6 pb-8">
              {/* NAV LINKS */}

              <div className="mt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={closeMobileMenu}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#F3D9DB]
                      py-5
                      text-lg
                      font-bold
                      text-[#1B1B1B]
                      transition-colors
                      duration-300
                      hover:text-[#E30613]
                    "
                  >
                    {link.name}

                    <span className="text-[#C3AAAD]">
                      →
                    </span>
                  </Link>
                ))}
              </div>

              {/* MOBILE SERVICES */}

              <div className="border-b border-[#F3D9DB]">
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
                      bg-[#FDE1E3]
                      text-[#E30613]
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
                            <Link
                              key={service.name}
                              to={service.href}
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
                                  text-[#E30613]
                                  shadow-sm
                                "
                              >
                                <Icon size={18} />
                              </div>

                              <div>
                                <p className="text-sm font-bold text-[#1B1B1B]">
                                  {service.name}
                                </p>

                                <p className="mt-0.5 text-[11px] text-[#777070]">
                                  {service.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* MOBILE CTA */}

              <Link
                to="/#contact"
                onClick={closeMobileMenu}
                className="
                  mt-8
                  flex
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#E30613]
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_35px_rgba(227,6,19,0.22)]
                  transition-all
                  duration-300
                  hover:bg-[#C90511]
                  active:scale-[0.98]
                "
              >
                Get Started
              </Link>

              {/* MOBILE FOOTER */}

              <div className="mt-auto pt-10">
                <div className="h-px w-full bg-[#F3D9DB]" />

                <div className="flex items-center justify-between pt-5">
                  <p className="text-[10px] text-[#8E7C7E]">
                    One App. Many Solutions.
                  </p>

                  <span className="h-2 w-2 rounded-full bg-[#E30613]" />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
