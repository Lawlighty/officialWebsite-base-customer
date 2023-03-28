import styles from "./styles.module.scss";
import cName from "classnames";
import { useContext } from "react";
import { ChatContext } from "@/stores/chat";

const ChatRobot = () => {
  const { isLoading } = useContext(ChatContext);
  return (
    <>
      <div className="flex justify-center mt-8">
        <div
          className={cName(
            styles["robot"],
            styles["glow"],
            styles["astro-MUFOFJDC"],
            styles["active"],
            {
              [styles["loading"]]: isLoading,
            }
          )}
          //   style={{--x:''}}
          //   style="--x:0.22; --y:-0.52; --deg:-21.9362deg;"
        >
          <div className={cName(styles["container"], styles["astro-MUFOFJDC"])}>
            <div className={cName(styles["body"], styles["astro-MUFOFJDC"])}>
              <div className={cName(styles["face"], styles["astro-MUFOFJDC"])}>
                <div
                  className={cName(styles["eye"], styles["astro-MUFOFJDC"])}
                  data-shape="circle"
                ></div>
                <div
                  className={cName(styles["mouth"], styles["astro-MUFOFJDC"])}
                  data-shape="half-up"
                ></div>
                <div
                  className={cName(styles["eye"], styles["astro-MUFOFJDC"])}
                  data-shape="circle"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChatRobot;
