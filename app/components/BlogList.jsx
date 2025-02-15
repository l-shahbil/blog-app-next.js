import React from 'react'
import Link from 'next/link';
import EditBlog from '../(dashboard)/blogs/edit/EditBlog';



export default function BlogList({blogs,isEdit}) {
   return (
    <div >
        <ul className="md:grid md:grid-cols-3 md:gap-4 space-y-3 md:space-y-0">
        {blogs.map((blog) => (
          <li key={blog.id} className="card flex justify-between flex-col items-start ">
            <Link className='mb-3 block' href={`/blogs/${blog.id}`}>
              <h3>{blog.title}</h3>
            <p>{blog.content.slice(0,200)}</p>
            </Link>
            {isEdit && <EditBlog id={blog.id} className='' />}
          </li>
        ))}
      </ul>
    </div>
  )
}
