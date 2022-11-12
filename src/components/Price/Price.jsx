import React from 'react'
import './Price.scss'
const Price = ({price,color}) => {
  return (
    <div className={`price ${color === 'black' ? 'price-black' : 'price-gray'}`}>{price}</div>
  )
}

export default Price