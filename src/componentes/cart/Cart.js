import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../cart/ItemCart'

const Cart = () => {
    const {itemCarrito, removeFromCarrito,removeAll}= useCartContext()



    if(itemCarrito.length === 0)
    return(
        <div>
        <h2>El carrito esta vacio</h2>
        <Link to='/'> volver al Inicio</Link>
        </div>
    )
    else
    return (
        <div>
            <tr>
                <td>
                {itemCarrito.map(prod => <ItemCart removeFromCarrito={removeFromCarrito} key={prod.id} prod={prod} />)}                
                </td>
            </tr>
            
        <div>
        <button onClick={removeAll}>Vaciar Carrito</button>
        </div>
        </div>
      
    )
    
}


export default Cart
