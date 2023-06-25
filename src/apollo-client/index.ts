import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
  uri: 'https://resolved-hound-17.hasura.app/v1/graphql',
  headers: {
    'Content-type': 'application/json',
    'x-hasura-admin-secret': 'r1XeDufWr2bY8rW8WneXXVrZ559qDWqAHCoCrraxpUpM4K8QuE0YIbzMYlQxm3yC'
  },
  cache: new InMemoryCache()
})
