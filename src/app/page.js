"use client";

import Image from "next/image";
import { Header } from "./componenets/Header";
import { Footer } from "./componenets/Footer";
import { MainCard } from "./componenets/MainCard";
import { Trending } from "./componenets/Trending";
import { AllBlogPost } from "./componenets/AllBlogPost";
import Head from "next/head";
import { useEffect, useState } from "react";

// const getArticle = async () => {
//   const res = await fetch();

//   const articles = await res.json();
//   return articles;
// };

export default function Home() {
  const [a, setA] = useState(0);
  const [articles, setArticles] = useState([]);

  const getData = async () => {
    const data = await getArticle();

    setArticles(data);
  };
  useEffect(async () => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-[343px] m-auto flex flex-col gap-6">
        <Header />
        <MainCard />
        <Trending />
        <AllBlogPost />
        <Footer />
      </div>
    </div>
  );
}
