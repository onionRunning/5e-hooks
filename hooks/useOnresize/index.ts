import {useEffect, useMemo, useState, useCallback} from 'react'
import useDebounce from '../useDebounce'

const useOnResize = (delayTime?: number) => {
  const [clientWidth, setClientWidth] = useState(0)

  const [runResize] = useDebounce(() => setClientWidth(document.documentElement.clientWidth), {
    delayTime: delayTime || 500,
  })

  const onResize = useCallback(() => {
    runResize()
  }, [runResize])

  useEffect(() => {
    setClientWidth(document.documentElement.clientWidth)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [onResize])

  return clientWidth
}

export default useOnResize
