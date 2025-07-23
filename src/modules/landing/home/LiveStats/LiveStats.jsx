import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { label: "Packages", value: 100, suffix: "+" },
  { label: "Guides", value: 50, suffix: "+" },
  { label: "Districts", value: 25, suffix: "+" },
  { label: "Bookings", value: 5000, suffix: "+" },
];

const LiveStats = () => {
  return (
    <section className="px-4 py-20 bg-[#0f172a] text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-sky-400 via-violet-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse"
      >
        📊 Live Tour Metrics
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1e1b2d] to-[#111827] border border-indigo-600 rounded-2xl p-6 shadow-[0_0_25px_#6366f180] hover:shadow-[0_0_40px_#7c3aed99] transition-all duration-300 backdrop-blur-md hover:scale-[1.03]"
          >
            <div className="text-3xl md:text-4xl font-bold text-sky-400 drop-shadow-md">
              <CountUp end={stat.value} duration={2} />
              {stat.suffix}
            </div>
            <p className="text-gray-300 mt-2 tracking-wide font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LiveStats;
