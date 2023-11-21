import Banner from "../../components/Banner/Banner";
import Hackathons from "../Hackathons/Hackathons";

const Home = () => {
  return (
    <div>
      <div className="max-w-full">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto px-10 lg:px-0">
        <Hackathons />
      </div>
    </div>
  );
};

export default Home;
