import React, {useState} from 'react'
import useDebounce from '../index'

const ResetDemo = () => {
  const [count, setCount] = useState(1)
  const [fdCount, setFdCount] = useState(1)
  const [run] = useDebounce(() => setFdCount(c => c + 1), {isImmediate: false, delayTime: 2000})

  const clickValue = () => {
    setCount(c => c + 1)
    run()
  }
  return (
    <div onClick={clickValue}>
      添加了防抖的计数: {fdCount}! <br /> <b>没有添加防抖的:{count}</b>
    </div>
  )
}

export default ResetDemo
