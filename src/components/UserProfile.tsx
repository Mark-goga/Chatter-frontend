import React from 'react';

interface UserProfileProps {
	avatar: string | undefined;
	name: string;
}

function UserProfile({avatar, name}: UserProfileProps) {
	return (
		<>
			{avatar ? (
				<img src={avatar} alt={name} className="size-12 rounded-full flex-shrink-0"/>
			) : (
				<div className="flex-shrink-0 size-12 rounded-full bg-primary flex items-center justify-center text-text">
					{name[0]}
				</div>
			)}
		</>
	)
}

export default UserProfile;