import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../Button/Button";
import Price from "../Price/Price";
import SelectOption from "../SelectOption/SelectOption";
import {addOrder} from '../../redux/Slice/menuSlice'

import "./CardOrder.scss";

const CardOrder = ({id, name, desc, img, listOptions, price }) => {
  const [options, setOptions] = useState({});

  
  const cardRef = useRef(null);
  const [height, setHeight] = useState("fitContent");
  const valueHeight = useRef(null);
  const dispatch = useDispatch();

  //set options dynnamic
  useEffect(() => {
    listOptions.forEach( item =>{
      setOptions(prev => ({...prev,[item.title] : 0}))
    });
  }, [listOptions]);

  useEffect(() => {
    valueHeight.current = cardRef.current.offsetHeight;
    setHeight(`${valueHeight.current - 80}px`);
  }, []);

  //click outside
  useEffect(() => {
    const clickOutSide = (e) => {
      if (!cardRef.current.contains(e.target) && cardRef.current) {
        setHeight(`${valueHeight.current - 80}px`);
      }
    };
    document.addEventListener("click", clickOutSide);
    return () => {
      document.removeEventListener("click", clickOutSide);
    };
  }, []);
  //handleClickCard
  const handleClickCard = () => {
    setHeight(`${valueHeight.current + 10}px`);
  };
  //handler add order
  const handleAddOrder = () =>{
    dispatch(addOrder({id,options}))
    listOptions.forEach( item =>{
      setOptions(prev => ({...prev,[item.title] : 0}))
    });
    setHeight(`${valueHeight.current - 80}px`);
  }

  return (
    <div className="card-order" ref={cardRef} onClick={handleClickCard} style={{ height: height }}>
      <div className="card-order__info">
        <img src={img} alt="" />
        <div className="card-order__info__about">
          <h2>{name}</h2>
          <span>{desc}</span>
          <Price price={price} color="black" />
        </div>
      </div>
      <div className="card-order__options">
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
      <div className="card-order__btn">
        <Button onClick={handleAddOrder}>Add to Billing</Button>
      </div>
    </div>
  );
};

export default CardOrder;
