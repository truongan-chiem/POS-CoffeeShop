import React from "react";
import CardItemMenu from "../CardItemMenu/CardItemMenu";
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
          <CardItemMenu key={`'menu-'${item.id}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default TabContent;
