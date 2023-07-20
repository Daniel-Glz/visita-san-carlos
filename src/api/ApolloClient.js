import { ApolloClient, InMemoryCache } from '@apollo/client';

const URL = 'http://localhost/cms-visit-san-carlos/graphql';

const client = new ApolloClient({
  uri: URL,
  cache: new InMemoryCache(),
});

export default client;
