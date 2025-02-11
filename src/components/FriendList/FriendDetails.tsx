interface FriendDetailsProps {
	chatName: string;
	message: string;
	username: string;
}

function FriendDetails({chatName, message, username}: FriendDetailsProps) {
	return (
		<div className="flex-1 text-text">
			<h3 className="text-sm font-bold">{chatName}</h3>
			{message && username &&
				(<p className="font-semibold text-sm">
					{username} - <span className="text-sm">{message}</span>
				</p>)}
		</div>
	);
}

export default FriendDetails;
