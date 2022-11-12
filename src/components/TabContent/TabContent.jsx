import React from "react";
import CardOrder from "../CardOrder/CardOrder";
import './TabContent.scss'

const TabContent = ({tabValue, listData}) => {
  const titleTab = tabValue + " menu";
  const numberResult = listData.length;

  return (
    <div className="tab-content">
      <div className="tab-content__header">
        <h1>{titleTab}</h1>
        <span>{numberResult} {titleTab.split(' ')[0]} Result</span>
      </div>

      <div className="tab-content__body">
        {listData.map(item =>(
          <CardOrder key={`'menu-'${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TabContent;
