import { Message } from "ai";
import { BotMessageSquare, SquareUserRound } from "lucide-react";
import React from "react";
import classnames from "classnames";

interface MessageData {
  content: String;
}
interface ChatMessageType {
  data: MessageData;
}
const ChatMessage = ({ message: { role, content } }: { message: Message }) => {
  //   console.log(content, role);

  return (
    <div className=" mt-5  px-4 flex items-center odd:flex-row-reverse gap-4">
      {role == "user" ? (
        <SquareUserRound size={35} className="shrink-0" />
      ) : (
        <BotMessageSquare size={35} className="shrink-0" />
      )}
      <div
        className={classnames(
          "text-lg break-all px-4 py-3 w-fit shrink-0",
          role === "user"
            ? "bg-slate-800 text-white ml-20 rounded-tl-xl rounded-bl-xl"
            : "bg-white text-black mr-20 rounded-tr-xl rounded-br-xl"
        )}
      >
        <p className="mt-2 break-all ">{content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
