import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Hackathons from "../Hackathons/Hackathons";
import Mentors from "../Mentors/Mentors";
import Partners from "../Partners/Partners";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="max-w-full">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto px-10 lg:px-0">
        <div data-aos="fade-up" data-aos-delay="200" className="mt-32">
          <Hackathons />
        </div>
        <div data-aos="fade-left" data-aos-delay="200" className="my-32">
          <Mentors />
        </div>
        <div data-aos="fade-left" data-aos-delay="200" className="my-32">
          <Partners />
        </div>
      </div>
    </div>
  );
};

export default Home;
