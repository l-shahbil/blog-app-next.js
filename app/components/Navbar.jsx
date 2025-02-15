"use client"
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";  
import LogoutButton from "./LogoutButton copy";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false); 
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuOpen((prev) => !prev); 
  };

  return (
    <nav className="navbar fixed w-screen left-0 top-0 px-6 py-4 bg-white shadow-md flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-900">
        BlogApp
      </Link>

      {/* Links for larger screens */}
      <div className="hidden sm:flex gap-6">
        <Link href="/" className="hover:text-blue-600">Frontend</Link>
        <Link href="/" className="hover:text-blue-600">Backend</Link>
        <Link href="/" className="hover:text-blue-600">UI</Link>
        <Link href="/" className="hover:text-blue-600">Other</Link>
      </div>

      {/* Hamburger Menu for small screens */}
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          <FaBars /> 
        </button>

        {/* Dropdown menu for small screens */}
        {menuOpen && (
          <div
            className="menu absolute right-0 mt-2 w-48 bg-white border rounded shadow-md"
            ref={menuRef}
          >
            <div className="border-t p-2 space-y-2">
              <Link href="/blogs" className="block px-4 py-2 hover:bg-gray-100">My Blogs</Link>
              <hr/>
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
