import React, {useState} from 'react'
import useDebounce from '../index'

const DebounceImmediateDemo = () => {
  const [count, setCount] = useState(1)
  const [fdCount, setFdCount] = useState(1)
  const [run] = useDebounce(() => setFdCount(c => c + 1), {isImmediate: true, delayTime: 1000})

  const clickValue = () => {
    setCount(c => c + 1)
    run()
  }
  return (
    <>
      <div key={1} onClick={clickValue}>
        添加了延迟防抖的计数: {fdCount}! <br />
      </div>
      <b key={2}>没有添加防抖的:{count}</b>
    </>
  )
}

export default DebounceImmediateDemo
