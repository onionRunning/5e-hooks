import {renderHook} from '@testing-library/react-hooks'
import useResetAction from '../index'

const setUp = (fn: () => void) => renderHook(() => useResetAction(fn))

// 数据准备
const state = {test: 'ok'}
const fns = () => {
  state.test = ''
}

describe('useResetAction', () => {
  it('test resetAction fn', () => {
    setUp(fns)
    expect(state.test).toBe('ok')
  })
  it('test resetAction fn willUnmount', () => {
    expect(state.test).toBe('')
  })
})
