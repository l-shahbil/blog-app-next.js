import BlogList from "@/app/components/BlogList";
import { getBlogsByUser } from "./action";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
export default async function BlogsPage() {
  const blogs = await getBlogsByUser();
  return (
    <div className="container mx-auto px-4 mt-10">

      <h1 className="text-3xl font-bold mb-4">All Blog Posts</h1>
      <Link href="/blogs/create" className='mb-4 block'>
        <button className="flex gap-2 items-center">
          <FaPlus />
          Add New Blog
        </button>
      </Link>
      {blogs.length === 0 ? (
        <p>Hi sir, you have not posted any blog.</p>
      ) : (
        <BlogList blogs={blogs} isEdit={true} />
      )}
    </div>
  );
}
