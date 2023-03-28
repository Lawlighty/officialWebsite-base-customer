import styles from "./styles.module.scss";
import cName from "classnames";
import { useContext } from "react";
import { ChatContext } from "@/stores/chat";

const ChatBox = () => {
  const { qList } = useContext(ChatContext);
  return (
    <>
      <div className="mx-12 lg:mx-20">
        <div className={styles["chat_box"]}>
          {qList.map((item: any, index: number) => {
            return (
              <div
                className={cName(styles["message"], {
                  [styles["message_user"]]: item?.user === "user",
                  [styles["message_back"]]: item?.user === "ai",
                })}
                key={index}
              >
                {item?.content ?? ""}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ChatBox;
