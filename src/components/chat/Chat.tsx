import {useParams} from "react-router-dom";
import {useGetChat} from "../../hooks/useGetChat";
import ChatListWrapper from "../ChatListWrapper";
import ChatInput from "./ChatInput";
import {useCreateMessage} from "../../hooks/useCreateMessage";
import React, {useState} from "react";
import {useGetMessages} from "../../hooks/useGetMessages";


function Chat() {
	const params = useParams();
	const chatId: string = params._id!

	const [message, setMessage] = useState<string>("");

	const {data} = useGetChat({_id: chatId});
	const {chat} = data || {};

	const [createMessage] = useCreateMessage(chatId);

	const {data: messagesData} = useGetMessages({chatId});
	const messages = messagesData?.messages || [];

	const handleSubmit = () => {
		createMessage({variables: {createMessageInput: {content: message, chatId} } });
		setMessage('');
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value)
	}

	return (
		<ChatListWrapper>
			<div className="flex-col h-full justify-between hidden p-4 w-full sm-min:flex ">
				<h1 className="text-lg text-text font-semibold">{chat?.name}</h1>
				{messages.map((message) => (
						<p className='text-text' key={message._id}>{message.content}</p>
				))}
				<ChatInput onChange={handleChange} onSubmit={handleSubmit} value={message} />
			</div>
		</ChatListWrapper>
	);
}

export default Chat;