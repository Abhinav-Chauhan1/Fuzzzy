import React from 'react'
import Chat from './chat';
import NewNavbar from '../components/navbar/NewNavbar';

const home = () => {
  return (
    <main className="flex h-screen overflow-hidden flex-col bg-[url('../src/assets/images/bg1.jpg')]">
    <NewNavbar />
    <Chat />
    </main>
  )
}

export default home
