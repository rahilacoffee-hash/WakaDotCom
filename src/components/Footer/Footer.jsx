import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect this to your newsletter API later
    console.log("Newsletter email:", email);

    setEmail("");
  };

  return (
    <footer
      id="ContactUs"
      className="
        relative
        overflow-hidden
        bg-[#1B1B1B]
        text-white
      "
    >
      {/* ==================================================
          BACKGROUND DECORATION
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#FB7A00]
          opacity-[0.035]
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
          bg-[#FB7A00]
          opacity-[0.025]
          blur-3xl
        "
      />

      {/* Orange bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FB7A00]" />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1280px]
          px-6
          pb-10
          pt-8
          sm:px-8
          sm:pb-12
          sm:pt-10
          lg:px-12
        "
      >
        {/* ==================================================
            NEWSLETTER
        ================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[14px]
            border
            border-white/[0.06]
            bg-[#303030]
            px-5
            py-6
            sm:px-8
            sm:py-7
            lg:px-10
          "
        >
          {/* subtle orange glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-40
              w-40
              rounded-full
              bg-[#FB7A00]
              opacity-[0.08]
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              gap-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Heading */}

            <div>
              <p
                className="
                  mb-2
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#FB7A00]
                  sm:text-[10px]
                "
              >
                Stay connected
              </p>

              <h2
                className="
                  max-w-[420px]
                  text-[20px]
                  font-black
                  uppercase
                  leading-[1.05]
                  tracking-[-0.03em]
                  text-white
                  sm:text-[25px]
                  lg:text-[27px]
                "
              >
                Stay up to date about
                <br />
                our latest offers
              </h2>
            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="
                flex
                w-full
                max-w-[400px]
                flex-col
                gap-2
              "
            >
              <div
                className="
                  flex
                  h-[42px]
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-4
                  transition-all
                  duration-300
                  focus-within:ring-2
                  focus-within:ring-[#FB7A00]/30
                "
              >
                <FaEnvelope
                  className="shrink-0 text-[#999]"
                  size={13}
                />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="
                    min-w-0
                    flex-1
                    bg-transparent
                    text-[11px]
                    text-[#222]
                    outline-none
                    placeholder:text-[#999]
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  group
                  flex
                  h-[42px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#FB7A00]
                  text-[11px]
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#ff861f]
                  hover:shadow-[0_10px_30px_rgba(251,122,0,0.25)]
                  active:scale-[0.98]
                "
              >
                Subscribe to Newsletter

                <FaArrowRight
                  size={9}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>
          </div>
        </section>

        {/* ==================================================
            MAIN FOOTER CONTENT
        ================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-2
            gap-x-8
            gap-y-10
            sm:mt-12
            sm:grid-cols-4
            lg:mt-14
          "
        >
          {/* ==================================================
              WAKADOTCOM
          ================================================== */}

          <div>
            <h3
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.04em]
                text-white
                sm:text-[13px]
              "
            >
              WakaDotCom
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              {[
                {
                  name: "SmartFixer",
                  href: "#smartfixer",
                },
                {
                  name: "WakaFoods",
                  href: "#wakafoods",
                },
                {
                  name: "WakaRider",
                  href: "#wakarider",
                },
                {
                  name: "WakaStores",
                  href: "#wakastores",
                },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    w-fit
                    text-[10px]
                    text-[#A8A8A8]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-[#FB7A00]
                    sm:text-[11px]
                  "
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* ==================================================
              APP
          ================================================== */}

          <div>
            <h3
              className="
                text-[12px]
                font-semibold
                text-white
                sm:text-[13px]
              "
            >
              App
            </h3>

            <nav className="mt-4 flex flex-col gap-2.5">
              <a
                href="#faqs"
                className="
                  w-fit
                  text-[10px]
                  text-[#A8A8A8]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#FB7A00]
                  sm:text-[11px]
                "
              >
                FAQs
              </a>

              <a
                href="#privacy"
                className="
                  w-fit
                  text-[10px]
                  text-[#A8A8A8]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#FB7A00]
                  sm:text-[11px]
                "
              >
                Privacy Policy
              </a>

              <a
                href="#terms"
                className="
                  w-fit
                  text-[10px]
                  text-[#A8A8A8]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[#FB7A00]
                  sm:text-[11px]
                "
              >
                Terms
              </a>
            </nav>
          </div>

          {/* ==================================================
              CONTACT
          ================================================== */}

          <div>
            <h3
              className="
                text-[12px]
                font-semibold
                text-white
                sm:text-[13px]
              "
            >
              Contact
            </h3>

            <div className="mt-4 flex flex-col gap-2.5">
              <a
                href="mailto:help@WakaDotCom.com"
                className="
                  w-fit
                  text-[10px]
                  text-[#A8A8A8]
                  transition-colors
                  duration-300
                  hover:text-[#FB7A00]
                  sm:text-[11px]
                "
              >
                Email: help@WakaDotCom.com
              </a>

              <span
                className="
                  text-[10px]
                  text-[#A8A8A8]
                  sm:text-[11px]
                "
              >
                Location: Nigeria
              </span>
            </div>
          </div>

          {/* ==================================================
              LOGO
          ================================================== */}

          <div className="flex items-start justify-start sm:justify-end">
            <Logo />
          </div>
        </div>

        {/* ==================================================
            DIVIDER
        ================================================== */}

        <div className="my-8 h-px w-full bg-white/[0.08] sm:my-10" />

        {/* ==================================================
            BOTTOM
        ================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* Socials */}

          <div className="flex items-center gap-4">
            <SocialIcon
              label="Instagram"
              icon={<FaInstagram />}
            />

            <SocialIcon
              label="Twitter"
              icon={<FaTwitter />}
            />

            <SocialIcon
              label="Facebook"
              icon={<FaFacebookF />}
            />

            <SocialIcon
              label="YouTube"
              icon={<FaYoutube />}
            />

            <SocialIcon
              label="TikTok"
              icon={<FaTiktok />}
            />
          </div>

          {/* Copyright */}

          <p
            className="
              text-[9px]
              text-[#777]
              sm:text-right
              sm:text-[10px]
            "
          >
            © WakaDotCom, all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ======================================================
   LOGO
====================================================== */

function Logo() {
  return (
    <a
      href="/"
      aria-label="WakaDotCom home"
      className="
        group
        inline-flex
        items-center
        gap-2.5
      "
    >
      <img
        src="/Wakadotcom-logo.png"
        alt="WakaDotCom"
        className="
          h-auto
          w-[105px]
          object-contain
          brightness-0
          invert
          transition-transform
          duration-300
          group-hover:scale-[1.02]
          sm:w-[125px]
        "
      />
    </a>
  );
}

/* ======================================================
   SOCIAL ICON
====================================================== */

function SocialIcon({ label, icon }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      aria-label={label}
      className="
        flex
        h-8
        w-8
        items-center
        justify-center
        rounded-full
        border
        border-white/[0.08]
        bg-white/[0.03]
        text-[#B8B8B8]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#FB7A00]/30
        hover:bg-[#FB7A00]
        hover:text-white
      "
    >
      <span className="text-[11px]">
        {icon}
      </span>
    </a>
  );
}