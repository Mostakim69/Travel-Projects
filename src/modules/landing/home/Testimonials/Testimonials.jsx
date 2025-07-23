import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Shamim Ahmed",
    photo: "https://i.ibb.co/2NyN2xq/avatar1.png",
    text: "DeshGuide made our family trip unforgettable. The tour guide was super friendly and helpful!",
    rating: 5,
  },
  {
    name: "Rumi Akter",
    photo: "https://i.ibb.co/Y8scbC9/avatar2.png",
    text: "Booking was fast, simple, and secure. I highly recommend DeshGuide for any traveler.",
    rating: 4,
  },
  {
    name: "Tanvir Hasan",
    photo: "https://i.ibb.co/wz7nHDk/avatar3.png",
    text: "I was amazed by the personalized guide recommendations. Truly next-level service!",
    rating: 5,
  },
];

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Testimonials = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        💬 What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
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
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
