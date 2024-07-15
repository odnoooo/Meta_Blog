export const MainCards = ({ img, tag, desc, date }) => {
  return (
    <div className=" relative border rounded-2xl h-[600px] flex  items-end  ">
      <img
        src={img}
        className="object-cover relative w-full h-full rounded-2xl bottom-0"
      />
      <div className="lg:w-1/2  m-2 bottom-2 flex flex-col rounded-2xl border absolute bg-white p-10 gap-5">
        <div className="flex flex-col gap-5">
          <p className=" w-fit py-2 px-3 bg-[#4B6BFB] rounded-lg text-white text-sm ">
            {tag}
          </p>
          <p className="line-clamp-4 lg:line-clamp-2 text-4xl font-semi-bold">
            {desc}
          </p>
        </div>

        <p className="text-base text-slate-500">{date}</p>
      </div>
    </div>
  );
};
