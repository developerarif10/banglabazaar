import { removeProductFromWishlist } from "@/app/actions/wishlist.actions";

import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

import { useWishlistContext } from "../context-hooks/useWishlistContext";
import useQuantity from "../product-hooks/useQuantity";
import useStock from "../product-hooks/useStock";
import useAddToCart from "./useAddToCart";

const useAddToCartHoverMenu = (product, userId) => {
  const { product_name, _id: id } = product;
  const { quantity, handleDecreaseQuantity, handleIncreaseQuantity } =
    useQuantity(id);
  const { userCart, handleAddToCart } = useAddToCart(product);
  const { setUserWishlist } = useWishlistContext();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);
  const [isAdding, setIsAdding] = useState("");
  const { data, isLoading, isError } = useStock(product);
  const stock = data?.data?.stock;
  const hasStock = stock > 0;
  const matchedProductWithQuantityMoreThanOne =
    userCart?.quantity?.productId === id && userCart?.quantity?.quantity > 1;

  // add to cart click function
  const handleButtonClick = async () => {
    setIsAdding(product._id);
    if (matchedProductWithQuantityMoreThanOne) {
      const productWithQuantity = {
        ...product,
        quantity: userCart.quantity.quantity,
      };
      await handleAddToCart(userId, productWithQuantity);
    } else {
      const productWithQuantity = {
        ...product,
        quantity: 1,
      };
      await handleAddToCart(userId, productWithQuantity);
    }
    await removeProductFromWishlist(userId, product._id);
    setOpen(false);
    setIsAdding(product._id);
    // update cache
    await queryClient.invalidateQueries({
      queryKey: ["stock", product._id],
    });
    await queryClient.invalidateQueries({
      queryKey: ["wishlist", userId],
    });
    queryClient.invalidateQueries({
      queryKey: ["wishlistLength", userId],
    });
    // filter local state
    setUserWishlist((prevWishlist) => ({
      ...prevWishlist,
      data: [...prevWishlist.data].filter(
        (wProduct) => wProduct._id !== product._id
      ),
    }));
  };
  return {
    isLoading,
    isError,
    hasStock,
    product_name,
    handleIncreaseQuantity,
    handleButtonClick,
    isAdding,
    setOpen,
    handleDecreaseQuantity,
    stock,
    quantity,
    open,
  };
};
export default useAddToCartHoverMenu;
