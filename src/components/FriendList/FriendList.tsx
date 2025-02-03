import AddButton from "./AddButton";
import FriendsListItem from "./FriendsListItem";
import {useGetChats} from "../../hooks/useGetChats";

export default function FriendList() {
	const {data} = useGetChats();
	const {chats = []} = data || {};

	return (
		<div
			className="flex flex-col h-full w-full max-w-[400px] bg-background shadow-2xl sm-max:max-w-full pt-4">
			<AddButton />
			<div className="divide-y my-2 divide-gray-700 overflow-y-auto scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent scrollbar-thumb-rounded-full hover:scrollbar-thumb-scrollbarHover">
				{chats.map((chats) => (
					<FriendsListItem key={chats._id} name={chats.name} _id={chats._id} />
				))}
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
				<FriendsListItem name={'none'} _id={'jgdfjghdf;g'} />
			</div>
		</div>
	);
}
