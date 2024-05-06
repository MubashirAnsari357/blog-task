import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { required: true, type: String },
    description: { type: String },
    slug: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Pending", "Approved", "Rejected"],
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
