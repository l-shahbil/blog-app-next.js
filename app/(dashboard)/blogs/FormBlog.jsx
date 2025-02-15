"use client"
import SubmitButton from "@/app/components/SubmitButton"
import React, { useEffect, useState } from 'react'
import Link from "next/link";

export default function FormBlog({action,blog}) {
  const [title,setTitle] = useState("");
  const [content,setContent] =useState("");
  useEffect(()=>{
    if(blog){
      setTitle(blog.title);
      setContent(blog.content);
    }
  },[])
  

  return (
    <div>
      <Link href={"/blogs"}>My Blogs</Link>
    <form action={action} className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">{blog?"Edit Blog":"Create New Blog"}</h2>
      
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700">Title:</label>
        {blog && <input hidden id="id" name="id" defaultValue={blog.id}/>}
        <input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          required
          className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-gray-800 focus:ring-2 focus:ring-blue-500"
          />
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block text-sm font-semibold text-gray-700">Content:</label>
        <textarea
          name="content"
          value={content}
          onChange={(e) =>setContent(e.target.value)}
          required
          rows="6"
          className="w-full p-3 border border-gray-300 rounded-lg mt-2 text-gray-800 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="text-center">
        <SubmitButton />
      </div>
    </form>
          </div>
  )
}
