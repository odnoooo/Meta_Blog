export const ArticleCards = ({ img, tag, desc, date }) => {
  return (
    <div>
      <img src={img} />
      <p className="p-2 bg-[#a3a5b5] rounded-lg text-[#4B6BFB]">{tag}</p>
      <p>{desc}</p>
      <p>{date}</p>
    </div>
  );
};
