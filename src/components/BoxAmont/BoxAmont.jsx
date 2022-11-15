import React,{useEffect, useId} from 'react'
import PropTypes from 'prop-types';

import Box from '../Box/Box'

import {BsArrowUp,BsArrowDown} from 'react-icons/bs';

import './BoxAmont.scss'

const BoxAmont = ({title,percent,amount,icon,colorIcon}) => {

    const iconId = useId();
    const percentId = useId();

    useEffect(() => {
        document.getElementById(iconId).style.backgroundColor = colorIcon
        if(percent < 0){
            document.getElementById(percentId).style.color = '#EC4235'
        }
        else{
            document.getElementById(percentId).style.color = '#58C893'
        }
    }, [colorIcon,iconId,percent,percentId]);

  return (
    <Box className={'box-amount'}>
        <header className='box-amount__header'>
            <h3 className="box-amount__header__title">
                {title}
            </h3>
            <h5 id={percentId} className="box-amount__header__percent">
                {percent < 0 ? <BsArrowDown /> : <BsArrowUp />}
                {percent < 0 ? percent*-1 : percent} %
            </h5>
        </header>
        <div className="box-amount__body">
            <div id={iconId} className='box-amount__body__icon'>{icon}</div>
            <h1 className='box-amount__body__amount'>{amount}</h1>
        </div>
    </Box>
  )
}

BoxAmont.propsType = {
    title : PropTypes.string.isRequired,
    percent  : PropTypes.number.isRequired,
    amount  : PropTypes.string.isRequired,
    icon  : PropTypes.node.isRequired,
    colorIcon  : PropTypes.string.isRequired,
}

export default BoxAmont