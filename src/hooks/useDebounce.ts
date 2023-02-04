import { useEffect, useState } from 'react'

export const useDebounce = (input: string, delay: number = 500): string => {
  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(input)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [input, delay])

  return debouncedValue
}
