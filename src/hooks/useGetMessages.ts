import {graphql} from "../gql";
import {useQuery} from "@apollo/client";
import {MessagesQueryVariables} from "../gql/graphql";

export const getMessagesDocument = graphql(`
	query Messages($chatId: String!, $skip: Int!, $limit: Int!) {
		messages(chatId: $chatId, skip: $skip, limit: $limit) {
			...MessageFragment
		}
	}
`)

const useGetMessages = (variables: MessagesQueryVariables) => {
	// @ts-ignore
	return useQuery(getMessagesDocument, {variables})
}
export { useGetMessages };