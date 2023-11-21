import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-4 px-10 lg:px-0">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
