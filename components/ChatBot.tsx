import { useChat } from "ai/react";
import React from "react";
import { Button } from "@mui/material";
import { SendHorizontal } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ScrollToBottom from "react-scroll-to-bottom";

const ChatBot = () => {
  const {
    input,
    messages,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
  } = useChat();

  return (
    <div className="bg-slate-200 w-[32rem] z-50 h-[58%] fixed bottom-10 right-10 shadow-xl border-1 border-gray-300 rounded-lg">
      <div className="grid">
        <ScrollToBottom className="grid max-h-[28rem] overflow-scroll scrollbar-none">
          {messages.map((message, index) => {
            return <ChatMessage message={message} key={message.id} />;
          })}
        </ScrollToBottom>
        <form
          className="flex absolute bottom-5 inset-x-0 gap-4 px-4"
          onSubmit={handleSubmit}
        >
          <div className="w-full relative py-2 flex items-center bg-gray-100 border-2 border-gray-300 rounded-lg break-all">
            {/* <textarea
              name=""
              className=" outline-none text-xl  inset-0 scrollbar-none flex-1"
            ></textarea> */}
            <input
              type="text"
              className="p-3 outline-none text-xl bg-gray-100 animate-pulse"
              placeholder="Ask something..."
              onChange={handleInputChange}
              value={input}
            />
            <Button
              variant="contained"
              className="bg-gray-700 hover:bg-gray-800 h-full rounded-full"
              type="submit"
            >
              <SendHorizontal />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
