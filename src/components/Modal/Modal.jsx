import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../redux/Slice/modalSlice";
import "./Modal.scss";
const Modal = ({ children, className }) => {
  const dispatch = useDispatch();
  return (
    <div className="overlay">
      <div className={`modal ${className}`}>
        <AiOutlineCloseCircle className="modal__close" onClick={() => dispatch(toggleModal())}/>
        {children}
      </div>
    </div>
  );
};

export default Modal;
