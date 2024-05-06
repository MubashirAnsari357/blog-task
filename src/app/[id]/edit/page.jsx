import { getBlogbyId } from "@/lib/data";
import BlogForm from "@/ui/BlogForm";
import React from "react";

const Edit = async ({ params: { id } }) => {
  const blog = await getBlogbyId(id);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <BlogForm edit blog={blog} />
    </div>
  );
};

export default Edit;
