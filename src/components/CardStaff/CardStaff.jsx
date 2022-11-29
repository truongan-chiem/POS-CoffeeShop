import React from 'react'
import {useSelector} from 'react-redux'
import {IoMdNotificationsOutline} from 'react-icons/io'
import './CardStaff.scss'
const CardStaff = () => {
  const userInformation  = useSelector(state => state.user.information)
  // const {firstName,lastName,role} = userInformation
  return (
    <div className='card-staff'>
        <div className='card-staff__info'>
          <img src={userInformation?.image.url} alt="" />
          <div className="card-staff__info__about">
            <h3 >I'm a {userInformation?.role === 0 ? 'Staff' : 'admin'}</h3>
            <h2 >{userInformation?.lastName}&nbsp;{userInformation?.firstName}</h2>
          </div>
        </div>
        <div className="card-staff__noti">
          <IoMdNotificationsOutline />
        </div>
    </div>
  )
}

export default CardStaff