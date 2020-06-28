import {renderHook, act} from '@testing-library/react-hooks'
import useDebounce from '../index'

const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// 数据准备
const state = {test: 0}
const add = () => {
  state.test = state.test + 1
}

let k = 100
const reduce = () => {
  k--
}

let a = 1
const multiply = (b: number) => {
  a = a * b
}

const setUp = ({fn, options}: any) => renderHook(() => useDebounce(fn, options))

let hook: any = null
let hook2: any = null
let hook3: any = null
describe('useDebounce', () => {
  it('test useDebounce run', async () => {
    act(() => {
      hook = setUp({
        fn: add,
        options: {
          isImmediate: false,
          delayTime: 1000,
        },
      })
    })
    await act(async () => {
      const [run] = hook.result.current
      run()
      run()
      run()
      run()
      run()
      run()
      expect(state.test).toBe(0)
      await sleep(1200)
      run()
      await sleep(1200)
      expect(state.test).toBe(2)
    })
  })
  it('test useDebounce cancel', async () => {
    act(() => {
      hook2 = setUp({
        fn: reduce,
        options: {
          isImmediate: false,
          delayTime: 1000,
        },
      })
    })
    await act(async () => {
      const [run, cancel] = hook2.result.current
      run()
      cancel()
      await sleep(1200)
      expect(k).toBe(100)
    })
  })
  it('hook test isImmediate run', async () => {
    act(() => {
      hook3 = setUp({
        fn: multiply,
        options: {
          isImmediate: true,
          delayTime: 1000,
        },
      })
    })
    await act(async () => {
      const [run] = hook3.result.current
      run(1.5)
      expect(a).toBe(1.5)
      await sleep(800)
      run(2)
      expect(a).toBe(1.5)
    })
  })
})
