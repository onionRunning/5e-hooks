import {useState, useCallback} from 'react'

const useSessionStorage = (key: string) => {
  const getStorageValue = () => {
    try {
      const storageValue = sessionStorage.getItem(key) as string
      return storageValue ? JSON.parse(storageValue) : ''
    } catch (err) {
      console.warn(`useSessionStorage 无法获取${key}: `, err)
    }
    return ''
  }

  const [value, setValue] = useState(getStorageValue)

  // 更新组件状态并保存到Storage
  const save = useCallback(
    (v: any) => {
      setValue(() => {
        sessionStorage.setItem(key, JSON.stringify(v))
        return v
      })
    },
    [key]
  )
  console.error(value, 'valie')
  return [value, save]
}

export default useSessionStorage
