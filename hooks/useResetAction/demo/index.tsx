import React, {useState} from 'react'
import useResetAction from '../index'

const ResetDemo = () => {
  const [count, setCount] = useState(1)

  const initInfo = () => {
    setCount(0)
  }
  useResetAction(initInfo)
  return <div onClick={() => setCount(count + 1)}>hello world</div>
}

export default ResetDemo
