import React, { useState } from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import {
  ArrowUpRight,
  ArrowUp,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    console.log("Newsletter email:", email);

    setSubmitted(true);
    setEmail("");

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      id="ContactUs"
      className="
        relative
        overflow-hidden
        bg-[#111111]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Large orange glow */}

        <div
          className="
            absolute
            -right-[220px]
            -top-[220px]
            h-[550px]
            w-[550px]
            rounded-full
            bg-[#FB7A00]/[0.055]
            blur-[120px]
          "
        />

        {/* Bottom glow */}

        <div
          className="
            absolute
            -left-[180px]
            bottom-[80px]
            h-[450px]
            w-[450px]
            rounded-full
            bg-[#FB7A00]/[0.035]
            blur-[120px]
          "
        />

        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.018]
          "
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* =====================================================
          TOP ORANGE LINE
      ====================================================== */}

      <div className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FB7A00] to-transparent" />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-5
          pb-8
          pt-14

          sm:px-8
          sm:pb-10
          sm:pt-20

          lg:px-12
          lg:pt-24
        "
      >
        {/* =====================================================
            BIG CTA / NEWSLETTER
        ====================================================== */}

        <section
          className="
            relative
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.07]
            bg-[#1C1C1C]
            px-5
            py-8

            sm:rounded-[30px]
            sm:px-8
            sm:py-10

            lg:px-12
            lg:py-12
          "
        >
          {/* Card glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-[280px]
              w-[280px]
              rounded-full
              bg-[#FB7A00]/[0.08]
              blur-[90px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              bottom-[-100px]
              left-[30%]
              h-[200px]
              w-[200px]
              rounded-full
              bg-orange-400/[0.035]
              blur-[80px]
            "
          />

          <div
            className="
              relative
              grid
              gap-8

              lg:grid-cols-[1fr_0.85fr]
              lg:items-center
              lg:gap-16
            "
          >
            {/* =================================================
                LEFT
            ================================================== */}

            <div>
              <div
                className="
                  mb-4
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FB7A00]/10
                    text-[#FB7A00]
                  "
                >
                  <FaEnvelope size={11} />
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-[0.25em]
                    text-[#FB7A00]
                  "
                >
                  Stay in the loop
                </span>
              </div>

              <h2
                className="
                  max-w-[620px]
                  text-[clamp(2rem,5vw,4rem)]
                  font-black
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-white
                "
              >
                Good things are
                <span className="block text-[#FB7A00]">
                  always moving.
                </span>
              </h2>

              <p
                className="
                  mt-4
                  max-w-lg
                  text-xs
                  leading-6
                  text-white/45

                  sm:text-sm
                  sm:leading-7
                "
              >
                Get the latest updates, offers, product launches
                and everything happening across the WakaDotCom
                ecosystem.
              </p>
            </div>

            {/* =================================================
                NEWSLETTER FORM
            ================================================== */}

            <div>
              <form
                onSubmit={handleSubmit}
                className="
                  rounded-[18px]
                  border
                  border-white/[0.07]
                  bg-white/[0.035]
                  p-2
                  backdrop-blur-xl

                  sm:p-2.5
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-2

                    sm:flex-row
                  "
                >
                  <div
                    className="
                      flex
                      h-[48px]
                      min-w-0
                      flex-1
                      items-center
                      gap-3
                      rounded-[13px]
                      bg-white/[0.06]
                      px-4
                      transition-all
                      duration-300
                      focus-within:bg-white/[0.09]
                      focus-within:ring-1
                      focus-within:ring-[#FB7A00]/40
                    "
                  >
                    <FaEnvelope
                      size={13}
                      className="shrink-0 text-white/30"
                    />

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="
                        min-w-0
                        flex-1
                        bg-transparent
                        text-xs
                        text-white
                        outline-none
                        placeholder:text-white/25
                      "
                    />
                  </div>

                  <button
                    type="submit"
                    className="
                      group
                      flex
                      h-[48px]
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-[13px]
                      bg-[#FB7A00]
                      px-6
                      text-xs
                      font-bold
                      text-white
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-[#ff861f]
                      hover:shadow-[0_12px_35px_rgba(251,122,0,0.25)]

                      active:scale-[0.98]
                    "
                  >
                    {submitted ? "Subscribed ✓" : "Subscribe"}

                    {!submitted && (
                      <ArrowUpRight
                        size={15}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-3 px-1 text-[9px] text-white/25">
                No spam. Just useful updates from WakaDotCom.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            BRAND INTRO
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            gap-12

            sm:mt-20

            lg:mt-24
            lg:grid-cols-[1.1fr_2fr]
            lg:gap-20
          "
        >
          {/* =================================================
              BRAND
          ================================================== */}

          <div>
            <Logo />

            <p
              className="
                mt-5
                max-w-[330px]
                text-xs
                leading-6
                text-white/35

                sm:text-sm
                sm:leading-7
              "
            >
              One ecosystem. Multiple ways to make everyday
              life simpler, faster and more connected.
            </p>

            {/* Location */}

            <div
              className="
                mt-6
                flex
                items-center
                gap-2
                text-[10px]
                text-white/35
              "
            >
              <MapPin
                size={13}
                className="text-[#FB7A00]"
              />

              Nigeria
            </div>
          </div>

          {/* =================================================
              LINKS
          ================================================== */}

          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-10

              sm:grid-cols-4
              sm:gap-8
            "
          >
            {/* Ecosystem */}

            <FooterColumn title="Ecosystem">
              <FooterLink to="/smartfixer">
                SmartFixer
              </FooterLink>

              <FooterLink to="/wakafoods">
                WakaFoods
              </FooterLink>

              <FooterLink to="/wakarider">
                WakaRider
              </FooterLink>

              <FooterLink to="/wakastores">
                WakaStores
              </FooterLink>
            </FooterColumn>

            {/* Company */}

            <FooterColumn title="Company">
              <FooterLink to="/about">
                About us
              </FooterLink>

              <FooterLink to="/contact">
                Contact
              </FooterLink>

              <FooterLink to="/careers">
                Careers
              </FooterLink>

              <FooterLink to="/partners">
                Partners
              </FooterLink>
            </FooterColumn>

            {/* Support */}

            <FooterColumn title="Support">
              <FooterLink to="/faqs">
                FAQs
              </FooterLink>

              <FooterLink to="/help">
                Help center
              </FooterLink>

              <FooterLink to="/privacy">
                Privacy
              </FooterLink>

              <FooterLink to="/terms">
                Terms
              </FooterLink>
            </FooterColumn>

            {/* Contact */}

            <FooterColumn title="Contact">
              <a
                href="mailto:help@WakaDotCom.com"
                className="
                  block
                  text-[10px]
                  leading-5
                  text-white/40
                  transition-colors
                  duration-300
                  hover:text-[#FB7A00]

                  sm:text-[11px]
                "
              >
                help@WakaDotCom.com
              </a>

              <p
                className="
                  mt-3
                  text-[10px]
                  leading-5
                  text-white/30

                  sm:text-[11px]
                "
              >
                Nigeria
              </p>
            </FooterColumn>
          </div>
        </div>

        {/* =====================================================
            LARGE BRAND STATEMENT
        ====================================================== */}

        <div
          className="
            relative
            mt-16
            overflow-hidden
            border-y
            border-white/[0.06]
            py-10

            sm:mt-20
            sm:py-14

            lg:mt-24
            lg:py-16
          "
        >
          <p
            className="
              text-center
              text-[clamp(2.5rem,8vw,7rem)]
              font-black
              leading-[0.85]
              tracking-[-0.07em]
              text-white/[0.035]
              select-none
            "
          >
            WAKADOTCOM
          </p>

          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-20
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#FB7A00]/[0.035]
              blur-[70px]
            "
          />
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-6
            pt-8

            sm:pt-10

            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Socials */}

          <div className="flex items-center gap-2">
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
              text-white/25

              sm:text-[10px]
            "
          >
            © {new Date().getFullYear()} WakaDotCom.
            All rights reserved.
          </p>

          {/* Back to top */}

          <button
            type="button"
            onClick={scrollToTop}
            className="
              group
              flex
              w-fit
              items-center
              gap-2
              text-[9px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-white/35
              transition-colors
              duration-300
              hover:text-[#FB7A00]
            "
          >
            Back to top

            <span
              className="
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                border
                border-white/[0.08]
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:border-[#FB7A00]/30
                group-hover:bg-[#FB7A00]
                group-hover:text-white
              "
            >
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ACCENT
      ====================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[2px]
          bg-gradient-to-r
          from-transparent
          via-[#FB7A00]
          to-transparent
        "
      />
    </footer>
  );
}

/* ==========================================================
   FOOTER COLUMN
========================================================== */

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-white
        "
      >
        {title}
      </h3>

      <nav className="mt-5 flex flex-col gap-3">
        {children}
      </nav>
    </div>
  );
}

/* ==========================================================
   FOOTER LINK
========================================================== */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="
        group
        flex
        w-fit
        items-center
        gap-1
        text-[10px]
        text-white/35
        transition-all
        duration-300

        hover:translate-x-1
        hover:text-[#FB7A00]

        sm:text-[11px]
      "
    >
      {children}

      <ChevronRight
        size={11}
        className="
          opacity-0
          -translate-x-1
          transition-all
          duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      />
    </Link>
  );
}

/* ==========================================================
   SOCIAL ICON
========================================================== */

function SocialIcon({ label, icon }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      aria-label={label}
      title={label}
      className="
        group
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-white/[0.07]
        bg-white/[0.025]
        text-white/40
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#FB7A00]/30
        hover:bg-[#FB7A00]
        hover:text-white
        hover:shadow-[0_8px_25px_rgba(251,122,0,0.2)]
      "
    >
      <span
        className="
          text-[12px]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        {icon}
      </span>
    </a>
  );
}

/* ==========================================================
   LOGO
========================================================== */

function Logo() {
  return (
    <Link
      to="/"
      aria-label="WakaDotCom home"
      className="
        group
        inline-flex
        items-center
      "
    >
      <img
        src="/Wakadotcom-logo.webp"
        alt="WakaDotCom"
        className="
          h-auto
          w-[120px]
          object-contain
          brightness-0
          invert
          transition-all
          duration-300

          group-hover:scale-[1.02]
        "
      />
    </Link>
  );
}