import {
  FaCalendarCheck,
  FaCcMastercard,
  FaLocationDot,
} from "react-icons/fa6";
import { GrAchievement } from "react-icons/gr";
import { MdEventNote } from "react-icons/md";

import { useLoaderData, useParams } from "react-router-dom";

const HackathonDetail = () => {
  const { id } = useParams();
  const hackathons = useLoaderData();
  const hackathon = hackathons.find((ht) => ht.id === parseInt(id));
  const { name, image, fees, prize_money, long_description, location, date } =
    hackathon;

  console.log(date);

  console.log(id);
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <div className="absolute bg-black opacity-70 w-full h-full"></div>
        <img className="w-full h-full object-cover" src={image} alt={name} />

        <div className="absolute flex flex-col items-center transform -translate-y-1/2 left-5 right-5 top-1/2 text-center space-y-4 px-10">
          <h1 className="text-white text-5xl font-semibold leading-tight">
            {name}
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-4 px-10 lg:px-0">
        <div className="flex gap-24">
          <div>
            <p className="text-lg flex items-center gap-1">
              <MdEventNote />
              <span className="font-bold">Event: </span>
              {name}
            </p>
            <p className="flex items-center gap-1">
              <FaLocationDot />
              {location}
            </p>
            <p className="flex items-center gap-1">
              <FaCalendarCheck />
              {date}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-lg">
              <FaCcMastercard />
              <span className="font-bold">Fees: </span>${fees}
            </p>
            <p className="flex items-center gap-1 text-lg">
              <GrAchievement />
              <span className="font-bold">Prize: </span>${prize_money}
            </p>
          </div>
        </div>
        <p className="mt-4 text-lg text-justify">{long_description}</p>
      </div>
    </div>
  );
};

export default HackathonDetail;
