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
  const {
    name,
    image,
    fees,
    prize_money,
    long_description,
    location,
    date,
    badges,
  } = hackathon;

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
        <h1 className="text-4xl font-bold">Hackathon Detail</h1>
        <div className="flex flex-col md:flex-row md:gap-24 mt-10">
          <div>
            <p className="text-lg flex items-center gap-1">
              <span className="text-main">
                <MdEventNote />
              </span>
              {name}
            </p>
            <p className="flex items-center gap-1">
              <span className="text-main">
                <FaLocationDot />
              </span>
              {location}
            </p>
            <p className="flex items-center gap-1">
              <span className="text-main">
                <FaCalendarCheck />
              </span>
              {date}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-lg">
              <span className="text-main">
                <FaCcMastercard />
              </span>
              <span className="font-bold">Fees: </span>${fees}
            </p>
            <p className="flex items-center gap-1 text-lg">
              <span className="text-main">
                <GrAchievement />
              </span>
              <span className="font-bold">Prize: </span>${prize_money}
            </p>
          </div>
        </div>
        <p className="mt-4 text-lg text-justify">{long_description}</p>
        <div className="flex items-center gap-3 flex-wrap mt-4">
          {badges.map((badge) => (
            <div className="bg-main px-3 py-.5 text-white font-medium rounded-full text-sm">
              #{badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HackathonDetail;
