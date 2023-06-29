import { useNavigation } from '@react-navigation/native'
import i18next from 'i18next'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { View, Text } from 'react-native'
import { SvgUri } from 'react-native-svg'
import commonStyles from 'src/styles'

import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource'
import CommonButton from 'src/common/button'
import Item from 'src/common/item'
import Modal from 'src/common/model'
import SelectInput from 'src/common/select-input'
import { EMAIL_SCREEN_NAME } from 'src/constants/screens'
import { NavigationProps } from 'src/types/screens'

const languagesList = [
  {
    key: 'en',
    name: 'English'
  },
  {
    key: 'fr',
    name: 'français'
  }
]

const SelectLanguage = () => {
  const test = require('assets/fast-coins-log-xl.svg')
  const svg = resolveAssetSource(test)
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [selectedCountry, setSelectedCountry] = useState<string>('English')

  const { navigate } = useNavigation<NavigationProps>()
  const { t } = useTranslation()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          width: 100,
          height: 100,
          marginBottom: 88
        }}
      >
        <SvgUri uri={svg?.uri} />
      </View>
      <Text
        style={[
          commonStyles.textColorPrimaryYellow100,
          {
            fontWeight: 700,
            lineHeight: 28,
            fontSize: 32,
            paddingVertical: 52
          }
        ]}
      >
        {t('language.select')}
      </Text>
      <SelectInput placeholder={selectedCountry} onPress={() => setIsVisible(true)} />
      <CommonButton
        title={t('language.select.continue.btn')}
        onPress={() => navigate?.(EMAIL_SCREEN_NAME)}
      />
      <Modal
        title={t('language.select.modal')}
        isVisible={isVisible}
        height={250}
        onBackdropPress={() => setIsVisible(false)}
      >
        {languagesList.map((language) => (
          <Item
            key={language.key}
            item={language}
            onPressItem={() => {
              setSelectedCountry(language.name)
              setIsVisible(false)
              i18next.changeLanguage(language.key)
            }}
          />
        ))}
      </Modal>
    </View>
  )
}

export default SelectLanguage
