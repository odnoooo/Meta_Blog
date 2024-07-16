"use client";

import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";

export const Header = () => {
  return (
    <header className=" flex justify-between py-5 items-center relative lg:w-[1216px]">
      <img className="h-[26px]" src="./image/Logo.png"></img>
      <div className=" absolute invisible lg:visible flex items-center gap-6 right-0">
        <nav className="flex gap-10 items-center justufy-center px-55 ">
          <a href="">Home</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </nav>
        <search>
          <form className="flex justify-between items-center bg-[#f4f4f5]  gap-3">
            <input
              className="border-none bg-transparent px-2 py-2 "
              name="search"
              id="search"
              placeholder="Search "
            />
            <CiSearch />
          </form>
        </search>
      </div>
      <FaBars className="visible lg:invisible" />
    </header>
  );
};
