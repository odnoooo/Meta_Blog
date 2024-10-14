"use client";

import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import { Drawer } from "./Drawer"; // Adjust the import path as needed
import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const paths = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="w-screen mb-8 lg:mb-12">
      <div>
        <header className="px-4 flex justify-between py-5 items-center relative lg:w-[1216px] m-auto">
          <Image src="/image/Logo.png" alt="Logo" width={158} height={36} />
          <div className="absolute hidden lg:flex items-center gap-[220px] right-3">
            <nav className="flex gap-10 items-center justify-center  ">
              {paths.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => handleSetActiveLink(item.path)}
                  style={{
                    color: activeLink === item.path ? "#4b6bfb" : "#000",
                  }}
                >
                  <p>{item.title}</p>
                </Link>
              ))}
            </nav>
            <div className="flex justify-between items-center bg-[#f4f4f5] px-2 rounded-lg">
              <input
                className="border-none bg-transparent p-2 focus:outline-none"
                name="search"
                id="search"
                placeholder="Search"
              />
              <Link href="#art">
                <button type="submit">
                  <CiSearch />
                </button>
              </Link>
            </div>
          </div>
          <IconButton
            onClick={handleDrawer}
            className="md:fixed  flex items-center"
          >
            <FaBars size={24} className="lg:invisible md:fixed z-22" />
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
      className="cursor-pointer w-[40px] h-[40px] rounded-full hover:bg-gray-100 flex items-center justify-center"
    >
      {children}
    </div>
  );
};
