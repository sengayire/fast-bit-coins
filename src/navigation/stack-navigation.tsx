import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgUri } from 'react-native-svg'
import commonStyles from 'src/styles'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import Dashboard from 'src/screens/dashboard'
import { colors } from 'src/utils/colors'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Your new account',
          headerStyle: { backgroundColor: colors.primaryWhite90 },
          header: ({ navigation, route, options, back }: NativeStackHeaderProps) => {
            const title = getHeaderTitle(options, route.name)

            const test = require('assets/back-arrow.svg')
            const logo = require('assets/fast-coins-log.svg')
            const icon = resolveAssetSource(test)
            const logoIcon = resolveAssetSource(logo)

            return (
              <SafeAreaView style={options.headerStyle}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                    alignItems: 'center'
                  }}
                >
                  <SvgUri uri={icon?.uri ?? ''} />
                  <Text
                    style={[commonStyles.primaryBlack100, commonStyles.mdText, { fontWeight: 600 }]}
                  >
                    {title}
                  </Text>
                  <SvgUri uri={logoIcon?.uri ?? ''} />
                </View>
              </SafeAreaView>
            )
          }
        }}
      />
      <Stack.Screen name="Home" component={Dashboard} />
    </Stack.Navigator>
  )
}

export default StackNavigation
