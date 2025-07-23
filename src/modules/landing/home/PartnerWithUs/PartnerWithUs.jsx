import { motion } from "framer-motion";
import { Link } from "react-router";

const PartnerWithUs = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-6 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center bg-gradient-to-br from-[#1f2937] to-[#111827] rounded-3xl p-10 shadow-[0_0_30px_#9333ea55] border border-purple-700"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
          🤝 Partner With Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Are you a tour guide, travel agency, or hospitality provider? Join the
          DeshGuide platform and reach thousands of travelers looking for
          trusted experiences.
        </p>
        <Link
          to="/partner-signup"
          className="inline-block bg-gradient-to-r from-purple-600 to-sky-500 hover:from-purple-500 hover:to-sky-400 text-white font-semibold py-3 px-8 rounded-full shadow-md shadow-purple-800/50 transition-all duration-300"
        >
          Become a Partner
        </Link>
      </motion.div>
    </section>
  );
};

export default PartnerWithUs;
