import React from 'react'
import {IoMdNotificationsOutline} from 'react-icons/io'
import './CardStaff.scss'
const CardStaff = () => {
    const img= 'https://i.pinimg.com/736x/fd/1c/02/fd1c02c20b1f9aaa3d9dff189647e11a.jpg';
    const name= 'Satoru Gojo';
    const role= 'Cashier';
  return (
    <div className='card-staff'>
        <div className='card-staff__info'>
          <img src={img} alt="" />
          <div className="card-staff__info__about">
            <h3 >I'm a {role}</h3>
            <h2 >{name}</h2>
          </div>
        </div>
        <div className="card-staff__noti">
          <IoMdNotificationsOutline />
        </div>
    </div>
  )
}

export default CardStaff