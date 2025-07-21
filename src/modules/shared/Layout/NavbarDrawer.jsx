const NavbarDrawer = () => {
  return (
    <nav className="drawer z-20 drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle " />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        {/* Page content here */}
        {/* Content */}
      </div>
      <div className="drawer-side lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        >
          label
        </label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarDrawer;
