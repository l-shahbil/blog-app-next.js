"use client"
import React from 'react'

export default function error({error,reset}) {
  return (
    <main className='text-center mt-16'>
        <h2 className='text-4xl'>Oh No!</h2>
        <p>{error.message}</p>
        <button
        onClick={reset}
        className='mx-auto my-4'
        >
            Mybe try again?
        </button>
    </main>
  )
}
