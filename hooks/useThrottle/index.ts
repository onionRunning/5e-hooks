import {useRef} from 'react'

export interface Options {
  delayTime: number
}

type Run = (...args: any) => void

const useThrottle = <T extends any[]>(fn: (...args: T) => void, options: Options): Run[] => {
  const delayTime = options.delayTime || 0
  const previous = useRef(0)
  const fnRef = useRef(fn)

  const run = (...args: T) => {
    const now = Date.now()
    if (now - previous.current > delayTime) {
      fnRef.current(...args)
      previous.current = now
    }
  }
  return [run]
}

export default useThrottle

// ns 内只触发一次
