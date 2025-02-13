interface FriendDetailsProps {
	chatName: string;
	message: string;
	username: string;
}

function FriendDetails({chatName, message, username}: FriendDetailsProps) {
	return (
		<div className="flex-1 text-text">
			<h3 className="text-sm font-bold">{chatName}</h3>
			{message && username && (
				<p className="font-semibold text-sm flex gap-1 whitespace-nowrap overflow-hidden text-ellipsis">
					<span>{username} -</span>
					<span className="text-sm overflow-hidden text-ellipsis">{message}</span>
				</p>
			)}
		</div>
	);
}

export default FriendDetails;
