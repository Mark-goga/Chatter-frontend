import React, {forwardRef} from 'react';
import {Message} from "../../gql/graphql";
import MessageListItem from "./MessageListItem";

interface Props {
	messages: Message[];
}

const MessageList = forwardRef<HTMLDivElement, Props>(( {messages}, divRef) => {
	return (
		<div className="m-4 scrollbar overflow-auto scrollbar-thumb-scrollbar scrollbar-track-transparent">
			{messages.map((message) => (
				<MessageListItem key={message._id} content={message.content} createdAt={message.createdAt} />
			))}
			<div ref={divRef}></div>
		</div>
	);
})

export default MessageList;