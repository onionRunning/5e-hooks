import React from 'react'
import useOnResize from '../index'

const Onresize = () => {
  const cliendWidth = useOnResize(600)

  return (
    <div>
      updates:{cliendWidth} <br />
    </div>
  )
}

export default Onresize
