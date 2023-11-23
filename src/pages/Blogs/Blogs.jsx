import { useLoaderData, Link, useFetcher } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const blogs = useLoaderData();
  return (
    <div className="my-32">
      <h1
        data-aos="fade-left"
        data-aos-delay="200"
        className="text-4xl font-bold text-center mb-4"
      >
        Blogs
      </h1>
      <hr className="max-w-xs mx-auto" />
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10 lg:px-0"
      >
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-md border shadow-lg">
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[200px] w-full rounded-t-md object-cover"
            />
            <div className="p-4">
              <h1 className="inline-flex items-center text-lg font-semibold">
                {blog.title}
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                {blog.short_description}
              </p>
              <div className="mt-4 font-medium flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <span className="badge badge-black">#{tag}</span>
                ))}
              </div>
              <Link to={`/blog/${blog.id}`}>
                <button
                  type="button"
                  className="mt-4 w-full rounded-lg bg-main py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
