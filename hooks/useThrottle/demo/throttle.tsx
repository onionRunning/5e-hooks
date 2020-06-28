import React, {useState} from 'react'
import useThrottle from '../index'

const ThrottleDemo: React.FC<any> = () => {
  const [count, setCount] = useState(1)
  const [jlCount, setJlCount] = useState(1)
  const [run] = useThrottle(() => setJlCount(c => c + 1), {delayTime: 1000})

  const clickValue = () => {
    setCount(c => c + 1)
    run()
  }
  return (
    <div>
      <div key={1} onClick={clickValue}>
        添加了延迟节流的计数: {jlCount}! <br />
      </div>
      <b key={2}>没有添加节流的:{count}</b>
    </div>
  )
}

export default ThrottleDemo
