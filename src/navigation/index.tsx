import { NavigationContainer } from '@react-navigation/native'

// import MainContainer from 'src/layouts/main'
import StackNavigation from './stack-navigation'

const Navigation = () => {
  return (
    // <MainContainer>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    // </MainContainer>
  )
}

export default Navigation
