"use client";
import { useEffect, useState } from "react";

import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MainCards } from "./MainCards";
import Link from "next/link";

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
    <div className="lg:w-[1216px] w-full h-[651px] flex flex-col justify-between lg:gap-[11px] ">
      <div className="relative overflow-hidden w-full h-full transition">
        {articles.map((item, index) => (
          <div
            key={item.title}
            className={`absolute transition-transform duration-500 ease-in-out w-full h-full scroll-smooth ${index === currentIndex ? "block" : "hidden"
              }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <MainCards
              img={item.cover_image}
              tags={item.tag_list}
              desc={item.description}
              date={item.created_at}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2 justify-center h-10 lg:justify-end ">
        <button
          className="px-3 border border-slate-500 hover:bg-gray-100 rounded ease-in"
          onClick={prevSlide}
        >
          <RiArrowLeftWideFill />
        </button>
        <button
          className="px-3 border border-slate-500 hover:bg-gray-100 rounded ease-in duration-300"
          onClick={nextSlide}
        >
          <RiArrowRightWideFill />
        </button>
      </div>
    </div>
  );
};
