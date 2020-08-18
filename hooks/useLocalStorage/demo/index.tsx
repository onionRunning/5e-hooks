import React from 'react'
import useLocalStorage from '../index'
localStorage.setItem('hj', JSON.stringify({name: 1}))
let a = 1
const SessionStorage = () => {
  const [value, setValue] = useLocalStorage('hj')

  return (
    <div onClick={() => setValue({name: a++})}>
      updates:{value.name} <br />
      <p />
      <b>localstorage: {JSON.parse(localStorage.getItem('hj') as string).name}</b>
    </div>
  )
}

export default SessionStorage
