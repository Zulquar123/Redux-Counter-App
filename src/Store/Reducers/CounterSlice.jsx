import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.value += 1;
    },
    decreament: (state) => {
      state.value -= 1;
    },
    increamentByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
  },
});

export const { increament, decreament, increamentByAmount } =
  counterSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(increamentByAmount(amount));
  }, 2000);
};

export default counterSlice.reducer;