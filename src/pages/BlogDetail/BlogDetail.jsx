import React from "react";
import { FaCalendarCheck } from "react-icons/fa6";
import { MdEventNote } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const blog = blogs.find((bl) => bl.id === parseInt(id));
  const { title, image, long_description, posted_at, tags } = blog;
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <div className="absolute bg-black opacity-70 w-full h-full"></div>
        <img className="w-full h-full object-cover" src={image} alt={title} />

        <div className="absolute flex flex-col items-center transform -translate-y-1/2 left-5 right-5 top-1/2 text-center space-y-4 px-10">
          <h1 className="text-white text-3xl lg:text-4xl font-semibold leading-tight">
            {title}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto my-20 space-y-4 px-10 lg:px-0">
        <p className="text-4xl font-medium">{title}</p>
        <p className="text-lg text-justify">{long_description}</p>
        <p className="flex items-center gap-1">Posted: {posted_at}</p>

        <div className="flex items-center flex-wrap gap-4">
          {tags.map((tag) => (
            <span className="badge badge-sm">#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
