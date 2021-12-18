import React, { useState } from 'react'

export const CartContext = React.createContext()

export const CartContextProvider = ({children}) =>{
    const [cartCantidad, setCartCantidad] = useState();
    const [itemCarrito, setItemCarrito] = useState([])
 console.log(children,'children');
const addItemCarrito = (prod) => {
    if (itemCarrito.length > 0){
        setItemCarrito ([...itemCarrito, prod])
    } else setItemCarrito(prod)

    if (cartCantidad){
        setCartCantidad(cartCantidad + prod.carrito)
    }else setCartCantidad(prod.carrito)
}
return (
    <CartContext.Provider value= {{itemCarrito, cartCantidad,addItemCarrito}}>
     {children}
    </CartContext.Provider>
)









}




