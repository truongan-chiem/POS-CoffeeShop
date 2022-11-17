import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggle : false
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal : (state) =>{
        state.isToggle = !state.isToggle
    }
  },
});

export default modalSlice.reducer;

export const {toggleModal } = modalSlice.actions;
