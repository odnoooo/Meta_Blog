"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArticleCards } from "@/components/ArticleCards";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CardName } from "@/components/CardName";

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
    <div>
      <div className="w-full m-auto px-4 lg:px-0 lg:w-[1216px] lg:m-auto flex flex-col gap-12">
        <CardName title="All blog post" />
        <div className="grid grid-cols-3 gap-5">
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
      <div className="m-auto w-fit flex justify-center">
        <button className="border border-slate-300 py-3 px-5 rounded-lg text-base">
          Load more
        </button>
      </div>
      <div className="w-screen bg-gray-100 m-auto mt-12"></div>
    </div>
  );
};

export default BlogsPage;
