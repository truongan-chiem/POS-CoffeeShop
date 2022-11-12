import React, { useState } from 'react'
import CardChoose from '../CardChoose/CardChoose'
import CardStaff from '../CardStaff/CardStaff'
import Price from '../Price/Price'
import Button from '../Button/Button'

import {HiCreditCard} from 'react-icons/hi'
import {BsCash} from 'react-icons/bs'
import {RiQrScan2Line} from 'react-icons/ri'

import './Bill.scss'
const Bill = () => {
  const [optionPayment, setOptionPayment] = useState(0);

  const listOptionPayment = [
    {
      display : "Cash",
      icon : <BsCash />
    },
    {
      display : "Debit Card",
      icon : <HiCreditCard />
    },
    {
      display : "E-Wallet",
      icon : <RiQrScan2Line />
    }
  ]

  return (
    <div className='bill'>
      <div className='bill__info'>
        <CardStaff />
        <h1 className='bill__info__title'>Bills</h1>
       <div className='bill__info__list-choose'>
          <CardChoose />
          <CardChoose />
          <CardChoose />
       </div>
        <div className="bill__info__row subtotal">
          <h3>Subtotal</h3>
          <Price price={18.31} color="black"/>
        </div>
        <div className="bill__info__row tax">
          <h3>Tax (10%)</h3>
          <Price price={1.831} color="gray"/>
        </div>
        <div className='divider'/>
        <div className="bill__info__row total">
          <h2>Total</h2>
          <Price price={29.104} color="black"/>
        </div>
      </div>
      <div className="bill__payment">
        <h1>Payment Method</h1>
        <div className='bill__payment__options'>
            {listOptionPayment.map((item,index) =>(
              <Button key={index} onClick={() => setOptionPayment(index)} type={'shortcut'} icon = {item.icon} className={index === optionPayment ? 'active' : 'disable'}>{item.display}</Button>
            ))}
        </div>
        <Button className='bill__payment__printbill'>
          Print Bills
        </Button>
      </div>
    </div>
  )
}

export default Bill