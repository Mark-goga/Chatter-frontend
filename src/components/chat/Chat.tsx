import {useParams} from "react-router-dom";
import {useGetChat} from "../../hooks/useGetChat";
import ChatListWrapper from "../ChatListWrapper";
import ChatInput from "./ChatInput";


function Chat() {
	const params = useParams();
	const {data} = useGetChat({_id: params._id!});
	const {chat} = data || {};

	return (
		<ChatListWrapper>
			<div className="flex-col h-full justify-between hidden p-4 w-full sm-min:flex ">
				<h1 className="text-lg text-text font-semibold">{chat?.name}</h1>
				<ChatInput />
			</div>
		</ChatListWrapper>
	);
}

export default Chat;