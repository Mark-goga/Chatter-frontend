import {graphql} from "../gql";
import {useQuery} from "@apollo/client";
import {ChatQueryVariables} from '../gql/graphql';

const getChatDocuments = graphql(`
	query chat($_id: String!) {
			chat(_id: $_id) {
					...ChatFragment
			}
	}
`)

const useGetChat = (variables: ChatQueryVariables) => {
	return useQuery(getChatDocuments, {variables});
}
export {useGetChat}