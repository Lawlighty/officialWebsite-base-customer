import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { topList, bottomList } from "./svgs";
import { ThemeContext } from "@/stores/theme";
import cName from "classnames";
import { Themes } from "@/constants/enum";
const CompanySlider = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <div className={styles["auto"]}>
        {[topList, bottomList].map((item = [], index) => {
          return (
            <div key={index} className={styles["autos"]}>
              {[...item].map((svg, dex) => {
                return (
                  <React.Fragment key={dex}>
                    <a
                      className={cName({
                        [styles["dark"]]: theme !== Themes.light,
                      })}
                    >
                      {svg()}
                    </a>
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CompanySlider;
