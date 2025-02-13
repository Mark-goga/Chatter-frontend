import React from 'react';
import UserProfile from "../UserProfile";
import FriendDetails from "./FriendDetails";
import {useNavigate} from "react-router-dom";
import {Chat} from "../../gql/graphql";
import css from "./FriendList.module.css";

interface FriendsListItemProps {
	avatar?: string;
	isSelected?: boolean;
	openChat: () => void;
	chat: Chat;
}

function FriendsListItem({avatar, isSelected, openChat, chat}: FriendsListItemProps) {
	const navigate = useNavigate();
	const latestMessage = chat.latestMessage;

	const handleNavigate = (id: string) => {
		navigate(`/chats/${id}`);
	}

	return (
		<div className={`transition-colors flex p-4 hover:bg-neutral cursor-pointer ${isSelected && 'sm-min:bg-neutral'}`}
				 onClick={() => {
			handleNavigate(chat._id)
			openChat()
		}}>
			<div className={`${css.content}`}>
				<div className='items-center flex'>
					<div className='mr-4'>
						<UserProfile avatar={avatar} name={chat.name}/>
					</div>
					<FriendDetails
						chatName={chat.name} message={latestMessage?.content || ''}
						username={latestMessage?.user.username || ''}/>
				</div>
			</div>
		</div>
	);
}

export default FriendsListItem;