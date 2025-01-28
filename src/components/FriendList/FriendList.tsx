import AddButton from "./AddButton";
import FriendsListItem from "./FriendsListItem";

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
			className="flex flex-col h-full w-full max-w-[400px] bg-background shadow-2xl sm-max:max-w-full pt-4">
			<AddButton />
			<div className="divide-y my-2 divide-gray-700 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent scrollbar-thumb-rounded-full hover:scrollbar-thumb-scrollbarHover">
				{friends.map((friend) => (
					<FriendsListItem key={friend.id} message={friend.message} name={friend.name} subtext={friend.subtext} avatar={friend.avatar} />
				))}
			</div>
		</div>
	);
}
