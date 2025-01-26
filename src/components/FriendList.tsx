interface Friend {
	id: number;
	name: string;
	avatar: string;
	message: string;
	subtext: string;
}

const friends: Friend[] = [
	{
		id: 1,
		name: 'Ali Connors',
		avatar: '',
		message: "I'll be in your neighborhood doing errands this…",
		subtext: 'Brunch this weekend?',
	},
	{
		id: 2,
		name: 'Travis Howard',
		avatar: '',
		message: "Wish I could come, but I'm out of town this…",
		subtext: 'Summer BBQ',
	},
	{
		id: 3,
		name: 'Sandra Adams',
		avatar: '',
		message: 'Do you have Paris recommendations? Have you ever…',
		subtext: 'Oui Oui',
	},
	{
		id: 4,
		name: 'Ali Connors',
		avatar: '',
		message: "I'll be in your neighborhood doing errands this…",
		subtext: 'Brunch this weekend?',
	},
	{
		id: 5,
		name: 'Travis Howard',
		avatar: '',
		message: "Wish I could come, but I'm out of town this…",
		subtext: 'Summer BBQ',
	},
	{
		id: 6,
		name: 'Sandra Adams',
		avatar: '',
		message: 'Do you have Paris recommendations? Have you ever…',
		subtext: 'Oui Oui',
	},
	{
		id: 7,
		name: 'Ali Connors',
		avatar: '',
		message: "I'll be in your neighborhood doing errands this…",
		subtext: 'Brunch this weekend?',
	},
	{
		id: 8,
		name: 'Travis Howard',
		avatar: '',
		message: "Wish I could come, but I'm out of town this…",
		subtext: 'Summer BBQ',
	},
	{
		id: 9,
		name: 'Sandra Adams',
		avatar: '',
		message: 'Do you have Paris recommendations? Have you ever…',
		subtext: 'Oui Oui',
	},
	{
		id: 10,
		name: 'Ali Connors',
		avatar: '',
		message: "I'll be in your neighborhood doing errands this…",
		subtext: 'Brunch this weekend?',
	},
	{
		id:11,
		name: 'Travis Howard',
		avatar: '',
		message: "Wish I could come, but I'm out of town this…",
		subtext: 'Summer BBQ',
	},
	{
		id: 12,
		name: 'Sandra Adams',
		avatar: '',
		message: 'Do you have Paris recommendations? Have you ever…',
		subtext: 'Oui Oui',
	},
];

export default function FriendList() {
	return (
		<div
			className="flex flex-col h-full w-full max-w-xs bg-gray-900 shadow-md overflow-y-auto scrollbar-thin scrollbar-thumb-scrollbar scrollbar-track-transparent scrollbar-thumb-rounded-full hover:scrollbar-thumb-scrollbarHover">
			<div className="p-4 text-lg text-gray-200 font-semibold">Friends</div>
			<div className="divide-y divide-gray-700">
				{friends.map((friend) => (
					<div key={friend.id} className="flex items-center p-4 hover:bg-gray-800 cursor-pointer">
						{friend.avatar ? (
							<img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full mr-4"/>
						) : (
							<div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white mr-4">
								{friend.name[0]}
							</div>
						)}
						<div className="flex-1">
							<h3 className="text-sm font-semibold text-gray-100">{friend.subtext}</h3>
							<p className="text-sm text-gray-400">{friend.message}</p>
						</div>
					</div>
				))}
			</div>
			<div className="p-4 flex justify-center">
				<button
					className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700">
					<span className="mr-2">Add Friend</span>
				</button>
			</div>
		</div>
	);
}
