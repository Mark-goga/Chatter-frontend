import {graphql} from "../gql";

export const MessageFragment = graphql(`
    fragment MessageFragment on Message {
        _id,
        content,
        createdAt,
        user {
            _id,
            email,
            username,
        },
        chatId,
    }
`);