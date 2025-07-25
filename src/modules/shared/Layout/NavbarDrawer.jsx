import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import SidebarLink from "./SidebarLink";

// ✅ Role-based sidebar links
const adminLinks = [
  { name: "Manage Profile", path: "/dashboard/admin/manage-profile" },
  { name: "Manage Users", path: "/dashboard/admin/users" },
  { name: "Add Package", path: "/dashboard/admin/add-package" },
  { name: "Manage Candidates", path: "/dashboard/admin/candidates" },
  { name: "All Bookings", path: "/dashboard/admin/bookings" },
  { name: "Payments", path: "/dashboard/admin/payments" },
];

const guideLinks = [
  { name: "Manage Profile", path: "/dashboard/guide/manage-profile" },
  { name: "My Assigned Tours", path: "/dashboard/guide/my-assigned-tours" },
  { name: "Manage Stories", path: "/dashboard/guide/manage-stories" },
  { name: "Profile", path: "/dashboard/guide/profile" },
];

const touristLinks = [
  { name: "Manage Profile", path: "/dashboard/tourist/manage-profile" },
  { name: "My Bookings", path: "/dashboard/my-bookings" },
  { name: "Manage Stories", path: "/dashboard/tourist/manage-stories" },
  { name: "Join as Tour Guide", path: "/dashboard/tourist/join-tour-guide" },
];

const NavbarDrawer = () => {
  // const { role } = useUser(); // example: { role: 'tourist' }

  // const role = "admin";
  const role = "tourist";
  // const role = "tour-guide";
  const location = useLocation();

  const links =
    role === "admin"
      ? adminLinks
      : role === "tour-guide"
        ? guideLinks
        : touristLinks;

  return (
    <div className="drawer lg:drawer-open bg-gray-950 text-gray-200">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Top Navbar */}
      <div className="drawer-content flex flex-col">
        <div className="w-full p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900 shadow-lg shadow-indigo-800/20 sticky top-0 z-40">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-sm bg-indigo-700 text-white lg:hidden border border-indigo-500 hover:bg-indigo-600"
          >
            ☰ Menu
          </label>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xl font-bold tracking-wider text-indigo-400 animate-pulse"
          >
            DeshGuide Dashboard
          </motion.h1>
        </div>

        {/* Page content */}
        <div
          className="min-h-[60vh] p-4"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-gray-900 border-r border-indigo-800 space-y-3 overflow-y-auto">
          {/* Home Link */}
          <li data-aos="fade-right" data-aos-delay="100">
            <SidebarLink
              to="/"
              text="Home"
              active={location.pathname === "/"}
            />
          </li>

          {/* Role-based Links */}
          {links.map((link, i) => (
            <li
              key={link.path}
              data-aos="fade-right"
              data-aos-delay={150 + i * 70}
            >
              <SidebarLink
                to={link.path}
                text={link.name}
                active={location.pathname === link.path}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDrawer;
