import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`rounded-2xl text-white hover:bg-accent p-2 mb-2 cursor-pointer
            ${isSelected ? "bg-accent" : "hover:bg-accent"} 
            `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="flex w-full mx-2 items-center overflow-hidden ">
          <div className={`avatar w-14 ${isOnline ? "online" : ""}`}>
          <img className="shrink-0  rounded-full" src={conversation.profilePic} />
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="font-medium text-info px-3">{conversation.fullName}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Conversation;
