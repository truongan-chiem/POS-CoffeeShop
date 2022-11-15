import React from "react";
import Box from "../Box/Box";

import "./CardOrder.scss";
const CardOrder = ({ id, timeFinish, number, total,className ,onClick }) => {
    return (
    <Box className={`card-order ${className}`} onClick = {onClick}>
      <div className="card-order__header">
        <h1>Orders : #{id}</h1>
        <p>{timeFinish}</p>
      </div>
      <div className="card-order__body">
        <h4>qta : {number}</h4>
        <div className="card-order__body__info">
          <h1>${total}</h1>
          <div>dine-in</div>
        </div>
      </div>
    </Box>
  );
};

export default CardOrder;
