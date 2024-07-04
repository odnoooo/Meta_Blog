"use client";

import Image from "next/image";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Trending } from "../components/Trending";
import { AllBlogPost } from "../components/AllBlogPost";
import Head from "next/head";
import { useEffect, useState } from "react";

const getArticle = async () => {
  const res = await fetch("https://dev.to/api/articles");

  const articles = await res.json();

  return articles;
};

export default function Home() {
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticle();

    setArticles(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full px-4 lg:w-[1130px]">
      <div className=" m-auto flex flex-col gap-6 text-current">
        <Header />
        <Main articles={articles} />
        <Trending articles={articles} />
        <AllBlogPost articles={articles} />
        <Footer />
      </div>
    </div>
  );
}
