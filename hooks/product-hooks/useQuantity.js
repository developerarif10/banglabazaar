import { useEffect, useState } from "react";
import { useCartContext } from "../context-hooks/useCartContext";

const useQuantity = (id) => {
  const [quantity, setQuantity] = useState(1);
  const { userCart, setUserCart } = useCartContext();

  // this resets the quantities state, when user loads this page up, start with empty quantities state
  useEffect(
    () =>
      setUserCart((prevCart) => ({
        ...prevCart,
        quantity: {},
      })),
    [setUserCart]
  );

  const productInCart = userCart.quantity.productId === id;

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);

    if (productInCart) {
      // increase quantity by 1 on existing
      setUserCart({
        ...userCart,
        quantity: { ...userCart.quantity, quantity: quantity + 1 },
      });
    } else {
      // set the productId with quantity
      setUserCart({
        ...userCart,
        quantity: { productId: id, quantity: quantity + 1 },
      });
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity <= 1) {
      setQuantity(1);
      // reset the state
      setUserCart({
        ...userCart,
        quantity: {},
      });
    } else {
      setQuantity((prevQuantity) => prevQuantity - 1);
      // decrease by 1
      if (productInCart) {
        setUserCart({
          ...userCart,
          quantity: { ...userCart.quantity, quantity: quantity - 1 },
        });
      }
    }
  };
  return {
    quantity,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    setQuantity,
  };
};
export default useQuantity;
