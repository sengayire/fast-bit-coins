import { ApolloProvider } from '@apollo/client'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { RootSiblingParent } from 'react-native-root-siblings'
import { Provider } from 'react-redux'
import { apolloClient } from 'src/apollo-client'
import Navigation from 'src/navigation'

import { store } from 'src/redux/store'

import i18n from './i18n.config'

export default function App() {
  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <I18nextProvider i18n={i18n} defaultNS={'translation'}>
          <RootSiblingParent>
            <Navigation />
          </RootSiblingParent>
        </I18nextProvider>
      </ApolloProvider>
    </Provider>
  )
}
