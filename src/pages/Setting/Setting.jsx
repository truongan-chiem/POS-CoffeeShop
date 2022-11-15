import React, { useState } from "react";
import ItemSubSidebar from "../../components/ItemSubSidebar/ItemSubSidebar";
import SubSidebar from "../../components/SubSidebar/SubSidebar";

import { BsFillAlarmFill, BsLaptop, BsApple, BsAlignBottom } from "react-icons/bs";

import "./Setting.scss";
import TabSubSideBar from "../../components/TabSubSideBar/TabSubSideBar";
import { listTabs } from "../../asset/data/listMenu";
import Button from "../../components/Button/Button";

const Setting = () => {
  const [activeItem, setActiveItem] = useState(2);
  const [activeTab, setActiveTab] = useState("all");
  const listItem = [
    {
      title: "appearance",
      icon: <BsApple />,
    },
    {
      title: "Your restaurant",
      icon: <BsLaptop />,
    },
    {
      title: "checkout setting",
      icon: <BsAlignBottom />,
    },
    {
      title: "security",
      icon: <BsFillAlarmFill />,
    },
  ];
  return (
    <div className="setting container">
      <SubSidebar>
        {listItem.map((item, index) => (
          <ItemSubSidebar
            key={`item-sidebar-${index}`}
            title={item.title}
            icon={item.icon}
            onClick={() => setActiveItem(index)}
            className={index === activeItem ? "active" : ""}
          />
        ))}
      </SubSidebar>

      <TabSubSideBar className={"setting__content"}>
        <div className="setting__content__header">
          {listTabs.map((item, index) => (
            <Button
              key={`button-${index}`}
              type={"shortcut"}
              icon={item.icon}
              className={activeTab === item.type ? "active" : ""}
              onClick={() => setActiveTab(item.type)}
            >
              {item.display}
            </Button>
          ))}
        </div>

        <div className="setting__content__list-dishes">
          
        </div>
      </TabSubSideBar>
    </div>
  );
};

export default Setting;
