export const ArticleCards = ({ img, tag, desc, date }) => {
  return (
    <div>
      <img src={img} />
      <p className="p-2 bg-[#f7f8ff] rounded-lg text-[#4B6BFB]">{tag}</p>
      <p>{desc}</p>
      <p>{date}</p>
    </div>
  );
};
