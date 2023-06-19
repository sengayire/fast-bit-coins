import { makeStyles, Button } from '@rneui/themed'
import React from 'react'
import { View } from 'react-native'
import { s } from 'react-native-size-matters'

import { colors } from 'src/utils/colors'

interface ButtonProps {
  status?: 'active' | 'disabled'
}

const CommonButton = ({ status = 'active' }: ButtonProps) => {
  const styles = useStyles()
  return (
    <View style={{ display: 'flex', alignItems: 'center' }}>
      <Button buttonStyle={styles.button} type="clear" title="Continue" titleStyle={styles.title}>
        {/* <Text
          style={[
            commonStyles.mdText,
            status === 'active'
              ? commonStyles.textColorPrimaryBlack100
              : commonStyles.textColorPrimaryBlack10,
            { fontWeight: 600, fontSize: '21px', lineHeight: '32px' }
          ]}
        >
          Continue
        </Text> */}
        Continue
      </Button>
    </View>
  )
}

const useStyles = makeStyles(() => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: colors.primaryYellow100,
    height: s(52),
    width: s(300)
  },
  title: {
    color: colors.primaryBlack100,
    fontWeight: '600',
    fontSize: 21,
    lineHeight: 32
  }
}))

export default CommonButton
