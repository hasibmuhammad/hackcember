import { Link, NavLink } from "react-router-dom";
import Logo from "/hackcember.png";

const Navbar = () => {
  const menus = (
    <>
      <li className="hover:text-main">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="hover:text-main">
        <NavLink to={"/hackathons"}>Hackathons</NavLink>
      </li>
      <li className="hover:text-main">
        <NavLink to={"/mentors"}>Mentors</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex items-center justify-between">
      <img className="w-52" src={Logo} alt="" />
      <ul className="flex items-center gap-6">{menus}</ul>
    </div>
  );
};

export default Navbar;
