import {useEffect} from 'react'

const useMount = (fn: () => void) => {
  useEffect(() => {
    fn()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
// 过滤副作用
export default useMount
