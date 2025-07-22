import { motion } from "motion/react";
import { Link } from "react-router";
import { topToBottom } from "../../../animation/motion";
import useAuth from "../../../hooks/useAuth";
import Signout from "../../Auth/components/Signout";
import Brand from "../ui/Brand";
import Avatar from "../ui/Avatar";
import navbarLinks from "./navbarLinksConstant";
import DropDown from "../ui/DropDown";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <motion.nav
      {...topToBottom}
      className="navbar sticky top-3 z-50 mx-3 px-4 rounded-2xl bg-[#0d0d0d] text-white shadow-[0_4px_20px_rgba(0,255,156,0.1)] backdrop-blur-md border border-[#1f1f1f]"
    >
      {/* Left Section */}
      <div className="navbar-start">
        {/* Hamburger menu */}
        <div className="dropdown dropdown-right lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-[#1a1a1a]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#00FF9C]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 p-2 shadow-xl bg-[#111] rounded-xl border border-[#222] min-w-[180px] z-[999] text-white"
          >
            {navbarLinks()}
          </ul>
        </div>
        <Brand />
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">{navbarLinks()}</ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <DropDown>
              <Avatar />
            </DropDown>
            <Signout>
              <button className="px-4 py-2 rounded-lg bg-[#00FF9C] text-black font-semibold hover:scale-105 hover:shadow-[0_0_12px_#00FF9C] transition-all duration-200">
                Sign Out
              </button>
            </Signout>
          </div>
        ) : (
          <Link
            to="/auth/signin"
            className="px-4 py-2 rounded-lg bg-[#00BFFF] text-black font-semibold hover:scale-105 hover:shadow-[0_0_12px_#00BFFF] transition-all duration-200"
          >
            Sign In
          </Link>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
