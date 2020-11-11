import React, {useState} from 'react'
import useDebounce from '../index'

const DebounceDemo: React.FC<any> = () => {
  const [count, setCount] = useState(1)
  const [fdCount, setFdCount] = useState(1)
  const [run, cancel] = useDebounce(() => setFdCount(c => c + 1), {
    isImmediate: false,
    delayTime: 500,
  })

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
      <button onClick={() => cancel()} type="button">
        取消
      </button>
    </div>
  )
}

export default DebounceDemo
