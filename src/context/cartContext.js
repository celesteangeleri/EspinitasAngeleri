import React, { useState, createContext, useContext, useMemo } from "react";

const CartContext = createContext();

export function CartContextProvider({ children }) {
  const [cartCantidad, setCartCantidad] = useState(0);
  const [itemCarrito, setItemCarrito] = useState([]);
  const [count, setCount] = useState(0);

  const addItemCarrito = (prod) => {
    if (itemCarrito.length > 0) {
      setItemCarrito([...itemCarrito, prod]);
    } else setItemCarrito(prod);
  };
  const addCantidadCarrito = (prod, event) => {
    setCartCantidad(prod + cartCantidad);
  };

  const increment = () => setCount((counter) => counter + 1);

  const value = useMemo(
    () => ({
      itemCarrito,
      addCantidadCarrito,
      cartCantidad,
      addItemCarrito,
    }),
    [itemCarrito]
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}




export const useCartContext = () => useContext(CartContext);
