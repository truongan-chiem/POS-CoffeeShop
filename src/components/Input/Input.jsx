import React, { useId } from "react";
import PropTypes from 'prop-types'

import "./Input.scss";
const Input = ({placeholder,className,icon,type,left}) => {
  const idInput = useId()
  return (
    <div style={{paddingLeft : left}} className={`input ${className}`}>
      <input required id={idInput} type="text"/>
      <label style={{left : left}} className={type === 'search' ? 'label__search' : 'label__normal'} htmlFor={idInput}>{placeholder}</label>
      {icon && icon}
    </div>
  );
};

Input.propTypes = {
    className : PropTypes.string
}
export default Input;
