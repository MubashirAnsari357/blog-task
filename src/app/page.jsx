import { getBlogs } from "@/lib/data";
import { formatDate } from "@/lib/formatDate";
import BlogCard from "@/ui/BlogCard";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const blogs = await getBlogs();

  console.log(blogs);
  return (
    <section className="p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-extrabold text-3xl">Blogs</h3>
        <Link className="bg-gray-900 py-2 px-4 text-white" href="/create">
          Create
        </Link>
      </div>
      <div className="flex justify-center items-center gap-x-8 gap-y-4 flex-wrap">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            id={blog._id}
            title={blog.title}
            category={blog.category}
            status={blog.status}
            date={formatDate(blog.createdAt)}
          />
        ))}
      </div>
    </section>
  );
}
