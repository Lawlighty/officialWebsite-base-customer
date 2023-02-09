import SiteContainer from "@/components/site/siteContainer";

const Showcase = () => {
  const options = [
    {
      key: "1",
      name: "TikTok",
      url: "https://www.tiktok.com/",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftiktok.75c37b0b.png&w=828&q=65",
      alt: "图片背景",
    },
    {
      key: "2",
      name: "Netflix Jobs",
      url: "https://jobs.netflix.com",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcases-02.983de4fa.jpg&w=640&q=55",
      alt: "图片背景",
    },
    {
      key: "3",
      name: "Twitch",
      url: "https://m.twitch.tv",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.5e75fd8c.jpg&w=640&q=55",
      alt: "图片背景",
    },
    {
      key: "4",
      name: "Hulu",
      url: "https://www.hulu.com",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhulu.138888a5.png&w=1080&q=60",
      alt: "图片背景",
    },
    {
      key: "5",
      name: "Notion",
      url: "https://notion.com",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnotion.dbacb6a8.png&w=640&q=55",
      alt: "图片背景",
    },
    {
      key: "6",
      name: "Target",
      url: "https://www.target.com/",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftarget.3eb1fcb3.png&w=640&q=55",
      alt: "图片背景",
    },
    {
      key: "7",
      name: "Nike",
      url: "https://www.nike.com/help",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnike.509ec268.jpg&w=640&q=50",
      alt: "图片背景",
    },
    {
      key: "8",
      name: "HBO Max",
      url: "https://www.hbomax.com/",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhbomax.72d4d4ad.png&w=640&q=50",
      alt: "图片背景",
    },
    {
      key: "9",
      name: "IGN",
      url: "https://www.ign.com",
      img: "https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fign.5da9900b.jpg&w=640&q=50",
      alt: "图片背景",
    },
  ];

  return (
    <>
      <SiteContainer options={options}></SiteContainer>
    </>
  );
};
export default Showcase;
