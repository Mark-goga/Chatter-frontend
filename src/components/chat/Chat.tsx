import {useParams} from "react-router-dom";
import {useGetChat} from "../../hooks/useGetChat";
import ChatListWrapper from "../ChatListWrapper";
import ChatInput from "./ChatInput";
import {useCreateMessage} from "../../hooks/useCreateMessage";
import React, {useEffect, useRef, useState} from "react";
import {useGetMessages} from "../../hooks/useGetMessages";
import MessageList from "./MessageList";
import {IoArrowBackSharp} from "react-icons/io5";
import useMessageCreated from "../../hooks/useMessageCreated";
import {Message} from "../../gql/graphql";

function Chat() {
	const divRef = useRef<HTMLDivElement>(null);
	const params = useParams();
	const chatId: string = params._id!

	const [message, setMessage] = useState<string>("");

	const {data} = useGetChat({_id: chatId});
	const {chat} = data || {};

	const [createMessage] = useCreateMessage();

	const {data: existingMessages} = useGetMessages({chatId});

	const [messages, setMessages] = useState<Message[]>([]);

	const {data: latestMessage} = useMessageCreated({chatId});

	const scrollToBottom = () => divRef.current?.scrollIntoView();

	const handleSubmit = async () => {
		await createMessage({variables: {createMessageInput: {content: message, chatId} } });
		setMessage('');
		scrollToBottom();
	}
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value)
	}

	useEffect(() => {
		if(existingMessages) {
			setMessages(existingMessages.messages)
		}
	}, [existingMessages]);

	useEffect(() => {
		const existingLatestMessage = messages[messages.length - 1]?._id;
		if(latestMessage?.messageCreated && existingLatestMessage !== latestMessage.messageCreated._id) {
			setMessages([...messages, latestMessage.messageCreated]);
		}
	}, [latestMessage, messages]);

	useEffect(() => {
		setMessage("");
		scrollToBottom();
	}, [messages, params]);

	return (
		<ChatListWrapper>
			{({isChatOpen, handleCloseChat}) => (
				<div
					className={`flex-col h-full justify-between hidden p-4 w-full sm-min:flex ${isChatOpen ? 'sm-max:flex' : 'sm-max:hidden'}`}>
					<div className='flex gap-4 items-center'>
						<div onClick={() => handleCloseChat()} className='hidden sm-max:flex size-[40px] text-text bg-neutral rounded-md items-center justify-center'>
							<IoArrowBackSharp size={30} />
						</div>
						<h1 className="text-lg text-text font-semibold">{chat?.name}</h1>
					</div>
					<MessageList messages={[...messages].sort(
						(messageA, messageB) => (
							new Date(messageA.createdAt).getTime() -
							new Date(messageB.createdAt).getTime()
						)
					)} ref={divRef}/>
					<ChatInput onChange={handleChange} onSubmit={handleSubmit} value={message}/>
				</div>
			)}
		</ChatListWrapper>
	);
}

export default Chat;