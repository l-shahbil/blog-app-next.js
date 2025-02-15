"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [error,setError] = useState('');
  const url = process.env.LOCATION_ORIGIN

  const handleSubmit =async (e,email,password)=>{
    e.preventDefault();
    const supabase = createClientComponentClient()

  const {error} = await supabase.auth.signUp({
    email,
    password,
    options:{
      emailRedirectTo:`${url}/api/auth/callback`
    }
  })

  if(error){
    setError(error.message)
  }
  if(!error){
    router.push("/verify")
  }
  }
    return (
    <div className="container mt-10">
      <h1>Sign Up</h1>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </div>
  );
}