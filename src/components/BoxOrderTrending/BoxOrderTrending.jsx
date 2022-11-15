import React from "react";
import Box from "../Box/Box";
import { BsArrowRightShort } from "react-icons/bs";

import './BoxOrderTrending.scss'

const BoxOrderTrending = ({ title, data }) => {
  return (
    <Box className="box-order-trending">
      <div className="box-order-trending__header">
        <h1>{title}</h1>
        <button>
          <span>View all</span> <BsArrowRightShort />
        </button>
      </div>
      <h3 className="box-order-trending__subtitle">
        Dishes
      </h3>
      <div className="box-order-trending__listItem">
        {data.map((item,index) =>(
            <div key={`item-${index}`} className="box-order-trending__listItem__item">
                <img src={item.img} alt="" />
                <div className="box-order-trending__listItem__item__info">
                    <h4>{item.name}</h4>
                    {item?.order && (<p>order:<span>{item.order}</span></p>)}
                    {item?.available && (<p>available:<span>{item.available}</span></p>)}
                </div>
            </div>
        ))}
      </div>
    </Box>
  );
};

export default BoxOrderTrending;
