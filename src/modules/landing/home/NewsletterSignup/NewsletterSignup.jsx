import { useState } from "react";
import Swal from "sweetalert2";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Please enter your email",
      });
      return;
    }
    setLoading(true);
    try {
      // Mock API call delay
      await new Promise((res) => setTimeout(res, 1500));
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "You will get insider deals and travel hacks in your inbox.",
      });
      setEmail("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Subscription failed",
        text: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-xl mx-auto px-6 py-12 bg-[#0f172a] rounded-3xl shadow-lg shadow-purple-900/50 text-white">
      <h3 className="text-center text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400 bg-clip-text text-transparent drop-shadow-xl">
        📬 Get insider deals and travel hacks!
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-4"
        noValidate
      >
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:flex-1 bg-[#1e293b] placeholder-indigo-400 text-white rounded-full py-3 px-5
            border-2 border-transparent
            focus:outline-none focus:border-gradient-to-r focus:border-sky-400 focus:ring-2 focus:ring-purple-500
            transition-all duration-300
            shadow-md shadow-indigo-700/50
            placeholder-opacity-70
            focus:placeholder-opacity-40"
          required
          aria-label="Email Address"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500
            text-white font-semibold rounded-full py-3 px-8
            shadow-lg shadow-purple-700/70
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            glow-pulse"
        >
          {loading ? "Submitting..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default NewsletterSignup;
