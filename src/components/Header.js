"use client";

import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between py-5 items-center relative lg:w-[1216px]">
      <img className="h-[26px]" src="./image/Logo.png" alt="Logo" />
      <div className="absolute invisible lg:visible flex items-center gap-[220px] right-0">
        <nav className="flex gap-10 items-center justify-center">
          <Link href="/">Home</Link>
          <Link href="/blogs/BlogsPage">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          <form className="flex justify-between items-center bg-[#f4f4f5]">
            <input
              className="border-none bg-transparent p-2"
              name="search"
              id="search"
              placeholder="Search"
            />
            <CiSearch />
          </form>
        </div>
      </div>
      <FaBars className="visible lg:invisible" />
    </header>
  );
};

