import { motion } from "motion/react";
import {
  FaPlus,
  FaClipboardList,
  FaCheckCircle,
  FaFilter,
  FaEdit,
  FaEye,
  FaChartLine,
  FaGoogleDrive,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPlus className="text-white text-2xl" />,
    title: "Create Assignments",
    description:
      "Easily create tasks with titles, marks, difficulty levels, and deadlines.",
    bg: "bg-gradient-to-br from-indigo-500 to-purple-500",
  },
  {
    icon: <FaClipboardList className="text-white text-2xl" />,
    title: "Attempt Assignments",
    description:
      "Submit answers via Google Docs with notes and progress tracking.",
    bg: "bg-gradient-to-br from-pink-500 to-red-500",
  },
  {
    icon: <FaCheckCircle className="text-white text-2xl" />,
    title: "Evaluate Peers",
    description: "Review and grade your peers to sharpen your understanding.",
    bg: "bg-gradient-to-br from-emerald-500 to-teal-500",
  },
  {
    icon: <FaFilter className="text-white text-2xl" />,
    title: "Smart Filtering",
    description:
      "Use advanced filters to sort assignments by keyword or difficulty.",
    bg: "bg-gradient-to-br from-yellow-500 to-orange-500",
  },
  {
    icon: <FaEdit className="text-white text-2xl" />,
    title: "Update Assignments",
    description:
      "Edit your posted tasks with validations and auto-filled forms.",
    bg: "bg-gradient-to-br from-blue-500 to-sky-400",
  },
  {
    icon: <FaEye className="text-white text-2xl" />,
    title: "Assignment Details",
    description: "Deep dive into task metadata, feedback, and comments.",
    bg: "bg-gradient-to-br from-fuchsia-500 to-pink-400",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Track Progress",
    description: "Visualize your academic growth with insightful analytics.",
    bg: "bg-gradient-to-br from-cyan-500 to-blue-500",
  },
  {
    icon: <FaGoogleDrive className="text-white text-2xl" />,
    title: "Google Docs Support",
    description: "Integrate Docs seamlessly for smooth submission and access.",
    bg: "bg-gradient-to-br from-lime-500 to-green-500",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-base-200 to-base-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-neutral mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          🚀 Features That Make You Smarter
        </motion.h2>
        <motion.p
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          From creating and completing assignments to grading your
          peers—EduVerse empowers your study group with every essential tool.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, rotate: 1 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-base-100/80 backdrop-blur border border-base-300 shadow-lg p-6 rounded-2xl hover:shadow-2xl transition-all group"
            >
              <div
                className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-4 shadow-lg ${feature.bg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-neutral group-hover:text-primary duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
