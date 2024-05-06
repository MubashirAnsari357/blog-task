"use client";
import { deleteBlog } from "@/lib/actions";
import React from "react";

const DeleteBlog = ({ id }) => {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
    }
  };
  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteBlog;
