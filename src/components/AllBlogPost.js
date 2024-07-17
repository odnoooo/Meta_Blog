import { useState } from "react";
import { ArticleCards } from "./ArticleCards";
import { CardName } from "./CardName";
import Link from "next/link";

export const AllBlogPost = ({ articles }) => {
  return (
    <div className="flex flex-col gap-8 w-[1216px]">
      <CardName title="All Blog Post" />
      <div className="flex lg:flex lg:justify-between">
        <ul className="flex justify-between font-bold text-xs lg:gap-5">
          <li>All</li>
          <li>Design</li>
          <li>Travel</li>
          <li>Fashion</li>
          <li>Technology</li>
          <li>Branding</li>
        </ul>
        <Link
          href={`/blogs`}
          className="invisible lg:visible text-xs font-bold"
        >
          View all
        </Link>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5">
        {articles.slice(0, 9).map((item) => (
          <Link key={item.id} href={`/blog/${item.id}`}>
            <ArticleCards
              img={item.cover_image}
              tags={item.tag_list}
              desc={item.description}
              date={item.created_at}
            />
          </Link>
        ))}
      </div>

      <div className="m-auto w-fit flex justify-center">
        <button className="border border-slate-300 py-3 px-5 rounded-lg text-base">
          Load more
        </button>
      </div>
    </div>
  );
};
