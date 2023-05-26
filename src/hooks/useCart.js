import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
  cartItemsQuantitySelector,
  cartItemsSelector,
  totalPriceSelector,
} from "pages/Card/selectors";
import { getItemsThunk } from "pages/Card/api/thunk/getItems";
import { addItemThunk } from "pages/Card/api/thunk/addItem";
import { updateItemQuantityThunk } from "pages/Card/api/thunk/updateItemQuantity";

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(cartItemsSelector);
  const cartItemsQuantity = useSelector(cartItemsQuantitySelector);
  const totalPrice = useSelector(totalPriceSelector);

  const getCartData = useCallback(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const addItemToCart = useCallback(
    (itemData) => {
      dispatch(addItemThunk(itemData));
    },
    [dispatch]
  );

  const updateItemQuantity = useCallback((payload) => {
    dispatch(updateItemQuantityThunk(payload));
  }, []);

  return {
    cartItems,
    cartItemsQuantity,
    totalPrice,
    getCartData,
    addItemToCart,
    updateItemQuantity,
  };
};

export default useCart;
