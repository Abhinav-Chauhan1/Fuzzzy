import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	setMessages: (messages) => {
        if (!Array.isArray(messages)) {
            console.error('setMessages: messages is not an array', messages);
            messages = [messages];
        }
        set({ messages });
    },
}));

export default useConversation;