"use client";
import { useEffect, useState } from "react";

// import { RiArrowLeftWideFill } from "react-icons/ri";
// import { RiArrowRightWideFill } from "react-icons/ri";
// import { MainCards } from "./MainCards";

// export const Main = ({ articles }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? articles.length - 1 : prevIndex - 1
//     );
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === articles.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   return (
//     <div className="w-full h-[651px] flex flex-col gap-6">
//       <div className="flex relative overflow-hidden">
//         {articles.slice(0, 4).map((item, index) => {
//           return (
//             <div
//               key={index}
//               className={`absolute transition-transform duration-500 ease-in-out ${
//                 index === currentIndex ? "active" : ""
//               }`}
//               style={{
//                 transform: `translateX(${(index - currentIndex) * 100}%)`,
//               }}
//             >
//               <MainCards
//                 img={item.cover_image}
//                 tag={item.tags}
//                 desc={item.description}
//                 date={item.created_at}
//               />
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex gap-2 m-auto h-10  ">
//         <button
//           className="px-3 border border-slate-500 rounded-md"
//           onClick={prevSlide}
//         >
//           <RiArrowLeftWideFill />
//         </button>
//         <button
//           className="px-3 border border-slate-500 rounded-md"
//           onClick={nextSlide}
//         >
//           <RiArrowRightWideFill />
//         </button>
//       </div>
//     </div>
//   );
// };

import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MainCards } from "./MainCards";

export const Main = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? articles.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === articles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-[651px] flex flex-col gap-6">
      <div className="relative overflow-hidden w-full h-full">
        {articles.map((item, index) => (
          <div
            key={item.title}
            className={`absolute transition-transform duration-500 ease-in-out w-full h-full ${
              index === currentIndex ? "block" : "hidden"
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <MainCards
              img={item.cover_image}
              tag={item.tags}
              desc={item.description}
              date={item.created_at}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2 m-auto h-10">
        <button
          className="px-3 border border-slate-500 rounded-md"
          onClick={prevSlide}
        >
          <RiArrowLeftWideFill />
        </button>
        <button
          className="px-3 border border-slate-500 rounded-md"
          onClick={nextSlide}
        >
          <RiArrowRightWideFill />
        </button>
      </div>
    </div>
  );
};
