import {ApolloCache} from "@apollo/client";
import {Message} from "../gql/graphql";
import {getChatsDocuments} from "../hooks/useGetChats";

export const updateLatestMessage = (
	cache: ApolloCache<any>, message: Message
) => {
	const chats = [...(cache.readQuery({query: getChatsDocuments})?.chats || [])];
	const cacheChatIndex = chats.findIndex(chat => chat._id === message.chatId);

	if (cacheChatIndex === -1) {
		return;
	}

	const cachedChat = chats[cacheChatIndex];
	const cacheChatCopy = {...cachedChat};
	cacheChatCopy.latestMessage = message;
	chats[cacheChatIndex] = cacheChatCopy;
};