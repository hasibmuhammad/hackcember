import { useState } from "react";

const Mentors = () => {
  const [mentors, setMentors] = useState([]);
  useState(() => {
    fetch("../../../data/mentors.json")
      .then((res) => res.json())
      .then((data) => setMentors(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Our Mentors</h1>
      <hr className="max-w-xs mx-auto" />
      <div className="grid md:grid-cols-3 place-content-center lg:grid-cols-4 gap-10 my-10">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center gap-4">
            <img
              className="w-28 h-28 rounded-full object-cover"
              src={mentor.img}
              alt=""
            />
            <div>
              <h1 className="font-bold text-xl">{mentor.name}</h1>
              <p className="text-gray-400 font-medium">{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
