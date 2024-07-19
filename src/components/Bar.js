"use client";

import Link from "next/link";

export const Bar = () => {
  const a = [{}, {}];
  return (
    <div className="flex flex-col  w-[300px] bg-gray-100">
      <button className="flex justify-start">Close &times;</button>
      <Link href="/" className="h-8 hover:bg-slate-300">
        Home
      </Link>
      <Link href="/blogs" className="h-8">
        Blog
      </Link>
      <Link href="/contact" className="h-8 bg">
        Contact
      </Link>
    </div>
  );
};
