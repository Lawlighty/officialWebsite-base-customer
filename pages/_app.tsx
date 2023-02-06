import "tailwindcss/tailwind.css"; // 在的 JS 中直接导入 Tailwind
import "../styles/globals.css";

import type { AppProps, AppContext } from "next/app";
import { Layout, ILayoutProps } from "@/components/layout";
import Head from "next/head";
import axios from "axios";
import { getIsMobile, LOCALDOMAIN, getIsSupportWebp } from "@/utils";
import { ThemeContextProvider } from "@/stores/theme";
import "./global.scss";
import { UserAgentProvider } from "@/stores/userAgent";
export interface IComponentProps {
  isMobile?: boolean;
  isSupportWebp?: boolean;
}

const MyApp = (
  data: AppProps & ILayoutProps & { isMobile: boolean; isSupportWebp: boolean }
) => {
  // console.log("data==>", data);

  const {
    Component,
    pageProps,
    navbarData,
    footerData,
    isMobile,
    isSupportWebp,
  } = data;

  return (
    <div>
      <Head>
        <title>{`唯米~(${isMobile ? "移动端" : "pc端"})`}</title>
        <meta charSet="utf-8"></meta>
        {/* 富媒体对象 */}
        <meta content="唯米科技" property="og:title"></meta>
        <meta content="https://www.amzport.com/" property="og:url"></meta>
        <meta
          content="https://user-assets.sxlcdn.com/images/127227/FtMmix2fL0V--fBetGmvrlkctIE9.png?imageMogr2/strip/thumbnail/1200x630>/quality/90!/format/png"
          property="og:image"
        ></meta>
        <meta content="唯米科技" property="og:site_name"></meta>
        <meta
          content="杭州一流的软硬件定制开发服务商，秉承“励志进取，追求卓越”的精神，汇聚前沿科技技术助力企业产品智能创新。唯米科技致力于为客户提供最有价值的互联网+产品解决方案。诚信 · 创新 · 研发 · 服务"
          property="og:description"
        ></meta>

        <meta content="唯米科技" itemProp="name"></meta>
        <meta
          content="杭州一流的软硬件定制开发服务商，秉承“励志进取，追求卓越”的精神，汇聚前沿科技技术助力企业产品智能创新。唯米科技致力于为客户提供最有价值的互联网+产品解决方案。诚信 · 创新 · 研发 · 服务"
          itemProp="description"
        ></meta>
        <meta
          content="https://user-assets.sxlcdn.com/images/127227/FtMmix2fL0V--fBetGmvrlkctIE9.png?imageMogr2/strip/thumbnail/1200x630>/quality/90!/format/png"
          itemProp="image"
        ></meta>

        {/* twitter */}
        <meta content="summary_large_image" name="twitter:card"></meta>
        <meta content="唯米科技" name="twitter:title"></meta>
        <meta
          content="杭州一流的软硬件定制开发服务商，秉承“励志进取，追求卓越”的精神，汇聚前沿科技技术助力企业产品智能创新。唯米科技致力于为客户提供最有价值的互联网+产品解决方案。诚信 · 创新 · 研发 · 服务"
          name="twitter:description"
        ></meta>
        <meta
          content="https://user-assets.sxlcdn.com/images/127227/FtMmix2fL0V--fBetGmvrlkctIE9.png?imageMogr2/strip/thumbnail/1200x630>/quality/90!/format/png"
          name="twitter:image"
        ></meta>

        {/* default */}
        <meta
          name="keywords"
          content="杭州,网站开发,钉钉,APP开发,微信小程序,可视化数据,智能车间,智能硬件,软件定制,物联网,阿里云,七牛云,amzport,qiyou"
        ></meta>
        <meta
          name="description"
          content="杭州一流的软硬件定制开发服务商，秉承“励志进取，追求卓越”的精神，汇聚前沿科技技术助力企业产品智能创新。唯米科技致力于为客户提供最有价值的互联网+产品解决方案。诚信 · 创新 · 研发 · 服务"
        />

        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <link rel="icon" href="/l.svg.ico" />
      </Head>
      <ThemeContextProvider>
        <UserAgentProvider>
          <Layout navbarData={navbarData} footerData={footerData}>
            <Component
              {...pageProps}
              isMobile={isMobile}
              isSupportWebp={isSupportWebp}
            />
          </Layout>
        </UserAgentProvider>
      </ThemeContextProvider>
    </div>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  // const pageProps = await App.getInitialProps(context);
  const { Component, ctx } = context;
  const cData = {
    pageProps: {
      title: "Hello Lawlighty's SSR!",
      description: "A Demoe for SSR",
      articles: {
        list: [
          {
            label: "框架通识之 MVC MVVM",
            info: "框架通识之 MVC MVVM",
            link: "https://blog.lawlighty.top/detailed/618f1a8cfcce5b89ea303d39",
          },
          {
            label: "权限验证",
            info: "权限验证",
            link: "https://blog.lawlighty.top/detailed/62ff2e5bc76e5ef0989a7780",
          },
          {
            label: "从Unis框架中看React/Vue",
            info: "从Unis框架中看React/Vue",
            link: "https://blog.lawlighty.top/detailed/626900f3c76e5ef0989a6c11",
          },
          {
            label: "前端框架",
            info: "前端框架漫谈",
            link: "http://127.0.0.1:3000/article/4",
          },
          {
            label: "React Diff算法 核心理念",
            info: "React Diff算法 核心理念",
            link: "https://blog.lawlighty.top/detailed/625ccf97c76e5ef0989a6aa5",
          },
          {
            label: "日期时间处理问题",
            info: "日期时间处理问题",
            link: "https://blog.lawlighty.top/detailed/62d76f74c76e5ef0989a7481",
          },
        ],
        total: 7,
      },
    },
    navbarData: {},
    footerData: {
      title: "WithMe唯米",
      linkList: [
        {
          title: "技术栈",
          list: [
            {
              label: "react",
              link: "",
            },
            {
              label: "typescript",
              link: "",
            },
            {
              label: "ssr",
              link: "",
            },
            {
              label: "nodejs",
              link: "",
            },
          ],
        },
        {
          title: "了解更多",
          list: [
            {
              label: "掘金",
              link: "https://juejin.cn/user/545799370726270",
            },
            {
              label: "博客",
              link: "https://blog.lawlighty.top/",
            },
            {
              label: "知乎",
              link: "",
            },
            {
              label: "github",
              link: "https://github.com/Lawlighty",
            },
          ],
        },
        {
          title: "联系我们",
          list: [
            {
              label: "QQ",
              link: "978170580",
            },
            {
              label: "WeChat",
              link: "lyxlissa",
            },
          ],
        },
      ],
      qrCode: {
        image:
          "https://lawlighty-blog.oss-cn-hangzhou.aliyuncs.com/articles/wx-lawlighty.jpg",
        text: "扫码加唯米好友~",
      },
      copyRight: "Copyright © 2023 lawlighty. 保留所有权利",
      siteNumber: "浙ICP备2021032851号",
      publicNumber: "浙公网安备 2021032851号",
    },
  };
  // const { data = {} } = await axios.get(`${LOCALDOMAIN}/api/layout`);
  // console.log("data", data);

  return {
    // ...pageProps,
    ...cData,
    isMobile: getIsMobile(context),
    isSupportWebp: getIsSupportWebp(context),
  };
};

export default MyApp;
