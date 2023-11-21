import BannerImage from "/images/1.webp";

const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div className="carousel-item relative w-full">
        <img src={BannerImage} className="w-full object-cover" />
        <div className="absolute bg-black opacity-70 w-full h-full"></div>
        <div className="absolute flex flex-col items-center transform -translate-y-1/2 left-5 right-5 top-1/2 text-center space-y-4">
          <h1 className="text-white text-5xl font-semibold leading-tight">
            LEARN,
            <br />
            COLLABORATE, <br />
            AND ACCELERATE
          </h1>
          <p className="text-white max-w-prose">
            Open Hackathons are designed to help computational scientists,
            researchers, and developers to accelerate and optimize their
            scientific applications.
          </p>
          <div>
            <button className="bg-main px-5 py-3 rounded-lg font-medium outline-none text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
