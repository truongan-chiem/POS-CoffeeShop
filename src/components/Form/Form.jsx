import React, { useId, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FiUpload } from "react-icons/fi";
import "./Form.scss";
const Form = () => {
  const idInputFile = useId();
  const listType = [
    {
      value: "coffee",
    },
    {
      value: "juice",
    },
    {
      value: "milk",
    },
    {
      value: "snack",
    },
    {
      value: "rice",
    },
    {
      value: "dessert",
    },
  ];
  const [isSelect, setIsSelect] = useState(false);
  const [selectValue, setSelectValue] = useState(listType[0].value);

  const handleSelectOption = (value) => {
    setSelectValue(value);
    setIsSelect(false);
  };

  return (
    <form className="form">
      <h2 className="form__header">Add Dish</h2>

      <div className="form__wrapInput">
        <Input
          className={"form__wrapInput__item"}
          placeholder={"Name Dishes"}
          type="normal-field"
          left={"1rem"}
        />
        <Input
          className={"form__wrapInput__item"}
          placeholder={"Price Dishes"}
          type="normal-field"
          left={"1rem"}
        />
      </div>

      <div className="form__file" onClick={() => document.getElementById(idInputFile).click()}>
        <input type="file" id={idInputFile} />
        <FiUpload />
        <span>Choose Image Dish</span>
      </div>

      <div className="form__type-dish">
        <span>Select type of dishes</span>
        <div className="form__type-dish__select" >
          <div className="form__type-dish__select__display" onClick={() => setIsSelect((prev) => !prev)}>{selectValue}</div>
          {isSelect && (
            <div className="form__type-dish__select__dropdown">
              {listType.map((item, index) => (
                <div
                  key={`option-${index}`}
                  className="form__type-dish__select__dropdown__option"
                  onClick={() => handleSelectOption(item.value)}
                >
                  {item.value}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="form__btn">
        <Button>Add New Dish</Button>
      </div>
    </form>
  );
};

export default Form;
