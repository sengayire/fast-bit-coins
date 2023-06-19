import { Text, View } from 'react-native'
import commonStyles from 'src/styles'

import CommonButton from 'src/common/button'
import SearchInput from 'src/common/search-input'
import SelectInput from 'src/common/select-input'
import TextInput from 'src/common/text-input'

const Dashboard = () => {
  return (
    <View>
      <Text style={[commonStyles.textColorPrimaryYellow100, commonStyles.mdText]}>
        My dashboard
      </Text>
      <CommonButton status="disabled" />
      <TextInput placeholder="Enter your email" label="Email" />
      <SearchInput placeholder="Search" />
      <SelectInput placeholder="Search" />
    </View>
  )
}

export default Dashboard
