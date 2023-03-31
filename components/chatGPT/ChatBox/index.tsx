import styles from "./styles.module.scss";
import cName from "classnames";
import { useContext } from "react";
import { ChatContext } from "@/stores/chat";
import "highlight.js/styles/vs2015.css";

const showdown = require("showdown"),
  showdownHighlight = require("showdown-highlight");

const ChatBox = () => {
  const { qList } = useContext(ChatContext);
  const converter = new showdown.Converter({
    // That's it
    extensions: [showdownHighlight],
  });

  return (
    <>
      {/* <div id="chat_box" className="mx-4 my-4 lg:mx-20 flex-1 overflow-y-auto"> */}
      <div
        id="chat_box"
        className={cName(
          "mx-4 my-4 lg:mx-52 flex-1 overflow-y-auto",
          styles["chat_box"]
        )}
      >
        {qList.map((item: any, index: number) => {
          if (item?.user === "user") {
            return (
              <div
                className={cName(
                  styles["message"],
                  styles["message_user"],
                  "px-4 py-3 lg:py-6"
                )}
                key={index}
              >
                {item?.content ?? ""}
              </div>
            );
          } else {
            return (
              <div
                className={cName(
                  styles["message"],
                  styles["message_back"],
                  "px-4 py-3 lg:py-6"
                )}
                key={index}
                dangerouslySetInnerHTML={{
                  __html: converter.makeHtml(item?.content ?? ""),
                }}
              ></div>
            );
          }
        })}
      </div>
      {/* </div> */}
    </>
  );
};
export default ChatBox;
