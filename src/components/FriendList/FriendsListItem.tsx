import React from 'react';
import UserProfile from "../UserProfile";
import FriendDetails from "./FriendDetails";
import {useNavigate} from "react-router-dom";

interface FriendsListItemProps {
		avatar?: string;
		name: string;
		_id: string;
}

function FriendsListItem({avatar, name, _id}:FriendsListItemProps) {
	const navigate = useNavigate();

	const handleNavigate = (id: string) => {
		navigate(`/chats/${id}`);
	}

	return (
		<div className="flex items-center p-4 hover:bg-neutral cursor-pointer" onClick={() => {handleNavigate(_id)}}>
			<div className='mr-4'>
				<UserProfile avatar={avatar} name={name}/>
			</div>
			<FriendDetails subtext={name} message={'message'}/>
		</div>
	);
}

export default FriendsListItem;