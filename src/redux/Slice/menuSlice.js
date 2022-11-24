import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../API";
// import listMenu from "../../asset/data/listMenu";

const initialState = {
  menu : {
    listMenu: [],
    isLoading : false,
  },
  bill :{
    order: [],
  },
  listOrders : [],
  setting : {
    isLoading : false,
    error : null
  }
};

const getAllMenu = createAsyncThunk(
  'menu/getAll',
  async () =>{
    const response = await API.get('/dish')
    return response.data;
  }
)

const createNewDish = createAsyncThunk(
  'menu/addNewItem',
  async(data, {rejectWithValue}) =>{
    try {
      const response = await API.post('/dish',data)
      return response.data
      
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const updateDish = createAsyncThunk(
  'menu/updateItem',
  async({_id,dataForm}, {rejectWithValue}) =>{
    try {
      const response = await API.put(`/dish/${_id}`,dataForm)
      return response.data
      
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)

const deleteDish = createAsyncThunk(
  'menu/deleteItem',
  async(id, {rejectWithValue}) =>{
    try {
      const response = await API.delete(`/dish/${id}`)
      
      return { id,...response.data}
      
    } catch (error) {
      return rejectWithValue(error.response)
    }
  }
)



const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    addItemToBill: (state, action) => {
      const itemOrder = state.menu.listMenu.find((item) => item._id === action.payload._id);
      let newOrder = { ...itemOrder };
      delete newOrder.listOptions;
      delete newOrder._id;
      delete newOrder.desc;
      newOrder = {
        _id: new Date().toISOString(),
        ...newOrder,
        number: 1,
        options: action.payload.options,
      };
      state.bill.order.push(newOrder);
    },
    plusNumber : (state,action) =>{
      const id = action.payload;

      const item = state.bill.order.find(item => item._id === id)
      let newItem = {...item,number:item.number + 1}
      
      const itemIndex = state.bill.order.findIndex(item => item._id === id)
      state.bill.order.splice(itemIndex,1,newItem)
    }
    ,
    minusNumber : (state,action) =>{
      const id = action.payload;

      const item = state.bill.order.find(item => item._id === id)
      let newItem = {...item,number:item.number - 1}
      
      const itemIndex = state.bill.order.findIndex(item => item._id === id)
      if(newItem.number === 0){
        state.bill.order.splice(itemIndex,1)
      }
      else{
        state.bill.order.splice(itemIndex,1,newItem)
      }
    }
    ,
    printBill : (state,action) =>{

      const id = new Date().getTime();

      state.listOrders.push({id ,optionPayment : action.payload , orders : state.bill.order})

      state.bill.order = []
    },
    resetErrorSetting : (state) =>{
      state.setting.error = null
    }
  },
  extraReducers : builder =>{
    //getAllMenu
    builder.addCase(getAllMenu.pending , state =>{
      state.menu.isLoading = true
    })
    builder.addCase(getAllMenu.fulfilled , (state,action) =>{
      state.menu.isLoading = false
      state.menu.listMenu = action.payload
    })
    //create new dish
    builder.addCase(createNewDish.pending , (state) =>{
      state.setting.isLoading = true
    } )
    builder.addCase(createNewDish.fulfilled , (state,action)=>{
      const newItem = action.payload

      delete newItem.__v
      
      state.setting.isLoading = false
      state.menu.listMenu.unshift(newItem)
      state.setting.error = ''
    })
    builder.addCase(createNewDish.rejected , (state,action) =>{
      state.setting.error = action.payload.data
      state.setting.isLoading = false
    })
    //delete dish
    builder.addCase(deleteDish.fulfilled,(state,action) =>{
      const {id,success} = action.payload;
      if(success){
        const newMenu = state.menu.listMenu.filter(item => item._id !== id)
        state.menu.listMenu = newMenu
      }
    })
    //Update dish
    builder.addCase(updateDish.pending , (state) =>{
      state.setting.isLoading = true
    })
    builder.addCase(updateDish.fulfilled,(state,action) =>{
      state.setting.isLoading = false
      const {data} = action.payload
    
      const index = state.menu.listMenu.findIndex(item => item._id === data._id)
      
      state.menu.listMenu.splice(index,1,data)
      
      state.setting.error = '';

    })
    builder.addCase(updateDish.rejected,(state,action) =>{
      state.setting.isLoading = false
      state.setting.error = action.payload.data;
    })
  }
});

export default menuSlice.reducer;

export const { addItemToBill ,printBill,plusNumber,minusNumber,resetErrorSetting} = menuSlice.actions;
export {getAllMenu,createNewDish,deleteDish,updateDish};