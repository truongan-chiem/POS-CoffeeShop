import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";

const initialState = {
  listAccount : [],
  isLoading : false,
  createAcc :{
    isLoading : false,
    error : null
  },
  deleteAcc :{
    error : null
  },
};

//get all user
const getAllAccount = createAsyncThunk(
    '/acc/getAll',
    async () =>{
        try {
            const response = await API.get('/acc')
            return response.data
        } catch (error) {
            return error
        }
    }
)
//create account
const createAccount = createAsyncThunk(
    '/acc/createAcc',
    async (data ,{rejectWithValue}) =>{
        try {
            const response = await API.post('/acc/register',data)
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
//delete account
const deleteAccount = createAsyncThunk(
    '/acc/delete',
    async (id ,{rejectWithValue}) =>{
        try {
            const response = await API.delete(`/acc/${id}`)
            return {...response.data,id}
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
//delete account
const updateAccount = createAsyncThunk(
    '/acc/update',
    async ({id , dataForm} ,{rejectWithValue}) =>{
        try {
            const response = await API.put(`/acc/update/${id}`,dataForm)
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers : {
    resetError : (state,action) =>{
        state.createAcc.error = null
    }
  },
  extraReducers : builder =>{
    //get all account
    builder.addCase(getAllAccount.pending , (state) =>{
        state.isLoading = true
    })
    builder.addCase(getAllAccount.fulfilled , (state,action) =>{
        state.isLoading = false
        state.listAccount = action.payload
    })
    builder.addCase(getAllAccount.rejected , (state,action) =>{
        state.isLoading = false
        console.log(action.payload);
    })
    //create account
    builder.addCase(createAccount.pending, (state) =>{
        state.createAcc.isLoading = true
    })
    builder.addCase(createAccount.fulfilled, (state,action) =>{
        state.createAcc.isLoading = false;

        state.listAccount.unshift(action.payload)
        state.createAcc.error = ''
    })
    builder.addCase(createAccount.rejected, (state,action) =>{
        state.createAcc.isLoading = false;
        if(action.payload.code === "ERR_BAD_REQUEST"){
            state.createAcc.error = action.payload.response.data.message
        }
        else{
            state.createAcc.error = 'Sever Error!!!'
        }
        console.log(action.payload);
    })
    //delete account
    builder.addCase(deleteAccount.fulfilled,(state,action) =>{
        const newList = state.listAccount.filter(item => item._id !== action.payload.id)
        state.listAccount = newList
        console.log(action.payload);
    })
    builder.addCase(deleteAccount.rejected,(state,action) =>{
        // state.deleteAcc.error = action.payload.response.data.message
        console.log(action.payload);
    })
    //update account
    builder.addCase(updateAccount.pending,(state) =>{
        state.createAcc.isLoading = true

    })
    builder.addCase(updateAccount.fulfilled,(state,action) =>{
        state.createAcc.isLoading = false
        const index = state.listAccount.findIndex(item => item._id === action.payload.data._id)
        state.listAccount.splice(index,1,action.payload.data)
        state.createAcc.error = ''
    })
    builder.addCase(updateAccount.rejected,(state,action) =>{
        state.createAcc.isLoading = false
        if(action.payload.code === "ERR_BAD_REQUEST"){
            state.createAcc.error = action.payload.response.data.message
        }
        else{
            state.createAcc.error = 'Sever Error!!!'
        }
        console.log(action.payload);
    })
  }
});

export default accountSlice.reducer;

export const {resetError} = accountSlice.actions;
export {getAllAccount,createAccount,deleteAccount,updateAccount}