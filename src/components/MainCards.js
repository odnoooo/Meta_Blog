export const MainCards = ({ img, tag, desc, date }) => {
  return (
    <div className=" overflow-hidden relative border rounded-2xl h-[600px] flex  items-end  ">
      <img src={img} className="object-cover relative w-full h-full" />
      <div className="h-[341px] m-2 flex flex-col rounded-2xl border absolute bg-white p-10 gap-5">
        <div className="flex flex-col gap-5">
          <p className=" w-fit py-2 px-2 bg-[#4B6BFB] rounded-lg text-white text-sm ">
            {tag}
          </p>
          <p className="line-clamp-4 text-4xl font-semi-bold">{desc}</p>
        </div>

        <p className="text-base text-slate-500">{date}</p>
      </div>
    </div>
  );
};
