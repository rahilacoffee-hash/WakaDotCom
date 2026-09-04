import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import TestimonialCard from "./Testimonialcard";

const AUTO_ADVANCE_MS = 5000;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
    scale: 0.96,
  }),

  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },

  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
    scale: 0.96,
  }),
};

export default function TestimonialSlider({
  testimonials = [],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  useEffect(() => {
    if (total === 0) return;

    setActiveIndex((current) =>
      Math.min(current, total - 1)
    );
  }, [total]);

  if (!total) return null;

  const prevIndex =
    (activeIndex - 1 + total) % total;

  const nextIndex =
    (activeIndex + 1) % total;

  function goNext() {
    setDirection(1);

    setActiveIndex(
      (current) => (current + 1) % total
    );
  }

  function goPrev() {
    setDirection(-1);

    setActiveIndex(
      (current) =>
        (current - 1 + total) % total
    );
  }

  function goToIndex(index) {
    if (index === activeIndex) return;

    setDirection(
      index > activeIndex ? 1 : -1
    );

    setActiveIndex(index);
  }

  // -----------------------------
  // Auto advance
  // -----------------------------

  useEffect(() => {
    if (isPaused || total <= 1) return;

    const timer = setTimeout(
      goNext,
      AUTO_ADVANCE_MS
    );

    return () => clearTimeout(timer);
  }, [
    activeIndex,
    isPaused,
    total,
  ]);

  // -----------------------------
  // Swipe
  // -----------------------------

  function handleDragEnd(_, info) {
    setIsPaused(false);

    const threshold = 60;

    if (info.offset.x < -threshold) {
      goNext();
    }

    if (info.offset.x > threshold) {
      goPrev();
    }
  }

  return (
    <div
      className="relative mx-auto max-w-6xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative flex items-center justify-center">

        {/* =========================
            LEFT PEEK
        ========================== */}

        {total > 1 && (
          <div
            className="
              hidden
              w-[300px]
              shrink-0
              -mr-16
              translate-y-4
              scale-[0.94]
              opacity-60
              lg:block
            "
          >
            <TestimonialCard
              testimonial={testimonials[prevIndex]}
              variant="peek"
            />
          </div>
        )}

        {/* =========================
            ACTIVE CARD
        ========================== */}

        <div
          className="
            relative
            z-10
            w-full
            max-w-[620px]
          "
        >
          <AnimatePresence
            initial={false}
            custom={direction}
            mode="popLayout"
          >
            <motion.div
              key={
                testimonials[activeIndex].id
              }
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: {
                  type: "spring",
                  stiffness: 320,
                  damping: 32,
                },
                opacity: {
                  duration: 0.25,
                },
                scale: {
                  duration: 0.25,
                },
              }}
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0,
              }}
              dragElastic={0.65}
              onDragStart={() =>
                setIsPaused(true)
              }
              onDragEnd={handleDragEnd}
              className="
                cursor-grab
                touch-pan-y
                active:cursor-grabbing
              "
            >
              <TestimonialCard
                testimonial={
                  testimonials[activeIndex]
                }
                variant="active"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================
            RIGHT PEEK
        ========================== */}

        {total > 1 && (
          <div
            className="
              hidden
              w-[300px]
              shrink-0
              -ml-16
              translate-y-4
              scale-[0.94]
              opacity-60
              lg:block
            "
          >
            <TestimonialCard
              testimonial={testimonials[nextIndex]}
              variant="peek"
            />
          </div>
        )}

        {/* =========================
            LEFT ARROW
        ========================== */}

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous testimonial"
          className="
            absolute
              hidden
            lg:flex
            left-0
            top-1/2
            z-30
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#303030]
            text-[#F5F5F5]
            shadow-lg
            transition-all
            duration-300
            hover:border-[#11B5AE]
            hover:text-[#11B5AE]
            lg:-left-5
          "
        >
          <FaChevronLeft size={12} />
        </button>

        {/* =========================
            RIGHT ARROW
        ========================== */}

        <button
          type="button"
          onClick={goNext}
          aria-label="Next testimonial"
          className="
            absolute
            hidden
            lg:flex
            right-0
            top-1/2
            z-30
            flex
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#303030]
            text-[#F5F5F5]
            shadow-lg
            transition-all
            duration-300
            hover:border-[#11B5AE]
            hover:text-[#11B5AE]
            lg:-right-5
          "
        >
          <FaChevronRight size={12} />
        </button>
      </div>

      {/* =========================
          PROGRESS
      ========================== */}

      <div className="mx-auto mt-8 flex w-full max-w-[620px] items-center gap-4">
        <div className="h-[2px] flex-1 overflow-hidden bg-white/10">
          <motion.div
            key={activeIndex}
            initial={{ width: "0%" }}
            animate={{
              width: isPaused
                ? undefined
                : "100%",
            }}
            transition={{
              duration:
                AUTO_ADVANCE_MS / 1000,
              ease: "linear",
            }}
            className="h-full bg-[#11B5AE]"
          />
        </div>

       
      </div>

      {/* =========================
          DOTS
      ========================== */}

      <div className="mt-5 flex justify-center gap-2">
        {testimonials.map(
          (testimonial, index) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() =>
                goToIndex(index)
              }
              aria-label={`Go to testimonial ${
                index + 1
              }`}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300

                ${
                  index === activeIndex
                    ? "w-7 bg-[#11B5AE]"
                    : "w-1.5 bg-white/20 hover:bg-white/50"
                }
              `}
            />
          )
        )}
      </div>
    </div>
  );
}