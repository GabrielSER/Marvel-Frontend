import clsx from 'clsx'
import { useLanguage } from '@hooks/useLanguage'

const LanguageLink = (props) => {

  const { language } = props

  const { currentLanguage, setLanguage } = useLanguage()

  const active = language == currentLanguage

  return (
    <button
      className={clsx(
        'text-light',
        'text-sm hover:scale-110',
        'hover:opacity-80',
        active && ['underline', 'scale-105'],
        !active && ['opacity-70']
      )}
      onClick={() => setLanguage(language)}
    >
      {language.toUpperCase()}
    </button>
  )
}

export default LanguageLink
