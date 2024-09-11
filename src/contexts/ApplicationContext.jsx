import { createContext, useState, useMemo, useContext, useCallback } from 'react'

const ApplicationContext = createContext()

const initialState = {
  loading: false
}

const ApplicationProvider = (props) => {
  const [state, setState] = useState(initialState)

  const setLoading = useCallback((loading) => {
    setState((previous) => ({
      ...previous, 
      loading
    }))
  }, [setState])

  const value = useMemo(
    () => ({
      ...state,
      setLoading
    }),
    [state, setLoading]
  )

  return (
    <ApplicationContext.Provider
      value={value}
      {...props}
    />
  )
}

const useApplication = () => {
  const context = useContext(ApplicationContext)
  if (!context) {
    throw new Error(
      'Invalid use of useApplication, ApplicationProvider must be defined in parent hierarchy'
    )
  }
  return context
}

export { ApplicationProvider, useApplication }
