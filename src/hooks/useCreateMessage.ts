import {graphql} from "../gql";
import {useMutation} from "@apollo/client";


const createMessageDocument = graphql(`
	mutation CreateMessage($createMessageInput: CreateMessageInput!) {
			createMessage(createMessageInput: $createMessageInput) {
					_id,
					content,
					createdAt,
			}
	}
`);

const useCreateMessage = () => {
	// @ts-ignore
	return useMutation(createMessageDocument)
}
export { useCreateMessage };