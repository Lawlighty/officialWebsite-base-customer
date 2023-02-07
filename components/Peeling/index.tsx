import { Environment, Themes } from "@/constants/enum";
import { ThemeContext } from "@/stores/theme";
import { UserAgentContext } from "@/stores/userAgent";
import { Toast } from "@douyinfe/semi-ui";
import Script from "next/script";
import { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
const Peeling = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { userAgent } = useContext(UserAgentContext);

  // useEffect(() => {
  //   let opts = {
  //     content: `当前的userAgent:${userAgent}`,
  //     duration: 10,
  //   };
  //   Toast.info(opts);
  // }, [userAgent]);
  return (
    <>
      {/* // ? 移动端大小适配 */}
      {/* <label style={{ zoom: userAgent === Environment.mobile ? ".2" : ".3" }}> */}
      <label
        style={{ fontSize: userAgent === Environment.mobile ? "3px" : "4px" }}
      >
        <Script src="https://code.iconify.design/1/1.0.4/iconify.min.js"></Script>
        {/* <input className={styles["toggle-checkbox"]} type="checkbox"></input> */}
        <div
          className={
            theme === Themes.light
              ? styles["toggle-checkbox"]
              : styles["toggle-checkbox-no-checked"]
          }
        >
          <div className={styles["toggle-slot"]}>
            {theme === Themes.light && (
              <div
                className={styles["sun-icon-wrapper"]}
                onClick={(): void => {
                  setTheme(Themes.dark);
                }}
              >
                <div
                  className={`iconify ${styles["sun-icon"]} `}
                  data-icon="feather-sun"
                  data-inline="false"
                ></div>
              </div>
            )}
            <div className={styles["toggle-button"]}></div>
            {theme !== Themes.light && (
              <div
                className={styles["moon-icon-wrapper"]}
                onClick={(): void => {
                  setTheme(Themes.light);
                }}
              >
                <div
                  className={`iconify ${styles["moon-icon"]} `}
                  data-icon="feather-moon"
                  data-inline="false"
                ></div>
              </div>
            )}
          </div>
        </div>
      </label>
    </>
  );
};
export default Peeling;
