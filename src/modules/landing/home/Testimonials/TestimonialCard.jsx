import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const TestimonialCard = ({ testimonial, i }) => {
  return (
    <div>
      <motion.div
        custom={i}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
        className="rounded-2xl border border-purple-700 bg-gradient-to-br from-[#1e293b] to-[#111827] shadow-[0_0_25px_#7c3aed44] p-6 hover:scale-[1.03] transition-all duration-300"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={testimonial.photo}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full border border-purple-500"
          />
          <div>
            <h4 className="text-lg font-semibold text-sky-300">
              {testimonial.name}
            </h4>
            <div className="flex gap-1 text-yellow-400 text-sm">
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-300">{testimonial.text}</p>
      </motion.div>
    </div>
  );
};

export default TestimonialCard;
