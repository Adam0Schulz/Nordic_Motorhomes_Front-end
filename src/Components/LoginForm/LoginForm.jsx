import React from 'react'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import './LoginForm.css'

const LoginForm = () => {
  return (
    <form className='login-form' action="">
        <div className='login-heading'>
          <h1>Log in</h1>
          <p>Welcome back! Please enter your details</p>
        </div>
        <div className='form_cont'>
            <Input type='text' label="Email"/>
            <Input type='password' label="Password" />
        </div>
        <Button type='submit' text='Login' />
    </form>
  )
}

export { LoginForm }
