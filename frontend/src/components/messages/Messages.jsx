import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
		}, 100);
	}, [messages]);

  return (
    <>
      {!loading &&
        messages?.length > 0 &&
        messages?.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages?.length === 0 && (
        <p className="text-center mb-24">Send a message to start the conversation</p>
      )}
    </>
  );
};
export default Messages;
