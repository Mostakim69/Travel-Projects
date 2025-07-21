import { authLottie } from "../../../animation";
import LottieAnimation from "../../../animation/LottieAnimation";
import SignUpForm from "../components/SignUpForm";
import UseHelmet from "../../../hooks/useHelmet";
import { motion } from "motion/react";
import {
  bottomToTop,
  leftToRight,
  rightToLeft,
} from "../../../animation/motion";

const SignUp = () => {
  return (
    <div className="min-h-[80vh] mt-10 bg-gray-100 py-10 rounded-lg shadow">
      <UseHelmet title="Sign up" />
      <motion.div className="max-lg:max-w-[490px] mx-auto" {...bottomToTop}>
        <h2
          className="text-center text-xl sm:text-3xl font-semibold font-kaushan 
          "
        >
          WorkElevate connects talent with opportunity.
        </h2>
        <p className="text-center text-gray-500 ext-sm mb-10 mt-2">
          Sign up to access thousands of jobs, connect with employers, and take
          control of your career.
        </p>
      </motion.div>
      <div className="flex  flex-col-reverse lg:flex-row items-center justify-around *:flex-1 gap-7  mt-5">
        <motion.div
          className="lg:max-w-[480px]  order bg-gray-50 shadow-lg rounded-lg hover:shadow-sm hover:scale-98"
          {...rightToLeft}
        >
          <LottieAnimation anime={authLottie} />
        </motion.div>
        <motion.div className="max-w-[480px]" {...leftToRight}>
          <SignUpForm />
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;
