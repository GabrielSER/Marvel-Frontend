import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: (lng, namespace) => {
                if (namespace === undefined || namespace === null) {
                    return `locales/${lng}.json`
                }
                return `locales/${namespace}/${lng}.json`
            }
        }
    })

export default i18n
