import Link from "next/link";
import React from "react";
import DeleteBlog from "./DeleteBlog";

const BlogCard = ({ id, title, category, status, date }) => {
  return (
    <div className="flex flex-col max-w-52 shadow-md bg-cyan-50 p-4">
      <div>
        <h4 className="font-bold">{title}</h4>
        <span>{category}</span>
      </div>
      <div classname="border-b border-gray-900" />
      <div className="flex flex-col">
        <span>{status}</span>
        <span>{date}</span>
      </div>
      <div className="mt-2 text-right space-x-4">
        <Link href={`${id}/edit`}>Edit</Link>
        <DeleteBlog id={id} />
      </div>
    </div>
  );
};

export default BlogCard;
