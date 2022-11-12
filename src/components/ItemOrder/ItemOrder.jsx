import React from 'react'
import {BsPencilFill} from 'react-icons/bs'
import Price from '../Price/Price';
import './ItemOrder.scss'
const ItemOrder = ({name,number,price,img}) => {
  return (
    <div className='item-order'>
        <div className="item-order__info">
            <img src={img} alt="" />
            <div className="item-order__info__about">
                <h2>{name}</h2>
                <div className='item-order__info__about__note'>
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

export default ItemOrder