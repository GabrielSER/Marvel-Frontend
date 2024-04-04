import {
    createContext,
    useState,
    useMemo,
    useContext,
    useCallback,
    useEffect
} from 'react'
import { Toolbar } from '../pages/content/toolbars/Toolbar'

const ToolbarContext = createContext()

const initialToolbarData = {
    toolbar: null,
    toolbarComponent: null,
    maximized: false
}

const initialState = {
    visible: true,
    toolbars: {},
    currentToolbar: undefined
}

const ToolbarProvider = (props) => {

    const [state, setState] = useState(initialState)

    /**
     * Init all the default toolbars
     */
    useEffect(() => {
        const toolbars = Object.values(Toolbar).reduce((toolbars, toolbar) => {
            toolbars[toolbar.id] = {
                ...initialToolbarData,
                toolbar
            }
            return toolbars
        }, {})
        setState({
            ...state,
            toolbars
        })
    }, [])

    const toggleVisible = useCallback(() => {
        setState({
            ...state,
            visible: !state.visible
        })
    }, [state, setState])

    const addToolbar = useCallback((toolbar) => {
        setState({
            ...state,
            toolbars: {
                ...state.toolbars,
                [toolbar.id]: {
                    ...initialToolbarData,
                    toolbar
                }
            }
        })
    }, [state, setState])

    const removeToolbar = useCallback((toolbar) => {
        delete state.toolbars[toolbar.id]
        setState({
            ...state,
            toolbars: { ...state.toolbars }
        })
    }, [state, setState])

    const setCurrentToolbarData = useCallback((toolbar, toolbarComponent) => {
        const toolbarData = state.toolbars[toolbar.id]
        if (toolbarData) {
            toolbarData.toolbarComponent = toolbarComponent
            setState({
                ...state,
                currentToolbar: toolbar
            })
        }
    }, [state, setState])

    const clearCurrentToolbarData = useCallback(() => {
        setState({
            ...state,
            currentToolbar: undefined
        })
    }, [state, setState])

    const minimize = useCallback(() => {
        clearCurrentToolbarData()
    }, [
        clearCurrentToolbarData
    ])

    const maximize = useCallback(() => {
        const toolbarData = state.toolbars[state.currentToolbar.id]
        toolbarData.maximized = !toolbarData.maximized
        setState({...state})
    }, [
        state,
        setState
    ])

    const close = useCallback(() => {
        removeToolbar(state.currentToolbar)
        clearCurrentToolbarData()
    }, [
        state,
        removeToolbar,
        clearCurrentToolbarData
    ])

    const currentToolbarData = useMemo(() => {
        return state.toolbars[state.currentToolbar?.id]
    }, [state])

    const value = useMemo(() => ({
        ...state,
        currentToolbarData,
        toggleVisible,
        addToolbar,
        removeToolbar,
        setCurrentToolbarData,
        clearCurrentToolbarData,
        minimize,
        maximize,
        close
    }), [
        state,
        currentToolbarData,
        toggleVisible,
        addToolbar,
        removeToolbar,
        setCurrentToolbarData,
        clearCurrentToolbarData,
        minimize,
        maximize,
        close
    ])

    return <ToolbarContext.Provider value={value} {...props} />
}

const useToolbar = () => {
    const context = useContext(ToolbarContext)
    if (!context) {
        throw new Error('Invalid use of useToolbar, ToolbarProvider must be defined in parent hierarchy')
    }
    return context
}

export { ToolbarProvider, useToolbar }
