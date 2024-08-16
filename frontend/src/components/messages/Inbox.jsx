import { useEffect } from "react";
import React from "react";
import useConversation from '../../zustand/useConversation';
import MessageInput from "./MessageInput";
import Messages from "./Messages";

const Inbox = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <>
      {!selectedConversation ? (
        <div className="w-5/12  max-lg:w-3/5  overflow-hidden bg-primary rounded-r-3xl">
          <div className="mt-4 mr-4 h-screen">
            <div className="flex-grow px-8 pt-8 text-left flex-col flex justify-end text-white bg-secondary h-[85%] pb-28 rounded-2xl"></div>
          </div>
        </div>
      ) : (
        <div className="w-5/12 max-lg:w-3/5  max-h-full bg-primary rounded-r-2xl">
          <div className="mt-4 mr-4 max-h-full">
            <div className="sticky top-0 flex rounded-t-2xl bg-[#000000] h-16 items-center px-8 text-left text-sm  text-white">
              <img
                src={selectedConversation?.profilePic}
                alt=""
                className="float-left inline-block h-6 w-6 sm:h-10 sm:w-10 rounded-full"
              />
              <h4 className=" inline-block py-1 ml-4 font-sans font-semibold normal-case ">
                {selectedConversation.fullName}
              </h4>
            </div>
            <div className="flex-grow px-4  text-left flex-col  h-[78vh] flex justify-end text-white pb-2 bg-accent rounded-b-2xl">
              <div className="overflow-y-auto">
                <Messages />
              </div>
                {/* <div className="relative text-center">
                  <span className="relative px-2 text-sm">Yesterday</span>
                </div> */}
              <MessageInput />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inbox;
