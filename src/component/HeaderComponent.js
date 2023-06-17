import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/CartSlice';

export const HeaderComponent = () => {
    const cartData = useSelector((state) => state.cart.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>HEADER </h1>
        {
            cartData?.map((item) => {
                return(
                    <div>
                        <h1>{item.name}
                        <button onClick={()=>{dispatch(removeFromCart(item))}}>Remove</button>
                        </h1>
                        
                    </div>
                )
            })
        }
    </div>
  )
}
