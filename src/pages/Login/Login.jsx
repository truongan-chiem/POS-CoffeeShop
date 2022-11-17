import React from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

import './Login.scss'
const Login = () => {
  return (
    <div className='login'>
        <form className='login__form'>
            <h1 className='login__form__header'>Login &amp; chill</h1>
            <Input className={'login__form__input'} type={'field'} placeholder = 'Account'/>
            <Input className={'login__form__input'} type={'field'} placeholder = 'Password'/>
            <Button className={'login__form__btn'}>
                Login
            </Button>
        </form>
    </div>
  )
}

export default Login