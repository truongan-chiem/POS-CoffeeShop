import React from "react";
import { useDispatch } from "react-redux";
import { BsPencilFill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoTrashBin } from "react-icons/io5";
import Price from "../Price/Price";
import "./ItemOrderBill.scss";
import { minusNumber, plusNumber } from "../../redux/Slice/menuSlice";
const ItemOrderBill = ({ _id, name, number, price, image, options, type }) => {
  const dispatch = useDispatch();
  return (
    <div className="item-order-bill">
      <div className="item-order-bill__info">
        <img src={image.url} alt="" />
        <div className="item-order-bill__info__about">
          <h2>{name}</h2>
          <div className="item-order-bill__info__about__note">
            {Object.entries(options).map(([key, value], index) => (
              <span key={index}>
                {key} : {value} &nbsp;
              </span>
            ))}
          </div>
          <div className="item-order-bill__info__about__action">
            <div className="item-order-bill__info__about__action__amount">
              {type === "menu" ? (
                <>
                  <button onClick={() => dispatch(minusNumber(_id))}>
                    {number === 1 ? <IoTrashBin style={{ color: "#EC4235" }} /> : <FiMinus />}
                  </button>
                  <h2>{number}</h2>
                  <button onClick={() => dispatch(plusNumber(_id))}>
                    <FiPlus />
                  </button>
                </>
              ) : (
                <h2>x {number}</h2>
              )}
            </div>
            <div className="item-order-bill__info__about__action__editNote">
              <span>Notes</span>
              <BsPencilFill />
            </div>
          </div>
        </div>
      </div>
      <Price price={price} color="gray" />
    </div>
  );
};

export default ItemOrderBill;
