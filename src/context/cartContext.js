import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCartContext=()=>useContext(CartContext)

  const CartContextProvider = ({ children }) =>{
  const [cartQuantity, setCartQuantity] = useState();
  const [itemCart, setItemCart] = useState([]); 
  
  const addItemCart = (prod) => {
    setItemCart ([...itemCart,prod]);
    if (cartQuantity){
    setCartQuantity(cartQuantity + prod.inCart);
    }else setCartQuantity (prod.inCart)
  };

  const isInCart = (itemId) =>{
    const state = itemCart.find ((prod) => prod.id === itemId);
    if (state == null) return false;
    else return true
  };

  const removeFromCart = (id) =>{
    let position = itemCart.findIndex((prop) => prop.id ===id);
    let newItemCart = itemCart;
    newItemCart.splice(position, 1);
    setItemCart([...newItemCart])
  };

  const removeAll =()=>{
    setItemCart([])
  };

  return (
    <CartContext.Provider value={{
      itemCart,
      cartQuantity,
      addItemCart,
      isInCart,
      removeFromCart,
      removeAll
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
