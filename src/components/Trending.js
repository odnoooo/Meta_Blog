import { Technology } from "./Technology";
import { CardName } from "./CardName";
import { Title } from "./Title";
import { TrendingCards } from "./TrendingCards";

export const Trending = (props, { articles }) => {
  return (
    <div className="h-[390px] flex flex-col gap-8">
      <CardName title="Trending" />
      {/* {articles.map((item, index) => {
        return (
          <div>
            <TrendingCards
              key={item.title}
              img={item.cover_image}
              tag={item.tags}
              desc={description}
            />
          </div>
        );
      })} */}
      {/* <div className="border">
        <img></img>
        <Technology />
        <Title />
      </div> */}
      <button></button>
    </div>
  );
};
