import { createSlice } from "@reduxjs/toolkit";
import listMenu from "../../asset/data/listMenu";

const initialState = {
  listMenu: listMenu,
  orders: [],
};

const billSlice = createSlice({
  name: "bill",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const itemOrder = listMenu.find((item) => item.id === action.payload.id);
      let newOrder = { ...itemOrder };
      delete newOrder.listOptions;
      delete newOrder.id;
      delete newOrder.desc;
      newOrder = {
        id: new Date().toISOString(),
        ...newOrder,
        number: 1,
        options: action.payload.options,
      };
      state.orders.push(newOrder);
    },
    printBill : (state) =>{
      state.orders = []
    }
  },
});

export default billSlice.reducer;

export const { addOrder ,printBill} = billSlice.actions;
