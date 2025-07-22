import { motion } from "framer-motion";

const Overview = () => {
  return (
    <section className="bg-[#111827] text-white py-16 px-6 md:px-10 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#00FF9C]">
          What is DeshGuide?
        </h2>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          <span className="text-white font-semibold">DeshGuide</span> is a
          modern tourism management platform built for exploring the beauty of
          Bangladesh with ease and trust. Whether you're a traveler looking for
          the perfect destination, a local guide offering your service, or
          someone eager to share unforgettable travel stories — DeshGuide
          connects everyone under one roof.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
          <div className="p-6 bg-[#1F2937] rounded-xl border border-[#2c2f3f] shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00FF9C] mb-2">
              🌍 Discover Destinations
            </h3>
            <p className="text-gray-300">
              Browse breathtaking locations across Bangladesh with curated
              information, images, and reviews.
            </p>
          </div>

          <div className="p-6 bg-[#1F2937] rounded-xl border border-[#2c2f3f] shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00FF9C] mb-2">
              👨‍🏫 Hire Trusted Guides
            </h3>
            <p className="text-gray-300">
              Book experienced, verified tour guides directly through the
              platform — securely and conveniently.
            </p>
          </div>

          <div className="p-6 bg-[#1F2937] rounded-xl border border-[#2c2f3f] shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00FF9C] mb-2">
              📖 Share Your Stories
            </h3>
            <p className="text-gray-300">
              Inspire others by sharing your travel experiences, complete with
              photos and location details.
            </p>
          </div>

          <div className="p-6 bg-[#1F2937] rounded-xl border border-[#2c2f3f] shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00FF9C] mb-2">
              🔐 Secure Bookings
            </h3>
            <p className="text-gray-300">
              Integrated with Stripe for seamless, safe payments across all
              services.
            </p>
          </div>

          <div className="p-6 bg-[#1F2937] rounded-xl border border-[#2c2f3f] shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00FF9C] mb-2">
              📊 Role-Based Dashboards
            </h3>
            <p className="text-gray-300">
              Tailored control panels for users, guides, and admins — with full
              access to manage data and bookings.
            </p>
          </div>

          <div className="p-6 bg-[#1F2937] rounded-xl border border-[#2c2f3f] shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-[#00FF9C] mb-2">
              📱 Fully Responsive
            </h3>
            <p className="text-gray-300">
              Built with modern UI/UX principles. Smooth on mobile, tablet, and
              desktop with a night-themed aesthetic.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Overview;
