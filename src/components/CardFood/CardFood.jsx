import React, { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import Price from "../Price/Price";
import Cold from "../../asset/icon/Cold";
import Fire from "../../asset/icon/Fire";
import SelectOption from "../SelectOption/SelectOption";
import "./CardFood.scss";
const CardFood = () => {
  const img =
    "http://starboxcoffee.weebly.com/uploads/2/3/7/4/23748829/s908146353969437727_p6_i1_w305.jpeg";
  const name = "Caramel Frappucino";
  const desc = "Sweet chocalate with coffee,milk,sugar and love <3";
  const price = 3.95;

  const listOptions = [
    {
      title: "mood",
      options: [
        {
          display: <Fire />,
          value: 0,
        },
        {
          display: <Cold />,
          value: 1,
        },
      ],
    },
    {
      title: "size",
      options: [
        {
          display: "S",
          value: 0,
        },
        {
          display: "M",
          value: 1,
        },
        {
          display: "L",
          value: 2,
        },
      ],
    },
    {
      title: "sugar",
      options: [
        {
          display: "30%",
          value: 0,
        },
        {
          display: "50%",
          value: 1,
        },
        {
          display: "70%",
          value: 2,
        },
      ],
    },
    {
      title: "ice",
      options: [
        {
          display: "30%",
          value: 0,
        },
        {
          display: "50%",
          value: 1,
        },
        {
          display: "70%",
          value: 2,
        },
      ],
    },
  ];

  const [options, setOptions] = useState({
    mood: 0,
    size: 0,
    sugar: 0,
    ice: 0,
  });

  const cardRef = useRef();

  const handleClickCard = () => {
    cardRef.current.classList.add("active");
  };

  useEffect(() => {
    const clickOutSide = (e) => {
      if (!cardRef.current.contains(e.target) && cardRef.current) {
        cardRef.current.classList.remove("active");
      }
    };
    document.addEventListener("click", clickOutSide);
    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, []);

  return (
    <div className="cardfood" ref={cardRef} onClick={handleClickCard}>
      <div className="cardfood__info">
        <img src={img} alt="" />
        <div className="cardfood__info__about">
          <h2>{name}</h2>
          <span>{desc}</span>
          <Price price={price} color="black" />
        </div>
      </div>
      <div className="cardfood__options">
        {listOptions.map((item, index) => (
          <SelectOption
            key={index}
            title={item.title}
            listOption={item.options}
            options={options}
            setOptions={setOptions}
          />
        ))}
      </div>
      <div className="cardfood__btn">
        <Button onClick={() => console.log(options)}>Add to Billing</Button>
      </div>
    </div>
  );
};

export default CardFood;
