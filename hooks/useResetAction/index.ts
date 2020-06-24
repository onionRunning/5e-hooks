import {useEffect} from 'react'

const useResetAction = (fn: () => void) => {
  useEffect(() => {
    return () => {
      fn()
    }
  }, [fn])
}

export default useResetAction

// 离开页面时触发的hook - eg: 清空页面的数据
