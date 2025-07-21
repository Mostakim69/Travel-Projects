import { Link } from "react-router";

export const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Assignments",
    path: "assignments",
  },
  {
    name: "Pending Assignments",
    path: "assignments/pending",
  },
];

const navbarLinks = () => {
  return navItems.map((item) => {
    return (
      <li key={item.path}>
        <Link to={item.path}>{item.name}</Link>
      </li>
    );
  });
};

export default navbarLinks;
