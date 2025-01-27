import {ApolloClient, HttpLink, InMemoryCache, makeVar} from '@apollo/client';
import { API_URL } from './urls';
import {onError} from "@apollo/client/link/error";
import excludedRoutes from "./excluded-routes";
import onLogout from "../utils/onLogout";
import {Themas} from "./themes";

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

const client = new ApolloClient({
  cache,
  link: logoutLink.concat(httpLink),
})

export default client;