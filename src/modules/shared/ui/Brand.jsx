import { motion } from "motion/react";
import { useNavigate } from "react-router";

const Brand = () => {
  const navigate = useNavigate();

  return (
    <div>
      <motion.button
        onClick={() => navigate("/")}
        className="text-xl ml-2"
        animate={{
          color: ["#ff5733", "#33ff33", "#8a33ff", "#ce9733"],
          transition: { duration: 9, repeat: Infinity },
        }}
      >
        EduVerse
      </motion.button>
    </div>
  );
};

export default Brand;
