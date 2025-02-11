import {graphql} from "../gql";
import {useSubscription} from "@apollo/client";
import {SubscriptionMessageCreatedArgs} from "../gql/graphql";
import {updateMessages} from "../cache/message";
import {updateLatestMessage} from "../cache/latest-message";

const messageCreatedDocument = graphql(`
	subscription messageCreated($chatIds: [String!]!) {
			messageCreated(chatIds: $chatIds) {
					...MessageFragment
			}
	}
`)

const useMessageCreated = (variables: SubscriptionMessageCreatedArgs) => {
	// @ts-ignore
	return useSubscription(messageCreatedDocument, {
		variables,
		onData: ({ client, data }) => {
			if (data.data) {
				updateMessages(client.cache, data.data.messageCreated);
				updateLatestMessage(client.cache, data.data.messageCreated);
			}
		},
	});
}

export default useMessageCreated;