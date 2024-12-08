import React from 'react'
import './ChildReg.css'

const ChildReg = (props) => {
  const {setFirstname,firstName,setLastname,lastName,setAge,age,clear} = props
  
  return (
    <div className='ChildReg'>
      <div className="container">
        <div className="header">
          <div className="headerLeft"></div>
          <div className="headerRight">Fill the form below</div>
        </div>
        <div className="firstName">
          <div className="firstNameLeft">First Name:</div>
          <div className="firstNameRight">
            <input onChange={(e)=>{setFirstname(e.target.value)}} value={firstName}  className='inputFirstNameRight' type="text" />
          </div>
        </div>
        <div className="lastName">
          <div className="lastNameLeft">Last Name:</div>
          <div className="lastNameRight">
            <input onChange={(e)=>{setLastname(e.target.value)}} value={lastName} className='inputLastNameRight' type="text" />
          </div>
        </div>
        <div className="age">
          <div className="ageLeft">Age:</div>
          <div className="ageRight">
            <input onChange={(e)=>{setAge(e.target.value)}} value={age} className='inputAgeRight' type="text" />
          </div>
        </div>
        <div className='submit'>
          <button onClick={clear} className='submitButton'>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ChildReg