import React, {useState} from 'react';
import FriendList from "./FriendList/FriendList";

interface ChatListWrapperProps {
	children: React.ReactNode | ((props: {isChatOpen:boolean; handleCloseChat: () =>void} ) => React.ReactNode);
}

function ChatListWrapper({children}: ChatListWrapperProps) {
	const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

	const handleOpenChat = () => {
		setIsChatOpen(true);
	};
	const handleCloseChat = () => {
		setIsChatOpen(false);
	}

	return (
		<div className="flex h-screen-minus-90">
			<FriendList openChat={handleOpenChat} isChatOpen={isChatOpen} />
			{typeof children === 'function' ? children ( {isChatOpen, handleCloseChat } ) : children}
		</div>
	);
}

export default ChatListWrapper;