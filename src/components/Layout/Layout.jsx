import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.scss";
const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const resize = () => {
      if (window.innerWidth < 650) {
        setIsMobile(true);
      }
      else{
        setIsMobile(false);
      }
    };
    resize()
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="layout">
      <div className="layout__left">
        <Sidebar />
      </div>
      <div className="layout__body">
        {isMobile ? (
          <div className="layout__body__mobile">POS - Not Supporting for device mobile !!!</div>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Layout;
