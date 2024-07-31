"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";

import React from 'react';

export const Drawer = ({ isOpen, closeDrawer }) => {
  return (
    <div className={`lg:invisible fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className=" inset-0 bg-black opacity-50" onClick={closeDrawer}></div>
      <div className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg p-4">
        <div className="flex justify-between bg-blue-500 p-4">
          <p>Close</p>
          <button onClick={closeDrawer}>x</button>
        </div>

        <div>
          <Link href="/" className="block p-4 hover:bg-slate-200" onClick={closeDrawer}>
            Home
          </Link>
          <Link href="/blogs" className="block p-4 hover:bg-slate-200" onClick={closeDrawer}>
            Blog
          </Link>
          <Link href="/contact" className="block p-4 hover:bg-slate-200" onClick={closeDrawer}>
            Contact
          </Link>
          <form className="flex justify-between items-center p-2 bg-slate-100 hover:bg-slate-200">
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
    </div>
  );
};

// export const Drawer = ({ isOpen, closeDrawer }) => {

//   return (
//     <div className={`fixed top-0 left-[100%] ${isOpen ? "translate-x-[400px]" : "translate-x-[0px]"} h-screen w-[400px] p-6 shadow-md bg-white duration-300 z-50`}>
//       <div>
//         <p>Close</p>
//         <button onClick={closeDrawer}>x</button>
//       </div>
//       <div>
//         <Link href="/" className="block p-4 hover:bg-slate-300">
//           Home
//         </Link>
//         <Link href="/blogs" className="block p-4 hover:bg-slate-300">
//           Blog
//         </Link>
//         <Link href="/contact" className="block p-4 hover:bg-slate-300">
//           Contact
//         </Link>
//         <form className="flex justify-between items-center p-4 bg-slate-200 hover:bg-slate-300">
//           <input
//             className="border-none bg-transparent p-2 focus:outline-none flex-grow"
//             name="search"
//             id="search"
//             placeholder="Search"
//           />
//           <button type="submit">
//             <CiSearch />
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };


