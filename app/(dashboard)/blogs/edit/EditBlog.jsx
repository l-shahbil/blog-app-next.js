"use client"
import React from 'react'
import Link from 'next/link';
import { MdEdit } from "react-icons/md";


export default function EditBlog({id}) {
  return (
    <button className='flex gap-2 items-center'>
      <MdEdit />
      <Link className='text-white' href={`/blogs/edit/${id}`}>Edit</Link>
    </button>
  )
}
