import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPencilFill, BsFillPersonFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { IoLockOpen } from "react-icons/io5";

import SubSidebar from "../../components/SubSidebar/SubSidebar";
import TabSubSideBar from "../../components/TabSubSideBar/TabSubSideBar";
import ItemSubSidebar from "../../components/ItemSubSidebar/ItemSubSidebar";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import "./Profile.scss";

const Profile = () => {
  const img = "https://i.pinimg.com/736x/fd/1c/02/fd1c02c20b1f9aaa3d9dff189647e11a.jpg";
  const name = "Satoru gojo";
  const role = "Cashier";
  const navigate = useNavigate();
  const listNav = [
    {
      icon: <BsFillPersonFill />,
      title: "Personal information",
    },
    {
      icon: <IoLockOpen />,
      title: "Login & password",
    },
    {
      icon: <BiLogOut />,
      title: "Log out",
    },
  ];
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="profile container">
      <SubSidebar className="profile__sub-sidebar">
        <div className="profile__sub-sidebar__avatar">
          <div className="profile__sub-sidebar__avatar__img">
            <img src={img} alt="" />
          </div>
          <BsPencilFill className="profile__sub-sidebar__avatar__icon" />
        </div>
        <h1 className="profile__sub-sidebar__name">{name}</h1>
        <h3 className="profile__sub-sidebar__role">{role}</h3>
        {listNav.map((item, index) => (
          <ItemSubSidebar
            className={activeNav === index ? "active" : ""}
            key={`nav-subsidebar-${index}`}
            icon={item.icon}
            title={`${item.title}`}
            onClick={() => (index === 2 ? navigate('/login') : setActiveNav(index))}
          />
        ))}
      </SubSidebar>
      <TabSubSideBar className="profile__tab">
        <h1 className="profile__tab__header">
          {activeNav === 0 ? listNav[0].title : listNav[1].title}
        </h1>
        {activeNav === 0 ? (
          <>
            <div className="profile__tab__gender">
              <label>
                Male
                <input checked name="gender" type="radio" value={0} />
                <span></span>
              </label>
              <label>
                Female
                <input name="gender" type="radio" value={1} />
                <span></span>
              </label>
            </div>
            <div className="profile__tab__splitField">
              <Input type={"field"} placeholder="First name" className={"profile__tab__input"} />
              <Input type={"field"} placeholder="Last name" className={"profile__tab__input"} />
            </div>

            <Input type={"field"} placeholder="Email" className={"profile__tab__input"} />
            <Input type={"field"} placeholder="address" className={"profile__tab__input"} />
            <div className="profile__tab__splitField">
              <Input type={"field"} placeholder="phone number" className={"profile__tab__input"} />
              <Input type={"field"} placeholder="date of birth" className={"profile__tab__input"} />
            </div>
            <div className="profile__tab__splitField">
              <Input type={"field"} placeholder="location" className={"profile__tab__input"} />
              <Input type={"field"} placeholder="postal code" className={"profile__tab__input"} />
            </div>
          </>
        ) : (
          <>
            <Input
              type={"field"}
              placeholder="current password"
              className={"profile__tab__input"}
            />
            <Input type={"field"} placeholder="new password" className={"profile__tab__input"} />
            <Input type={"field"} placeholder="re new password" className={"profile__tab__input"} />
          </>
        )}
        <div className="profile__tab__splitField">
          <Button className={"btn__outline"}>discard changes</Button>
          <Button>save changes</Button>
        </div>
      </TabSubSideBar>
    </div>
  );
};

export default Profile;
