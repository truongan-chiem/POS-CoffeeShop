import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { TfiWallet } from "react-icons/tfi";
import { TbDiscount2, TbSmartHome } from "react-icons/tb";
import { FiSettings ,FiLogOut} from "react-icons/fi";

import Button from "../Button/Button";

import "./Sidebar.scss";
const listNav = [
  {
    display: "Home",
    link: "/",
    icon: <TbSmartHome />,
  },
  {
    display: "Menu",
    link: "/menu",
    icon: <MdOutlineFastfood />,
  },
  {
    display: "History",
    link: "/history",
    icon: <AiOutlineHistory />,
  },
  {
    display: "Wallet",
    link: "/wallet",
    icon: <TfiWallet />,
  },
  {
    display: "Promos",
    link: "/promos",
    icon: <TbDiscount2 />,
  },
  {
    display: "Setting",
    link: "/setting",
    icon: <FiSettings />,
  }
];
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h1 className="sidebar__top__logo">K</h1>
        <nav className="sidebar__top__nav">
          {listNav.map((item, index) => (
            <Link to={item.link} key={index}>
              <Button
                type={"shortcut"}
                icon={item.icon}
                className={item.link === location.pathname ? "activeNav" : ""}
              >
                {item.display}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      <Button type={'shortcut'} className="sidebar__logout" icon= {<FiLogOut/>}>Logout</Button>
    </div>
  );
};

export default Sidebar;
