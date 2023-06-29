import { NavigationContainer } from '@react-navigation/native'
import { render, waitFor, screen } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import '../../__mocks__'
import { MockedProvider } from '@apollo/client/testing'
import PasswordScreen from 'src/screens/password-screen'

const mockState = {
  user: {
    email: 'prince@prince.prince',
    password: 'Daprince@11',
    confirmPassword: 'Daprince@11',
    country: 'United State',
    state: 'Alabama'
  }
}

describe('Password screen', () => {
  const mocks = []

  beforeEach(() => {
    jest.mock('..')
  })
  it('should render password screen', async () => {
    const mockStore = configureStore()
    const store = mockStore(mockState)

    render(
      <NavigationContainer>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Provider store={store}>
            <PasswordScreen />
          </Provider>
        </MockedProvider>
      </NavigationContainer>
    )
    await waitFor(() => expect(screen.getByTestId('password')).toHaveTextContent)
  })
})
