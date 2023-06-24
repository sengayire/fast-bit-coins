import React from 'react'
import { View } from 'react-native'

import TextInput from 'src/common/text-input'
import Typography from 'src/common/typography'

interface PasswordProps {
  setUserPassword
}
const Password = ({ setUserPassword }: PasswordProps) => {
  // const user = useSelector(({ user }) => user)

  return (
    <View>
      <Typography text="Bacon ipsum dolor amet kielbasa filet mignon biltong hamburger tri-tip sirloin." />
      <TextInput
        label="Please, add your password"
        placeholder="Enter Password"
        type="password"
        onChange={(text) =>
          setUserPassword((state) => {
            return {
              ...state,
              password: text
            }
          })
        }
      />
      <TextInput
        label="Please, confirm your password"
        placeholder="Confirm Password"
        type="password"
        onChange={(text) =>
          setUserPassword((state) => {
            return {
              ...state,
              confirmPassword: text
            }
          })
        }
      />
    </View>
  )
}

export default Password
