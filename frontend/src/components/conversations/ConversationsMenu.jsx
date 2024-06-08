import React from 'react'
import Accordion from "../Accordion"
import Conversations from '../conversations/Conversations'
import SearchBox from './SearchBox'


const secondleftmenu = () => {
  return (
    <div className="w-1/4 max-lg:w-2/5 hidden sm:block h-full mx-auto bg-[#20232C]">
      <SearchBox />
      <Accordion title="Unread">
         {/* Chats */}
      </Accordion>
      <Accordion title="All Messages">
         {/* Chats  */}
        <Conversations />
       
      </Accordion>
    </div>

  )
}

export default secondleftmenu
