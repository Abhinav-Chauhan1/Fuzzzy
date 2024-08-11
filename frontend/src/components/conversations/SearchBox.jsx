import React, { useState } from 'react'
import useConversation from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations';

const SearchBox = () => {

    const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
    
  return (
    <form onSubmit={handleSubmit} className="rounded-2xl flex h-16 items-center justify-start mx-4 mt-5 bg-[#16171C] leading-10">
        <svg className="h-6 w-6 stroke-2 ml-4" viewBox="0 0 32 32" fill="none">
          <circle cx="15" cy="14" r="8" stroke="#E4EE97" fill="transparent"></circle>
          <line x1="21.1514" y1="19.7929" x2="26.707" y2="25.3484" stroke="#E4EE97" fill="transparent"></line>
        </svg>
        <input 
        placeholder="Search" 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="peer ml-2 flex-grow bg-transparent text-white outline-none" />
        <button type="submit" className="peer-focus:mr-4 z-20 cursor-pointer mr-2 outline-none">
        </button>
      </form>
  )
}

export default SearchBox
