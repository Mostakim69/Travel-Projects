import { bottomToTop } from "../../../animation/motion";
import { motion } from "motion/react";
import { sidebarDatas } from "./constant";
import SideBarCard from "./SideBarCard";

const AuthSidebar = () => {
  return (
    <motion.div
      className="bg-base-200 p-3 flex flex-col gap-8 rounded-md mb-5"
      {...bottomToTop}
    >
      <h2 className="text-xl font-bold text-purple-900 text-center">
        Why Sign In to EduVerse?
      </h2>

      {sidebarDatas.map((sidebar, idx) => (
        <SideBarCard sideBar={sidebar} key={idx} />
      ))}
    </motion.div>
  );
};

export default AuthSidebar;
