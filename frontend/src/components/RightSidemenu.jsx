import React from "react";
import Accordion from "./Accordion";
import Profile from "../assets/svg/profile.png";
import useConversation from "../store/useConversation";
import NotificationLogo from "./Utils/NotificationLogo";

const RightSidemenu = () => {
  const { selectedConversation } = useConversation();

  return (
    <>
      {!selectedConversation ? (
        <div className="w-2/12 max-xl:w-1/4 hidden lg:block h-full mx-auto rounded-br-3xl bg-[#20232C]"></div>
      ) : (
        <div className="w-2/12 max-xl:w-1/4 hidden lg:block h-full mx-auto rounded-br-3xl bg-[#20232C]">
          <div className="h-1/2 mx-3 mt-5 rounded-2xl bg-[#5852D6]">
            <div className="pt-10 text-white flex flex-col items-center ">
              <img className="w-28 h-28  rounded-full " src={Profile} alt="" />
              <h4 className=" font-semibold mt-2">{selectedConversation.fullName}</h4>
              <h4 className=" font-semibold mt-20 ">{`Email: ${selectedConversation.email}`}</h4>
              <h4 className=" font-semibold mt-4 flex self-center">Notification: <NotificationLogo /></h4>
              
            </div>
          </div>
          <Accordion title="Media" />
          
          <Accordion title="Links" />
        </div>
      )}
    </>
  );
};

export default RightSidemenu;
