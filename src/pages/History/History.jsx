import React from "react";

import { FiMoreHorizontal } from "react-icons/fi";

import Box from "../../components/Box/Box";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import "./History.scss";
import { AiOutlineSearch } from "react-icons/ai";

const History = () => {
  return (
    <div className="history container">
      <Header title={"History Order"} type="only-title" />
      <Box className={"history__box"}>
        <div className="history__header">
          <Input
            type={'search'}
            placeholder={"Search Order ID"}
            className="history__header__search"
            icon={<AiOutlineSearch />}
            left = {'2rem'}
          />
          <input className="history__header__datetime" type="date" />
        </div>

        <div className="history__body">
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
              <tr>
                <td>#165161</td>
                <td>28 Jun,2022</td>
                <td>$15.95</td>
                <td>
                  <div className="history__body__payment">Debit</div>
                </td>
                <td>
                  <FiMoreHorizontal className="iconMore" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Box>
    </div>
  );
};

export default History;
