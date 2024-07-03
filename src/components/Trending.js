import { Technology } from "./Technology";
import { CardName } from "./CardName";
import { Title } from "./Title";

export const Trending = (props) => {
  return (
    <div className="h-[390px] flex flex-col gap-8">
      <CardName title="Trending" />
      <div className="border">
        <img></img>
        <Technology />
        <Title />
      </div>
      <button></button>
    </div>
  );
};
