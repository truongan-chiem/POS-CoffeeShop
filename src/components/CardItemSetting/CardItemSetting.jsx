import React, { useState } from "react";

import { BsPencilFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Modal from "../Modal/Modal";
import ModalDelete from "../ModalDelete/ModalDelete";

import "./CardItemSetting.scss";
import Form from "../Form/Form";

const CardItemSetting = ({ item }) => {
  const { _id, name, price, image } = item;
  const [isToggleDelete, setIsToggleDelete] = useState(false);
  const [toggleFormEdit, setToggleFormEdit] = useState(false);
  return (
    <>
      <div className="card-item-setting">
        <ImBin
          className="card-item-setting__delete"
          onClick={() => setIsToggleDelete((prev) => !prev)}
        />
        <img src={image?.url} alt="" />
        <h1 className="card-item-setting__name">{name}</h1>
        <h3 className="card-item-setting__price">${price}</h3>
        <button className="card-item-setting__btn" onClick={() => setToggleFormEdit(true)}>
          <BsPencilFill />
          <span>edit dishes</span>
        </button>
      </div>
      {isToggleDelete && <ModalDelete id={_id} setIsToggleDelete={setIsToggleDelete} name={name} />}
      {toggleFormEdit && (
        <Modal className={"modal__form"}>
          <AiOutlineCloseCircle className="modal__close" onClick={() => setToggleFormEdit(false)} />
          <Form data={item} setToggleFormEdit = {setToggleFormEdit}/>
        </Modal>
      )}
    </>
  );
};

export default CardItemSetting;
