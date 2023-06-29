import { BottomSheet } from '@rneui/themed'
import React, { ReactNode } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { styles } from './styles'

interface ModalProps {
  children: ReactNode
  title?: string
  isVisible?: boolean
  onBackdropPress?: () => void
  height?: number
}

const Modal = ({ children, title, isVisible, onBackdropPress, height = 800 }: ModalProps) => {
  return (
    <SafeAreaView>
      <BottomSheet
        isVisible={isVisible}
        containerStyle={{ backgroundColor: 'transparent' }}
        onBackdropPress={onBackdropPress}
      >
        <View style={[{ height }, styles.modalContainer]}>
          <View style={{ alignItems: 'center' }}>
            <View style={styles.headerContainer} />
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
          {children}
        </View>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default Modal
