import React from 'react'
import Profilemenu from '../../components/conversations/ConversationsMenu'
import Inbox from "../../components/messages/Inbox"

const chat = () => {
  return (
    <div className='flex justify-center min-h-[80%]'>
      <Profilemenu />
      <Inbox />
    </div>
  )
}

export default chat
