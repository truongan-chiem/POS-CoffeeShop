import React, { forwardRef, useId, useState } from "react";
import PropTypes from 'prop-types'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
import "./Input.scss";
const Input = ({placeholder,className,icon,isSeach = false,left ,type = 'text' ,...passProps},ref) => {
  const idInput = useId()
  const [seePw, setSeePw] = useState(type);
  return (
    <div style={{paddingLeft : left}} className={`input ${className}`}>
      <input ref={ref} required id={idInput} type={seePw} {...passProps}/>
      <label style={{left : left}} className={isSeach === 'search' ? 'label__search' : 'label__normal'} htmlFor={idInput}>{placeholder}</label>
      {icon && icon}
      {type === 'password' && (
        seePw === 'text' ? 
        <AiFillEyeInvisible onClick={() => setSeePw('password')} className="input__seepw" />
        :
        <AiFillEye onClick={() => setSeePw('text')} className="input__seepw" />
      )}
    </div>
  );
};

Input.propTypes = {
    className : PropTypes.string
}
export default forwardRef(Input);
