import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";

export default function TestimonialCard({
  testimonial,
  variant = "active",
}) {
  const isPeek = variant === "peek";

  if (!testimonial) return null;

  return (
    <motion.article
      initial={isPeek ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        relative
        overflow-hidden
        rounded-[18px]
        border
        border-white/[0.06]
        bg-[#303030]
        transition-all
        duration-500

        ${
          isPeek
            ? `
              h-[170px]
              w-full
              px-6
              py-6
            `
            : `
              min-h-[320px]
              w-full
              px-7
              py-8
              sm:px-9
              md:px-12
              md:py-10
            `
        }
      `}
    >
      {/* subtle glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[#11B5AE]/5
          blur-3xl
        "
      />

      {/* Quote icon */}
      <div
        className={`
          pointer-events-none
          absolute
          right-7
          top-6
          text-[#11B5AE]/20

          ${isPeek ? "text-[32px]" : "text-[42px]"}
        `}
      >
        <FaQuoteRight />
      </div>

      {/* Quote mark */}
      <div
        className={`
          absolute
          left-7
          top-5
          font-serif
          font-black
          leading-none
          text-[#11B5AE]

          ${isPeek ? "text-[38px]" : "text-[50px]"}
        `}
      >
        “
      </div>

      {/* Quote */}
      <p
        className={`
          relative
          z-10
          text-[#F5F5F5]

          ${
            isPeek
              ? `
                line-clamp-4
                pl-7
                pr-4
                pt-3
                text-[13px]
                leading-[1.45]
              `
              : `
                max-w-[650px]
                pt-7
                text-[16px]
                leading-[1.7]
                sm:text-[17px]
                md:text-[18px]
              `
          }
        `}
      >
        {testimonial.quote}
      </p>

      {/* Author */}
      <div
        className={`
          flex
          items-center

          ${isPeek ? "mt-5 pl-7" : "mt-8"}
        `}
      >
        <span
          className={`
            mr-3
            block
            h-[2px]
            rounded-full
            bg-[#11B5AE]

            ${isPeek ? "w-6" : "w-9"}
          `}
        />

        <span
          className={`
            font-semibold
            text-[#F2F2F2]

            ${isPeek ? "text-[10px]" : "text-xs"}
          `}
        >
          {testimonial.name}
        </span>
      </div>

      {/* bottom accent */}
      {!isPeek && (
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[3px]
            w-24
            bg-[#11B5AE]
          "
        />
      )}
    </motion.article>
  );
}