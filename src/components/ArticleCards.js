export const ArticleCards = ({ img, tag, desc, date }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col gap-6">
      <img src={img} className="h-60 rounded-lg" />
      <div className="flex flex-col gap-4">
        <p className="w-fit py-2 px-3 bg-[#f7f8ff] rounded-lg text-[#4B6BFB] text-sm">{tag}</p>
        <p className="text-2xl font-semibold line-clamp-3">{desc}</p>
      </div>
      <p className="text-[#97989F]">{date}</p>
    </div>
  );
};
