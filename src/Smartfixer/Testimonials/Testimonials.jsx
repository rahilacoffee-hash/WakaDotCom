import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import testimonialsData, {
  fetchTestimonials,
} from "./testimonials";

import TestimonialSlider from "./Testimonialslider";

export default function Testimonials() {
  const [testimonials, setTestimonials] =
    useState([]);

  const [isLoading, setIsLoading] =
    useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadTestimonials() {
      try {
        const data = await fetchTestimonials();

        if (!mounted) return;

        setTestimonials(
          Array.isArray(data) ? data : []
        );
      } catch (requestError) {
        if (!mounted) return;

        setError(
          requestError?.message ||
            "Unable to load testimonials."
        );
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    loadTestimonials();

    return () => {
      mounted = false;
    };
  }, []);

  /*
   * API testimonials take priority.
   * Figma/design testimonials are used as fallback.
   */
  const displayTestimonials =
    testimonials.length > 0
      ? testimonials
      : testimonialsData.testimonials;

  return (
    <section
      id="testimonials"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#1B1B1B]
        px-5
        py-20
        text-white
        sm:px-8
        lg:px-12
        lg:py-28
      "
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#11B5AE]/[0.06]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#11B5AE]/[0.05]
          blur-[110px]
        "
      />

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.018]
          [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)]
          [background-size:55px_55px]
        "
      />

      {/* Orange/teal decorative dot */}
      <span
        className="
          pointer-events-none
          absolute
          right-[12%]
          top-[18%]
          h-2
          w-2
          rounded-full
          bg-[#11B5AE]
          shadow-[0_0_0_8px_rgba(17,181,174,.08)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* =========================
            HEADER
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >
          {/* Label */}

          <div
            className="
              mb-5
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-8 bg-[#11B5AE] sm:w-12" />

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#11B5AE]
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              {testimonialsData.badge}
            </span>

            <span className="h-px w-8 bg-[#11B5AE] sm:w-12" />
          </div>

          {/* Heading */}

          <h2
            className="
              text-[2.5rem]
              font-black
              leading-[1]
              tracking-[-0.055em]
              text-[#F5F5F5]
              sm:text-5xl
              md:text-6xl
            "
          >
            {testimonialsData.title}

            <br />

            <span className="text-[#11B5AE]">
              {testimonialsData.highlight}
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-5
              max-w-[560px]
              text-sm
              leading-7
              text-[#999]
              sm:text-[15px]
            "
          >
            {testimonialsData.description}
          </p>
        </motion.div>

        {/* =========================
            SLIDER
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 sm:mt-14 lg:mt-16"
        >
          {/* Loading */}

          {isLoading && (
            <div className="flex min-h-[320px] items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div
                  className="
                    h-7
                    w-7
                    animate-spin
                    rounded-full
                    border-2
                    border-white/10
                    border-t-[#11B5AE]
                  "
                />

                <span className="text-xs text-white/40">
                  Loading testimonials…
                </span>
              </div>
            </div>
          )}

          {/* Error */}

          {!isLoading &&
            error &&
            testimonials.length === 0 && (
              <div
                className="
                  mx-auto
                  max-w-xl
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  text-center
                "
              >
                <p className="text-sm text-white/50">
                  {error}
                </p>
              </div>
            )}

          {/* Slider */}

          {!isLoading && (
            <TestimonialSlider
              testimonials={
                displayTestimonials
              }
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}