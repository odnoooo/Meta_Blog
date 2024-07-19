"use client";

import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { Bar } from "../components/Bar";

export const Header = () => {
  return (
    <div className="w-screen mb-16 lg:mb-[100px]">
      <Bar />
      <div className="">
        <header className="px-4 flex justify-between py-5 items-center relative lg:w-[1216px] m-auto">
          <img className="h-[26px]" src="/image/Logo.png" alt="Logo" />
          <div className="absolute hidden lg:flex items-center gap-[220px] right-3">
            <nav className="flex gap-10 items-center justify-center">
              <Link href="/">Home</Link>
              <Link href="/blogs">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <div>
              <form className="flex justify-between items-center bg-[#f4f4f5] px-2 rounded-lg">
                <input
                  className="border-none bg-transparent p-2 focus:outline-none"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
                <CiSearch />
              </form>
            </div>
          </div>
          <div className="relative lg:hidden flex items-center">
            <FaBars className="z-20" />
            <input
              className="w-4 h-4 absolute opacity-0"
              type="checkbox"
              id="checkbox"
            />
          </div>
        </header>
      </div>
    </div>
  );
};
