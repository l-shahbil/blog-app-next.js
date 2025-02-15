"use client"

import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    const supabase = createClientComponentClient();
    // Here we use async inside the event handler, not the main component
    supabase.auth.signOut().then(({ error }) => {
      if (!error) {
        router.push("/login")
      } else {
        console.log(error)
      }
    }).catch(error => {
      console.error('Error during sign out:', error)
    })
  }

  return (
    <button className='btn-primary bg-red-500 hover:bg-red-700 w-full ' onClick={handleLogout}>
      LogOut
    </button>
  )
}
