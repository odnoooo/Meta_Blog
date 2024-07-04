export const TrendingCards = ({img,tag,desc}) => {
  return (
    <div>
      <img src={img} className="object-cover" />
      <p className="p-2 bg-[#a3a5b5] rounded-lg text-[#4B6BFB]">{tag}</p>
      <p className="text-lg font-semi-bold text-white">{desc}</p>
    </div>
  );
};
