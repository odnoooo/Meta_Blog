// "use client";

// import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// import { useState } from "react";

// export const SideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <button
//         className="p-2 bg-green-500 text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {isOpen ? "Close Sidebar" : "Open Sidebar"}
//       </button>
//       <div
//         className={`fixed top-0 left-0 h-full bg-gray-100 transition-transform transform ${isOpen ? "translate-x-0" : "-translate-x-full"
//           } w-[300px] z-50 shadow-lg`}
//       >
//         <div className="flex justify-between p-4 bg-green-500 hover:bg-green-600">
//           <p className="text-white">Menu</p>
//           <button
//             className="text-white"
//             onClick={() => setIsOpen(false)}
//           >
//             x
//           </button>
//         </div>
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


