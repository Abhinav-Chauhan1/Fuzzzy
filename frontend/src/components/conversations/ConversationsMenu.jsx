import React from 'react'
import Accordion from "../Accordion"
import Conversations from '../conversations/Conversations'
import SearchBox from './SearchBox'


const secondleftmenu = () => {
  return (
    <div className="w-1/4 max-lg:w-2/5  h-full bg-[#20232C] rounded-l-3xl">
      <SearchBox />
      <Accordion title="All Messages">
         {/* Chats  */}
        <Conversations />
       
      </Accordion>
    </div>

  )
}

export default secondleftmenu
