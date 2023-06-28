import AsyncStorage from '@react-native-async-storage/async-storage'
import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect, useState } from 'react'
import routes from 'src/routes'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import NavigationHeader from 'src/common/navigation-header'
import { colors } from 'src/utils/colors'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  useEffect(() => {
    AsyncStorage?.getItem('user-token').then((token) => setIsAuth(!!token))
  }, [])
  console.log('isAuth', isAuth)
  return (
    <Stack.Navigator>
      {routes
        .filter((route) => (isAuth ? route.protected : route))
        .map(({ name, component, title, shownHeader }) => {
          return (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title,
                headerStyle: { backgroundColor: colors.primaryWhite90 },
                header: ({ navigation, route, options }: NativeStackHeaderProps) => {
                  const title = getHeaderTitle(options, route.name)

                  const test = require('assets/back-arrow.svg')
                  const logo = require('assets/fast-coins-log.svg')
                  const icon = resolveAssetSource(test)
                  const logoIcon = resolveAssetSource(logo)
                  if (shownHeader) {
                    return (
                      <NavigationHeader
                        logoIcon={logoIcon}
                        icon={icon}
                        title={title}
                        options={options}
                        navigation={navigation}
                      />
                    )
                  }
                }
              }}
            />
          )
        })}
    </Stack.Navigator>
  )
}

export default StackNavigation
