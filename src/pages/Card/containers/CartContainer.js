import { useEffect } from "react";

import { useCart } from "hooks";

const CartContainer = () => {
  const {
    getCartData,
    cartItems,
    cartItemsQuantity,
    totalPrice,
    updateItemQuantity,
  } = useCart();

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div>
      <h1>Cart</h1>

      <div>
        {cartItems.map(({ id, name, quantity, price }) => (
          <div
            key={id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p>{name}</p>
            <div>
              <button
                disabled={quantity === 1}
                onClick={() =>
                  updateItemQuantity({ id, quantity: quantity - 1 })
                }
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() =>
                  updateItemQuantity({ id, quantity: quantity + 1 })
                }
              >
                +
              </button>
            </div>

            <p>${price * quantity}</p>
          </div>
        ))}
      </div>
      <h2>
        Items amount:{cartItemsQuantity} || Price:{totalPrice}
      </h2>
    </div>
  );
};

export default CartContainer;
