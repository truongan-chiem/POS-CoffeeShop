import React from 'react'
import './Popup.scss'
const Popup = ({children}) => {
  return (
    <div className='popup'>
        {children}
    </div>
  )
}

export default Popup