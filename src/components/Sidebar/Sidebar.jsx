import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineFastfood } from "react-icons/md";
import { AiOutlineHistory } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { TbSmartHome } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";

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
    display: "Order",
    link: "/order",
    icon: <IoMdCart />,
  },
  {
    display: "History",
    link: "/history",
    icon: <AiOutlineHistory />,
  },
  {
    display: "Setting",
    link: "/setting",
    icon: <FiSettings />,
  },
];
const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Link to="/">
          <h1 className="sidebar__top__logo">K</h1>
        </Link>
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
      <Link to={"/profile"}>
        <Button
          type={"shortcut"}
          className={`sidebar__profile ${location.pathname === "/profile" ? "activeNav" : ""}`}
          icon={
            <img
              src="https://i.pinimg.com/736x/fd/1c/02/fd1c02c20b1f9aaa3d9dff189647e11a.jpg"
              alt=""
            />
          }
        >
          profile
        </Button>
      </Link>
    </div>
  );
};

export default Sidebar;
