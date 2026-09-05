import React, { useEffect, useState } from "react";
import {
  HiMenu,
  HiX,
  HiChevronDown,
  HiTruck,
  HiShoppingBag,
  HiCake,
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
    href: "#why-choose-us",
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
    name: "SmartFixer",
    description: "Fix anything, anywhere",
    href: "/smartfixer",
    icon: HiWrench,
    type: "internal",
  },
   {
     name: "WakaFoods",
     description: "Your favourite meals",
     href: "/wakafoods",
     icon: HiCake,
     type: "external",
   },
  {
    name: "WakaStores",
    description: "Shop what you need",
    href: "/wakastores",
    icon: HiShoppingBag,
    type: "external",
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

  /* =======================================================
     SERVICE CLICK
  ======================================================= */

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    closeMobileMenu();
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* =====================================================
          NAVBAR BACKGROUND
      ====================================================== */}

      <div
        className={`
          absolute
          inset-x-0
          top-0
          transition-all
          duration-500
          backdrop-blur-xl

          ${
            isScrolled
              ? `
                h-[68px]
                bg-[#EFFFF9]/95
                shadow-[0_8px_35px_rgba(0,107,77,0.08)]
                border-b
                border-[#BFEBDD]/80
              `
              : `
                h-20
                bg-[#EFFFF9]/85
              `
          }
        `}
      />

      {/* =====================================================
          NAV
      ====================================================== */}

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

          ${isScrolled ? "h-[68px]" : "h-20"}
        `}
      >
        {/* ===================================================
            LOGO
        =================================================== */}

        <Link
          to="/"
          onClick={closeMobileMenu}
          aria-label="WakaRider home"
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
            focus-visible:ring-[#008F68]
            focus-visible:ring-offset-4
            focus-visible:ring-offset-[#EFFFF9]
          "
        >
          <img
            src="/wakarider-logo.webp"
            alt="WakaRider"
            className="
              w-[128px]
              object-contain

              sm:w-[140px]

              lg:w-[145px]
            "
          />
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
        =================================================== */}

        <div
          className="
            hidden
            lg:flex
            lg:items-center
            lg:gap-10
          "
        >
          {/* Main Links */}

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
                text-[#171A19]
                transition-colors
                duration-300

                hover:text-[#008F68]

                focus:outline-none
                focus-visible:text-[#008F68]
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
                  bg-[#008F68]
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
                text-[#171A19]
                transition-colors
                duration-300

                hover:text-[#008F68]

                focus:outline-none
                focus-visible:text-[#008F68]
              "
            >
              <span>Services</span>

              <HiChevronDown
                className={`
                  text-lg
                  transition-transform
                  duration-300

                  ${isServicesOpen ? "rotate-180" : ""}
                `}
              />

              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  h-[2px]
                  rounded-full
                  bg-[#008F68]
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
                      rounded-[22px]
                      border
                      border-[#BFEBDD]
                      bg-[#FFFFFF]/95
                      p-2
                      shadow-[0_25px_70px_rgba(0,107,77,0.13)]
                      backdrop-blur-xl
                    "
                  >
                    {/* Dropdown Header */}

                    <div className="px-4 pb-3 pt-3">
                      <p
                        className="
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.18em]
                          text-[#66736E]
                        "
                      >
                        Our Ecosystem
                      </p>

                      <p
                        className="
                          mt-1
                          text-xs
                          text-[#66736E]
                        "
                      >
                        Everything you need, in one place.
                      </p>
                    </div>

                    {/* Services */}

                    <div className="space-y-1">
                      {services.map((service) => {
                        const Icon = service.icon;

                        const content = (
                          <>
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
                                bg-[#EFFFF9]
                                text-[#008F68]
                                transition-all
                                duration-200

                                group-hover:scale-105
                                group-hover:bg-[#008F68]
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
                                  text-[#171A19]
                                  transition-colors
                                  duration-200

                                  group-hover:text-[#008F68]
                                "
                              >
                                {service.name}
                              </p>

                              <p
                                className="
                                  mt-0.5
                                  text-[11px]
                                  leading-4
                                  text-[#66736E]
                                "
                              >
                                {service.description}
                              </p>
                            </div>

                            {/* Arrow */}

                            <span
                              className="
                                text-[#9BB8AD]
                                opacity-0
                                transition-all
                                duration-200

                                group-hover:translate-x-1
                                group-hover:text-[#008F68]
                                group-hover:opacity-100
                              "
                            >
                              →
                            </span>
                          </>
                        );

                        return service.type === "internal" ? (
                          <Link
                            key={service.name}
                            to={service.href}
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

                              hover:bg-[#EFFFF9]
                            "
                          >
                            {content}
                          </Link>
                        ) : (
                          <a
                            key={service.name}
                            href={service.href}
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

                              hover:bg-[#EFFFF9]
                            "
                          >
                            {content}
                          </a>
                        );
                      })}
                    </div>

                    {/* Bottom Strip */}

                    <div
                      className="
                        mt-2
                        rounded-[14px]
                        bg-[#303030]
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

        {/* ===================================================
            RIGHT SIDE
        =================================================== */}

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}

          <a
            href="#get-started"
            className="
              hidden
              items-center
              justify-center
              rounded-full
              bg-[#008F68]
              px-6
              py-3
              text-sm
              font-bold
              text-white
              shadow-[0_10px_30px_rgba(0,143,104,0.18)]
              transition-all
              duration-300

              hover:scale-[1.04]
              hover:bg-[#006B4D]
              hover:shadow-[0_15px_40px_rgba(0,107,77,0.25)]

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#008F68]
              focus-visible:ring-offset-2

              lg:flex
            "
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}

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
              border-[#BFEBDD]
              bg-white/85
              text-[#171A19]
              transition-all
              duration-300

              hover:border-[#008F68]
              hover:bg-[#EFFFF9]
              hover:text-[#008F68]

              lg:hidden
            "
          >
            <HiMenu className="text-2xl" />
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

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
              bg-[#171A19]/35
              backdrop-blur-[4px]
              lg:hidden
            "
          />
        )}
      </AnimatePresence>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

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
              bg-[#EFFFF9]
              shadow-[-20px_0_70px_rgba(0,107,77,0.15)]

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
                shrink-0
                items-center
                justify-between
                border-b
                border-[#BFEBDD]
                px-6
              "
            >
              <Link
                to="/"
                onClick={closeMobileMenu}
              >
                <img
                  src="/wakarider-logo.webp"
                  alt="WakaRider"
                  className="w-[130px]"
                />
              </Link>

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
                  text-[#171A19]
                  shadow-sm
                  transition-all
                  duration-300

                  hover:bg-[#D5F8EC]
                  hover:text-[#008F68]
                "
              >
                <HiX className="text-xl" />
              </button>
            </div>

            {/* =================================================
                MOBILE CONTENT
            ================================================= */}

            <div className="flex flex-1 flex-col px-6 pb-8">
              {/* Mobile Links */}

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
                      border-[#BFEBDD]
                      py-5
                      text-lg
                      font-bold
                      text-[#171A19]
                      transition-colors
                      duration-300

                      hover:text-[#008F68]
                    "
                  >
                    {link.name}

                    <span className="text-[#9BB8AD]">
                      →
                    </span>
                  </a>
                ))}
              </div>

              {/* =================================================
                  MOBILE SERVICES
              ================================================= */}

              <div className="border-b border-[#BFEBDD]">
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
                    text-[#171A19]
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
                      bg-white
                      text-[#008F68]
                      shadow-sm
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

                {/* Mobile Service Dropdown */}

                <AnimatePresence initial={false}>
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
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-1 pb-4">
                        {services.map((service) => {
                          const Icon = service.icon;

                          const content = (
                            <>
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
                                  bg-white
                                  text-[#008F68]
                                  shadow-sm
                                "
                              >
                                <Icon size={18} />
                              </div>

                              {/* Text */}

                              <div className="min-w-0">
                                <p className="text-sm font-bold text-[#171A19]">
                                  {service.name}
                                </p>

                                <p className="mt-0.5 text-[11px] text-[#66736E]">
                                  {service.description}
                                </p>
                              </div>

                              {/* Arrow */}

                              <span className="ml-auto text-[#9BB8AD]">
                                →
                              </span>
                            </>
                          );

                          return service.type === "internal" ? (
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
                              {content}
                            </Link>
                          ) : (
                            <a
                              key={service.name}
                              href={service.href}
                             
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

                                hover:bg-white
                              "
                            >
                              {content}
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
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-[#008F68]
                  px-6
                  py-4
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_15px_35px_rgba(0,143,104,0.22)]
                  transition-all
                  duration-300

                  hover:bg-[#006B4D]
                  active:scale-[0.98]
                "
              >
                Get Started
              </a>

              {/* =================================================
                  MOBILE FOOTER
              ================================================= */}

              <div className="mt-auto pt-10">
                <div className="h-px w-full bg-[#BFEBDD]" />

                <div className="flex items-center justify-between pt-5">
                  <p className="text-[10px] text-[#66736E]">
                    One App. Many Solutions.
                  </p>

                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-[#008F68]
                    "
                  />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;