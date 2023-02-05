import Image from "next/image";
import map_zk_addrs_Webp from "@/public/images/culture/map_zk_addrs.webp";
const ContactAddress = () => {
  return (
    <>
      <section className="text-gray-600 body-div relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <Image
              alt="定位图片"
              className="absolute inset-0 object-cover"
              src={map_zk_addrs_Webp}
              fill
            ></Image>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-div div-semibold text-gray-900 tracking-widest text-xs">
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>地址</div>
                  </div>
                </h2>
                <div className="mt-1">
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>
                      浙江省杭州市滨江区六和路309号中控科技园
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-div div-semibold text-gray-900 tracking-widest text-xs">
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>电子邮件</div>
                  </div>
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>
                      example@email.com
                    </div>
                  </div>
                </a>
                <h2 className="title-div div-semibold text-gray-900 tracking-widest text-xs mt-4">
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>电话</div>
                  </div>
                </h2>
                <div className="leading-relaxed">
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>123-456-7890</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <div className="p-4">
              <h2 className="text-gray-900 text-lg mb-1 div-medium title-div">
                <div style={{ verticalAlign: "inherit" }}>
                  <div style={{ verticalAlign: "inherit" }}>反馈</div>
                </div>
              </h2>
              <div className="leading-relaxed mb-5 text-gray-600">
                <div style={{ verticalAlign: "inherit" }}>
                  <div style={{ verticalAlign: "inherit" }}>
                    浙江省杭州市滨江区六和路309号中控科技园
                  </div>
                </div>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>姓名</div>
                  </div>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="称呼名字"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>联系方式</div>
                  </div>
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="联系电话"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  <div style={{ verticalAlign: "inherit" }}>
                    <div style={{ verticalAlign: "inherit" }}>信息</div>
                  </div>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="描述你的需求，如APP开发、微信开发、网站建设等。"
                ></textarea>
              </div>
              <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                <div style={{ verticalAlign: "inherit" }}>
                  <div style={{ verticalAlign: "inherit" }}>提交</div>
                </div>
              </button>
              <div className="text-xs text-gray-500 mt-3">
                <div style={{ verticalAlign: "inherit" }}>
                  <div style={{ verticalAlign: "inherit" }}>
                    Chicharrones 博客 helvetica normcore iceland tousled brook
                    viral artisan。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactAddress;
