import { Outlet } from "react-router";
import Navbar from "./Navbar";
import CommonFooter from "./CommonFooter";
import NavbarDrawer from "./NavbarDrawer";

const RootLayout = () => {
  return (
    <div className="">
      <div
        className="navbar sticky top-3 z-50   
              text-white shadow-xl border border-[#1f1f1f]
              bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]
              backdrop-blur-md"
      >
        <Navbar />
      </div>
      {/* <NavbarDrawer /> */}
      <div className="min-h-[60vh] max-container">
        <Outlet />
      </div>
      <div className="bg-base-200">
        <CommonFooter />
      </div>
    </div>
  );
};

export default RootLayout;
