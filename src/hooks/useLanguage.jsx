import {
    useMemo,
    useCallback
} from 'react'

import { useTranslation } from 'react-i18next'

const useLanguage = (namespace) => {

    const { t, i18n } = useTranslation(namespace)

    const setLanguage = useCallback((language) => {
        i18n.changeLanguage(language)
    },
        [i18n]
    )

    const value = useMemo(
        () => ({
            t,
            currentLanguage: i18n.language.split('-')?.[0] ?? i18n.language,
            setLanguage
        }),
        [t, i18n, setLanguage]
    )

    return value
}

export { useLanguage }