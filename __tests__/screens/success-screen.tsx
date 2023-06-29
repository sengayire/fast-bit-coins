import { NavigationContainer } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import '../../__mocks__'
import SuccessScreen from 'src/screens/verification-success-screen'

describe('Success screen', () => {
  it('should render  Success screen', () => {
    const view = render(
      <NavigationContainer>
        <SuccessScreen />
      </NavigationContainer>
    )

    expect(view).toMatchSnapshot()
  })
})
