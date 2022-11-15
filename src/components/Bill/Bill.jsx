import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { HiCreditCard } from "react-icons/hi";
import { BsCash } from "react-icons/bs";
import { RiQrScan2Line } from "react-icons/ri";
import { FaRegSadCry } from "react-icons/fa";

import ItemOrder from "../ItemOrder/ItemOrder";
import CardStaff from "../CardStaff/CardStaff";
import Price from "../Price/Price";
import Button from "../Button/Button";
import { printBill } from "../../redux/Slice/menuSlice";

import "./Bill.scss";

const Bill = ({ order = [], type, idOrder, valueOptionPayment = 0 ,className}) => {
  const [optionPayment, setOptionPayment] = useState(valueOptionPayment);
  const dispatch = useDispatch();

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
  useEffect(() => {
    setOptionPayment(valueOptionPayment);
  }, [valueOptionPayment]);
  const subTotal = order.reduce((total, item) => total + item.price * item.number, 0).toFixed(2);
  const tax = Number((subTotal / 10).toFixed(2));
  const total = (Number(subTotal) + tax).toFixed(2);

  const handlePrintBill = () => {
    if (order.length > 0) {
      dispatch(printBill(optionPayment));
      setOptionPayment(0);
    }
  };

  return (
    <div className={`bill ${className}`}>
      <div className="bill__info">
        {/* header bill */}
        <HeaderBill type={type} idOrder={idOrder} />
        {/* body bill */}
        <h1 className="bill__info__title">Bills</h1>
        <div className="bill__info__list-choose">
          {order.length > 0 ? (
            order.map((item, index) => (
              <ItemOrder key={`cardOrder-${index}`} {...item} type={type} />
            ))
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
      {/* sction payment bill */}
      <div className="bill__payment">
        <h1>Payment Method</h1>
        <div className="bill__payment__options">
          {listOptionPayment.map((item, index) => (
            <Button
              key={index}
              onClick={() => {
                type === "menu" && setOptionPayment(index);
              }}
              type={"shortcut"}
              icon={item.icon}
              className={index === optionPayment ? "active" : "disable"}
            >
              {item.display}
            </Button>
          ))}
        </div>
        {type === "menu" && (
          <Button
            className={`bill__payment__printbill ${order.length > 0 ? "" : "disable"}`}
            onClick={handlePrintBill}
          >
            Print Bills
          </Button>
        )}
      </div>
    </div>
  );
};

export default Bill;

const HeaderBill = ({ type, idOrder }) => {
  return (
    <>
      {type === "menu" ? (
        <CardStaff />
      ) : (
        <div className="bill__info__header">
          <h3>Orders ID</h3>
          <h1>#{idOrder}</h1>
        </div>
      )}
    </>
  );
};
