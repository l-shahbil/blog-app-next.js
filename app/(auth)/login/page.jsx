"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";

export default function Login() {
  const [error,setError] = useState('');
  const router = useRouter()

  const handleSubmit =async (e,email,password)=>{
    e.preventDefault();

    const supabase = createClientComponentClient()
    const {error} = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if(error){
      setError(error.message)
    }
    else{
      router.push("/")
    }

  }

  return (
    <div className="container mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-2xl font-bold mb-4">Login</h1>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error text-red-500 text-center mt-4">{error}</div>}
    </div>
  );
}