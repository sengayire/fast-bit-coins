import i18n from 'i18next'
import 'intl-pluralrules'
import { initReactI18next } from 'react-i18next'

import { en, fr } from 'src/services/locale'

//empty for now
const resources = { en: { translation: en }, fr: { translation: fr } }

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
