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

const setUp = ({fn, wait}: any) => renderHook(() => useDebounce(fn, wait))

let hook: any = null
let hook2: any = null
describe('useDebounce', () => {
  it('test useDebounce run', async () => {
    act(() => {
      hook = setUp({
        fn: add,
        wait: 1000,
      })
    })
    await act(async () => {
      hook.result.current.run()
      hook.result.current.run()
      hook.result.current.run()
      hook.result.current.run()
      hook.result.current.run()
      hook.result.current.run()
      expect(state.test).toBe(0)
      await sleep(1200)
      hook.result.current.run()
      await sleep(1200)
      expect(state.test).toBe(2)
    })
  })
  it('test useDebounce cancel', async () => {
    act(() => {
      hook2 = setUp({
        fn: reduce,
        wait: 1000,
      })
    })
    await act(async () => {
      hook2.result.current.run()
      hook2.result.current.cancel()
      await sleep(1200)
      expect(k).toBe(100)
    })
  })
})
