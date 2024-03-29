import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
const Root = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto my-4 px-10 lg:px-0">
        <Navbar />
      </div>
      <Outlet />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;
