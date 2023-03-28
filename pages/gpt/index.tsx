import ChatBox from "@/components/chatGPT/ChatBox";
import ChatFooter from "@/components/chatGPT/chatFooter";
import ChatRobot from "@/components/chatGPT/Robot";
import { ChatContextProvider } from "@/stores/chat";

const ChatGPT = () => {
  return (
    <>
      <ChatContextProvider>
        <>
          <ChatRobot></ChatRobot>
          <ChatBox></ChatBox>
          <ChatFooter></ChatFooter>
        </>
      </ChatContextProvider>
    </>
  );
};
export default ChatGPT;
