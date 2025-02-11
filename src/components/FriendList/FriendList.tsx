import AddButton from "./AddButton";
import FriendsListItem from "./FriendsListItem";
import {useGetChats} from "../../hooks/useGetChats";
import React from "react";
import { useParams} from "react-router-dom";

interface Props {
	isChatOpen: boolean;
	openChat: () => void;
}

function FriendList({isChatOpen, openChat}: Props) {
	const {data} = useGetChats();
	const {chats = []} = data || {};
	const params = useParams();
	const chatId = params._id!;

	return (
		<div
			className={`flex flex-col h-full w-full max-w-[400px] bg-background shadow-2xl sm-max:max-w-full pt-4 ${isChatOpen ? 'sm-max:hidden': 'sm-max:flex'}`}>
			<AddButton />
			<div className="divide-y my-2 divide-gray-700 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent scrollbar-thumb-rounded-full hover:scrollbar-thumb-scrollbarHover">
				{chats.map((chats) => (
					<FriendsListItem key={chats._id} isSelected={chatId === chats._id} openChat={openChat} chat={chats} />
				)).reverse()}
			</div>
		</div>
	);
}
export default React.memo(FriendList);