import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { SvgUri } from 'react-native-svg'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import { colors } from 'src/utils/colors'

const Success = () => {
  const { t } = useTranslation()
  const test = require('assets/success.svg')
  const svg = resolveAssetSource(test)
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View style={{ padding: 32 }}>
        <SvgUri uri={svg.uri} />
      </View>
      <Text
        style={{
          color: colors.primaryBlack100,
          fontSize: 30,
          fontWeight: '700',
          paddingBottom: 24
        }}
      >
        {t('email.created')}
      </Text>
      <Text style={{ color: colors.primaryBlack70, fontSize: 21, lineHeight: 32 }}>
        {t('email.text')}
      </Text>
    </View>
  )
}

export default Success
