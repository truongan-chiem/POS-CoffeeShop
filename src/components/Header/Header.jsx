import React from 'react'
import Input from '../Input/Input'
import './Header.scss'

const Header = ({title , type}) => {
  return (
    <header className="header">
        <h1 className="header__title">{title}</h1>
        {type !== 'only-title' &&  <Input placeholder={"Search category or menu ..."} className={'header__search'} />}
      </header>
  )
}

export default Header