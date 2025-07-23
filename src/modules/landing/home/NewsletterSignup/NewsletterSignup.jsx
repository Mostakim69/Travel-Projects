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
      await new Promise((res) => setTimeout(res, 1500));
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: "You will get insider deals and travel hacks in your inbox.",
      });
      setEmail("");
    } catch {
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
    <section className="max-w-6xl mx-auto px-8 py-16 bg-[#0f172a] rounded-3xl shadow-lg shadow-purple-900/50 text-white">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        {/* Left: Incentive Text */}
        <div className="md:flex-1 text-center md:text-left">
          <h3
            className="text-3xl md:text-4xl font-extrabold
            bg-gradient-to-r from-sky-400 via-purple-500 to-indigo-400
            bg-clip-text text-transparent drop-shadow-xl"
          >
            📬 Get insider deals and travel hacks!
          </h3>
        </div>

        {/* Right: Form */}
        <form
          onSubmit={handleSubmit}
          className="md:flex-1 flex flex-col sm:flex-row items-center gap-6 w-full"
          noValidate
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow bg-[#1e293b] placeholder-indigo-400 text-white rounded-full py-4 px-6
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
              text-white font-semibold rounded-full py-4 px-10
              shadow-lg shadow-purple-700/70
              transition-all duration-300
              disabled:opacity-50 disabled:cursor-not-allowed
              glow-pulse"
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
