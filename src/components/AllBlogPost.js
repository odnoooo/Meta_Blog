import { ArticleCards } from "./ArticleCards";
import { CardName } from "./CardName";

export const AllBlogPost = ({ articles }) => {
  return (
    <div className="flex flex-col gap-8">
      <CardName title="All Blog Post" />
      <ul className="flex justify-between font-bold text-xs">
        <li>All</li>
        <li>Design</li>
        <li>Trevel</li>
        <li>Fashion</li>
        <li>Technology</li>
        <li>Branding</li>
      </ul>
      {articles.map((item, index) => {
        return (
          <div>
            <ArticleCards
              key={item.title}
              img={item.cover_image}
              tag={item.tags}
              desc={item.description}
              date={item.created_at}
            />
          </div>
        );
      })}
    </div>
  );
};
