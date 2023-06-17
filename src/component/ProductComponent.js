import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

export const ProductComponent = () => {
  //mapDispatchToProps
  const dispatch = useDispatch();
  //mapStateToProps
  const cartData = useSelector((state) => state.cart.value);
  console.log(cartData);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(addToCart({ id: 1, name: "Iphone" }));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
