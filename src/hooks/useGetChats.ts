import {graphql} from "../gql";
import {useQuery} from "@apollo/client";

export const getChatsDocuments = graphql(`
	query Chats {
			chats {
					 ...ChatFragment
			}
	}
`)

const useGetChats = () => {
	return useQuery(getChatsDocuments)
}

export {useGetChats}