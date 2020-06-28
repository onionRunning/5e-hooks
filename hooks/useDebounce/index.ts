import {useRef} from 'react'

type Run = (...args: any) => void
type Cancel = () => void

type Res = Run | Cancel
interface Options {
  delayTime: number
  isImmediate?: boolean
}

const useDebounce = <T extends any[]>(fn: (...args: T) => void, options: Options): Res[] => {
  const delayTime = options.delayTime || 0
  const isImmediate = options.isImmediate || false
  const timer: any = useRef(0)
  const fnRef = useRef(fn)

  const cancel = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }

  const run = (...args: T) => {
    cancel()
    if (isImmediate) {
      const isCallNow = !timer.current
      timer.current = setTimeout(() => {
        timer.current = 0
      }, delayTime)
      if (isCallNow) fnRef.current(...args)
    }
    timer.current = setTimeout(() => {
      fnRef.current(...args)
    }, delayTime)
  }

  return [run, cancel]
}

export default useDebounce
