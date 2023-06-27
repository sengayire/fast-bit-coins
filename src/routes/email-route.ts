import { EMAIL_SCREEN_NAME, EMAIL_SCREEN_TITLE } from 'src/constants/screens'
import component from 'src/screens/email-screen'

export default {
  name: EMAIL_SCREEN_NAME,
  title: EMAIL_SCREEN_TITLE,
  shownHeader: true,
  component,
  protected: false
}
