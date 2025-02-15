"use client"
import React from 'react'
import FormBlog from '../FormBlog'
import { addBlog } from '../action'

export default function page() {
  return (
    <main className='flex justify-center items-center h-full'>
        <FormBlog action={addBlog}/>
    </main>
  )
}
