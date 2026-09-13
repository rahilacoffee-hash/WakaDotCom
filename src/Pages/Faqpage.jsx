import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiChevronDown,
  FiChevronLeft,
  FiShoppingBag,
  FiTruck,
  FiCreditCard,
  FiRotateCcw,
  FiUser,
  FiArrowRight,
  FiMessageCircle,
  FiMail,
} from "react-icons/fi";

/* =========================================================
   DATA
========================================================= */

let categories = [
  { label: "All", icon: FiShoppingBag },
  { label: "Orders", icon: FiShoppingBag },
  { label: "Payments", icon: FiCreditCard },
  { label: "Delivery", icon: FiTruck },
  { label: "Returns", icon: FiRotateCcw },
  { label: "Account", icon: FiUser },
];

let faqs = [
  {
    id: 1,
    category: "Orders",
    question: "What is WakaDotCom?",
    answer:
      "WakaDotCom is Africa's connected digital lifestyle ecosystem — one signup gets you access to four apps: WakaFoods for food delivery, WakaStores for shopping, WakaRider for deliveries, and SmartFixer for finding trusted repair professionals near you.",
  },
  {
    id: 2,
    category: "Orders",
    question: "Do I need a separate account for each app?",
    answer:
      "No. One WakaDotCom signup works across all four apps, so you can order food, shop, book a delivery, or find a fixer without creating a new account each time.",
  },
  {
    id: 3,
    category: "Payments",
    question: "What payment methods are accepted?",
    answer:
      "We accept debit/credit cards, bank transfers, and USSD payments across every app in the ecosystem. All payments are processed securely and your card details are never stored on our servers.",
  },
  {
    id: 4,
    category: "Payments",
    question: "Is it safe to save my card details?",
    answer:
      "Yes. Saved cards are tokenized and encrypted through our payment partner, so your actual card number is never exposed or stored on WakaDotCom's own systems.",
  },
  {
    id: 5,
    category: "Delivery",
    question: "How does WakaRider work?",
    answer:
      "WakaRider connects you with nearby riders for on-demand deliveries — from documents to packages. Request a rider through the app, track them in real time, and get notified the moment your delivery arrives.",
  },
  {
    id: 6,
    category: "Delivery",
    question: "How long does a WakaStores order take to arrive?",
    answer:
      "Delivery times depend on your location and the seller. Most orders within major cities arrive in 1-3 business days, while other areas may take a little longer. You'll see an estimated delivery window at checkout.",
  },
  {
    id: 7,
    category: "Returns",
    question: "What's the return policy on WakaStores?",
    answer:
      "Most items can be returned within 7 days of delivery if they're unused and in their original packaging. Some categories like perishables or personal care items aren't eligible. Check the product page for specifics.",
  },
  {
    id: 8,
    category: "Returns",
    question: "How do I request a refund?",
    answer:
      "Go to your order history, select the item, and choose 'Request a return'. Once the seller confirms receipt of the returned item, your refund is processed back to your original payment method.",
  },
  {
    id: 9,
    category: "Account",
    question: "How do I create a WakaDotCom account?",
    answer:
      "Tap Get Started on the homepage, enter your phone number or email, and verify with the code we send you. Once verified, you're ready to use any app in the ecosystem.",
  },
  {
    id: 10,
    category: "Account",
    question: "How do I become a fixer, rider, or merchant on the platform?",
    answer:
      "Head to Services in the navigation and choose the role that fits — SmartFixer, WakaRider, or WakaStores. Each has its own quick onboarding flow and verification step before you can start receiving jobs or orders.",
  },
];



/* =========================================================
   SCROLLBAR HIDE (utility not shipped in core Tailwind)
========================================================= */

