// nextjs 的构建配置，底层也是基于 Webpack 去打包的
const path = require("path");
const semi = require("@douyinfe/semi-next").default({});

module.exports = semi({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    return config;
  },
  images: {
    domains: [
      "127.0.0.1",
      "lawlighty-blog.oss-cn-hangzhou.aliyuncs.com",
      "assets.amzport.com",
      "dummyimage.com",
      "images.unsplash.com",
      "user-assets.sxlcdn.com",
      "nextjs.org",
    ], // 支持 next/image
  },
});
