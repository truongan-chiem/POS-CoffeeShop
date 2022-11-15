import React from "react";
import PropTypes from 'prop-types'
import { AiOutlineSearch } from "react-icons/ai";

import "./Input.scss";
const Input = ({placeholder,className}) => {
  return (
    <div className={`search ${className}`}>
      <input type="text" placeholder={placeholder} />
      <AiOutlineSearch />
    </div>
  );
};

Input.propTypes = {
    className : PropTypes.string
}
export default Input;
