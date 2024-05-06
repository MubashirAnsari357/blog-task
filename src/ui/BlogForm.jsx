"use client";
import { createBlog, updateBlog } from "@/lib/actions";
import React, { useState } from "react";

const BlogForm = ({ edit, blog }) => {
  const categories = ["Science", "Commerce", "Arts"];
  const status = ["Pending", "Approved", "Rejected"];

  const [selectedCategory, setSelectedCategory] = useState(
    blog?.category || ""
  );
  const [selectedStatus, setSelectedStatus] = useState(blog?.status || "");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };
  return (
    <form
      action={edit ? updateBlog : createBlog}
      className="flex flex-col gap-5 bg-cyan-100 p-10"
    >
      <h2 className="font-bold text-xl">{edit ? "Edit" : "Create"} Blog</h2>
      {edit && <input type="hidden" name="id" id="id" value={blog?._id} />}
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter Title"
          className="w-full bg-white roudned-lg px-4 py-2"
          defaultValue={blog?.title || ""}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select
          name="category"
          className="w-full bg-white roudned-lg px-4 py-2"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select
          name="status"
          className="w-full bg-white roudned-lg px-4 py-2"
          value={selectedStatus}
          onChange={handleStatusChange}
        >
          {status.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Enter Description"
          className="w-full bg-white roudned-lg px-4 py-2"
          row="5"
          cols="50"
          defaultValue={blog?.description || ""}
        />
      </div>
      <button type="submit" className="bg-gray-900 text-white uppercase py-3">
        {edit ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default BlogForm;
