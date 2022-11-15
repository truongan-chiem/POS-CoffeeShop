import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Bill from "../../components/Bill/Bill";


import "./Menu.scss";
import Button from "../../components/Button/Button";
import TabContent from "../../components/TabContent/TabContent";
import Header from "../../components/Header/Header";
import { listTabs } from "../../asset/data/listMenu";

const Menu = () => {

  const listMenu = useSelector(state => state.menu.listMenu)
  const order = useSelector((state) => state.menu.order);

  const [tabValue, setTabValue] = useState('all');
  const [listData, setListData] = useState([]);


  useEffect(() => {
    const newList = tabValue === 'all' ? listMenu : listMenu.filter(item => item.type === tabValue)
    setListData(newList)
  }, [listMenu,tabValue]);

  return (
    <div className="menu container">
      
      <Header title={'choose category'}/>

      <nav className="menu__tabs">
        {listTabs.map((item,index) => (
          <Button onClick={() => setTabValue(item.type)} key={index} icon = {item.icon} type={'shortcut'} className = {item.type === tabValue ? 'active' : ''}>
            {item.display}
          </Button>
        ))}
      </nav>
        
        <TabContent listData = {listData} tabValue = {tabValue}/>

      <Bill order={order} type = 'menu' />
    </div>
  );
};

export default Menu;
