import { Link } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn"; // if you use classnames or twMerge

const SidebarLink = ({ to, text, active }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 0 12px rgba(99, 102, 241, 0.7)",
        transition: { duration: 0.3 },
      }}
    >
      <Link
        to={to}
        className={cn(
          "flex items-center px-4 py-2 rounded-md font-medium transition-all duration-300 group",
          active
            ? "bg-indigo-700 text-white border border-indigo-400 shadow-lg animate-pulse"
            : "bg-gray-800 text-indigo-300 border border-transparent hover:bg-indigo-800 hover:text-white hover:border-indigo-600",
        )}
      >
        <span className="relative">
          {text}
          {/* Lighting dot effect */}
          {active && (
            <span className="absolute -top-2 -right-2 h-2 w-2 bg-indigo-400 rounded-full animate-ping" />
          )}
        </span>
      </Link>
    </motion.div>
  );
};

export default SidebarLink;
