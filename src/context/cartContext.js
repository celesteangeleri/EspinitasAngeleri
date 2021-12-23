import React, { useState, createContext, useContext } from "react";

export const CartContext = createContext();
export const useCartContext=()=>useContext(CartContext)

  const CartContextProvider = ({ children }) =>{
  const [cartCantidad, setCartCantidad] = useState();
  const [itemCarrito, setItemCarrito] = useState([]);
  
  const addItemCarrito = (prod) => {
    setItemCarrito ([...itemCarrito,prod]);
    if (cartCantidad){
    setCartCantidad(cartCantidad + prod.carrito);
    }else setCartCantidad (prod.carrito)
  };

  const isInCarrito = (itemId) =>{
    const estado = itemCarrito.find ((prod) => prod.id === itemId);
    if (estado == null) return false;
    else return true
  };

  const removeFromCarrito = (id) =>{
    let position = itemCarrito.findIndex((prop) => prop.id ===id);
    let newItemCarrito = itemCarrito;
    newItemCarrito.splice(position, 1);
    setItemCarrito([...newItemCarrito])
  };

  const removeAll =()=>{
    setItemCarrito([])
  };

  return (
    <CartContext.Provider value={{
      itemCarrito,
      cartCantidad,
      addItemCarrito,
      isInCarrito,
      removeFromCarrito,
      removeAll
    }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;
