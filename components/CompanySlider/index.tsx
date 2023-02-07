import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { topList, bottomList } from "./svgs";
const CompanySlider = () => {
  return (
    <div>
      <div className={styles["auto"]}>
        {[topList, bottomList].map((item = [], index) => {
          return (
            <div key={index} className={styles["autos"]}>
              {[...item, ...item, ...item].map((svg, dex) => {
                return (
                  <React.Fragment key={dex}>
                    <a className="dark:hover:text-red-300">{svg()}</a>
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
