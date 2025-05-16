import * as i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import es from './locales/es.json'

export const locale = ['es']

export interface LocaleTypes {
  en: string
  es: string
}

export const LOCALE_TYPES: LocaleTypes = {
  en: 'en-EN',
  es: 'es-ES',
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      returnNull: false,
      fallbackLng: 'es',
      debug: false,
      detection: {
        order: ['localStorage', 'cookie'],
        caches: ['cookie'],
      },
      react: {
        useSuspense: true,
      },
      resources: {
        es: {
          translation: es,
        },
        en: {
          translation: en,
        },
      },
    },
    (err, t) => {
      if (err) {
        return console.log('something went wrong loading', err)
      }
      t('key')
    },
  )

export default i18n
