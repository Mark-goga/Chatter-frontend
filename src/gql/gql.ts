/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n    fragment ChatFragment on Chat {\n        _id,\n        name,\n        latestMessage {\n           ...MessageFragment \n        },\n    }\n": types.ChatFragmentFragmentDoc,
    "\n    fragment MessageFragment on Message {\n        _id,\n        content,\n        createdAt,\n        user {\n            _id,\n            email,\n            username,\n        },\n        chatId,\n    }\n": types.MessageFragmentFragmentDoc,
    "\n\tmutation CreateChat($createChatInput: CreateChatInput!) {\n\t\tcreateChat(createChatInput: $createChatInput) {\n\t\t\t\t...ChatFragment\n    }\n\t}\n": types.CreateChatDocument,
    "\n\tmutation CreateMessage($createMessageInput: CreateMessageInput!) {\n\t\t\tcreateMessage(createMessageInput: $createMessageInput) {\n\t\t\t\t\t...MessageFragment\n\t\t\t}\n\t}\n": types.CreateMessageDocument,
    "\n    mutation CreateUser($createUserInput: CreateUserInput!) {\n        createUser(createUserInput: $createUserInput) {\n            _id\n            email\n            username\n        }\n    }\n": types.CreateUserDocument,
    "\n\tquery chat($_id: String!) {\n\t\t\tchat(_id: $_id) {\n\t\t\t\t\t...ChatFragment\n\t\t\t}\n\t}\n": types.ChatDocument,
    "\n\tquery Chats($skip: Int!, $limit: Int!) {\n\t\t\tchats(skip: $skip, limit: $limit) {\n\t\t\t\t\t ...ChatFragment\n\t\t\t}\n\t}\n": types.ChatsDocument,
    "\n\tquery Me {\n\t\t\tme {\n\t\t\t\t\t_id\n\t\t\t\t\temail\n\t\t\t\t\tusername\n\t\t\t}\n\t}\n": types.MeDocument,
    "\n\tquery Messages($chatId: String!, $skip: Int!, $limit: Int!) {\n\t\tmessages(chatId: $chatId, skip: $skip, limit: $limit) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n": types.MessagesDocument,
    "\n\tsubscription messageCreated($chatIds: [String!]!) {\n\t\t\tmessageCreated(chatIds: $chatIds) {\n\t\t\t\t\t...MessageFragment\n\t\t\t}\n\t}\n": types.MessageCreatedDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment ChatFragment on Chat {\n        _id,\n        name,\n        latestMessage {\n           ...MessageFragment \n        },\n    }\n"): (typeof documents)["\n    fragment ChatFragment on Chat {\n        _id,\n        name,\n        latestMessage {\n           ...MessageFragment \n        },\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment MessageFragment on Message {\n        _id,\n        content,\n        createdAt,\n        user {\n            _id,\n            email,\n            username,\n        },\n        chatId,\n    }\n"): (typeof documents)["\n    fragment MessageFragment on Message {\n        _id,\n        content,\n        createdAt,\n        user {\n            _id,\n            email,\n            username,\n        },\n        chatId,\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateChat($createChatInput: CreateChatInput!) {\n\t\tcreateChat(createChatInput: $createChatInput) {\n\t\t\t\t...ChatFragment\n    }\n\t}\n"): (typeof documents)["\n\tmutation CreateChat($createChatInput: CreateChatInput!) {\n\t\tcreateChat(createChatInput: $createChatInput) {\n\t\t\t\t...ChatFragment\n    }\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tmutation CreateMessage($createMessageInput: CreateMessageInput!) {\n\t\t\tcreateMessage(createMessageInput: $createMessageInput) {\n\t\t\t\t\t...MessageFragment\n\t\t\t}\n\t}\n"): (typeof documents)["\n\tmutation CreateMessage($createMessageInput: CreateMessageInput!) {\n\t\t\tcreateMessage(createMessageInput: $createMessageInput) {\n\t\t\t\t\t...MessageFragment\n\t\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation CreateUser($createUserInput: CreateUserInput!) {\n        createUser(createUserInput: $createUserInput) {\n            _id\n            email\n            username\n        }\n    }\n"): (typeof documents)["\n    mutation CreateUser($createUserInput: CreateUserInput!) {\n        createUser(createUserInput: $createUserInput) {\n            _id\n            email\n            username\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery chat($_id: String!) {\n\t\t\tchat(_id: $_id) {\n\t\t\t\t\t...ChatFragment\n\t\t\t}\n\t}\n"): (typeof documents)["\n\tquery chat($_id: String!) {\n\t\t\tchat(_id: $_id) {\n\t\t\t\t\t...ChatFragment\n\t\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Chats($skip: Int!, $limit: Int!) {\n\t\t\tchats(skip: $skip, limit: $limit) {\n\t\t\t\t\t ...ChatFragment\n\t\t\t}\n\t}\n"): (typeof documents)["\n\tquery Chats($skip: Int!, $limit: Int!) {\n\t\t\tchats(skip: $skip, limit: $limit) {\n\t\t\t\t\t ...ChatFragment\n\t\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Me {\n\t\t\tme {\n\t\t\t\t\t_id\n\t\t\t\t\temail\n\t\t\t\t\tusername\n\t\t\t}\n\t}\n"): (typeof documents)["\n\tquery Me {\n\t\t\tme {\n\t\t\t\t\t_id\n\t\t\t\t\temail\n\t\t\t\t\tusername\n\t\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery Messages($chatId: String!, $skip: Int!, $limit: Int!) {\n\t\tmessages(chatId: $chatId, skip: $skip, limit: $limit) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Messages($chatId: String!, $skip: Int!, $limit: Int!) {\n\t\tmessages(chatId: $chatId, skip: $skip, limit: $limit) {\n\t\t\t...MessageFragment\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tsubscription messageCreated($chatIds: [String!]!) {\n\t\t\tmessageCreated(chatIds: $chatIds) {\n\t\t\t\t\t...MessageFragment\n\t\t\t}\n\t}\n"): (typeof documents)["\n\tsubscription messageCreated($chatIds: [String!]!) {\n\t\t\tmessageCreated(chatIds: $chatIds) {\n\t\t\t\t\t...MessageFragment\n\t\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;