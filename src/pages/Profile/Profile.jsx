import React, { useState } from "react";
import { BsPencilFill, BsFillPersonFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { IoLockOpen } from "react-icons/io5";

import SubSidebar from "../../components/SubSidebar/SubSidebar";
import TabSubSideBar from "../../components/TabSubSideBar/TabSubSideBar";
import ItemSubSidebar from "../../components/ItemSubSidebar/ItemSubSidebar";

import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Slice/userSlice";
import ProfileInformation from "../../components/ProfileInformation/ProfileInformation";
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userInformation = useSelector(state => state.user.information)
  const dispatch = useDispatch();
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
  const handleLogout = () =>{
    dispatch(logout())
    navigate('/login')
  }
  const [activeNav, setActiveNav] = useState(0);

  return (
    <div className="profile container">
      <SubSidebar className="profile__sub-sidebar">
        <div className="profile__sub-sidebar__avatar">
          <div className="profile__sub-sidebar__avatar__img">
            <img src={userInformation?.image.url} alt="" />
          </div>
          <BsPencilFill className="profile__sub-sidebar__avatar__icon" />
        </div>
        <h1 className="profile__sub-sidebar__name">{userInformation?.lastName}&nbsp;{userInformation?.firstName}</h1>
        <h3 className="profile__sub-sidebar__role">{userInformation?.role === 0 ? 'Staff' : 'Admin'}</h3>
        {listNav.map((item, index) => (
          <ItemSubSidebar
            className={activeNav === index ? "active" : ""}
            key={`nav-subsidebar-${index}`}
            icon={item.icon}
            title={`${item.title}`}
            onClick={() => (index === 2 ? handleLogout() : setActiveNav(index))}
          />
        ))}
      </SubSidebar>
      <TabSubSideBar className="profile__tab">
        <h1 className="profile__tab__header">
          {activeNav === 0 ? listNav[0].title : listNav[1].title}
        </h1>
        {activeNav === 0 ? 
        <ProfileInformation /> : 
          <ChangePassword />
        }
        
      </TabSubSideBar>
    </div>
  );
};

export default Profile;
