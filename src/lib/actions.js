"use server";

import { revalidatePath } from "next/cache";
import Blog from "./Models";
import { connectToDB } from "./db";
import { slugify } from "./slugify";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const createBlog = async (formData) => {
  const { title, description, category, status } = Object.fromEntries(formData);

  const slug = slugify(title, category);
  let success = false;
  try {
    connectToDB();

    const blog = await Blog.create({
      title,
      description,
      category,
      status,
      slug,
    });

    if (blog) {
      success = true;
      revalidatePath("/");
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (success) {
      redirect("/");
    }
  }
};

export const updateBlog = async (formData) => {
  const { id, title, description, category, status } =
    Object.fromEntries(formData);

  const slug = slugify(title, category);

  let success = false;
  try {
    connectToDB();

    const blog = await Blog.findById(id);
    if (!blog) {
      console.log("Blog not found!");
      return;
    }

    blog.title = title;
    blog.description = description;
    blog.category = category;
    blog.status = status;
    blog.slug = slug;

    const updatedBlog = await blog.save();
    if (updateBlog) {
      success = true;
      revalidatePath("/");
    }
  } catch (error) {
    console.log(error);
  } finally {
    if (success) {
      redirect("/");
    }
  }
};

export const deleteBlog = async (id) => {
  try {
    connectToDB();
    const blog = await Blog.findByIdAndDelete(id);
    if (!blog) {
      console.log("Blog not found!");
      return;
    }
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
};

export const login = (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  const dbUser = {
    email: "admin@gmail.com",
    password: "12345",
  };

  if (email === dbUser.email && password === dbUser.password) {
    const cookieStore = cookies();
    cookieStore.set("user", email);
    redirect("/");
  } else {
    return "Invalid Credentials";
  }
};
