import { motion } from "motion/react";
import { Link } from "react-router";

const BannerCard = () => {
  return (
    <div className="max-lg:mt-10 lg:max-w-[500px] flex-1 ">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 4 } }}
        className="sm:text-4xl text-2xl font-bold font-kaushan"
      >
        Collaborate. Create. Conquer – Together on
        <motion.span
          animate={{
            color: ["#ff5733", "#33ff33", "#8a33ff"],
            transition: { duration: 2, repeat: Infinity },
          }}
        >
          {" "}
          EduVerse,
        </motion.span>{" "}
      </motion.h1>
      <p className="py-6">
        Connect with friends, conquer assignments, and excel together. EduVerse
        is your go-to platform for collaborative online study, where every
        registered user is a friend, making group projects and knowledge sharing
        effortless. Dive into a universe of shared learning and achieve your
        academic goals, together.
      </p>
      <button className="btn btn-info btn-active rounded-full text-white">
        <Link to="/jobs">Explore Jobs</Link>
      </button>
    </div>
  );
};

export default BannerCard;
