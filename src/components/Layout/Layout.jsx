import React from "react";
import Route from "../../utils/router";
import Sidebar from "../Sidebar/Sidebar";
import './Layout.scss'
const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__left">
          <Sidebar />
      </div>
      <div className="layout__body">
        <Route />
      </div>
    </div>
  );
};

export default Layout;
