import { createContext, useState, useMemo, useContext, useCallback } from 'react'

const editModeKey = 'editMode'

const ApplicationContext = createContext()

const initialState = {
  loading: false,
  editMode: localStorage.getItem(editModeKey),
  sideDrawer: false,
  modalComponent: undefined
}

const ApplicationProvider = (props) => {
  const [state, setState] = useState(initialState)

  const setLoading = useCallback((loading) => {
    setState((previous) => ({
      ...previous,
      loading
    }))
  }, [setState])

  const setEditMode = useCallback((editMode) => {
    localStorage.setItem(editModeKey, editMode)
    setState((previous) => ({
      ...previous,
      editMode
    }))
  }, [setState])

  const setSideDrawer = useCallback((sideDrawer) => {
    setState((previous) => ({
      ...previous,
      sideDrawer
    }))
  }, [setState])

  const setModalComponent = useCallback((modalComponent) => {
    setState((previous) => ({
      ...previous,
      modalComponent
    }))
  }, [setState])

  const value = useMemo(
    () => ({
      ...state,
      setLoading,
      setEditMode,
      setSideDrawer,
      setModalComponent
    }),
    [
      state,
      setLoading,
      setEditMode,
      setSideDrawer,
      setModalComponent
    ]
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
