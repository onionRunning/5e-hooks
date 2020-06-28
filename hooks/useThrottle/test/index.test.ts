import {renderHook, act} from '@testing-library/react-hooks'
import useThrottle, {Options} from '../index'

const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

const setUp = (fn: (s: number) => void, option: Options) =>
  renderHook(() => useThrottle(fn, option))

let a = 10
const fns = (b: number) => {
  a = a + b
}
let hook: any = null
describe('throttle test', () => {
  it('test ', async () => {
    act(() => {
      hook = setUp(fns, {delayTime: 1000})
    })
    await act(async () => {
      const [run] = hook.result.current
      run(10)
      run(10)
      run(10)
      expect(a).toBe(20)
      await sleep(1200)
      run(10)
      expect(a).toBe(30)
    })
  })
})
