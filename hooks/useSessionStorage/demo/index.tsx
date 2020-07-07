import React from 'react'
import useSessionStorage from '../index'
sessionStorage.setItem('hj', JSON.stringify({name: 1}))
let a = 1
const SessionStorage = () => {
  const [value, setValue] = useSessionStorage('hj')

  return (
    <div onClick={() => setValue({name: a++})}>
      updates:{value.name} <br />
      <p />
      <b>sessionstorage: {JSON.parse(sessionStorage.getItem('hj') as string).name}</b>
    </div>
  )
}

export default SessionStorage
