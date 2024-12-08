import React from 'react'

const ChildOne = ({setCount}) => {
  return (
    <div>
      <button onClick={()=>{setCount((previous)=>previous+1)}}>Add</button>
      
    </div>
  )
}

export default ChildOne