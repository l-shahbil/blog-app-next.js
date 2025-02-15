import { redirect } from "next/navigation";
import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


export default async function AuthLayout({children}) {
  const supabase = createServerComponentClient({cookies});
  const {data} = await supabase.auth.getSession();
  if(data.session){
    redirect("/");
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg py-6 px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Blog App</h1>
          <div className="flex gap-8">
            <Link href="/signup" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300">
              Sign Up
            </Link>
            <Link href="/login" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300">
              Login
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white shadow-xl rounded-lg p-8 space-y-8">{children}</div>
      </main>
    </>
  );
}