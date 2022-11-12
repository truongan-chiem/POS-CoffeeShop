import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import ItemOrder from "../ItemOrder/ItemOrder";
import CardStaff from "../CardStaff/CardStaff";
import Price from "../Price/Price";
import Button from "../Button/Button";

import { HiCreditCard } from "react-icons/hi";
import { BsCash } from "react-icons/bs";
import { RiQrScan2Line } from "react-icons/ri";
import { FaRegSadCry } from "react-icons/fa";

import "./Bill.scss";
import { printBill } from "../../redux/Slice/menuSlice";
const Bill = () => {
  const [optionPayment, setOptionPayment] = useState(0);
  const listOrders = useSelector((state) => state.menu.orders);
  const dispatch = useDispatch()
  
  const listOptionPayment = [
    {
      display: "Cash",
      icon: <BsCash />,
    },
    {
      display: "Debit Card",
      icon: <HiCreditCard />,
    },
    {
      display: "E-Wallet",
      icon: <RiQrScan2Line />,
    },
  ];


  const subTotal = listOrders.reduce((total, item) => total + item.price, 0);
  const tax = Number((subTotal / 10).toFixed(2));
  const total = (subTotal + tax).toFixed(2);

  return (
    <div className="bill">
      <div className="bill__info">
        <CardStaff />
        <h1 className="bill__info__title">Bills</h1>
        <div className="bill__info__list-choose">
          {listOrders.length > 0 ? (
            listOrders.map((item, index) => <ItemOrder key={`cardOrder-${index}`} {...item} />)
          ) : (
            <div className="emptyOrder">
              <span>Your Order Empty !</span>
              <FaRegSadCry />
            </div>
          )}
        </div>
        <div className="bill__info__row subtotal">
          <h3>Subtotal</h3>
          <Price price={subTotal} color="black" />
        </div>
        <div className="bill__info__row tax">
          <h3>Tax (10%)</h3>
          <Price price={tax} color="gray" />
        </div>
        <div className="divider" />
        <div className="bill__info__row total">
          <h2>Total</h2>
          <Price price={total} color="black" />
        </div>
      </div>
      <div className="bill__payment">
        <h1>Payment Method</h1>
        <div className="bill__payment__options">
          {listOptionPayment.map((item, index) => (
            <Button
              key={index}
              onClick={() => setOptionPayment(index)}
              type={"shortcut"}
              icon={item.icon}
              className={index === optionPayment ? "active" : "disable"}
            >
              {item.display}
            </Button>
          ))}
        </div>
        <Button className="bill__payment__printbill" onClick={() => dispatch(printBill())}>Print Bills</Button>
      </div>
    </div>
  );
};

export default Bill;
