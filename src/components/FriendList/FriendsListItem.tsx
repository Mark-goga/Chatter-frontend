import React from 'react';
import UserProfile from "../UserProfile";
import FriendDetails from "./FriendDetails";

interface FriendsListItemProps {
		avatar?: string;
		name: string;
}

function FriendsListItem({avatar, name}:FriendsListItemProps) {
	return (
		<div className="flex items-center p-4 hover:bg-neutral cursor-pointer">
			<div className='mr-4'>
				<UserProfile avatar={avatar} name={name}/>
			</div>
			<FriendDetails subtext={name} message={'message'}/>
		</div>
	);
}

export default FriendsListItem;