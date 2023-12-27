import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  quantity: 1,
};

export const addSubSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.sizeAndCrust === action.payload.sizeAndCrust
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return !(
          item.id === action.payload.id &&
          action.payload.sizeAndCrust == item.sizeAndCrust
        );
      });
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.sizeAndCrust === action.payload.sizeAndCrust
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.sizeAndCrust === action.payload.sizeAndCrust
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    emptyCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  emptyCart,
} = addSubSlice.actions;
export const selectCart = (state) => state.cart;
export default addSubSlice.reducer;
