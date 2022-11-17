import React from 'react'
import {useDispatch} from 'react-redux'

import {BsPlusLg} from 'react-icons/bs'

import './CardItemSetting.scss'
import { toggleModal } from '../../redux/Slice/modalSlice'
const CardAddItemSetting = () => {
  const dispatch = useDispatch()
  return (
    <div className='card-add' onClick={() => dispatch(toggleModal())}>
        <div>
            <BsPlusLg />
            <p>Add new dish</p>
        </div>
    </div>
  )
}

export default CardAddItemSetting