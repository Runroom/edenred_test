import { useTranslation } from 'react-i18next'

import { LOCALE_TYPES } from '@/i18n/i18n'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  return (
    <div className="absolute top-0 right-0 z-10 hidden h-12 w-auto items-center justify-end gap-4 bg-white p-4 text-sm font-medium text-gray-900 md:flex dark:bg-gray-800 dark:text-white">
      <button onClick={() => i18n.changeLanguage(LOCALE_TYPES.es)}>Español</button>
      <button onClick={() => i18n.changeLanguage(LOCALE_TYPES.en)}>English</button>
    </div>
  )
}
