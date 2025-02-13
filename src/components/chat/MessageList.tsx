import React, {forwardRef} from 'react';
import {Message} from "../../gql/graphql";
import MessageListItem from "./MessageListItem";
import InfiniteScroll from "react-infinite-scroller";
import useCountMessage from "../../hooks/useCountMessages";
import {useGetMessages} from "../../hooks/useGetMessages";
import {PAGE_SIZE} from "../../constants/page-size";

interface Props {
	messages: Message[];
	chatId: string;
}

const MessageList = forwardRef<HTMLDivElement, Props>(({messages, chatId}, divRef) => {

	const {messageCount} = useCountMessage(chatId);
	const {fetchMore} = useGetMessages({chatId, skip: 0, limit: PAGE_SIZE});

	return (
		<div className="m-4 scrollbar overflow-y-auto overflow-x-hidden scrollbar-thumb-scrollbar scrollbar-track-transparent">
			<InfiniteScroll
				pageStart={0}
				isReverse={true}
				loadMore={() => fetchMore({
					variables: {
						skip: messages.length,
					}
				})}
				hasMore={
					messageCount ? messages.length < messageCount : false
				}
				useWindow={false}
			>
			{messages.map((message) => (
				<MessageListItem key={message._id} content={message.content} createdAt={message.createdAt} />
			))}
			<div ref={divRef}></div>
			</InfiniteScroll>
		</div>
	);
})

export default MessageList;