import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { SvgUri } from 'react-native-svg'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'

import { styles } from './styles'

const Success = () => {
  const { t } = useTranslation()
  const test = require('assets/success.svg')
  const svg = resolveAssetSource(test)

  return (
    <View style={styles.container}>
      <View style={{ padding: 32 }}>
        <SvgUri uri={svg.uri} />
      </View>
      <Text style={styles.successText}>{t('email.created')}</Text>
      <Text style={styles.successDescriptionText}>{t('email.text')}</Text>
    </View>
  )
}

export default Success
