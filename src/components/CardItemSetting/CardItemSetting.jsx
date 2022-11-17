import React from "react";

import { BsPencilFill } from "react-icons/bs";

import "./CardItemSetting.scss";

const CardItemSetting = ({ item }) => {
  const { name, price, img } = item;
  return (
    <div className="card-item-setting">
      <img src={img} alt="" />
      <h1 className="card-item-setting__name">{name}</h1>
      <h3 className="card-item-setting__price">${price}</h3>
      <button className="card-item-setting__btn">
        <BsPencilFill />
        <span>edit dishes</span>
      </button>
    </div>
  );
};

export default CardItemSetting;
