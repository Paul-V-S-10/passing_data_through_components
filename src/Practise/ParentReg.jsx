import React, { useState } from 'react'
import ChildReg from './ChildReg/ChildReg'
import Display from './Display'

const ParentReg = () => {
    const [firstName,setFirstname] = useState('')
    const [lastName,setLastname] = useState('')
    const [age,setAge] = useState('')
    const clear = () => {
      setFirstname("")
      setLastname(null)
      setAge(null)
    }
  return (
    <div>
        <ChildReg setFirstname={setFirstname} firstname={firstName} setLastname={setLastname} lastname={lastName} setAge={setAge} age={age} clear={clear}/>
        <Display firstName={firstName} lastName={lastName} age={age} />
    </div>
  )
}

export default ParentReg