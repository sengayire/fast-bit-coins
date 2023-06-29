import { NavigationContainer } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import '../../__mocks__'
import AccountScreen from 'src/screens/new-account-screen'

describe('New account screen', () => {
  it('should render new account screen', () => {
    const view = render(
      <NavigationContainer>
        <AccountScreen />
      </NavigationContainer>
    )

    expect(view).toMatchSnapshot()
  })
})
