import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'expo-image'
import * as WebBrowser from 'expo-web-browser'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'

import Typography from 'src/common/typography'
import { SELECT_LANGUAGE_SCREEN_NAME } from 'src/constants/screens'
import { setIsAuth } from 'src/redux/auth-slice'
import { NavigationProps } from 'src/types/screens'
import { colors } from 'src/utils/colors'

const DashboardComponent = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { navigate } = useNavigation<NavigationProps>()

  const handleLogout = () => {
    AsyncStorage.removeItem('user-token').then(() => {
      dispatch(setIsAuth(false))
      navigate(SELECT_LANGUAGE_SCREEN_NAME)
    })
  }

  const handleRedirect = () => {
    WebBrowser.openBrowserAsync('https://twentyone.money/')
  }
  return (
    <View>
      <Image
        source={require('assets/dashboard-bg.png')}
        style={{
          width: '100%',
          height: '80%',
          resizeMode: 'cover',
          borderBottomLeftRadius: 200
        }}
      />
      <Pressable
        style={{
          position: 'absolute',
          top: 80,
          right: 20,
          alignItems: 'center'
        }}
        onPress={handleLogout}
      >
        <Image
          source={require('assets/logout.png')}
          style={{
            width: 30,
            height: 30
          }}
        />
        <Text>{t('dashboard.logout')}</Text>
      </Pressable>
      <View style={{ paddingTop: 20 }}>
        <Text style={[{ fontSize: 30, fontWeight: '700', textAlign: 'center' }]}>
          {t('dashboard.title')}
        </Text>
        <Typography text={t('dashboard.text')} />
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            style={[{ textAlign: 'right', color: colors.primaryYellow100, fontSize: 15 }]}
            onPress={handleRedirect}
          >
            {t('dashboard.more')}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default DashboardComponent
