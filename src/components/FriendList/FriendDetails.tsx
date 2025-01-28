interface FriendDetailsProps {
	subtext: string;
	message: string;
}

function FriendDetails({ subtext, message }: FriendDetailsProps) {
	return (
		<div className="flex-1 text-text">
			<h3 className="text-sm font-semibold ">{subtext}</h3>
			<p className="text-sm ">{message}</p>
		</div>
	);
}

export default FriendDetails;
