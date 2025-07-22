const Navdrawer = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-3"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Overview</a>
        </li>
      </ul>
    </div>
  );
};

export default Navdrawer;
