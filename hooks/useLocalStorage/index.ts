import {useState, useCallback} from 'react'

const useLocalStorage = (key: string) => {
  const getStorageValue = () => {
    try {
      const storageValue = localStorage.getItem(key) as string
      return storageValue ? JSON.parse(storageValue) : ''
    } catch (err) {
      console.warn(`useLocalStorage 无法获取${key}: `, err)
    }
    return ''
  }

  const [value, setValue] = useState(getStorageValue)

  // 更新组件状态并保存到Storage
  const save = useCallback(
    (v: any) => {
      setValue(() => {
        localStorage.setItem(key, JSON.stringify(v))
        return v
      })
    },
    [key]
  )
  return [value, save]
}

export default useLocalStorage
