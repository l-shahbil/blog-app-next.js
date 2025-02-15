import { getBlogsByID } from "../action";
import { notFound } from "next/navigation";
import Link from "next/link";
import DeleteButton from "./DeleteBlog";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { FaArrowRight } from "react-icons/fa6";

export const daynamicParams =true


export default async function BlogDetails({params}) {
  const {id} =await params
  const supabase = createServerComponentClient({cookies});
  const {data:{session}} = await supabase.auth.getSession();

  const data = await getBlogsByID(id)
  if(!data){
    notFound();
  }
  const blog = data
  return (
    <main className="max-w-3xl mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
    <nav className="flex justify-between items-center border-b pb-4">
      <h2 >Blog Details</h2>
      <Link
        href="/blogs"
        className="text-blue-600 hover:text-blue-800 transition flex gap-2 items-center"
      >
        Back to Blogs
        <FaArrowRight /> 
      </Link>
    </nav>

    <article className="my-6">
      <h1 >{blog.title}</h1>
      <p className="text-gray-600 mt-4 leading-relaxed">{blog.content}</p>
      {session.user.email !== blog.user_email && <p>Written by: {blog.user_email}</p>}
      </article>
      {session.user.email === blog.user_email &&(
      <DeleteButton id={blog.id}/>)}
  </main>
  );
}
