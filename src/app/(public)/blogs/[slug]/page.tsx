import type { Metadata } from "next";
import BlogsClient from "./client";

export const metadata: Metadata = {
  title: "Blogs slug",
  description: "single page",
};

export default function Blogs({ params }: { params: { slug: string } }) {
  return <BlogsClient params={params} />;
}
