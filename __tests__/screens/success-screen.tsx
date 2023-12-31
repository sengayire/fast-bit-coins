import { NavigationContainer } from '@react-navigation/native'
import { render, waitFor } from '@testing-library/react-native'

import '../../__mocks__'
import SuccessScreen from 'src/screens/verification-success-screen'

describe('Success screen', () => {
  it('should render  Success screen', async () => {
    jest.useFakeTimers()
    await waitFor(() => {
      jest.runAllTimers()
    })
    const view = render(
      <NavigationContainer>
        <SuccessScreen />
      </NavigationContainer>
    )

    expect(view).toMatchSnapshot()
  })
})
