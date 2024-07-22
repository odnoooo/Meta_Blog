"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export const Drawer = ({ isOpen, closeDrawer }) => {

  return (
    <div className={`fixed top-0 left-[100%] ${isOpen ? "translate-x-[400px]" : "translate-x-[0px]"} h-screen w-[400px] p-6 shadow-md bg-white duration-300 z-90`}>
      <div>
        <p>Close</p>
        <button onClick={closeDrawer}>x</button>
      </div>
      <div>
        <Link href="/" className="block p-4 hover:bg-slate-300">
          Home
        </Link>
        <Link href="/blogs" className="block p-4 hover:bg-slate-300">
          Blog
        </Link>
        <Link href="/contact" className="block p-4 hover:bg-slate-300">
          Contact
        </Link>
        <form className="flex justify-between items-center p-4 bg-slate-200 hover:bg-slate-300">
          <input
            className="border-none bg-transparent p-2 focus:outline-none flex-grow"
            name="search"
            id="search"
            placeholder="Search"
          />
          <button type="submit">
            <CiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};


