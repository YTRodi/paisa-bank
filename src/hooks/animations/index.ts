/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useAnimationState } from 'moti'

export const useFadeIn = () => {
  const fadeInState = useAnimationState({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })

  return { fadeInState }
}
