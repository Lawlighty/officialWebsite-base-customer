import ChatBox from "@/components/chatGPT/ChatBox";
import ChatFooter from "@/components/chatGPT/chatFooter";
import ChatRobot from "@/components/chatGPT/Robot";
import { ChatContextProvider } from "@/stores/chat";
import styles from "./styles.module.scss";

const ChatGPT = () => {
  return (
    <div className={styles["chatGPT__wrapper"]}>
      <ChatContextProvider>
        <>
          <ChatRobot></ChatRobot>
          <ChatBox></ChatBox>
          <ChatFooter></ChatFooter>
        </>
      </ChatContextProvider>
    </div>
  );
};
export default ChatGPT;
