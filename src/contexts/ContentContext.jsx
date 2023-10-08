import {
    cloneElement,
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext,
    useCallback
} from 'react'

import { contentMapping } from '../pages/content/mapping'

const ContentContext = createContext()

const ContentProvider = (props) => {

    const [loaded, setLoaded] = useState()

    const getContent = useCallback((id, params = {}) => {
        const contentMap = new Map(Object.entries(contentMapping()))
        const content = contentMap.get(id)
        if (!content) {
            throw new Error(`Invalid content id '${id}', no value was found`)
        }
        const contentWithParams = cloneElement(content, params)
        return contentWithParams
    }, [setLoaded])

    const value = useMemo(() => ({
        getContent,
        loaded
    }), [
        getContent,
        loaded
    ])

    return <ContentContext.Provider value={value} {...props} />
}

const useContent = () => {
    const context = useContext(ContentContext)
    if (!context) {
        throw new Error('Invalid use of useContent, ContentProvider must be defined in parent hierarchy')
    }
    return context
}

export { ContentProvider, useContent }
