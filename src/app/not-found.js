"use client";
import Link from "next/link";

const Page = () => {
  return (
    <div className="lg:w-[642px] m-auto flex gap-[58px] py-28 items-center">
      <h1 className="text-7xl border-r-4 pr-[58px] flex-1 py-6"> 404</h1>
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="flex-1 font-light text-gray-500">
          We're sorry, This page is unknown or does <br /> not exist the page
          you are looking for.
        </p>
        <Link href="/">
          <button className="bg-[#4B6BFB] hover:bg-blue-600 px-4 py-2 w-fit text-white rounded text-sm font-light cursor-pointer ">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
