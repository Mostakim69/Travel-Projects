import TestimonialCard from "./TestimonialCard";

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

const Testimonials = () => {
  return (
    <section className="bg-[#0f172a] py-20 px-4 text-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-14 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl animate-pulse">
        💬 What Our Users Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={testimonial.name}
            testimonial={testimonial}
            i={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
