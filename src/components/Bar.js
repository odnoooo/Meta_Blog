"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export const Bar = () => {
  const a = [{}, {}];
  return (
    <div className="flex flex-col  w-[300px] bg-gray-100">
      <div className="flex justify-between p-4 bg-green-500 hover:bg-green-600">
        <p>Close</p>
        <button className="px-2 flex items-center rounded-full"> &times;</button>
      </div>

      <Link href="/" className="p-4 hover:bg-slate-300">
        Home
      </Link>
      <Link href="/blogs" className="p-4 hover:bg-slate-300">
        Blog
      </Link>
      <Link href="/contact" className="p-4 hover:bg-slate-300">
        Contact
      </Link>
      <Link href="">
        <form className="flex justify-between items-center  hover:bg-slate-300 bg-transparent p-2 ">
          <input
            className="border-none bg-transparent p-2 focus:outline-none"
            name="search"
            id="search"
            placeholder="Search"
          />
          <CiSearch />
        </form>
      </Link>
    </div>
  );
};
