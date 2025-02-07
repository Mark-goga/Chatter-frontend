import {ApolloClient, HttpLink, InMemoryCache, makeVar, split} from '@apollo/client';
import {API_URL, WS_URL} from './urls';
import {onError} from "@apollo/client/link/error";
import excludedRoutes from "./excluded-routes";
import onLogout from "../utils/onLogout";
import {Themas} from "./themes";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {createClient} from "graphql-ws";
import {getMainDefinition} from "@apollo/client/utilities";

export const themeVar = makeVar((localStorage.getItem('theme') as Themas) || 'light');

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        theme: {
          read() {
            return themeVar();
          },
        },
      },
    },
  },
});

const logoutLink = onError((error) => {
  if(error.graphQLErrors?.length &&
    (error.graphQLErrors[0].extensions?.originalError as any)?.statusCode === 401) {
    if(!excludedRoutes.includes(window.location.pathname)) {
      onLogout();
    }
  }
});

const httpLink = new HttpLink({uri: `${API_URL}/graphql`});
const wsLink = new GraphQLWsLink(
  createClient({
    url: `ws://${WS_URL}/graphql`,
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  cache,
  link: logoutLink.concat(splitLink),
})

export default client;