"use client";

import { useState, useEffect } from "react";
import { RiArrowLeftWideFill } from "react-icons/ri";
import { RiArrowRightWideFill } from "react-icons/ri";
import { MainCards } from "./MainCards";

export const Main = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [percent, setPercent] = useState(0);
  // const [isTransitioning, setIsTransitioning] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     percent === 3 ? setIsTransitioning(false) : setIsTransitioning(true);
  //     setPercent((prev) => (prev + 1) % 4);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // });

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
            className={`absolute  duration-1000 ease-in-out w-full h-full scroll-smooth ${
              index === currentIndex ? "block" : "hidden"
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
