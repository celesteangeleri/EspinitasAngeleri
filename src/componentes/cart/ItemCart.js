import { useCartContext } from "../../context/CartContext";
import React from 'react'

const ItemCart = ({prod}) => {
const {removeFromCarrito} = useCartContext()

const calcularSubTotal =(prod) =>{
    let subTotal = prod.precio*prod.cantidad
    return subTotal
}

    return (
        <div>
            <tr>
                <td>{prod.cantidad}</td>
                <td>{prod.nombre}</td>
                <td>{prod.precio}</td>               
                <td> {calcularSubTotal(prod)}</td>
            </tr>    
                <button onClick={()=>{ removeFromCarrito(prod.id)}}>x</button>
            
        </div>
    )
}

export default ItemCart
