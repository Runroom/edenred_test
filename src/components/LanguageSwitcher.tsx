import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import { LOCALE_TYPES } from '@/i18n/i18n'

const languages = [
  { code: LOCALE_TYPES.es, label: 'Español', flag: '🇪🇸' },
  { code: LOCALE_TYPES.en, label: 'English', flag: '🇬🇧' },
]

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.resolvedLanguage

  return (
    <nav className="absolute top-4 right-4 z-10 hidden rounded-lg bg-white shadow-md md:flex dark:bg-gray-800">
      {languages.map(({ code, label, flag }) => (
        <button
          key={code}
          onClick={() => code !== currentLang && i18n.changeLanguage(code)}
          aria-label={`Cambiar a ${label}`}
          className={clsx(
            'flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-colors',
            code === currentLang
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
          )}
        >
          <span className="text-lg leading-none">{flag}</span>
          {label}
        </button>
      ))}
    </nav>
  )
}
