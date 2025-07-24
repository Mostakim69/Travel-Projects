import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { Link } from "react-router";

const CallToActionFull = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-4 text-white relative overflow-hidden">
      {/* Marquee Heading */}
      <div className="opacity-10 absolute top-0 left-0 w-full z-0 pointer-events-none">
        <Marquee gradient={false} speed={50}>
          <h1 className="text-[100px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-sky-400 to-indigo-400 whitespace-nowrap">
            DeshGuide • Explore • Discover • Travel •
          </h1>
        </Marquee>
      </div>

      {/* Main CTA */}
      <div
        className="relative z-10 max-w-5xl mx-auto text-center space-y-6"
        data-aos="fade-up-right"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-md"
        >
          Ready to explore Bangladesh like never before?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="text-gray-300 max-w-xl mx-auto"
        >
          ✈️ Discover hidden gems, connect with trusted guides, and create
          unforgettable journeys with DeshGuide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Link
            to="/packages"
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-sky-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-[0_0_25px_#7c3aedaa] transition-all duration-300"
          >
            🌍 Start Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionFull;
