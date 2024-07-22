"use client";

import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { Drawer } from "./Drawer";
import Image from "next/image";
import { useState } from "react"

export const Header = ({ toggleTheme }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setIsDrawerOpen(isDrawerOpen)
  };

  return (
    <div id="#start" className="w-screen mb-16 lg:mb-[100px]">

      <div>
        <header className="px-4 flex justify-between py-5 items-center relative lg:w-[1216px] m-auto">
          <Image
            src="/image/Logo.png"
            alt="Logo"
            width={158}
            height={36}
          />
          <div className="absolute hidden lg:flex items-center gap-[220px] right-3">
            <nav className="flex gap-10 items-center justify-center">
              <Link href="/">Home</Link>
              <Link href="/blogs">Blog</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <form className="flex justify-between items-center bg-[#f4f4f5] px-2 rounded-lg">
              <input
                className="border-none bg-transparent p-2 focus:outline-none"
                name="search"
                id="search"
                placeholder="Search"
              />
              <button type="submit">
                <CiSearch />
              </button>
            </form>
          </div>
          <IconButton onclick={handleDrawer} className="relative lg:hidden flex items-center">
            <FaBars size={24} />
          </IconButton>
        </header>
      </div>

      <Drawer isOpen={isDrawerOpen} closeDrawer={handleDrawer} />
    </div>
  );
};
const IconButton = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-[40px] h-[40px] founded-full hover:bg-gray-100">
      {children}
    </div>
  )
}