import { createContext, useState, useEffect, useMemo, useContext } from 'react'
import { usePowers } from './PowersContext'

const FormContext = createContext()

const FormProvider = (props) => {
  const { form } = props
  const { powers } = usePowers()
  const [formPowers, setFormPowers] = useState([])

  useEffect(() => {
    const extractedPowers = form.powers
      .map((powerId) => powers.get(powerId))
      .filter((power) => power !== undefined && power !== null)

    setFormPowers(extractedPowers)
  }, [form, powers, setFormPowers])

  const value = useMemo(
    () => ({
      form,
      formPowers
    }),
    [form, formPowers]
  )

  return (
    <FormContext.Provider
      value={value}
      {...props}
    />
  )
}

const useForm = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error(
      'Invalid use of useForm, FormProvider must be defined in parent hierarchy'
    )
  }
  return context
}

export { FormProvider, useForm }
