import { Technology } from "./Technology";
import { CardName } from "./CardName";
import { Title } from "./Title";
import { TrendingCards } from "./TrendingCards";

export const Trending = ({ articles }) => {
  return (
    <div className="h-[390px] flex flex-col gap-8">
      <CardName title="Trending" />
      <div className="flex">
        {articles.slice(0, 9).map((item, index) => {
          return (
            <div>
              <TrendingCards
                key={item.title}
                img={item.cover_image}
                tag={item.tags}
                desc={item.description}
              />
            </div>
          );
        })}
      </div>

      <button></button>
    </div>
  );
};
