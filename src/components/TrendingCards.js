export const TrendingCards = ({ img, tag, desc }) => {
  return (
    <div className=" relative border rounded-2xl h-80 flex  items-end">
      <img src={img} className="object-cover relative w-full h-full rounded-2xl bottom-0" />
      <div className=" bg-transparent  bottom-0 flex flex-col rounded-2xl absolute p-5 gap-3">
        <p className=" px-3 py-2 w-fit bg-[#4B6BFB] rounded-lg text-xs text-white">{tag}</p>
        <p className="text-lg font-semi-bold text-white line-clamp-3">{desc}</p>
      </div>
    </div>
  );
};
