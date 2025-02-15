import React from 'react'
import FormBlog from '../../FormBlog'
import { getBlogsByID, updateBlog } from '../../action'
import { notFound } from 'next/navigation'

export default async function page({params}) {
    const {id} =await params
      const data = await getBlogsByID(id)
      if(!data){
        notFound();
      }
      const blog = data
  return (
    <main className='flex justify-center items-center h-full'>
        <FormBlog action={updateBlog} blog={blog}/>
    </main>
  )
}
