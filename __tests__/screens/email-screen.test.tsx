import { NavigationContainer } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import '../../__mocks__'
import EmailScreen from 'src/screens/email-screen'

describe('Email component', () => {
  it('should render email screen', () => {
    const view = render(
      <NavigationContainer>
        <EmailScreen />
      </NavigationContainer>
    )

    expect(view).toMatchSnapshot()
  })
})
