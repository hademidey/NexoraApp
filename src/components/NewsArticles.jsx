import React from "react";
import NewsCards from "./NewsCards";
import Logo from "./Logo";
const NewsCardInfo = [
  {
    img: "/img/news1.png",
    title: "TECHNOLOGY",
    description: "Emphasizing new displays and AI integration ",
  },
  {
    img: "/img/news2.png",
    title: "CONSULTATION ",
    description: "Navigating the business economy effectively.",
  },
  {
    img: "/img/news3.png",
    title: "SUPPORT",
    description: "Creating a more supportive ecosystem for businesses.",
  },
];
export default function NewsArticles() {
  return (
    <div className="text-center pt-3 bg-[#F5FCFF] ">
      <span className="text-blue-700 text-2xl font-bold">LATEST NEWS</span>
      <h2 className="font-bold ">News & Articles</h2>
      <div className="items-center flex flex-col justify-center md:flex-row">
        {NewsCardInfo.map((service) => (
          <NewsCards details={service} />
        ))}
      </div>
      <button className="bg-blue-600 px-6 font-bold text-white mt-6 py-3 rounded-xl">
        View all Blog
      </button>
    </div>
  );
}
