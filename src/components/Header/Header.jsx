import React from "react";
import Input from "../Input/Input";
import "./Header.scss";
import { AiOutlineSearch } from "react-icons/ai";

const Header = ({ title, type }) => {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      {type !== "only-title" && (
        <Input
          placeholder={"Search category or menu ..."}
          className={"header__search"}
          isSeach = {true}
          icon={<AiOutlineSearch />}
          left = {'2rem'}
        />
      )}
    </header>
  );
};

export default Header;
