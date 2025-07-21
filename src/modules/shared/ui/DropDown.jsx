import { Link } from "react-router";
// import Avatar from "./Avatar";

const links = [
  {
    path: "assignments/create",
    name: "Create Assignment",
  },
  {
    path: "assignment/my-submit",
    name: "My Submitted Assignments",
  },
];

const DropDown = ({ children }) => {
  return (
    <div className="dropdown  w-fit dropdown-end ">
      <div tabIndex={0} role="button" className="bt m-1">
        {children}
        {/* <Avatar /> */}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-1 min-w-[225px] py-4 px-[1px] shadow-sm "
      >
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
