import { Outlet } from "react-router";
import { CommonFooter } from "../shared/Layout";
import NavbarDrawer from "../shared/Layout/NavbarDrawer";

const DashboardLayout = () => {
  return (
    <div className="max-container">
      <NavbarDrawer />
      <CommonFooter />
    </div>
  );
};

export default DashboardLayout;
