import React, { useState, useEffect, createContext } from "react";
const dayjs = require("dayjs");
interface IChatContextProps {
  isLoading: boolean;
  qList: [];
  value: string;
  response: string;
  setIsLoading: (loading: boolean) => void;
  setQList: (list: any[]) => void;
  setValue: (str: string) => void;
  setResponse: (str: string) => void;
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

  const [value, setValue] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  // 监听本地缓存来同步不同页面间的主题
  useEffect(() => {}, []);

  return (
    <ChatContext.Provider
      value={{
        isLoading,
        qList,
        value,
        response,
        setIsLoading,
        setQList,
        setValue,
        setResponse,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
