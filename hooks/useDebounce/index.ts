import {useRef} from 'react'

export interface ReturnValue<T extends any[]> {
  run(...args: T): void
  cancel(): void
}

const useDebounce = <T extends any[]>(fn: (...args: T) => void, wait?: number): ReturnValue<T> => {
  const delays: number = wait || 0
  const timer: any = useRef(0)
  const fnRef = useRef(fn)

  const cancel = () => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
  }

  const run = (...args: T) => {
    cancel()
    timer.current = setTimeout(() => {
      fnRef.current(...args)
    }, delays)
  }

  return {
    run,
    cancel,
  }
}

export default useDebounce
