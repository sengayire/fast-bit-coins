import { Text, View } from 'react-native'
import commonStyles from 'src/styles'

const Dashboard = () => {
  return (
    <View>
      <Text style={[commonStyles.textColorDarkGray, commonStyles.mdText]}>My dashboard</Text>
    </View>
  )
}

export default Dashboard
