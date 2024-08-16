import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { extractTime } from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-neutral" : "bg-secondary";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className={`chat-image ${profilePic} avatar`}>
          <div className="w-10 rounded-full">
            <img alt="Profile Pic" src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble break-words text-white ${bubbleBgColor}`}>
          {message.message}
        </div>
        <div className="chat-footer opacity-50 text-info text-xs flex gap-1 items-center">
          {formattedTime}
        </div>
      </div>
    </>
  );
};

export default Message;
