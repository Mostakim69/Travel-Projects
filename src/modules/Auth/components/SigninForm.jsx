import { Link } from "react-router";
import SocialLogin from "./SocialLogin";

const SigninForm = () => {
  return (
    <form
      className="w-full max-w-md mx-auto bg-gradient-to-br from-[#0e0c2b] via-[#1a1843] to-[#121229] 
                 rounded-2xl border border-[#2f2b5c] p-6 shadow-md
                 backdrop-blur-md"
    >
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-4">
        Sign In Now
      </h2>

      <fieldset className="space-y-4">
        <div>
          <label htmlFor="email" className="text-sm text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Write your email"
            className="w-full px-4 py-2 rounded-full bg-[#1e1c3a] text-gray-200 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="text-sm text-gray-300">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Write your password"
            className="w-full px-4 py-2 rounded-full bg-[#1e1c3a] text-gray-200 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            required
          />
        </div>

        <div className="text-right">
          <Link
            to="/auth/forgot-pass"
            className="text-sm text-blue-400 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-full bg-blue-600 hover:bg-blue-700 
                     text-white font-semibold transition-all duration-200 
                     hover:shadow-md hover:shadow-blue-500/30 pulse-glow"
        >
          Sign In
        </button>

        <p className="text-sm text-center text-gray-400 mt-2">
          Not a member?{" "}
          <Link to="/auth/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>

        <SocialLogin />
      </fieldset>
    </form>
  );
};

export default SigninForm;
