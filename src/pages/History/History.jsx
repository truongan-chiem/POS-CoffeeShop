import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FiMoreHorizontal } from "react-icons/fi";
import moment from "moment";

import Box from "../../components/Box/Box";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import "./History.scss";
import { AiOutlineSearch } from "react-icons/ai";
import { getHistory } from "../../redux/Slice/menuSlice";
import Popup from "../../components/Popup/Popup";
import ModalDelete from '../../components/ModalDelete/ModalDelete'
const History = () => {
  const listData = useSelector((state) => state.menu.history.listData);
  const isLoading = useSelector((state) => state.menu.history.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistory());
  }, [dispatch]);
  return (
    <div className="history container">
      <Header title={"History Order"} type="only-title" />
      <Box className={"history__box"}>
        <div className="history__header">
          <Input
            isSearch={true}
            placeholder={"Search Order ID"}
            className="history__header__search"
            icon={<AiOutlineSearch />}
            left={"2rem"}
          />
          <input className="history__header__datetime" type="date" />
        </div>

        <div className="history__body">
          {isLoading ? (
            <div className="history__body__loading">is Loading ...</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Staff</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {listData.map((item, index) => {
                  const totalAmount = item.orders.reduce(
                    (total, item2) => total + item2.dishId.price * item2.number,
                    0
                  );
                  const date = moment(item.created_at).format("DD/MM/YYYY");
                  return (
                    <tr key={index}>
                      <td>#{item._id}</td>
                      <td>
                        {item.owenId.lastName}&nbsp;{item.owenId.lastName}
                      </td>
                      <td>{date}</td>
                      <td>${Number(totalAmount).toFixed(2)}</td>
                      <td>
                        <div className="history__body__payment">
                          {item.optionPayment === 0
                            ? "Cash"
                            : item.optionPayment === 1
                            ? "Debit"
                            : "E-Wallet"}
                        </div>
                      </td>

                      <td>
                        <Action name={`Order ${item._id}`} id = {item._id} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </Box>
    </div>
  );
};

const Action = ({name,id}) => {
  const [action, setAction] = useState();
  const [isDelect, setIsDelect] = useState(false);
  return (
    <div style={{ position: "relative" }} className="iconMore">
      <FiMoreHorizontal onClick={() => setAction((prev) => !prev)} />
      {action && (
        <Popup>
          <button className="history__btn view">view</button>
          <button className="history__btn del" onClick={() => setIsDelect(true)}>Del</button>
        </Popup>
      )}
      {isDelect && (
        <ModalDelete setIsToggleDelete={setIsDelect} type='order' name = {name} id={id}/>
      )}
    </div>
  );
};

export default History;
