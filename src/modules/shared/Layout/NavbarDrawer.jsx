import { Outlet, Link, useLocation } from "react-router";
// import { useUser } from "@/hooks/useUser";
import { motion } from "framer-motion";

const NavbarDrawer = () => {
  const { role } = useUser(); // role: 'tourist' | 'tour-guide' | 'admin'
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
          <h1 className="text-xl font-bold tracking-wider text-indigo-400 animate-pulse glow-text">
            DeshGuide Dashboard
          </h1>
        </div>

        {/* Main content area */}
        <div
          className="min-h-[60vh] p-4"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer-3" className="drawer-overlay" />
        <ul className="menu p-4 w-80 min-h-full bg-gray-900 border-r border-indigo-800 sticky top-0 space-y-3 overflow-y-auto">
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

// import { Outlet, Link } from "react-router";
//
// const NavbarDrawer = () => {
//   return (
//     <div className="drawer lg:drawer-open bg-gray-950 text-gray-200">
//       <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
//
//       {/* Page content */}
//       <div className="drawer-content flex flex-col">
//         {/* Navbar (can customize later if needed) */}
//         <div className="w-full p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900 glow-border">
//           <label
//             htmlFor="my-drawer-3"
//             className="btn btn-sm bg-indigo-700 text-white lg:hidden glow-border hover:bg-indigo-600"
//           >
//             ☰ Menu
//           </label>
//           <h1 className="text-xl font-bold tracking-wider text-indigo-400 pulse-glow">
//             DeshGuide Dashboard
//           </h1>
//         </div>
//
//         {/* Main content */}
//         <div className="min-h-[60vh] p-4 animate-fade-in">
//           <Outlet />
//         </div>
//       </div>
//
//       {/* Sidebar */}
//       <div className="drawer-side z-40 ">
//         <label
//           htmlFor="my-drawer-3"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu p-4 w-80 min-h-full bg-gray-900 border-r border-gray-700 space-y-2">
//           <li>
//             <Link
//               to="/"
//               className="glow-border pulse-glow transition-all duration-200 hover:bg-indigo-700 hover:text-white rounded-md font-semibold"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/dashboard/overview"
//               className="glow-border pulse-glow transition-all duration-200 hover:bg-indigo-700 hover:text-white rounded-md font-semibold"
//             >
//               Overview
//             </Link>
//           </li>
//           {/* Add more menu links as needed */}
//         </ul>
//       </div>
//     </div>
//   );
// };
//
// export default NavbarDrawer;
