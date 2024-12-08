import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

const Parent = () => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <ChildOne setCount={setCount}/>
      <ChildTwo count={count}/>
    </div>
  )
}

export default Parent