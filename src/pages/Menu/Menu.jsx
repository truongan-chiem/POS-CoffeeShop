import React, { useState } from "react";
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
      index : 0,
      display : 'All',
      icon: <Beer />
    },
    {
      index : 1,
      display : 'Coffee',
      icon: <Coffee />
    },
    {
      index : 2,
      display : 'Juice',
      icon: <Juice />
    },
    {
      index : 3,
      display : 'Milk',
      icon: <Milk />
    },
    {
      index : 4,
      display : 'Snack',
      icon: <Snack />
    },
    {
      index : 5,
      display : 'Rice',
      icon: <Rice />
    },
    {
      index : 6,
      display : 'Dessert',
      icon: <Dessert />
    }
  ]

  const [tabValue, setTabValue] = useState(0);

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
          <Button onClick={() => setTabValue(index)} key={item.index} icon = {item.icon} type={'shortcut'} className = {item.index === tabValue ? 'active' : ''}>
            {item.display}
          </Button>
        ))}
      </nav>
        
        <TabContent />

      <Bill />
    </div>
  );
};

export default Menu;
