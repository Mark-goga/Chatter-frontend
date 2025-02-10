import {graphql} from "../gql";
import {useMutation} from "@apollo/client";
import {updateMessages} from "../cache/message";

const createMessageDocument = graphql(`
	mutation CreateMessage($createMessageInput: CreateMessageInput!) {
			createMessage(createMessageInput: $createMessageInput) {
					...MessageFragment
			}
	}
`);

const useCreateMessage = () => {
	// @ts-ignore
	return useMutation(createMessageDocument, {
		update(cache, { data }) {
			if (data?.createMessage) {
				updateMessages(cache, data.createMessage);
			}
		},
	});
}
export { useCreateMessage };