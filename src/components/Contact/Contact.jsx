import { motion } from "framer-motion";
import { FiPhoneCall, FiMail, FiMessageCircle, FiTarget } from "react-icons/fi";

let channels = [
  {
    label: "Call",
    value: "+234 816 566 2099",
    href: "tel:+2348165662099",
    icon: <FiPhoneCall />,
  },
  {
    label: "WhatsApp",
    value: "Chat with support",
    href: "https://wa.me/2348165662099",
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
    <section id="contact" className="bg-[#FFF5EB] py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 bg-[#FDE9D3] text-[#8A4A00] text-xs font-bold px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FB7A00]" />
            Get in touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#171717] mt-6 leading-tight">
            Whichever service you're using, help is one message away.
          </h2>
          <p className="text-[#6B6B6B] text-lg mt-5 leading-relaxed">
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
          className="mt-14 rounded-[32px] overflow-hidden border border-black/5 shadow-[0_30px_80px_rgba(251,122,0,0.12)] grid md:grid-cols-5"
        >

          {/* Left — orange panel */}
          <div className="relative md:col-span-2 bg-gradient-to-br from-[#FB7A00] to-[#C25E00] p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
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
                  transition-colors duration-300 hover:bg-[#FFF5EB]
                  ${i !== channels.length - 1 ? "border-b border-black/5" : ""}
                `}
              >
                <div className="w-11 h-11 flex-shrink-0 rounded-full bg-[#FDE9D3] text-[#FB7A00] flex items-center justify-center text-lg group-hover:bg-[#FB7A00] group-hover:text-white transition-colors duration-300">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[#171717] font-bold text-base">{c.label}</p>
                  <p className="text-[#6B6B6B] text-sm mt-0.5">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}