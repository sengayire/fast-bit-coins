import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

const link = new HttpLink({
  uri: 'https://bjsxxuwozdyhofdcguhi.hasura.eu-west-2.nhost.run/v1/graphql',
  headers: {
    'Content-type': 'application/json'
  },
  fetch
})

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
