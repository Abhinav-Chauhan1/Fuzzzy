import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl flex min-h-14 items-center justify-start bg-[#16171C] leading-6"
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write Message"
        className="peer ml-4 flex-grow bg-transparent text-white outline-none"
      />
      <button
        type="submit"
        className="peer-focus:mr-4 z-20 cursor-pointer mr-2 text-[#E4EE97] outline-none duration-150 hover:scale-125"
      >
        {loading ? <div className='loading loading-spinner'></div> : <IoMdSend />}
      </button>
    </form>
  );
};

export default MessageInput;
