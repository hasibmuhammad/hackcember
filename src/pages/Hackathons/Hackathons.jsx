import { useEffect, useState } from "react";
import Hackathon from "../Hackathon/Hackathon";

const Hackathons = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    fetch("../../../data/hackathons.json")
      .then((res) => res.json())
      .then((data) => setHackathons(data));
  }, []);

  return (
    <>
      <div className="mt-10">
        <h1 className="text-4xl font-bold">Upcoming Hackathons</h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10">
          {hackathons.map((hackathon) => (
            <Hackathon hackathon={hackathon} key={hackathon.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Hackathons;
