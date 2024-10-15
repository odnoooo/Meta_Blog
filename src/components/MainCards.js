import { format } from "date-fns";
import Image from "next/image";

export const MainCards = ({ img, tags, desc, date }) => {
  const formattedDate = format(new Date(date), "MM/dd/yyyy");
  return (
    <div className=" relative rounded-2xl h-[600px] flex  items-end  ">
      <img
        src={img}
        className="relative w-full h-full rounded-2xl"
        alt="Main image"
      />
      <div className="lg:w-1/2 w-full flex flex-col absolute p-2">
        <div className=" bg-white  p-10 gap-5 rounded-2xl">
          <div className="flex flex-col gap-5">
            <div className="flex gap-2">
              {tags.slice(0, 3).map((tag, index) => (
                <p
                  key={index}
                  className=" w-fit py-2 px-3 bg-[#4B6BFB] rounded-lg text-white text-sm "
                >
                  {tag}
                </p>
              ))}
            </div>

            <p className="line-clamp-4 lg:line-clamp-2 text-4xl font-semi-bold">
              {desc}
            </p>
          </div>

          <p className="text-base text-slate-500">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};
