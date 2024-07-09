import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../Utils/extractTime";
import ProfilePic from "../../assets/svg/profile.png"

const Message = ( { message } ) => {

    const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser.user._id;
  const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";
    const profilePic = fromMe ? "hidden" : "";
    
  return (
    <>
      <div className={`chat ${chatClassName}`} >
      <div className={`chat-image ${profilePic} avatar`}>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={ProfilePic} />
				</div>
			</div>
        <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
      </div>
    </>
  );
};

export default Message;