function ScrollbarHideStyle() {
  return (
    <style>{`
      .scrollbar-hide::-webkit-scrollbar { display: none; }
      .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
  );
}

/* =========================================================
   FAQ ITEM
========================================================= */

function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? "border-[#FB7A00]/25 bg-white shadow-[0_15px_40px_rgba(251,122,0,0.08)]"
          : "border-[#FB7A00]/10 bg-white/70 hover:border-[#FB7A00]/20 hover:bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
      >
        <span className="text-sm font-semibold text-[#1B1B1B] sm:text-base">
          {faq.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
            isOpen ? "bg-[#FB7A00] text-white" : "bg-[#FFE8D1] text-[#FB7A00]"
          }`}
        >
          <FiChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-6 text-[#766B6D] sm:px-6 sm:pb-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

export default function FaqPage() {
  let [activeCategory, setActiveCategory] = useState("All");
  let [searchTerm, setSearchTerm] = useState("");
  let [openId, setOpenId] = useState(faqs[0].id);

  let filteredFaqs = useMemo(() => {
    let query = searchTerm.trim().toLowerCase();

    return faqs.filter((faq) => {
      let matchesCategory =
        activeCategory === "All" || faq.category === activeCategory;

      let matchesQuery =
        query.length === 0 ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchTerm]);

  function handleToggle(id) {
    setOpenId((current) => (current === id ? null : id));
  }

  return (
    <main className="min-h-screen bg-white">
      <ScrollbarHideStyle />
     

      <section className="relative overflow-hidden bg-[#FFF5EB] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FB7A00]/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-white blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="/"
              className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#766B6D] transition-colors hover:text-[#FB7A00]"
            >
              <FiChevronLeft size={15} />
              Back to Home
            </a>

            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FB7A00]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FB7A00]">
                Help Center
              </span>
            </div>

            <h1 className="text-3xl font-medium leading-[1.05] tracking-[-0.05em] text-[#1B1B1B] sm:text-4xl lg:text-5xl">
              How can we help?
            </h1>

            <p className="mt-4 text-sm leading-6 text-[#766B6D] sm:text-base">
              Answers to the most common questions about WakaFoods,
              WakaStores, WakaRider, and SmartFixer.
            </p>

            <div className="relative mt-8">
              <FiSearch
                size={16}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#766B6D]"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search for a question..."
                className="w-full rounded-full border border-[#FB7A00]/15 bg-white py-3.5 pl-11 pr-5 text-sm text-[#1B1B1B] shadow-[0_10px_30px_rgba(90,50,10,0.06)] outline-none transition-all duration-300 placeholder:text-[#AFA3A4] focus:border-[#FB7A00]/40"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="scrollbar-hide -mx-4 mb-8 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
            {categories.map((category) => {
              let Icon = category.icon;
              let active = activeCategory === category.label;

              return (
                <button
                  key={category.label}
                  type="button"
                  onClick={() => setActiveCategory(category.label)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border-[#FB7A00] bg-[#FB7A00] text-white shadow-[0_10px_25px_rgba(251,122,0,0.2)]"
                      : "border-[#FB7A00]/15 bg-white text-[#1B1B1B] hover:border-[#FB7A00]/30 hover:bg-[#FFE8D1]"
                  }`}
                >
                  <Icon size={14} />
                  {category.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              <motion.div layout className="space-y-3">
                {filteredFaqs.map((faq, index) => (
                  <FaqItem
                    key={faq.id}
                    faq={faq}
                    index={index}
                    isOpen={openId === faq.id}
                    onToggle={() => handleToggle(faq.id)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-[24px] border border-dashed border-[#FB7A00]/25 bg-[#FFF5EB] px-6 py-16 text-center"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FFE8D1] text-[#FB7A00]">
                  <FiSearch />
                </div>
                <p className="mt-4 text-sm font-bold text-[#1B1B1B]">
                  No matching questions
                </p>
                <p className="mt-1 text-xs text-[#766B6D]">
                  Try a different search term or browse another category.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex flex-col items-center gap-4 rounded-[24px] bg-[#1B1B1B] p-8 text-center text-white sm:p-10"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FB7A00]/15 text-[#FB7A00]">
              <FiMessageCircle size={18} />
            </div>

            <div>
              <p className="text-sm font-bold sm:text-base">
                Still have questions?
              </p>
              <p className="mt-1 text-xs text-white/50 sm:text-sm">
                Our support team is here to help, seven days a week.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <a
                href="mailto:support@wakadotcom.com"
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1B1B1B]"
              >
                <FiMail size={13} />
                Email support
              </a>

              <a
                href="https://wa.me/2348100000000"
                className="group flex items-center gap-2 rounded-full bg-[#FB7A00] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#E56D00] hover:shadow-[0_10px_30px_rgba(251,122,0,0.25)]"
              >
                Chat with us
                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <a
              href="/"
              className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 transition-colors hover:text-white"
            >
              <FiChevronLeft size={13} />
              Back to Home
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}