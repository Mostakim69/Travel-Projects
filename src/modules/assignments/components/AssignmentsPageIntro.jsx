import { motion } from "motion/react";
const AssignmentsPageIntro = () => {
  return (
    <div className="text-center mb-10">
      <motion.h1
        className="text-4xl max-sm:text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        📚 Available Assignments
      </motion.h1>
      <p className="text-gray-500 mt-2 max-w-2xl mx-auto max-sm:text-sm">
        Dive into interactive learning tasks tailored for your growth and
        challenge level.
      </p>
      <div className="w-32 mx-auto mt-4">
        {/* <Lottie animationData={animationData} loop={true} /> */}
      </div>
    </div>
  );
};

export default AssignmentsPageIntro;
