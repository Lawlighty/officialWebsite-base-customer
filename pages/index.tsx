import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./index.module.scss";
import cName from "classnames";
import Link from "next/link";
import { Carousel, Typography, Space } from "@douyinfe/semi-ui";
import CompanySlider from "@/components/CompanySlider";
import Router from "next/router";
export default function Home() {
  const { Title, Paragraph } = Typography;

  const companyInfo = {
    name: "唯米科技",
    desc: "唯米科技致力于为客户提供最有价值的互联网+产品解决方案，汇聚前沿科技技术，汇聚前沿科技技术,积极探索社区技术",
  };

  const style = {
    width: "100%",
    height: "400px",
  };

  const titleStyle: any = {
    position: "absolute",
    top: "100px",
    left: "100px",
    color: "#1C1F23",
  };

  const colorStyle = {
    color: "#1C1F23",
  };

  const renderLogo = () => {
    return (
      <img
        src="https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/semi_logo.svg"
        alt="semi_logo"
        style={{ width: 87, height: 31 }}
      />
    );
  };

  const imgList = [
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-1.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-2.png",
    "https://lf3-static.bytednsdoc.com/obj/eden-cn/hjeh7pldnulm/SemiDocs/bg-3.png",
  ];

  const textList = [
    [
      "Semi 设计管理系统",
      "从 Semi Design，到 Any Design",
      "快速定制你的设计系统，并应用在设计稿和代码中",
    ],
    [
      "Semi 物料市场",
      "面向业务场景的定制化组件，支持线上预览和调试",
      "内容由 Semi Design 用户共建",
    ],
    [
      "Semi Pro (开发中)",
      "基于 40+ 真实组件代码设计",
      "海量页面模板前端代码一键转",
    ],
  ];

  const serviceList = [
    {
      title: "软件定制服务",
      desc: "为企业客户提供量身定制的软件开发服务，采取专业的定制开发流程来满足各大企业客户软件产品的多样化需求。",
      pic: "https://user-assets.sxlcdn.com/images/127227/FpncUU47CWBocIQcRq9NPX4nQ4qQ.png?imageMogr2/strip/auto-orient/thumbnail/720x1440>/quality/90!/format/png",
    },
    {
      title: "网站系统开发",
      desc: "以专业的水平为客户提供新颖富于创意的建站服务，针对不同行业为每一位客户设计与其品牌、服务、业务紧密相关的网站。",
      pic: "https://user-assets.sxlcdn.com/images/127227/FkgOFrvxrs2QMITjUBtA__pWfzdY.png?imageMogr2/strip/auto-orient/thumbnail/720x1440%3E/quality/90!/format/png",
    },
    {
      title: "小程序开发",
      desc: "以丰富的手机APP开发经验满足客户的定制需求，充分考虑功能和界面设计；项目采取敏捷开发模式，保证产品的质量和交付速度。",
      pic: "https://user-assets.sxlcdn.com/images/127227/Ftcn4hvfVzH55l52Xs-MIz-tJo7M.jpg?imageMogr2/strip/auto-orient/thumbnail/720x1440>/interlace/1/format/jpeg",
    },
  ];
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>WithMe唯米</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="w-full">
        {/* 视差 */}
        <div className={styles["parallax-container"]}>
          <div className={styles["parallax-image"]}></div>
          <section className={styles["parallax-content"]}>
            <div className="px-5">
              <div className="text-5xl md:text-7xl text-gray-100 mb-8">
                {companyInfo.name}
              </div>
              <div className="text-2xl md:text-3xl text-gray-100">
                {companyInfo.desc}
              </div>
            </div>
          </section>
        </div>
        {/* 轮播 */}
        <Carousel style={style} theme="dark">
          {imgList.map((src, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url(${src})`,
                }}
              >
                <Space
                  vertical
                  align="start"
                  spacing="medium"
                  style={titleStyle}
                >
                  {renderLogo()}
                  <Title heading={2} style={colorStyle}>
                    {textList[index][0]}
                  </Title>
                  <Space vertical align="start">
                    <Paragraph style={colorStyle}>
                      {textList[index][1]}
                    </Paragraph>
                    <Paragraph style={colorStyle}>
                      {textList[index][2]}
                    </Paragraph>
                  </Space>
                </Space>
              </div>
            );
          })}
        </Carousel>
        {/* 技术介绍 */}
        <section className="text-gray-600 dark:text-gray-200 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-xl">
                <span>
                  企业软件开发. 不要让您过时的软件阻碍公司发展！
                  让我们帮助您自动化复杂的业务流程，以提高生产力。
                </span>
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 dark:text-gray-100 font-medium title-font tracking-wider text-base">
                <span>我们喜欢挑战</span>
              </h2>
              <p className="text-gray-500 dark:text-gray-300 text-lg">
                <span>底气来源于实力</span>
              </p>
            </div>
          </div>
        </section>
        {/* 开发项目展示 */}
        <div className="flex flex-wrap bg-black">
          {serviceList.map((item, index) => {
            return (
              <React.Fragment key={item?.title ?? index}>
                <Link
                  href="/culture"
                  className="transform duration-1000 overflow-hidden bg-black relative w-full  md:flex-1 lg:w-1/3 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest "
                >
                  <div className="relative z-10 text-2xl">
                    <span>{item.title}</span>
                  </div>
                  <Image
                    src={item.pic}
                    className="absolute transform duration-1000 hover:scale-110 inset-0 w-full h-full object-cover  opacity-60 hover:opacity-100"
                    alt="背景图"
                    fill
                  ></Image>
                </Link>
              </React.Fragment>
            );
          })}
        </div>

        <CompanySlider></CompanySlider>

        <div
          className="border-t border-gray-200 text-black"
          style={{ backgroundColor: "#fafafa" }}
        >
          <div className={styles["serve__btn"]}>
            <Link
              scroll={true}
              href="/culture"
              className="inline-block bg-black text-white uppercase text-2xl tracking-widest font-heading px-4 py-2 mr-2 rounded-md"
            >
              Who&apos;s
            </Link>
            {/* <div
              className="inline-block bg-black text-white uppercase text-2xl tracking-widest font-heading px-4 py-2 mr-2 rounded-md"
              onClick={() =>
                Router.push("/culture").then(
                  () => window && window.scrollTo(0, 0)
                )
              }
            >
              Who's
            </div> */}
            Serving By WithMe?
          </div>

          <section className="text-gray-600 body-font">
            <div className="container px-5 pt-4 pb-24 mx-auto flex flex-wrap text-gray-900 ">
              <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div className="w-full sm:p-4 px-4 mb-6">
                  <h1 className="title-font font-medium text-xl mb-2">
                    Moon hashtag pop-up try-hard offal truffaut
                  </h1>
                  <div className="leading-relaxed ">
                    倒精酿啤酒哈巴狗喝醋 live-edge 美食酒吧，keytar neutra
                    可持续 fingerstache kickstarter。
                  </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl ">2.7K</h2>
                  <p className="leading-relaxed">用户</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl ">1.8K</h2>
                  <p className="leading-relaxed">订阅</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl ">35</h2>
                  <p className="leading-relaxed">下载</p>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                  <h2 className="title-font font-medium text-3xl ">4个</h2>
                  <p className="leading-relaxed">产品</p>
                </div>
              </div>
              <div className="w-full  lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <Image
                  src="https://dummyimage.com/600x300"
                  className="object-cover object-center w-full h-full"
                  alt="统计数据"
                  width={600}
                  height={300}
                ></Image>
              </div>
            </div>
          </section>
        </div>

        {/* 底部 */}
        <div className="relative w-full py-12 px-12">
          <div className="relative z-10 text-center py-12 md:py-24">
            <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
              无限定制
            </h1>
            <div className="text-white mb-10 text-base md:text-lg font-bold">
              通过工作场所的多样性和授权，有机地发展颠覆性创新的整体世界观。
            </div>
            <Link
              href="/culture"
              className="transform duration-1000 inline-block bg-yellow-800 hover:scale-110 hover:bg-yellow-500 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
            >
              了解更多
            </Link>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1501901609772-df0848060b33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            className="w-full h-full absolute inset-0 object-cover"
            alt="背景图"
            fill
          ></Image>
        </div>
      </main>
    </div>
  );
}
