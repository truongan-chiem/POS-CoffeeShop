import React from "react";
import CardFood from "../CardFood/CardFood";
import './TabContent.scss'

const TabContent = () => {
  const titleTab = "Coffee Menu";
  const numberResult = 12;

  return (
    <div className="tab-content">
      <div className="tab-content__header">
        <h1 className="tab-content__title">{titleTab}</h1>
        <span>{numberResult} {titleTab.split(' ')[0]}s Result</span>
      </div>

      <div className="tab-content__body">
        <CardFood />
        <CardFood />
        <CardFood />
      </div>
    </div>
  );
};

export default TabContent;
