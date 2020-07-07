import React, {useState} from 'react'
import useMount from '../index'

const Mount = () => {
  const [name, setName] = useState('jb')
  const getName = () => {
    setName('hj')
  }
  useMount(getName)

  return (
    <div onClick={() => setName(`${name}sb_`)}>
      updates:{name} <br />
    </div>
  )
}

export default Mount
