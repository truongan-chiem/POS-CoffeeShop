import { createSlice } from "@reduxjs/toolkit";
import listMenu from "../../asset/data/listMenu";

const initialState = {
  listMenu: listMenu,
  order: [],
  listOrders : []
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
      state.order.push(newOrder);
    },
    plusNumber : (state,action) =>{
      const id = action.payload;

      const item = state.order.find(item => item.id === id)
      let newItem = {...item,number:item.number + 1}
      
      const itemIndex = state.order.findIndex(item => item.id === id)
      state.order.splice(itemIndex,1,newItem)
    }
    ,
    minusNumber : (state,action) =>{
      const id = action.payload;

      const item = state.order.find(item => item.id === id)
      let newItem = {...item,number:item.number - 1}
      
      const itemIndex = state.order.findIndex(item => item.id === id)
      if(newItem.number === 0){
        state.order.splice(itemIndex,1)
      }
      else{
        state.order.splice(itemIndex,1,newItem)
      }
    }
    ,
    printBill : (state,action) =>{

      const id = new Date().getTime();

      state.listOrders.push({id ,optionPayment : action.payload , orders : state.order})

      state.order = []
    }
  },
});

export default billSlice.reducer;

export const { addOrder ,printBill,plusNumber,minusNumber} = billSlice.actions;
