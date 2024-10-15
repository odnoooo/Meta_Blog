"use client";

import { format } from "date-fns";

export const ArticleCards = ({ img, tags, desc, date }) => {
  const formattedDate = format(new Date(date), "MM/dd/yyyy");

  return (
    <div className="h-[476px] border rounded-lg flex flex-col gap-6 w-full p-4">
      <img
        src={img}
        alt="Article image"
        layout="fill"
        objectFit="cover"
        className="rounded-lg relative h-60 w-full"
      />
      <div className="flex flex-col">
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag, index) => (
            <p
              key={index}
              className="w-fit py-2 px-3 bg-[#f7f8ff] rounded-lg text-[#4B6BFB] text-sm"
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="text-2xl font-semibold line-clamp-3">{desc}</p>
      </div>
      <p className="text-[#97989F]">{formattedDate}</p>
    </div>
  );
};
