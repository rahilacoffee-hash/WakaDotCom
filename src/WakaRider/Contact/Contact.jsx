import { motion } from "framer-motion";
import { FiPhoneCall, FiMail, FiMessageCircle, FiTarget } from "react-icons/fi";

let channels = [
  {
    label: "Call",
    value: "+234 816 000 0000",
    href: "tel:+2348100000000",
    icon: <FiPhoneCall />,
  },
  {
    label: "WhatsApp",
    value: "Chat with support",
    href: "https://wa.me/2348100000000",
    icon: <FiMessageCircle />,
  },
  {
    label: "Email",
    value: "support@wakadotcom.com",
    href: "mailto:support@wakadotcom.com",
    icon: <FiMail />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#EFFFF9] py-24 sm:py-28 overflow-hidden relative">

         {/* FIX: these glows were left over at #1769C2 (a different page's
             blue), clashing with the green WakaRider theme used everywhere
             else in this section. Recolored to #008F68. */}
         <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-20
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#008F68]/[0.06]
          blur-3xl
          
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#008F68]/[0.05]
          blur-3xl
        "
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
              <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
              }}
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#BFEBDD]
                bg-white/75
                px-3
                py-1.5
                shadow-sm
                backdrop-blur-md

                sm:mb-6
                sm:px-4
                sm:py-2
              "
            >
              <span
                className="
                  flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#008F68]
                  shadow-[0_0_0_4px_rgba(0,143,104,0.08)]
                "
              />

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#008F68]

                  sm:text-[10px]
                  sm:tracking-[0.22em]
                "
              >
                 Get in touch
              </span>
            </motion.div>
          {/* FIX: ink/muted nudged to the exact tokens the WakaRider
              Hero uses (#171A19 / #66736E) instead of approximate
              near-duplicates (#171717 / #6B6B6B) */}
          <h2 className="text-4xl md:text-5xl font-black text-[#171A19] mt-6 leading-tight">
            Whichever service you're using, help is one message away.
          </h2>
          <p className="text-[#66736E] text-lg mt-5 leading-relaxed">
            Repairs, food, delivery or commerce — it's the same support team behind all of them.
            Reach us however's easiest.
          </p>
        </motion.div>

        {/* Split panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mt-14 rounded-[32px] overflow-hidden border border-black/5  grid md:grid-cols-5"
        >

          {/* Left — FIX: "gradient" was from-[#008F68] to-[#008F68], i.e.
              a color fading into itself, which just renders as a flat
              fill. Given a real second stop (#00694A) so it actually
              gradients. */}
          <div className="relative md:col-span-2 bg-gradient-to-br from-[#008F68] to-[#00694A] p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
            <FiTarget className="absolute -right-10 -bottom-10 text-white/10" size={220} />

            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center">
                <FiTarget className="text-white" size={20} />
              </div>
              <p className="text-white text-xl font-bold mt-6 leading-snug">
                One support team, every service.
              </p>
              <p className="text-white/75 text-sm mt-3 leading-relaxed">
                Every fixer, rider and seller on WakaDotCom is verified — and so is
                the person who picks up when you write in.
              </p>
            </div>

            <div className="relative mt-10 pt-6 border-t border-white/20">
              <p className="text-white text-3xl font-black">&lt; 15 min</p>
              <p className="text-white/70 text-sm mt-1">average first response</p>
            </div>
          </div>

          {/* Right — contact directory */}
          <div className="md:col-span-3 bg-white">
            {channels.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.label === "WhatsApp" ? "_blank" : undefined}
                rel={c.label === "WhatsApp" ? "noreferrer" : undefined}
                className={`
                  group flex items-center gap-5 px-8 sm:px-10 py-7
                  transition-colors duration-300 hover:bg-[#EFFFF9]
                  ${i !== channels.length - 1 ? "border-b border-black/5" : ""}
                `}
              >
                {/* FIX: default and hover were both bg-[#008F68]
                    text-white — identical, so hovering a channel gave
                    zero visual feedback. Default is now the light mint
                    chip (#D5F8EC / #008F68) used for icon chips in the
                    Hero, flipping to solid green + white on hover. */}
                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#D5F8EC] text-[#008F68] flex items-center justify-center text-lg group-hover:bg-[#008F68] group-hover:text-white transition-colors duration-300">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[#171A19] font-bold text-base">{c.label}</p>
                  <p className="text-[#66736E] text-sm mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}