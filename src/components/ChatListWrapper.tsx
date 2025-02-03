import React from 'react';
import FriendList from "./FriendList/FriendList";

interface ChatListWrapperProps {
	children: React.ReactNode;
}

function ChatListWrapper({children}: ChatListWrapperProps) {
	return (
		<div className="flex h-screen-minus-90">
			<FriendList/>
			{children}
		</div>
	);
}

export default ChatListWrapper;