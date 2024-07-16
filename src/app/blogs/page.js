"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArticleCards } from "@/components/ArticleCards";

const BlogsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://dev.to/api/articles"); // Assuming your API endpoint is /api/articles
        const data = await res.json();

        setArticles(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="w-full m-auto px-4 lg:w-[1216px] lg:m-auto">
      <div className="flex flex-wrap gap-[19px]">
        {articles.slice(0, 12).map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <div>
              <ArticleCards
                img={item.cover_image}
                tags={item.tag_list}
                desc={item.description}
                date={item.created_at}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;

