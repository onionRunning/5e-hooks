import React, {useState} from 'react'
import useDebounce from '../index'

const DebounceDemo: React.FC<any> = () => {
  const [count, setCount] = useState(1)
  const [fdCount, setFdCount] = useState(1)
  const [run] = useDebounce(() => setFdCount(c => c + 1), {isImmediate: false, delayTime: 2000})

  const clickValue = () => {
    setCount(c => c + 1)
    run()
  }
  return (
    <div>
      <div key={1} onClick={clickValue}>
        添加了延迟防抖的计数: {fdCount}! <br />
      </div>
      <b key={2}>没有添加防抖的:{count}</b>
    </div>
  )
}

export default DebounceDemo