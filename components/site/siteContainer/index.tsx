// 展示卡片组件 (三个内容)
// 支持 并排 / 左一右二 / 左二右一
import React from "react";
import SiteItem from "../siteItem";

interface ISiteItem {
  key?: any;
  name: string;
  url: string;
  img: string;
  alt: string;
}
interface ISiteContainer {
  mode?: "default" | "left" | "right"; // 并排
  options: ISiteItem[];
}
const SiteContainer = (props: ISiteContainer) => {
  const { mode = "default", options = [] } = props;
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-6 mx-auto">
          <div className="text-center ">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 dark:text-white">
              案例展示
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 dark:text-gray-200">
              Meet hundreds of beautiful websites built with Next.js by WithMe
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col flex-1 md:flex-row flex-wrap">
        {options.map((item, index) => {
          return (
            <div key={item?.key ?? index} className="w-full md:w-1/2 lg:w-1/3">
              <SiteItem site={item}></SiteItem>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default SiteContainer;
