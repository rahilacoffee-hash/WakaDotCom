import React from "react";
import { ArrowUpRight } from "lucide-react";

const ClientLogo = ({ partner }) => {
  return (
    <div className="group/logo relative w-[150px] shrink-0 sm:w-[190px] lg:w-[210px]">
      <div
        className="
          relative flex h-[105px] flex-col justify-between
          overflow-hidden rounded-2xl
          border border-[#BFEBDD]
          bg-white/90
          p-4
          shadow-[0_10px_35px_rgba(0,107,77,0.04)]
          transition-all duration-500
          
          group-hover/logo:-translate-y-1
          group-hover/logo:border-[#008F68]/30
          group-hover/logo:shadow-[0_18px_45px_rgba(0,107,77,0.12)]

          sm:h-[125px]
          sm:rounded-[1.4rem]
          sm:p-5
        "
      >
        {/* Hover glow */}
        <div
          className="
            pointer-events-none absolute
            -right-8 -top-8
            h-20 w-20
            rounded-full
            bg-[#008F68]/10
            opacity-0
            blur-2xl
            transition-opacity duration-500
            group-hover/logo:opacity-100
          "
        />

        {/* Logo */}
        <div className="relative flex h-12 items-center justify-center sm:h-14">
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            className="
              max-h-11
              max-w-[105px]
              object-contain
              
              opacity-100
              transition-all
              duration-500

              group-hover/logo:grayscale-0
              group-hover/logo:opacity-100
              group-hover/logo:scale-105

              sm:max-h-12
              sm:max-w-[125px]
            "
          />
        </div>

        {/* Bottom info */}
        <div className="relative flex items-center justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-bold text-[#171A19] sm:text-xs">
              {partner.name}
            </p>

            {partner.category && (
              <p className="mt-0.5 truncate text-[8px] font-medium text-[#66736E] sm:text-[9px]">
                {partner.category}
              </p>
            )}
          </div>

          <div
            className="
              flex h-6 w-6 shrink-0 items-center justify-center
              rounded-full
              border border-[#BFEBDD]
              bg-[#EFFFF9]
              text-[#008F68]
              opacity-0
              translate-x-1
              transition-all duration-300
              group-hover/logo:translate-x-0
              group-hover/logo:opacity-100
            "
          >
            <ArrowUpRight size={11} />
          </div>
        </div>

        {/* Bottom accent */}
        <div
          className="
            absolute bottom-0 left-5 right-5 h-[2px]
            origin-left scale-x-0
            rounded-full bg-[#008F68]
            transition-transform duration-500
            group-hover/logo:scale-x-100
          "
        />
      </div>
    </div>
  );
};

export default ClientLogo;