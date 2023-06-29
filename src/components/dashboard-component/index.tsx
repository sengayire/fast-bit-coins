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

import { styles } from './styles'

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
      <Image source={require('assets/dashboard-bg.png')} style={styles.bannerImage} />
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Image source={require('assets/logout.png')} style={styles.image} />
        <Text>{t('dashboard.logout')}</Text>
      </Pressable>
      <View style={{ paddingTop: 20 }}>
        <Text style={styles.titleText}>{t('dashboard.title')}</Text>
        <Typography text={t('dashboard.text')} />
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.discoverMoreText} onPress={handleRedirect}>
            {t('dashboard.more')}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default DashboardComponent
