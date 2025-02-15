"use client";

import { useState } from "react";

export default function AuthForm({ handleSubmit }) {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  
  
  return(
    <form onSubmit={(e) => handleSubmit(e, email, password)} className="max-w-md mx-auto">
      <div>
        <label className="block text-lg font-medium mb-2">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block text-lg font-medium mb-2">Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-200">
        Submit
      </button>
    </form>
  );
} 