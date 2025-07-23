import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is DeshGuide?",
    answer:
      "DeshGuide is a complete tour management platform focused on exploring the beauty of Bangladesh. It helps you discover packages, book trips, find certified local tour guides, and share your travel stories.",
  },
  {
    question: "How do I book a tour package?",
    answer:
      "To book a package, visit the Packages section, view details, and submit a booking request by selecting your preferred date and tour guide.",
  },
  {
    question: "Can I choose my own tour guide?",
    answer:
      "Yes! You can select from available certified tour guides using a dropdown or view mode in the booking form. Each guide has a detailed profile page.",
  },
  {
    question: "Is payment secure on DeshGuide?",
    answer:
      "Absolutely. We use Stripe for secure and encrypted transactions, ensuring your data is safe at all times.",
  },
  {
    question: "Can I become a tour guide?",
    answer:
      "Yes. Apply through the 'Become a Guide' section. Once verified by admins, your profile becomes available for tourists to select.",
  },
  {
    question: "How do I share my travel story?",
    answer:
      "After completing a trip, go to the 'Stories' section and share your experiences. Upload photos, write memories, and inspire others to explore!",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16 text-white space-y-10 animate-fade-in">
      <h2 className="text-4xl font-bold text-center glow-pulse text-purple-400 mb-6">
        💡 Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="border border-purple-700 bg-[#111827] rounded-lg overflow-hidden shadow-md hover:shadow-purple-500/40 transition-shadow duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-[#1f2937] transition-colors duration-300"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                className="text-purple-400 text-xl"
              >
                ⬇
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-300"
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
