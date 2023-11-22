import { Link, NavLink } from "react-router-dom";
import Logo from "/images/hackcember.png";

const Navbar = () => {
  const menus = (
    <>
      <li className="hover:text-main">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <Link to={"/"}>
        <img className="w-52" src={Logo} alt="" />
      </Link>
      <ul className="flex flex-col md:flex-row items-center gap-6">{menus}</ul>
    </div>
  );
};

export default Navbar;
