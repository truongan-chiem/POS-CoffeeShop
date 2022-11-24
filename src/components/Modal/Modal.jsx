import React from "react";
import "./Modal.scss";
const Modal = ({ children, className }) => {
  return (
    <div className="overlay">
      <div className={`modal ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
