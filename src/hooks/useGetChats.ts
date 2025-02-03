import {graphql} from "../gql";
import {useQuery} from "@apollo/client";

const getChatsDocuments = graphql(`
	query Chats {
			chats {
					 ...ChatFragment
			}
	}
`)

const useGetChats = () => {
	// @ts-ignore
	return useQuery(getChatsDocuments)
}

export {useGetChats}