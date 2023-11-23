import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "/images/hackcember.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut().then(() => navigate("/login"));
  };

  const menus = (
    <>
      <li className="hover:text-main">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      {user ? (
        <div className="flex flex-col-reverse md:flex-row items-center gap-4">
          <li>
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-sm rounded-md"
            >
              Log Out
            </button>
          </li>
          <li className="flex flex-col items-center">
            <img className="w-12" src={user.photoURL} alt="" />
            <span className="text-xs font-medium">{user.displayName}</span>
          </li>
        </div>
      ) : (
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      )}
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
