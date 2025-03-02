import { createContext, useState, useEffect, useMemo, useContext } from 'react'
import { getAttributes } from '@util/attribute.parser'
import { useMarvel } from '@hooks/useMarvel'
import { normalizeString } from '@util/stringUtil'

const FormsContext = createContext()

const initialState = {
  forms: new Map(),
  formsByNormalized: new Map(),
  indexing: true
}

const FormsProvider = (props) => {
  const [state, setState] = useState(initialState)
  const { query, loading } = useMarvel()

  useEffect(() => {
    const loadForms = async () => {
      try {
        const formsArray = await query('/forms')
        const forms = new Map(formsArray.map((form) => {
          const skills = getAttributes(form.skills)
          const specialSkills = getAttributes(form.specialSkills)
          const stats = getAttributes(form.stats)
          console.log({...form, stats, skills, specialSkills})
          return [form._id, {...form, stats, skills, specialSkills}]
        }))
        setState((previous) => ({
          ...previous,
          forms,
          indexing: true
        }))
      } catch (error) {
        console.error('Error loading forms')
      }
    }
    loadForms()
  }, [setState])

  useEffect(() => {
    if (state.forms.size === 0) {
      return
    }
    const forms = Array.from(state.forms.values())
    const formsByNormalized = new Map(
      forms.map((form) => [normalizeString(form.name), form])
    )
    
    setState((previous) => ({
      ...previous,
      formsByNormalized,
      indexing: false
    }))
  }, [state.forms])

  const value = useMemo(
    () => ({
      ...state,
      loading: loading || state.indexing
    }),
    [state, loading]
  )

  return (
    <FormsContext.Provider
      value={value}
      {...props}
    />
  )
}

const useForms = () => {
  const context = useContext(FormsContext)
  if (!context) {
    throw new Error(
      'Invalid use of useForms, FormsProvider must be defined in parent hierarchy'
    )
  }
  return context
}

export { FormsProvider, useForms }
