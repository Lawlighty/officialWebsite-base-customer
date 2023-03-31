import React, { useState, useEffect, createContext } from "react";
const dayjs = require("dayjs");
interface IChatContextProps {
  isLoading: boolean;
  qList: [];
  setIsLoading: (loading: boolean) => void;
  setQList: (list: any[]) => void;
}

interface IProps {
  children: JSX.Element;
}

export const ChatContext = createContext<IChatContextProps>(
  {} as IChatContextProps
);

export const ChatContextProvider = ({ children }: IProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [qList, setQList] = useState<any>([
    {
      time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      user: "user",
      content: "什么是快乐星球",
      type: "others",
      customClass: "others",
    },
    {
      time: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      user: "ai",
      content: "bababab,是快乐星球",
      type: "others",
      customClass: "others",
    },
  ]);
  //   const [qList, setQList] = useState<any>([]);

  // 监听本地缓存来同步不同页面间的主题
  useEffect(() => {}, []);

  return (
    <ChatContext.Provider
      value={{
        isLoading,
        qList,
        setIsLoading,
        setQList,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
