import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import routes from 'src/routes'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import NavigationHeader from 'src/common/navigation-header'
import { colors } from 'src/utils/colors'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      {routes.map(({ name, component, title, ShownHeader }) => {
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={component}
            options={{
              title,
              headerStyle: { backgroundColor: colors.primaryWhite90 },
              header: ({ navigation, route, options, back }: NativeStackHeaderProps) => {
                const title = getHeaderTitle(options, route.name)

                const test = require('assets/back-arrow.svg')
                const logo = require('assets/fast-coins-log.svg')
                const icon = resolveAssetSource(test)
                const logoIcon = resolveAssetSource(logo)
                if (ShownHeader) {
                  return (
                    <NavigationHeader
                      logoIcon={logoIcon}
                      icon={icon}
                      title={title}
                      options={options}
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
