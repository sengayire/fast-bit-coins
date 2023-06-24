import { BottomSheet } from '@rneui/themed'
import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { colors } from 'src/utils/colors'

interface ModalProps {
  children: ReactNode
  title?: string
  isVisible?: boolean
  onBackdropPress?: () => void
}

const Modal = ({ children, title, isVisible, onBackdropPress }: ModalProps) => {
  return (
    <SafeAreaView>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'transparent' }}
        onBackdropPress={onBackdropPress}
      >
        <View
          style={{
            backgroundColor: colors.primaryWhite100,
            height: 800,
            borderTopRightRadius: 18,
            borderTopLeftRadius: 18,
            padding: 24
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <View
              style={{
                backgroundColor: colors.primaryBlack10,
                width: 82,
                height: 6,
                borderRadius: 100
              }}
            />
            <Text
              style={{
                paddingTop: 29,
                color: colors.black,
                fontWeight: '600',
                fontSize: 18,
                lineHeight: 26
              }}
            >
              {title}
            </Text>
          </View>
          {children}
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default Modal
