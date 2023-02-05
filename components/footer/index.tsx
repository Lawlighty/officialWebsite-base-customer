import React, { FC } from "react";
import Image from "next/image";
import publicLogo from "@/public/images/footer/public_logo.png";
import cName from "classnames";
import styles from "./styles.module.scss";
interface ILink {
  label: string;
  link?: string;
}

interface ILinkList {
  title: string;
  list: ILink[];
}

interface IQRCode {
  image: string;
  text: string;
}

export interface IFooterProps {
  title: string;
  linkList: ILinkList[];
  qrCode: IQRCode;
  copyRight: string;
  siteNumber: string; // 站点备案号
  publicNumber: string; // 公安备案号
}

export const Footer: FC<IFooterProps> = ({
  title,
  linkList,
  qrCode,
  copyRight,
  siteNumber,
  publicNumber,
}) => {
  return (
    <div>
      <footer className="text-gray-600 dark:text-gray-100  body-div">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-div div-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">
                <div style={{ verticalAlign: "inherit" }}>
                  <div
                    style={{ verticalAlign: "inherit" }}
                    className="dark:text-gray-100"
                  >
                    {title}
                  </div>
                </div>
              </span>
            </a>
            <div className="mt-2 text-sm text-gray-500">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={qrCode?.image}
                  alt={qrCode?.text}
                  width={200}
                  height={200}
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center justify-end">
            {linkList.map((item, index) => {
              return (
                <div
                  className="lg:w-1/4 md:w-1/2 w-full px-4"
                  key={`linkArea${index}`}
                >
                  <h2 className="title-div div-medium text-gray-900 dark:text-white tracking-widest text-sm mb-3">
                    <div style={{ verticalAlign: "inherit" }}>
                      <div style={{ verticalAlign: "inherit" }}>
                        {item.title}
                      </div>
                    </div>
                  </h2>
                  <nav className="list-none mb-10">
                    {item.list?.map((_item, _index) => {
                      return (
                        <li key={`link${_index}`}>
                          <a className="text-gray-600 hover:text-gray-800">
                            <div style={{ verticalAlign: "inherit" }}>
                              <div
                                style={{ verticalAlign: "inherit" }}
                                className={cName({
                                  [styles.link]: _item.link,
                                  [styles.disabled]: !_item.link,
                                })}
                                onClick={(): void => {
                                  _item.link &&
                                    window.open(
                                      _item.link,
                                      "blank",
                                      "noopener=yes,noreferrer=yes"
                                    );
                                }}
                              >
                                {_item?.label}
                              </div>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </nav>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-bg_dark">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <div className="text-gray-500 dark:text-gray-text_dark text-sm text-center sm:text-left">
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>{copyRight}</div>
              </div>
              <div style={{ verticalAlign: "inherit" }}>
                <div style={{ verticalAlign: "inherit" }}>{siteNumber}</div>
              </div>
              <div style={{ verticalAlign: "inherit" }}>
                <Image
                  className="inline-block"
                  src={publicLogo}
                  alt={publicNumber}
                  width={20}
                  height={20}
                ></Image>
                <div className="inline-block ml-1">{publicNumber}</div>
              </div>
            </div>

            {/* 底部右侧联系 */}
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};
