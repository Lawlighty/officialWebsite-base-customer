import React, { useEffect } from "react";
import Image from "next/image";

const Team = () => {
  const userList = [
    {
      name: "华子润",
      post: "架构师",
      desc: "任何时间、任何地点帮你解决问题",
    },
    {
      name: "跑跑李",
      post: "开发工程师",
      desc: "代码和我只能跑一个",
    },
    {
      name: "张三",
      post: "开发工程师",
      desc: "巴拉巴拉",
    },
    {
      name: "李四",
      post: "开发工程师",
      desc: "玛卡巴卡",
    },
  ];

  return (
    <>
      <section className="text-gray-600 dark:text-gray-400 body-div">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl div-medium title-div mb-4 text-gray-900 dark:text-gray-100 tracking-widest">
              <div>
                <div>我们的队伍</div>
              </div>
            </h1>
            <div className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>
                  无论是开衫手提袋 tumblr
                  六边形布鲁克林不对称中产阶级化，地铁瓷砖戳农场到餐桌。
                </div>
                <div style={{ verticalAlign: "inherit" }}>
                  Franzen 你可能没听说过他们。
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {userList.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="p-4 lg:w-1/2">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                      <Image
                        alt="团队"
                        className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                        src="https://dummyimage.com/200x200"
                        height={200}
                        width={200}
                      ></Image>
                      <div className="flex-grow sm:pl-8">
                        <h2 className="title-div div-medium text-lg text-gray-900 dark:text-gray-100">
                          <div style={{ verticalAlign: "inherit" }}>
                            <div style={{ verticalAlign: "inherit" }}>
                              {item?.name ?? ""}
                            </div>
                          </div>
                        </h2>
                        <h3 className="text-gray-500 mb-3">
                          <div style={{ verticalAlign: "inherit" }}>
                            <div style={{ verticalAlign: "inherit" }}>
                              {item?.post ?? ""}
                            </div>
                          </div>
                        </h3>
                        <div className="mb-4">
                          <div style={{ verticalAlign: "inherit" }}>
                            <div style={{ verticalAlign: "inherit" }}>
                              {item?.desc ?? ""}
                            </div>
                          </div>
                        </div>
                        <span className="inline-flex">
                          <a className="text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                          </a>
                          <a className="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                          </a>
                          <a className="ml-2 text-gray-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="w-5 h-5"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                            </svg>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Team;
