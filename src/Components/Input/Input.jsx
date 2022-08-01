import React from 'react'
import './Input.css'

const Input = (props) => {
  return (
    <div className='input_cont'>
      <input type={props.type} required='required'/>
      <label>{props.label}</label>
    </div>
  )
}

export { Input }
