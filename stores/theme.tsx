import React, { useState, useEffect, createContext } from "react";
import { Themes } from "@/constants/enum";

interface IThemeContextProps {
  theme: Themes;
  setTheme: (theme: Themes) => void;
}

interface IProps {
  children: JSX.Element;
}

export const ThemeContext = createContext<IThemeContextProps>(
  {} as IThemeContextProps
);

export const ThemeContextProvider = ({ children }: IProps): JSX.Element => {
  const [theme, setTheme] = useState<Themes>(Themes.light);

  // 监听本地缓存来同步不同页面间的主题
  useEffect(() => {
    const checkTheme = (): void => {
      const item = (localStorage.getItem("theme") as Themes) || Themes.light;
      setTheme(item);
      document.getElementsByTagName("html")[0].dataset.theme = item;
      if(item === Themes.light){
        document.documentElement.classList.remove('dark')
      }else {
        document.documentElement.classList.add('dark')
      }
    };
    checkTheme();
    window.addEventListener("storage", checkTheme);
    return (): void => {
      window.removeEventListener("storage", checkTheme);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: (currentTheme) => {
          setTheme(currentTheme);
          localStorage.setItem("theme", currentTheme);
          document.getElementsByTagName("html")[0].dataset.theme = currentTheme;
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
