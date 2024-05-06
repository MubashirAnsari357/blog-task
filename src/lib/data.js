import Blog from "./Models";
import { connectToDB } from "./db";

export const getBlogs = async () => {
  try {
    connectToDB();
    const blogs = await Blog.find();
    return blogs;
  } catch (error) {
    console.log(error);
  }
};

export const getBlogbyId = async (id) => {
  try {
    connectToDB();
    const blog = await Blog.findById(id);
    return blog;
  } catch (error) {
    console.log(error);
  }
};
