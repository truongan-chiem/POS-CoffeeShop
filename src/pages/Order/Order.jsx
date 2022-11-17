import React, { useState } from "react";
import { useSelector } from "react-redux";

import Bill from "../../components/Bill/Bill";
import CardOrder from "../../components/CardOrder/CardOrder";
import Header from "../../components/Header/Header";

import { FaHandPointRight, FaHandPointLeft } from "react-icons/fa";

import "./Order.scss";
const Order = () => {
  const [targetOrder, setTargetOrder] = useState(undefined);

  const listOrder = useSelector((state) => state.menu.listOrders);

  const handleSelectOrder = (id) => {
    const order = listOrder.find((item) => item.id === id);

    setTargetOrder(order);
  };

  return (
    <div className="order container">
      <Header title={"order list"} type="only-title" />
      {listOrder.length > 0 ? (
        <div className="order__list">
          {listOrder
            .slice(0)
            .reverse()
            .map((item, index) => {
              const subTotal = item.orders
                .reduce((total, item) => total + item.price * item.number, 0)
                .toFixed(2);
              const tax = Number((subTotal / 10).toFixed(2));
              const total = (Number(subTotal) + tax).toFixed(2);
              return (
                <CardOrder
                  key={index}
                  id={item.id}
                  timeFinish={"20:30pm"}
                  number={item.orders.length}
                  total={total}
                  className={item.id === targetOrder?.id ? "active" : ""}
                  onClick={() => handleSelectOrder(item.id)}
                />
              );
            })}
          {targetOrder && (
            <Bill
              className={"order__bill"}
              order={targetOrder.orders}
              type="order"
              idOrder={targetOrder.id}
              valueOptionPayment={targetOrder.optionPayment}
            />
          )}
        </div>
      ) : (
        <div className="order__empty">
          <FaHandPointRight />
          <FaHandPointLeft />
          <span>Your order Empty</span>
          <FaHandPointRight />
          <FaHandPointLeft />
        </div>
      )}
    </div>
  );
};

export default Order;
