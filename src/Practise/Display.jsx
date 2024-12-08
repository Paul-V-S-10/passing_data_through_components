import React from 'react'

const Display = (props) => {
    const {firstName,lastName,age} = props
  return (
    <div className='display'>
        <div className="firstName">First Name: {firstName}</div>
        <div className="lastName">Last Name: {lastName}</div>
        <div className="Age">Age: {age}</div>
    </div>
  )
}

export default Display