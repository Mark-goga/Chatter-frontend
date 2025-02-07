import {graphql} from "../gql";
import {useSubscription} from "@apollo/client";
import {SubscriptionMessageCreatedArgs} from "../gql/graphql";

const messageCreatedDocument = graphql(`
	subscription messageCreated($chatId: String!) {
			messageCreated(chatId: $chatId) {
					...MessageFragment
			}
	}
`)

const useMessageCreated = (variables: SubscriptionMessageCreatedArgs) => {
	return useSubscription(messageCreatedDocument, {variables});
}

export default useMessageCreated;