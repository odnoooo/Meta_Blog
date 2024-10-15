import { CardName } from "./CardName";
import { TrendingCards } from "./TrendingCards";

export const Trending = ({ articles }) => {
  return (
    <div className="flex flex-col gap-8 lg:w-[1216px]">
      <CardName title="Trending" />
      <div className="w-full overflow-scroll">
        <div className="w-[410%] lg:w-full flex gap-4">
          {articles.slice(0, 4).map((item, index) => (
            <div key={index}>
              <TrendingCards
                img={item.cover_image}
                tags={item.tag_list}
                desc={item.description}
              />
            </div>
          ))}
        </div>
      </div>
      <button></button>
    </div>
  );
};
