import { Title } from "./Title";
export const AllBlogPost = () => {
  return (
    <div className="flex flex-col gap-8">
      <Title title="All Blog Post" />
      <ul className="flex justify-between font-bold text-xs">
        <li>All</li>
        <li>Design</li>
        <li>Trevel</li>
        <li>Fashion</li>
        <li>Technology</li>
        <li>Branding</li>
      </ul>
      <div></div>
    </div>
  );
};
