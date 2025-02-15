"use client"
import { useRouter } from 'next/navigation';
import React, {useTransition } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteBlog } from '../action';

export default function DeleteButton({id}) {
    const router = useRouter()
    const [isPending,startTransition] = useTransition()

  return (
    <button 
    className='flex gap-2 items-center bg-red-500 hover:bg-red-700'
    onClick={()=> startTransition(()=> deleteBlog(id))}
    disabled={isPending}
    >
    {isPending && (
        <>
<RiDeleteBin6Line />
Deleting...
        </>
    )}
    {!isPending && (
        <>
<RiDeleteBin6Line />
Delete Blog
    
        </>
    )}
    </button>
)
}