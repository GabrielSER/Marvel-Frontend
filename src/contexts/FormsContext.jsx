import {
    createContext,
    useState,
    useEffect,
    useMemo,
    useContext
} from 'react'
import { useMarvel } from '../hooks/useMarvel'

const FormsContext = createContext()

const initialState = {
    forms: new Map()
}

const FormsProvider = (props) => {

    const [state, setState] = useState(initialState)
    const { query, loading } = useMarvel()

    useEffect(() => {
        const loadForms = async () => {
            try {
                const formsArray = await query('/forms')
                const forms = new Map(formsArray.map(form =>
                    [form._id, form]
                ))
                setState({
                    ...state,
                    forms
                })
            }
            catch (error) {
                console.error('Error loading forms')
            }
        }
        loadForms()
    }, [])

    const value = useMemo(() => ({
        ...state,
        loading
    }), [
        state,
        loading
    ])

    return <FormsContext.Provider value={value} {...props} />
}

const useForms = () => {
    const context = useContext(FormsContext)
    if (!context) {
        throw new Error('Invalid use of useForms, FormsProvider must be defined in parent hierarchy')
    }
    return context
}

export { FormsProvider, useForms }
