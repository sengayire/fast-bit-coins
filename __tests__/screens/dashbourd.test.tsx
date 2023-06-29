import { NavigationContainer } from '@react-navigation/native'
import { render } from '@testing-library/react-native'

import '../../__mocks__'
import '@testing-library/jest-native/extend-expect'
import Dashboard from 'src/screens/dashboard'

describe('Dashboard component', () => {
  it('Should render dashboard', () => {
    const view = render(
      <NavigationContainer>
        <Dashboard />
      </NavigationContainer>
    )
    expect(view).toMatchSnapshot()
  })
})
