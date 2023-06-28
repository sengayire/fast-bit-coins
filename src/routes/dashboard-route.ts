import { DASHBOARD_SCREEN_NAME, DASHBOARD_SCREEN_TITLE } from 'src/constants/screens'
import component from 'src/screens/dashboard'

export default {
  name: DASHBOARD_SCREEN_NAME,
  title: DASHBOARD_SCREEN_TITLE,
  shownHeader: false,
  component,
  protected: true
}
