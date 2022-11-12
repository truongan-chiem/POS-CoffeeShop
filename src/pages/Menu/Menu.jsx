import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Bill from "../../components/Bill/Bill";
import Beer from "../../asset/icon/Beer";
import Coffee from "../../asset/icon/Coffee";
import Dessert from "../../asset/icon/Dessert";
import Juice from "../../asset/icon/Juice";
import Milk from "../../asset/icon/Milk";
import Rice from "../../asset/icon/Rice";
import Snack from "../../asset/icon/Snack";
import {AiOutlineSearch} from 'react-icons/ai'

import "./Menu.scss";
import Button from "../../components/Button/Button";
import TabContent from "../../components/TabContent/TabContent";

const Menu = () => {

  const listTabs = [
    {
      display : 'All',
      icon: <Beer />,
      type : 'all'
    },
    {
      display : 'Coffee',
      icon: <Coffee />,
      type : 'coffee'
    },
    {
      display : 'Juice',
      icon: <Juice />,
      type : 'juice'
    },
    {
      display : 'Milk',
      icon: <Milk />,
      type : 'milk'
    },
    {
      display : 'Snack',
      icon: <Snack />,
      type : 'snack'
    },
    {
      display : 'Rice',
      icon: <Rice />,
      type : 'rice'
    },
    {
      display : 'Dessert',
      icon: <Dessert />,
      type : 'dessert'
    }
  ]

  const listMenu = useSelector(state => state.menu.listMenu)

  const [tabValue, setTabValue] = useState('all');
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const newList = tabValue === 'all' ? listMenu : listMenu.filter(item => item.type === tabValue)
    setListData(newList)
  }, [listMenu,tabValue]);

  return (
    <div className="menu">
      
      <header className="menu__header">
        <h1 className="menu__header__title">Choose Category</h1>
        <div className="menu__header__search">
          <input type="text" placeholder="Search category or menu ..." />
          <AiOutlineSearch/>
        </div>
      </header>

      <nav className="menu__tabs">
        {listTabs.map((item,index) => (
          <Button onClick={() => setTabValue(item.type)} key={index} icon = {item.icon} type={'shortcut'} className = {item.type === tabValue ? 'active' : ''}>
            {item.display}
          </Button>
        ))}
      </nav>
        
        <TabContent listData = {listData} tabValue = {tabValue}/>

      <Bill />
    </div>
  );
};

export default Menu;
