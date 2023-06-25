import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const link = new HttpLink({
  uri: 'https://resolved-hound-17.hasura.app/v1/graphql',
  headers: {
    'Content-type': 'application/json',
    'x-hasura-admin-secret': 'r1XeDufWr2bY8rW8WneXXVrZ559qDWqAHCoCrraxpUpM4K8QuE0YIbzMYlQxm3yC'
  }
})

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache()
})
