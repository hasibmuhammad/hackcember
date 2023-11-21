import { GrAchievement } from "react-icons/gr";
import {
  FaCcMastercard,
  FaLocationDot,
  FaCalendarCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hackathon = ({ hackathon }) => {
  const {
    id,
    name,
    image,
    fees,
    prize_money,
    short_description,
    date,
    location,
  } = hackathon;
  return (
    <div className="rounded-md border shadow-lg">
      <img
        src={image}
        alt={name}
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {name}
        </h1>
        <p className="mt-3 text-sm text-gray-600">{short_description}</p>
        <div className="mt-4 font-medium flex items-center justify-between gap-4">
          <div>
            <p className="flex items-center gap-1 text-main">
              <FaLocationDot />
              {location}
            </p>
            <p className="flex items-center gap-1 text-main">
              <FaCalendarCheck />
              {date}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-1 text-main">
              <FaCcMastercard />${fees}
            </p>
            <p className="flex items-center gap-1 text-main">
              <GrAchievement /> ${prize_money}
            </p>
          </div>
        </div>
        <Link to={`/hackathon/${id}`}>
          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-main py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hackathon;
