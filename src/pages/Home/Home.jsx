import Banner from "../../components/Banner/Banner";
import Hackathons from "../Hackathons/Hackathons";
import Mentors from "../Mentors/Mentors";
import Partners from "../Partners/Partners";

const Home = () => {
  return (
    <div>
      <div className="max-w-full">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto px-10 lg:px-0">
        <div className="mt-10">
          <Hackathons />
        </div>
        <div className="my-14">
          <Mentors />
        </div>
        <div className="my-14">
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default Home;
