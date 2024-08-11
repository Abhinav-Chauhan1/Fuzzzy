import React from "react";
import Conversations from "../conversations/Conversations";
import SearchBox from "./SearchBox";

const secondleftmenu = () => {
  return (
    <div className="w-1/4 max-lg:w-2/5 max-h-full bg-[#20232C] rounded-l-3xl">
      <SearchBox />
      <div className="overflow-y-auto h-[85%] py-2 px-2">
      <Conversations/>
      </div>
    </div>
  );
};

export default secondleftmenu;
