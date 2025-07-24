import { motion } from "framer-motion";
import {
  FaUserCheck,
  FaSearchLocation,
  FaCalendarCheck,
  FaSmileBeam,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearchLocation className="text-3xl text-sky-400" />,
    title: "Explore Packages",
    description:
      "Browse handpicked tours across Bangladesh with detailed insights and local charm.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-purple-400" />,
    title: "Select a Guide",
    description:
      "Choose from verified, traveler-rated guides based on your preferences and needs.",
  },
  {
    icon: <FaCalendarCheck className="text-3xl text-indigo-400" />,
    title: "Book Instantly",
    description:
      "Secure your guide and package with instant booking using our seamless platform.",
  },
  {
    icon: <FaSmileBeam className="text-3xl text-pink-400" />,
    title: "Enjoy Your Trip",
    description:
      "Meet your guide, follow your itinerary, and experience a worry-free journey!",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#0f172a] text-white py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        🚀 How DeshGuide Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <div data-aos="zoom-in-right">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#111827] border border-purple-700 hover:border-sky-500 p-6 text-center shadow-[0_0_20px_#7c3aed33] hover:scale-[1.03] transition-all duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-300 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
