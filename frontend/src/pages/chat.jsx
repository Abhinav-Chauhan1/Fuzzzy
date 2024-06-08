import React from 'react'
import Profilemenu from "../components/conversations/ConversationsMenu"
import LeftSidemenu from "../components/leftSidemenu"
import Inbox from "../components/messages/Inbox"
import RightSidemenu from "../components/RightSidemenu"

const chat = () => {
  return (
    <div className='flex h-screen'>
      <LeftSidemenu />
      <Profilemenu />
      <Inbox />
      <RightSidemenu />
    </div>
  )
}

export default chat
