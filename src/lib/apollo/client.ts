import { ApolloClient, ApolloLink, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

let client: ApolloClient<any> | null = null;

const httpLink = new HttpLink({
  uri: process.env.STRAPI_ENDPOINT_GRAPHQL,
  fetch,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // TODO: Add token
  return forward(operation);
});

const onErrorLink = onError((error) => {
  console.log({ networkError: error });
});

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we are running on the server.

  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      cache: new InMemoryCache(),
      link: onErrorLink.concat(authMiddleware).concat(httpLink),
    });
  }

  return client;
};
