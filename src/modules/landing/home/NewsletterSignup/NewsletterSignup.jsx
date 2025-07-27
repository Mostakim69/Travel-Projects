import { useState } from "react";
import { darkSwal } from "../../../../hooks/usePostData";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      darkSwal.fire({
        icon: "warning",
        title: "Please enter your email",
      });
      return;
    }
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 1500));
      darkSwal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "You will get insider deals and travel hacks in your inbox.",
      });
      setEmail("");
    } catch {
      darkSwal.fire({
        icon: "error",
        title: "Subscription failed",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-8 py-16 bg-[#0f172a] rounded-3xl shadow-lg shadow-purple-900/50 text-white">
      <div
        className="flex flex-col items-center gap-6 max-w-5xl mx-auto"
        data-aos="fade-up-right"
      >
        {/* Text Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-[40px]">Stay Inspired</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-xl">
            Join our newsletter and be the first to discover new updates, exclusive offers, and inspiration.
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6"
          noValidate
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/10 px-4 py-2.5 border border-white/20 rounded outline-none max-w-96 w-92"
            required
            aria-label="Email Address"
          />
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2.5 rounded active:scale-95 transition-all"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>

        {/* Privacy Text */}
        <p className="text-sm text-gray-500/90 mt-2 text-center">
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSignup;