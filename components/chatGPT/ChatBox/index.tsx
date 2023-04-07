import styles from "./styles.module.scss";
import cName from "classnames";
import { useContext, useEffect } from "react";
import { ChatContext } from "@/stores/chat";
import { IconCopy } from "@douyinfe/semi-icons";
import { Toast } from "@douyinfe/semi-ui";
import "highlight.js/styles/vs2015.css";

const showdown = require("showdown"),
  showdownHighlight = require("showdown-highlight");

const ChatBox = () => {
  const { qList, response, isLoading } = useContext(ChatContext);
  const converter = new showdown.Converter({
    // That's it
    extensions: [showdownHighlight],
  });

  const copy = (msg = "") => {
    if (navigator.clipboard) {
      // clipboard api 复制
      navigator.clipboard.writeText(msg);
      Toast.success("复制成功，快去粘贴吧！");
    } else {
      var textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      // 隐藏此输入框
      textarea.style.position = "fixed";
      textarea.style.clip = "rect(0 0 0 0)";
      textarea.style.top = "10px";
      // 赋值
      textarea.value = msg;
      // 选中
      textarea.select();
      // 复制
      let res = document.execCommand("copy", true);
      if (res) {
        Toast.success("复制成功，快去粘贴吧！");
      } else {
        Toast.warning("复制失败，请手动复制！");
      }
      // 移除输入框
      document.body.removeChild(textarea);
    }
  };

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
              <div key={index} style={{ position: "relative" }}>
                <div
                  className={cName(styles["message"], "px-4 py-3 lg:py-6")}
                  dangerouslySetInnerHTML={{
                    __html: converter.makeHtml(item?.content ?? ""),
                  }}
                ></div>
                <div
                  className={cName(
                    styles["message_copy"],
                    "bottom-3 lg:bottom-6"
                  )}
                  onClick={() => {
                    copy(item?.content ?? "");
                  }}
                >
                  <IconCopy />
                </div>
              </div>
            );
          }
        })}
        {isLoading && (
          <div
            className={cName(
              styles["message"],
              styles["message_input"],
              "px-4 py-3 lg:py-6"
            )}
            dangerouslySetInnerHTML={{
              __html: converter.makeHtml(response),
            }}
          ></div>
        )}
      </div>
      {/* </div> */}
    </>
  );
};
export default ChatBox;
