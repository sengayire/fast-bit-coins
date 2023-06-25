import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { Provider } from 'react-redux'
import { apolloClient } from 'src/apollo-client'
import Navigation from 'src/navigation'

import { store } from 'src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Navigation />
      </ApolloProvider>
    </Provider>
  )
}
