import { Outlet } from "react-router";
import Navdrawer from "./navbarDrawer/Navdrawer";
import NavdrawerStart from "./navbarDrawer/NavdrawerStart";

const NavbarDrawer = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <NavdrawerStart />
          {/* Page content here */}
          Content
          <Outlet />
        </div>
        <Navdrawer />
      </div>
    </div>
  );
};

export default NavbarDrawer;
