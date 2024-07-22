import Image from "next/image";

export const TrendingCards = ({ img, tags, desc }) => {
  return (
    <div className=" relative border rounded-2xl h-80 flex  items-end">
      <Image
        src={img}
        className="object-cover relative w-full h-full rounded-2xl bottom-0"
      />
      <div className=" bg-transparent  bottom-0 flex flex-col rounded-2xl absolute p-5 gap-3">
        <div className="flex gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <p
              key={index}
              className="w-fit py-2 px-3 bg-[#f7f8ff] rounded-lg text-[#4B6BFB] text-sm "
            >
              {tag}
            </p>
          ))}
        </div>
        <p className="text-lg font-semi-bold text-white line-clamp-3">{desc}</p>
      </div>
    </div>
  );
};
