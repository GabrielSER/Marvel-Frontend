import { useMemo } from 'react'
import { useForms } from '@contexts/FormsContext'

const useFormWithNormalizedName = (normalized) => {
  const { formsByNormalized, loading } = useForms()

  const form = useMemo(() => {
    return normalized ? formsByNormalized.get(normalized) ?? null : null
  }, [normalized, formsByNormalized])

  return { form, loading }
}

export { useFormWithNormalizedName }
