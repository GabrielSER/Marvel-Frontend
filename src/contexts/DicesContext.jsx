import {
  createContext,
  useState,
  useMemo,
  useContext,
  useCallback,
  useEffect
} from 'react'

const DicesContext = createContext()

const initialState = {
  rollsCompleted: [],
  rolls: [],
  rollingDices: false,
  resetDices: false
}

const DicesProvider = (props) => {
  const [state, setState] = useState(initialState)

  useEffect(() => {
    if (!state.resetDices) return
    setState({
      ...state,
      resetDices: false
    })
  }, [state.resetDices])

  const updateTotal = useCallback(
    (result) => {
      state.rollsCompleted = [...state.rollsCompleted, result]
      const finishedRolling = state.rollsCompleted.length === state.rolls.length
      const newState = { ...state }
      if (finishedRolling) {
        newState.rollingDices = false
      }
      setState(newState)
    },
    [state, setState]
  )

  const addRoll = useCallback(
    (rollComponent) => {
      setState({
        ...state,
        rolls: [...state.rolls, rollComponent]
      })
    },
    [state, setState]
  )

  const clearRolls = useCallback(() => {
    setState(initialState)
  }, [setState])

  const reset = useCallback(() => {
    setState({
      ...initialState,
      rolls: state.rolls,
      resetDices: true
    })
  }, [state, setState])

  const roll = useCallback(() => {
    if (state.rolls.length === 0) return
    setState({
      ...state,
      rollsCompleted: [],
      rollingDices: true
    })
  }, [state, setState])

  const removeRoll = useCallback(
    (key) => {
      const rollIndex = state.rolls.findIndex((roll) => roll.props.key === key)
      console.log(rollIndex)
      if (rollIndex >= 0) {
        state.rolls.splice(rollIndex, 1)
      }
      setState({ ...state })
    },
    [state, setState]
  )

  const value = useMemo(
    () => ({
      ...state,
      total: state.rollsCompleted.reduce((sum, current) => sum + current, 0),
      updateTotal,
      addRoll,
      clearRolls,
      reset,
      roll,
      removeRoll
    }),
    [state, updateTotal, addRoll, clearRolls, reset, roll, removeRoll]
  )

  return (
    <DicesContext.Provider
      value={value}
      {...props}
    />
  )
}

const useDices = () => {
  const context = useContext(DicesContext)
  if (!context) {
    throw new Error(
      'Invalid use of useDices, DicesProvider must be defined in parent hierarchy'
    )
  }
  return context
}

export { DicesProvider, useDices }
