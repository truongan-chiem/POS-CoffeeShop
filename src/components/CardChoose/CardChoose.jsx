import React from 'react'
import {BsPencilFill} from 'react-icons/bs'
import Price from '../Price/Price';
import './CardChoose.scss'
const CardChoose = () => {
    const img = 'http://starboxcoffee.weebly.com/uploads/2/3/7/4/23748829/s908146353969437727_p6_i1_w305.jpeg';
    const name = 'Caramel Frappucinno'
    const number = 2
    const price = 3.95
  return (
    <div className='card-choose'>
        <div className="card-choose__info">
            <img src={img} alt="" />
            <div className="card-choose__info__about">
                <h2>{name}</h2>
                <div className='card-choose__info__about__note'>
                    <h2>x {number}</h2>
                    <div>
                        <span>Notes</span> 
                        <BsPencilFill />
                    </div>
                </div>
            </div>
        </div>
        <Price price={price} color="gray"/>
    </div>
  )
}

export default CardChoose