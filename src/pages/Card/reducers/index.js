import { createSlice } from "@reduxjs/toolkit";
import { getItemsThunk } from "../api/thunk/getItems";
import { addItemThunk } from "../api/thunk/addItem";
import { updateItemQuantityThunk } from "../api/thunk/updateItemQuantity";

const initialState = {
  items: [],
  totalPrice: 0,
  quantity: 0,
  errors: null,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getItemsThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(getItemsThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;

      state.items = itemsList;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(getItemsThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });

    builder.addCase(addItemThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(addItemThunk.fulfilled, (state, { payload }) => {
      const { totalPrice, quantity, itemsList } = payload;
      state.items = itemsList;
      state.totalPrice = totalPrice;
      state.quantity = quantity;
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(addItemThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });

    builder.addCase(updateItemQuantityThunk.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });

    builder.addCase(updateItemQuantityThunk.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.errors = null;

      const { cartState, updatedItem } = payload;
      const foundItem = state.items.find((item) => item.id === updatedItem.id);

      foundItem.quantity = updatedItem.quantity;
      state.totalPrice = cartState.totalPrice;
    });

    builder.addCase(updateItemQuantityThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload;
    });
  },
});

export default cartSlice.reducer;
