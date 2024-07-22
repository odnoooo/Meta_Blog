"use client";

import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

export const Bar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col  w-[300px] bg-gray-100">
      <div className="flex justify-between p-4 bg-green-500 hover:bg-green-600">
        <p>Close</p>
        <button
          className={`px-2 flex items-center rounded-full ${
            isOpen ? "w-64" : "w-0 overflow-hidden"
          }`}
        >
          {" "}
          &times;
        </button>
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

// //Sidebar.js
// import React, { useState } from "react";

// const Sidebar = () => {
//   // State to manage the open/close state of the sidebar
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div
//         // Conditional class based on isOpen
//         // state to control width and visibility
//         className={`bg-gray-800 text-white
//                     fixed h-screen transition-all
//                     duration-300 z-10
//                     ${isOpen ? "w-64" : "w-0 overflow-hidden"}`}
//       >
//         {/* Sidebar content */}
//         <div className="flex flex-col items-center">
//           <div className="mt-4">
//             <a
//               href="#"
//               className="text-white
//                           hover:text-gray-300"
//             >
//               Home
//             </a>
//           </div>
//           <div className="mt-4">
//             <a
//               href="#"
//               className="text-white
//                           hover:text-gray-300"
//             >
//               About
//             </a>
//           </div>
//           {/* Add more sidebar items here */}
//         </div>
//       </div>
//       {/* Main content */}
//       <div
//         className={`flex-1 p-4
//                         ${isOpen ? "ml-64" : "ml-0"}`}
//       >
//         {/* Button to toggle sidebar */}
//         <div className="ml-auto">
//           <button
//             className="bg-blue-500 hover:bg-blue-700
//                        text-white font-bold py-2 px-4 rounded"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {/* Toggle icon based on isOpen state */}
//             {isOpen ? (
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
