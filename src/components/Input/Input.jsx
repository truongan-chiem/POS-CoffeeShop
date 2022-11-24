import React, { forwardRef, useId } from "react";
import PropTypes from 'prop-types'

import "./Input.scss";
const Input = ({placeholder,className,icon,type,left ,...passProps},ref) => {
  const idInput = useId()
  return (
    <div style={{paddingLeft : left}} className={`input ${className}`}>
      <input ref={ref} required id={idInput} type="text" {...passProps}/>
      <label style={{left : left}} className={type === 'search' ? 'label__search' : 'label__normal'} htmlFor={idInput}>{placeholder}</label>
      {icon && icon}
    </div>
  );
};

Input.propTypes = {
    className : PropTypes.string
}
export default forwardRef(Input);
